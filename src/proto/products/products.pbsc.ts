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
import * as thisProto from './products.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_PRODUCT_ITEMS_SERVICE_CLIENT_SETTINGS } from './products.pbconf';
/**
 * Service client implementation for products.ProductItemsService
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
     * Unary call: /products.ProductItemsService/ListProductItems
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
        path: '/products.ProductItemsService/ListProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListProductItemRequest,
        responseClass: thisProto.ListProductItemsResponse
      });
    },
    /**
     * Unary call: /products.ProductItemsService/GetProductItemInfo
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
        path: '/products.ProductItemsService/GetProductItemInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProductItemInfoRequest,
        responseClass: thisProto.GetProductItemsInfoResponse
      });
    },
    /**
     * Unary call: /products.ProductItemsService/CreateProductItems
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
        path: '/products.ProductItemsService/CreateProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateProductItemRequest,
        responseClass: thisProto.CreateProductItemResponse
      });
    },
    /**
     * Unary call: /products.ProductItemsService/UpdateProductItems
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
        path: '/products.ProductItemsService/UpdateProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateProductItemsRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /products.ProductItemsService/UploadProductItemsImage
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
        path: '/products.ProductItemsService/UploadProductItemsImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadProductItemsImageRequest,
        responseClass: thisProto.UploadProductItemsImageResponse
      });
    },
    /**
     * Unary call: /products.ProductItemsService/GetProductItemsImage
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
        path: '/products.ProductItemsService/GetProductItemsImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetProductItemsImageRequest,
        responseClass: thisProto.GetProductItemsImageResponse
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
      'products.ProductItemsService',
      settings
    );
  }

  /**
   * Unary call @/products.ProductItemsService/ListProductItems
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
   * Unary call @/products.ProductItemsService/GetProductItemInfo
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
   * Unary call @/products.ProductItemsService/CreateProductItems
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
   * Unary call @/products.ProductItemsService/UpdateProductItems
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
   * Unary call @/products.ProductItemsService/UploadProductItemsImage
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
   * Unary call @/products.ProductItemsService/GetProductItemsImage
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
}
