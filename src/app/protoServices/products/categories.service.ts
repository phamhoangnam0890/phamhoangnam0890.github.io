import {Injectable} from '@angular/core';
import {GrpcClientFactory, GrpcMetadata} from "@ngx-grpc/common";
import {GrpcWebClientFactory, GrpcWebClientSettings} from "@ngx-grpc/grpc-web-client";
import {environment} from "../../../environments/environment";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {CommonService} from "../../services/common.service";
import {CookieService} from "ngx-cookie-service";
import {LoaderService} from "../../services/loader.service";
import {GrpcHandler, GrpcInterceptor} from "@ngx-grpc/core";
import {CategoriesServiceClient} from "../../../proto/products/categories.pbsc";
import {CategoriesListRequest, CategoryEntryRequest, CategoryInfoRequest} from "../../../proto/products/categories.pb";

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    categoriesServiceClient: CategoriesServiceClient;
    metadata: GrpcMetadata | undefined;
    grpcWebClientSettings: GrpcWebClientSettings = {host: environment.shopProxy};

    constructor(private loadingBar: LoadingBarService, private commonService: CommonService, private cookieService: CookieService, private loaderService: LoaderService) {
        let grpcClientFactory: any | GrpcClientFactory<any>;
        grpcClientFactory = new GrpcWebClientFactory(this.grpcWebClientSettings);

        let grpcInterceptor: any | GrpcInterceptor;
        let grpcHandler = new GrpcHandler(grpcInterceptor);
        this.categoriesServiceClient = new CategoriesServiceClient(null, grpcClientFactory, grpcHandler);
    }

    categoriesList(req: CategoriesListRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.categoriesServiceClient
            .categoriesList(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    categoryEntry(req: CategoryEntryRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.categoriesServiceClient
            .categoryEntry(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    categoryInfo(req: CategoryInfoRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.categoriesServiceClient
            .categoryInfo(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }
}
