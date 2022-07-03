import { Injectable } from "@angular/core";
import { Metadata } from "grpc-web";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { environment } from "../../../environments/environment";
import { CommonService } from "../../services/common.service";
import { LoaderService } from "../../services/loader.service";
import { GrpcClientFactory, GrpcMetadata } from "@ngx-grpc/common";
import { GrpcWebClientFactory, GrpcWebClientSettings } from "@ngx-grpc/grpc-web-client";
import { CookieService } from "ngx-cookie-service";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { ProductItemsServiceClient } from "../../../proto/shop/product-items.pbsc";
import { UsersServiceClient } from "../../../proto/shop/users.pbsc";
import { CreateProductItemRequest } from "../../../proto/shop/product-items.pb";
import { GetUserInfoRequest, ListUserRequest } from "../../../proto/shop/users.pb";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  usersServiceClient: UsersServiceClient;
  metadata: GrpcMetadata | undefined;
  grpcWebClientSettings: GrpcWebClientSettings = { host: environment.shopProxy };

  constructor(private loadingBar: LoadingBarService, private commonService: CommonService, private cookieService: CookieService, private loaderService: LoaderService) {
    let grpcClientFactory: any | GrpcClientFactory<any>;
    grpcClientFactory = new GrpcWebClientFactory(this.grpcWebClientSettings);

    let grpcInterceptor: any | GrpcInterceptor;
    let grpcHandler = new GrpcHandler(grpcInterceptor);
    this.usersServiceClient = new UsersServiceClient(null, grpcClientFactory, grpcHandler);
  }

  getUserInfo(req: GetUserInfoRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.usersServiceClient
      .getUserInfo(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  listUsers(req: ListUserRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.usersServiceClient
      .listUsers(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }
}
