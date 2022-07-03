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
import * as thisProto from './orders.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_ORDERS_SERVICE_CLIENT_SETTINGS } from './orders.pbconf';
/**
 * Service client implementation for shop.OrdersService
 */
@Injectable({ providedIn: 'any' })
export class OrdersServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.OrdersService/ListOrders
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListOrderResponse>>
     */
    listOrders: (
      requestData: thisProto.ListOrderRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListOrderResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.OrdersService/ListOrders',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListOrderRequest,
        responseClass: thisProto.ListOrderResponse
      });
    },
    /**
     * Unary call: /shop.OrdersService/GetOrdersInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetOrderInfoResponse>>
     */
    getOrdersInfo: (
      requestData: thisProto.GetOrderInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetOrderInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.OrdersService/GetOrdersInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetOrderInfoRequest,
        responseClass: thisProto.GetOrderInfoResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ORDERS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.OrdersService', settings);
  }

  /**
   * Unary call @/shop.OrdersService/ListOrders
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListOrderResponse>
   */
  listOrders(
    requestData: thisProto.ListOrderRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListOrderResponse> {
    return this.$raw
      .listOrders(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.OrdersService/GetOrdersInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetOrderInfoResponse>
   */
  getOrdersInfo(
    requestData: thisProto.GetOrderInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetOrderInfoResponse> {
    return this.$raw
      .getOrdersInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
