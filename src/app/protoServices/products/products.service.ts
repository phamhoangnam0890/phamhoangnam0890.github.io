import {Injectable} from '@angular/core';
import {GrpcClientFactory, GrpcMetadata} from "@ngx-grpc/common";
import {GrpcWebClientFactory, GrpcWebClientSettings} from "@ngx-grpc/grpc-web-client";
import {environment} from "../../../environments/environment";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {CommonService} from "../../services/common.service";
import {CookieService} from "ngx-cookie-service";
import {LoaderService} from "../../services/loader.service";
import {GrpcHandler, GrpcInterceptor} from "@ngx-grpc/core";
import {ProductItemsServiceClient} from "../../../proto/products/products.pbsc";
import {
    CreateProductItemRequest,
    GetProductItemInfoRequest,
    GetProductItemsImageRequest, ListProductItemRequest,
    UpdateProductItemsRequest, UploadProductItemsImageRequest,
} from "../../../proto/products/products.pb";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    productItemsServiceClient: ProductItemsServiceClient;
    metadata: GrpcMetadata | undefined;
    grpcWebClientSettings: GrpcWebClientSettings = {host: environment.shopProxy};

    constructor(private loadingBar: LoadingBarService, private commonService: CommonService, private cookieService: CookieService, private loaderService: LoaderService) {
        let grpcClientFactory: any | GrpcClientFactory<any>;
        grpcClientFactory = new GrpcWebClientFactory(this.grpcWebClientSettings);

        let grpcInterceptor: any | GrpcInterceptor;
        let grpcHandler = new GrpcHandler(grpcInterceptor);
        this.productItemsServiceClient = new ProductItemsServiceClient(null, grpcClientFactory, grpcHandler);
    }

    createProductItems(req: CreateProductItemRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .createProductItems(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    getProductItemInfo(req: GetProductItemInfoRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .getProductItemInfo(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    updateProductItems(req: UpdateProductItemsRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .updateProductItems(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    getProductItemsImage(req: GetProductItemsImageRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .getProductItemsImage(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    uploadProductItemsImage(req: UploadProductItemsImageRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .uploadProductItemsImage(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }

    listProductItems(req: ListProductItemRequest) {

        this.loadingBar.start();
        this.loaderService.show(); // flag
        this.commonService.loaderEmitter.emit(true);

        // metadata setup
        this.metadata = new GrpcMetadata();
        this.metadata.set("accept-language", navigator.language);
        this.metadata.set("authorization", this.commonService.getUserToken());

        return this.productItemsServiceClient
            .listProductItems(req, this.metadata)
            .toPromise()
            .finally(() => {
                this.loadingBar.stop();
                this.loaderService.hide();
                this.commonService.loaderEmitter.emit(false);
            });
    }
}
