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
import * as thisProto from './yahoo-items.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_YAHOO_ITEMS_SERVICE_CLIENT_SETTINGS } from './yahoo-items.pbconf';
/**
 * Service client implementation for shop.YahooItemsService
 */
@Injectable({ providedIn: 'any' })
export class YahooItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.YahooItemsService/GetProductCategories
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetYahooProductCategorieResponse>>
     */
    getProductCategories: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetYahooProductCategorieResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.YahooItemsService/GetProductCategories',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.GetYahooProductCategorieResponse
      });
    },
    /**
     * Unary call: /shop.YahooItemsService/GetProductSpec
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetYahooProductSpecResponse>>
     */
    getProductSpec: (
      requestData: thisProto.GetYahooProductSpecRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetYahooProductSpecResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.YahooItemsService/GetProductSpec',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetYahooProductSpecRequest,
        responseClass: thisProto.GetYahooProductSpecResponse
      });
    },
    /**
     * Unary call: /shop.YahooItemsService/GetProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetYahooProductResponse>>
     */
    getProduct: (
      requestData: thisProto.GetYahooProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetYahooProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.YahooItemsService/GetProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetYahooProductRequest,
        responseClass: thisProto.GetYahooProductResponse
      });
    },
    /**
     * Unary call: /shop.YahooItemsService/UpdateProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    updateProduct: (
      requestData: thisProto.UpdateYahooProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.YahooItemsService/UpdateProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateYahooProductRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.YahooItemsService/ApplayProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    applayProduct: (
      requestData: thisProto.ApplayYahooProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.YahooItemsService/ApplayProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ApplayYahooProductRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_YAHOO_ITEMS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.YahooItemsService',
      settings
    );
  }

  /**
   * Unary call @/shop.YahooItemsService/GetProductCategories
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetYahooProductCategorieResponse>
   */
  getProductCategories(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetYahooProductCategorieResponse> {
    return this.$raw
      .getProductCategories(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.YahooItemsService/GetProductSpec
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetYahooProductSpecResponse>
   */
  getProductSpec(
    requestData: thisProto.GetYahooProductSpecRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetYahooProductSpecResponse> {
    return this.$raw
      .getProductSpec(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.YahooItemsService/GetProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetYahooProductResponse>
   */
  getProduct(
    requestData: thisProto.GetYahooProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetYahooProductResponse> {
    return this.$raw
      .getProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.YahooItemsService/UpdateProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  updateProduct(
    requestData: thisProto.UpdateYahooProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .updateProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.YahooItemsService/ApplayProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  applayProduct(
    requestData: thisProto.ApplayYahooProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .applayProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
