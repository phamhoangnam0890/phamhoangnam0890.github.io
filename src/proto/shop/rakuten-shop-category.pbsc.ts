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
import * as thisProto from './rakuten-shop-category.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_RAKUTEN_SHOP_CATEGORY_SERVICE_CLIENT_SETTINGS } from './rakuten-shop-category.pbconf';
/**
 * Service client implementation for shop.RakutenShopCategoryService
 */
@Injectable({ providedIn: 'any' })
export class RakutenShopCategoryServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.RakutenShopCategoryService/ListShopCategorys
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListRakutenShopCategoryResponse>>
     */
    listShopCategorys: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListRakutenShopCategoryResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenShopCategoryService/ListShopCategorys',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.ListRakutenShopCategoryResponse
      });
    },
    /**
     * Unary call: /shop.RakutenShopCategoryService/GetShopCategory
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetRakutenShopCategoryResponse>>
     */
    getShopCategory: (
      requestData: thisProto.GetRakutenShopCategoryRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetRakutenShopCategoryResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenShopCategoryService/GetShopCategory',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetRakutenShopCategoryRequest,
        responseClass: thisProto.GetRakutenShopCategoryResponse
      });
    },
    /**
     * Unary call: /shop.RakutenShopCategoryService/CreateShopCategory
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    createShopCategory: (
      requestData: thisProto.CreateRakutenShopCategoryRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenShopCategoryService/CreateShopCategory',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateRakutenShopCategoryRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenShopCategoryService/ListShopCategoryProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListRakutenShopCategoryProductResponse>>
     */
    listShopCategoryProduct: (
      requestData: thisProto.ListRakutenShopCategoryProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<
      GrpcEvent<thisProto.ListRakutenShopCategoryProductResponse>
    > => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenShopCategoryService/ListShopCategoryProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListRakutenShopCategoryProductRequest,
        responseClass: thisProto.ListRakutenShopCategoryProductResponse
      });
    },
    /**
     * Unary call: /shop.RakutenShopCategoryService/ApplayCategoryProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    applayCategoryProduct: (
      requestData: thisProto.ApplayRakutenProductCategoryRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenShopCategoryService/ApplayCategoryProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ApplayRakutenProductCategoryRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_RAKUTEN_SHOP_CATEGORY_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.RakutenShopCategoryService',
      settings
    );
  }

  /**
   * Unary call @/shop.RakutenShopCategoryService/ListShopCategorys
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListRakutenShopCategoryResponse>
   */
  listShopCategorys(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListRakutenShopCategoryResponse> {
    return this.$raw
      .listShopCategorys(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenShopCategoryService/GetShopCategory
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetRakutenShopCategoryResponse>
   */
  getShopCategory(
    requestData: thisProto.GetRakutenShopCategoryRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetRakutenShopCategoryResponse> {
    return this.$raw
      .getShopCategory(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenShopCategoryService/CreateShopCategory
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  createShopCategory(
    requestData: thisProto.CreateRakutenShopCategoryRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .createShopCategory(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenShopCategoryService/ListShopCategoryProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListRakutenShopCategoryProductResponse>
   */
  listShopCategoryProduct(
    requestData: thisProto.ListRakutenShopCategoryProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListRakutenShopCategoryProductResponse> {
    return this.$raw
      .listShopCategoryProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenShopCategoryService/ApplayCategoryProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  applayCategoryProduct(
    requestData: thisProto.ApplayRakutenProductCategoryRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .applayCategoryProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
