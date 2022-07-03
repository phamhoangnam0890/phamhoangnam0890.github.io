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
import * as thisProto from './rakuten-items.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_RAKUTEN_ITEMS_SERVICE_CLIENT_SETTINGS } from './rakuten-items.pbconf';
/**
 * Service client implementation for shop.RakutenItemsService
 */
@Injectable({ providedIn: 'any' })
export class RakutenItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.RakutenItemsService/GetProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetRakutenProductResponse>>
     */
    getProduct: (
      requestData: thisProto.GetRakutenProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetRakutenProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenItemsService/GetProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetRakutenProductRequest,
        responseClass: thisProto.GetRakutenProductResponse
      });
    },
    /**
     * Unary call: /shop.RakutenItemsService/UpdateProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateProduct: (
      requestData: thisProto.UpdateRakutenProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenItemsService/UpdateProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateRakutenProductRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenItemsService/ApplayProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    applayProduct: (
      requestData: thisProto.ApplayRakutenProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenItemsService/ApplayProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ApplayRakutenProductRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_RAKUTEN_ITEMS_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.RakutenItemsService',
      settings
    );
  }

  /**
   * Unary call @/shop.RakutenItemsService/GetProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetRakutenProductResponse>
   */
  getProduct(
    requestData: thisProto.GetRakutenProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetRakutenProductResponse> {
    return this.$raw
      .getProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenItemsService/UpdateProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateProduct(
    requestData: thisProto.UpdateRakutenProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .updateProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenItemsService/ApplayProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  applayProduct(
    requestData: thisProto.ApplayRakutenProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .applayProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
