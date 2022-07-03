import {Injectable} from '@angular/core';
import {GrpcClientFactory, GrpcMetadata} from "@ngx-grpc/common";
import {GrpcWebClientFactory, GrpcWebClientSettings} from "@ngx-grpc/grpc-web-client";
import {environment} from "../../../environments/environment";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {CommonService} from "../../services/common.service";
import {CookieService} from "ngx-cookie-service";
import {LoaderService} from "../../services/loader.service";
import {GrpcHandler, GrpcInterceptor} from "@ngx-grpc/core";
import {UsersServiceClient} from "../../../proto/products/users.pbsc";
import {UserEntryRequest, UserInfoRequest, UsersListRequest} from "../../../proto/products/users.pb";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    usersServiceClient: UsersServiceClient;
    metadata: GrpcMetadata | undefined;
    grpcWebClientSettings: GrpcWebClientSettings = {host: environment.shopProxy};

    constructor(private loadingBar: LoadingBarService, private commonService: CommonService, private cookieService: CookieService, private loaderService: LoaderService) {
        let grpcClientFactory: any | GrpcClientFactory<any>;
        grpcClientFactory = new GrpcWebClientFactory(this.grpcWebClientSettings);

        let grpcInterceptor: any | GrpcInterceptor;
        let grpcHandler = new GrpcHandler(grpcInterceptor);
        this.usersServiceClient = new UsersServiceClient(null, grpcClientFactory, grpcHandler);
    }

    usersList(req: UsersListRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.usersServiceClient
            .usersList(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }


    userInfo(req: UserInfoRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.usersServiceClient
            .userInfo(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }


    userEntry(req: UserEntryRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.usersServiceClient
            .userEntry(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }
}
