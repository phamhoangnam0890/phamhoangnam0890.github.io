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
import * as thisProto from './rakuten-events.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_RAKUTEN_EVENTS_SERVICE_CLIENT_SETTINGS } from './rakuten-events.pbconf';
/**
 * Service client implementation for shop.RakutenEventsService
 */
@Injectable({ providedIn: 'any' })
export class RakutenEventsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.RakutenEventsService/RakutenEventList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RakutenEventListResponse>>
     */
    rakutenEventList: (
      requestData: thisProto.RakutenEventListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RakutenEventListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/RakutenEventList',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenEventListRequest,
        responseClass: thisProto.RakutenEventListResponse
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/RakutenEventCreate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenEventCreate: (
      requestData: thisProto.RakutenEventCreateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/RakutenEventCreate',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenEventCreateRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/RakutenEventInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RakutenEventData>>
     */
    rakutenEventInfo: (
      requestData: thisProto.RakutenEventInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RakutenEventData>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/RakutenEventInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenEventInfoRequest,
        responseClass: thisProto.RakutenEventData
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/RakutenEventEdit
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenEventEdit: (
      requestData: thisProto.RakutenEventEditRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/RakutenEventEdit',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenEventEditRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/RakutenEventDelete
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenEventDelete: (
      requestData: thisProto.RakutenEventDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/RakutenEventDelete',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenEventDeleteRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/ListRakutenEventProducts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListRakutenEventProductResponse>>
     */
    listRakutenEventProducts: (
      requestData: thisProto.ListRakutenEventProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListRakutenEventProductResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/ListRakutenEventProducts',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListRakutenEventProductRequest,
        responseClass: thisProto.ListRakutenEventProductResponse
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/CreateRakutenEventProducts
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    createRakutenEventProducts: (
      requestData: thisProto.CreateRakutenEventProductRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/CreateRakutenEventProducts',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateRakutenEventProductRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenEventsService/ReflectionRakutenEvent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    reflectionRakutenEvent: (
      requestData: thisProto.ReflectionRakutenEventRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenEventsService/ReflectionRakutenEvent',
        requestData,
        requestMetadata,
        requestClass: thisProto.ReflectionRakutenEventRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_RAKUTEN_EVENTS_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.RakutenEventsService',
      settings
    );
  }

  /**
   * Unary call @/shop.RakutenEventsService/RakutenEventList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RakutenEventListResponse>
   */
  rakutenEventList(
    requestData: thisProto.RakutenEventListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RakutenEventListResponse> {
    return this.$raw
      .rakutenEventList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/RakutenEventCreate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenEventCreate(
    requestData: thisProto.RakutenEventCreateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenEventCreate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/RakutenEventInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RakutenEventData>
   */
  rakutenEventInfo(
    requestData: thisProto.RakutenEventInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RakutenEventData> {
    return this.$raw
      .rakutenEventInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/RakutenEventEdit
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenEventEdit(
    requestData: thisProto.RakutenEventEditRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenEventEdit(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/RakutenEventDelete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenEventDelete(
    requestData: thisProto.RakutenEventDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenEventDelete(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/ListRakutenEventProducts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListRakutenEventProductResponse>
   */
  listRakutenEventProducts(
    requestData: thisProto.ListRakutenEventProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListRakutenEventProductResponse> {
    return this.$raw
      .listRakutenEventProducts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/CreateRakutenEventProducts
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  createRakutenEventProducts(
    requestData: thisProto.CreateRakutenEventProductRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .createRakutenEventProducts(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenEventsService/ReflectionRakutenEvent
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  reflectionRakutenEvent(
    requestData: thisProto.ReflectionRakutenEventRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .reflectionRakutenEvent(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
