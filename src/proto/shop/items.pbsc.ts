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
import * as thisProto from './items.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_ITEMS_SERVICE_CLIENT_SETTINGS } from './items.pbconf';
/**
 * Service client implementation for shop.ItemsService
 */
@Injectable({ providedIn: 'any' })
export class ItemsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.ItemsService/ItemsList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ItemsListResponse>>
     */
    itemsList: (
      requestData: thisProto.ItemsListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ItemsListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ItemsService/ItemsList',
        requestData,
        requestMetadata,
        requestClass: thisProto.ItemsListRequest,
        responseClass: thisProto.ItemsListResponse
      });
    },
    /**
     * Unary call: /shop.ItemsService/ItemsInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ItemsInfoResponse>>
     */
    itemsInfo: (
      requestData: thisProto.ItemsInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ItemsInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.ItemsService/ItemsInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.ItemsInfoRequest,
        responseClass: thisProto.ItemsInfoResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ITEMS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.ItemsService', settings);
  }

  /**
   * Unary call @/shop.ItemsService/ItemsList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ItemsListResponse>
   */
  itemsList(
    requestData: thisProto.ItemsListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ItemsListResponse> {
    return this.$raw
      .itemsList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.ItemsService/ItemsInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ItemsInfoResponse>
   */
  itemsInfo(
    requestData: thisProto.ItemsInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ItemsInfoResponse> {
    return this.$raw
      .itemsInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
