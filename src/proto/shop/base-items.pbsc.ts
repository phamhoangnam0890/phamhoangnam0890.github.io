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
import * as thisProto from './base-items.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_BASE_ITEMS_SERVICE_CLIENT_SETTINGS } from './base-items.pbconf';
/**
 * Service client implementation for shop.BaseItemsService
 */
@Injectable({ providedIn: 'any' })
export class BaseItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.BaseItemsService/GetBaseProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetBaseProductResponse>>
     */
    getBaseProduct: (
      requestData: thisProto.GetBaseProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetBaseProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.BaseItemsService/GetBaseProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetBaseProductRequest,
        responseClass: thisProto.GetBaseProductResponse
      });
    },
    /**
     * Unary call: /shop.BaseItemsService/UpdateBaseProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    updateBaseProduct: (
      requestData: thisProto.UpdateBaseProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.BaseItemsService/UpdateBaseProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateBaseProductRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /shop.BaseItemsService/ApplayProduct
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    applayProduct: (
      requestData: thisProto.ApplayBaseProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.BaseItemsService/ApplayProduct',
        requestData,
        requestMetadata,
        requestClass: thisProto.ApplayBaseProductRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_BASE_ITEMS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.BaseItemsService', settings);
  }

  /**
   * Unary call @/shop.BaseItemsService/GetBaseProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetBaseProductResponse>
   */
  getBaseProduct(
    requestData: thisProto.GetBaseProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetBaseProductResponse> {
    return this.$raw
      .getBaseProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.BaseItemsService/UpdateBaseProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  updateBaseProduct(
    requestData: thisProto.UpdateBaseProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .updateBaseProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.BaseItemsService/ApplayProduct
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  applayProduct(
    requestData: thisProto.ApplayBaseProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .applayProduct(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
