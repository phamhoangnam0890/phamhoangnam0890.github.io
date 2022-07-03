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
import * as thisProto from './purchases.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_PURCHASES_SERVICE_CLIENT_SETTINGS } from './purchases.pbconf';
/**
 * Service client implementation for shop.PurchasesService
 */
@Injectable({ providedIn: 'any' })
export class PurchasesServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.PurchasesService/PurchasesList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PurchasesListResponse>>
     */
    purchasesList: (
      requestData: thisProto.PurchasesListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PurchasesListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.PurchasesService/PurchasesList',
        requestData,
        requestMetadata,
        requestClass: thisProto.PurchasesListRequest,
        responseClass: thisProto.PurchasesListResponse
      });
    },
    /**
     * Unary call: /shop.PurchasesService/PurchasesInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PurchasesListInfoResponse>>
     */
    purchasesInfo: (
      requestData: thisProto.PurchasesListInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PurchasesListInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.PurchasesService/PurchasesInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.PurchasesListInfoRequest,
        responseClass: thisProto.PurchasesListInfoResponse
      });
    },
    /**
     * Unary call: /shop.PurchasesService/PurchasesStatusChange
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    purchasesStatusChange: (
      requestData: thisProto.PurchasesStatusChangeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.PurchasesService/PurchasesStatusChange',
        requestData,
        requestMetadata,
        requestClass: thisProto.PurchasesStatusChangeRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PURCHASES_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.PurchasesService', settings);
  }

  /**
   * Unary call @/shop.PurchasesService/PurchasesList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PurchasesListResponse>
   */
  purchasesList(
    requestData: thisProto.PurchasesListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PurchasesListResponse> {
    return this.$raw
      .purchasesList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.PurchasesService/PurchasesInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PurchasesListInfoResponse>
   */
  purchasesInfo(
    requestData: thisProto.PurchasesListInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PurchasesListInfoResponse> {
    return this.$raw
      .purchasesInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.PurchasesService/PurchasesStatusChange
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  purchasesStatusChange(
    requestData: thisProto.PurchasesStatusChangeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .purchasesStatusChange(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
