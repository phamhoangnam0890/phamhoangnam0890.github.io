import { Injectable } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { CommonService } from "../../services/common.service";
import { LoaderService } from "../../services/loader.service";
import { environment } from "../../../environments/environment";
import { GrpcClientFactory, GrpcMetadata } from "@ngx-grpc/common";
import { GrpcWebClientFactory, GrpcWebClientSettings } from "@ngx-grpc/grpc-web-client";
import { CookieService } from "ngx-cookie-service";
import { GrpcHandler, GrpcInterceptor } from "@ngx-grpc/core";
import { ProductItemsServiceClient } from "../../../proto/shop/product-items.pbsc";
import { CreateProductItemRequest, GetCopyProductIdRequest, GetExchangeRateRequest, GetProductItemInfoRequest, ListProductItemRequest, ListShopReflectionRequest, ShopStatusUpdateRequest, UpdateProductItemsRequest, UploadProductItemsImageRequest, UploadProductItemsImageSourceRequest } from "../../../proto/shop/product-items.pb";

@Injectable({
  providedIn: "root",
})
export class ProductItemsService {
  productItemsServiceClient: ProductItemsServiceClient;
  metadata: GrpcMetadata | undefined;
  grpcWebClientSettings: GrpcWebClientSettings = { host: environment.shopProxy };

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

  getCopyProductId(req: GetCopyProductIdRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.productItemsServiceClient
      .getCopyProductId(req, this.metadata)
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

  uploadProductItemsImageSource(req: UploadProductItemsImageSourceRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.productItemsServiceClient
      .uploadProductItemsImageSource(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  listShopReflection(req: ListShopReflectionRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.productItemsServiceClient
      .listShopReflection(req, this.metadata)
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

  shopStatusUpdate(req: ShopStatusUpdateRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.productItemsServiceClient
      .shopStatusUpdate(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }

  getExchangeRates(req: GetExchangeRateRequest) {
    this.loadingBar.start();
    this.loaderService.show(); // flag
    this.commonService.loaderEmitter.emit(true);

    // metadata setup
    this.metadata = new GrpcMetadata();
    this.metadata.set("accept-language", navigator.language);
    this.metadata.set("authorization", this.commonService.getUserToken());

    return this.productItemsServiceClient
      .getExchangeRates(req, this.metadata)
      .toPromise()
      .finally(() => {
        this.loadingBar.stop();
        this.loaderService.hide();
        this.commonService.loaderEmitter.emit(false);
      });
  }
}
