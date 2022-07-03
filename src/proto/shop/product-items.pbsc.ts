/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './product-items.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_PRODUCT_ITEMS_SERVICE_CLIENT_SETTINGS } from './product-items.pbconf';
/**
 * Service client implementation for shop.ProductItemsService
 */
@Injectable({ providedIn: 'any' })
export class ProductItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.ProductItemsService/ListProductItems
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListProductItemsResponse>>
     */
    listProductItems: (
      requestData: thisProto.ListProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListProductItemsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/ListProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProductItemRequest,
        responseClass: thisProto.ListProductItemsResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/GetProductItemInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetProductItemsInfoResponse>>
     */
    getProductItemInfo: (
      requestData: thisProto.GetProductItemInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetProductItemsInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/GetProductItemInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProductItemInfoRequest,
        responseClass: thisProto.GetProductItemsInfoResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/GetProductItemNo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetProductItemNoResponse>>
     */
    getProductItemNo: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetProductItemNoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/GetProductItemNo',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.GetProductItemNoResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/GetCopyProductId
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetCopyProductIdResponse>>
     */
    getCopyProductId: (
      requestData: thisProto.GetCopyProductIdRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetCopyProductIdResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/GetCopyProductId',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetCopyProductIdRequest,
        responseClass: thisProto.GetCopyProductIdResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/CreateProductItems
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CreateProductItemResponse>>
     */
    createProductItems: (
      requestData: thisProto.CreateProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CreateProductItemResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/CreateProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateProductItemRequest,
        responseClass: thisProto.CreateProductItemResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/UpdateProductItems
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    updateProductItems: (
      requestData: thisProto.UpdateProductItemsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/UpdateProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateProductItemsRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/UploadProductItemsImage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UploadProductItemsImageResponse>>
     */
    uploadProductItemsImage: (
      requestData: thisProto.UploadProductItemsImageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UploadProductItemsImageResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/UploadProductItemsImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadProductItemsImageRequest,
        responseClass: thisProto.UploadProductItemsImageResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/UploadProductItemsImageSource
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UploadProductItemsImageSourceResponse>>
     */
    uploadProductItemsImageSource: (
      requestData: thisProto.UploadProductItemsImageSourceRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.UploadProductItemsImageSourceResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/UploadProductItemsImageSource',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadProductItemsImageSourceRequest,
        responseClass: thisProto.UploadProductItemsImageSourceResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/GetProductItemsImage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetProductItemsImageResponse>>
     */
    getProductItemsImage: (
      requestData: thisProto.GetProductItemsImageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetProductItemsImageResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/GetProductItemsImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProductItemsImageRequest,
        responseClass: thisProto.GetProductItemsImageResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/ListShopReflection
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListShopReflectionResponse>>
     */
    listShopReflection: (
      requestData: thisProto.ListShopReflectionRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListShopReflectionResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/ListShopReflection',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListShopReflectionRequest,
        responseClass: thisProto.ListShopReflectionResponse
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/ShopStatusUpdate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    shopStatusUpdate: (
      requestData: thisProto.ShopStatusUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/ShopStatusUpdate',
        requestData,
        requestMetadata,
        requestClass: thisProto.ShopStatusUpdateRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.ProductItemsService/GetExchangeRates
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetExchangeRateResponse>>
     */
    getExchangeRates: (
      requestData: thisProto.GetExchangeRateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetExchangeRateResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductItemsService/GetExchangeRates',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetExchangeRateRequest,
        responseClass: thisProto.GetExchangeRateResponse
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_PRODUCT_ITEMS_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.ProductItemsService',
      settings
    );
  }

  /**
   * Unary call @/shop.ProductItemsService/ListProductItems
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListProductItemsResponse>
   */
  listProductItems(
    requestData: thisProto.ListProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListProductItemsResponse> {
    return this.$raw
      .listProductItems(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/GetProductItemInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetProductItemsInfoResponse>
   */
  getProductItemInfo(
    requestData: thisProto.GetProductItemInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetProductItemsInfoResponse> {
    return this.$raw
      .getProductItemInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/GetProductItemNo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetProductItemNoResponse>
   */
  getProductItemNo(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetProductItemNoResponse> {
    return this.$raw
      .getProductItemNo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/GetCopyProductId
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetCopyProductIdResponse>
   */
  getCopyProductId(
    requestData: thisProto.GetCopyProductIdRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetCopyProductIdResponse> {
    return this.$raw
      .getCopyProductId(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/CreateProductItems
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CreateProductItemResponse>
   */
  createProductItems(
    requestData: thisProto.CreateProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CreateProductItemResponse> {
    return this.$raw
      .createProductItems(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/UpdateProductItems
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  updateProductItems(
    requestData: thisProto.UpdateProductItemsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .updateProductItems(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/UploadProductItemsImage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadProductItemsImageResponse>
   */
  uploadProductItemsImage(
    requestData: thisProto.UploadProductItemsImageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UploadProductItemsImageResponse> {
    return this.$raw
      .uploadProductItemsImage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/UploadProductItemsImageSource
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadProductItemsImageSourceResponse>
   */
  uploadProductItemsImageSource(
    requestData: thisProto.UploadProductItemsImageSourceRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UploadProductItemsImageSourceResponse> {
    return this.$raw
      .uploadProductItemsImageSource(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/GetProductItemsImage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetProductItemsImageResponse>
   */
  getProductItemsImage(
    requestData: thisProto.GetProductItemsImageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetProductItemsImageResponse> {
    return this.$raw
      .getProductItemsImage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/ListShopReflection
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListShopReflectionResponse>
   */
  listShopReflection(
    requestData: thisProto.ListShopReflectionRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListShopReflectionResponse> {
    return this.$raw
      .listShopReflection(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/ShopStatusUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  shopStatusUpdate(
    requestData: thisProto.ShopStatusUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .shopStatusUpdate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductItemsService/GetExchangeRates
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetExchangeRateResponse>
   */
  getExchangeRates(
    requestData: thisProto.GetExchangeRateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetExchangeRateResponse> {
    return this.$raw
      .getExchangeRates(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
