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
import * as thisProto from './images.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_PRODUCT_APP_IMAGES_SERVICE_CLIENT_SETTINGS } from './images.pbconf';
/**
 * Service client implementation for shop.ProductAppImagesService
 */
@Injectable({ providedIn: 'any' })
export class ProductAppImagesServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.ProductAppImagesService/ListAppProductItems
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListAppProductItemResponse>>
     */
    listAppProductItems: (
      requestData: thisProto.ListAppProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListAppProductItemResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductAppImagesService/ListAppProductItems',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListAppProductItemRequest,
        responseClass: thisProto.ListAppProductItemResponse
      });
    },
    /**
     * Unary call: /shop.ProductAppImagesService/GetAppProductItem
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAppProductItemResponse>>
     */
    getAppProductItem: (
      requestData: thisProto.GetAppProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAppProductItemResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductAppImagesService/GetAppProductItem',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetAppProductItemRequest,
        responseClass: thisProto.GetAppProductItemResponse
      });
    },
    /**
     * Unary call: /shop.ProductAppImagesService/UploadAppProductItem
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    uploadAppProductItem: (
      requestData: thisProto.UploadAppProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductAppImagesService/UploadAppProductItem',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadAppProductItemRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /shop.ProductAppImagesService/DeleteAppProductItem
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteAppProductItem: (
      requestData: thisProto.DeleteAppProductItemRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ProductAppImagesService/DeleteAppProductItem',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteAppProductItemRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_PRODUCT_APP_IMAGES_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.ProductAppImagesService',
      settings
    );
  }

  /**
   * Unary call @/shop.ProductAppImagesService/ListAppProductItems
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListAppProductItemResponse>
   */
  listAppProductItems(
    requestData: thisProto.ListAppProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListAppProductItemResponse> {
    return this.$raw
      .listAppProductItems(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductAppImagesService/GetAppProductItem
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAppProductItemResponse>
   */
  getAppProductItem(
    requestData: thisProto.GetAppProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAppProductItemResponse> {
    return this.$raw
      .getAppProductItem(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductAppImagesService/UploadAppProductItem
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  uploadAppProductItem(
    requestData: thisProto.UploadAppProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .uploadAppProductItem(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ProductAppImagesService/DeleteAppProductItem
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteAppProductItem(
    requestData: thisProto.DeleteAppProductItemRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteAppProductItem(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
