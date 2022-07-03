import { Injectable } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { CommonService } from "../../services/common.service";
import { LoaderService } from "../../services/loader.service";
import { environment } from "../../../environments/environment";
import { GrpcClientFactory, GrpcMetadata } from "@ngx-grpc/common";
import { GrpcWebClientFactory, GrpcWebClientSettings } from "@ngx-grpc/grpc-web-client";
import { CookieService } from "ngx-cookie-service";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { RakutenShopCategoryServiceClient } from "../../../proto/shop/rakuten-shop-category.pbsc";
import { ApplayRakutenProductCategoryRequest, CreateRakutenShopCategoryRequest, GetRakutenShopCategoryRequest, ListRakutenShopCategoryProductRequest } from "../../../proto/shop/rakuten-shop-category.pb";

@Injectable({
  providedIn: "root",
})
export class RakutenShopCategoryService {
  rakutenShopCategoryServiceClient: RakutenShopCategoryServiceClient;
  metadata: GrpcMetadata | undefined;
  grpcWebClientSettings: GrpcWebClientSettings = { host: environment.shopProxy };

  constructor(private loadingBar: LoadingBarService, private commonService: CommonService, private cookieService: CookieService, private loaderService: LoaderService) {
    let grpcClientFactory: any | GrpcClientFactory<any>;
    grpcClientFactory = new GrpcWebClientFactory(this.grpcWebClientSettings);

    let grpcInterceptor: any | GrpcInterceptor;
    let grpcHandler = new GrpcHandler(grpcInterceptor);
    this.rakutenShopCategoryServiceClient = new RakutenShopCategoryServiceClient(null, grpcClientFactory, grpcHandler);
  }

  applayCategoryProduct(req: ApplayRakutenProductCategoryRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.rakutenShopCategoryServiceClient
      .applayCategoryProduct(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  getShopCategory(req: GetRakutenShopCategoryRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.rakutenShopCategoryServiceClient
      .getShopCategory(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  listShopCategoryProduct(req: ListRakutenShopCategoryProductRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.rakutenShopCategoryServiceClient
      .listShopCategoryProduct(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  createShopCategory(req: CreateRakutenShopCategoryRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.rakutenShopCategoryServiceClient
      .createShopCategory(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  listShopCategorys(req: ListRakutenShopCategoryProductRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.rakutenShopCategoryServiceClient
      .listShopCategorys(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }
}
