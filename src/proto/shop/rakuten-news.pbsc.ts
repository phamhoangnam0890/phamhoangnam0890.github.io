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
import * as thisProto from './rakuten-news.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_RAKUTEN_NEWS_SERVICE_CLIENT_SETTINGS } from './rakuten-news.pbconf';
/**
 * Service client implementation for shop.RakutenNewsService
 */
@Injectable({ providedIn: 'any' })
export class RakutenNewsServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.RakutenNewsService/RakutenNewsList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RakutenNewsListResponse>>
     */
    rakutenNewsList: (
      requestData: thisProto.RakutenNewsListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RakutenNewsListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenNewsService/RakutenNewsList',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenNewsListRequest,
        responseClass: thisProto.RakutenNewsListResponse
      });
    },
    /**
     * Unary call: /shop.RakutenNewsService/RakutenNewsCreate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenNewsCreate: (
      requestData: thisProto.RakutenNewsCreateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenNewsService/RakutenNewsCreate',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenNewsCreateRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenNewsService/RakutenNewsInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.RakutenNewsInfoResponse>>
     */
    rakutenNewsInfo: (
      requestData: thisProto.RakutenNewsInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.RakutenNewsInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenNewsService/RakutenNewsInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenNewsInfoRequest,
        responseClass: thisProto.RakutenNewsInfoResponse
      });
    },
    /**
     * Unary call: /shop.RakutenNewsService/RakutenNewsDelete
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenNewsDelete: (
      requestData: thisProto.RakutenNewsDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenNewsService/RakutenNewsDelete',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenNewsDeleteRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.RakutenNewsService/RakutenNewsUpdate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    rakutenNewsUpdate: (
      requestData: thisProto.RakutenNewsUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.RakutenNewsService/RakutenNewsUpdate',
        requestData,
        requestMetadata,
        requestClass: thisProto.RakutenNewsUpdateRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_RAKUTEN_NEWS_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.RakutenNewsService',
      settings
    );
  }

  /**
   * Unary call @/shop.RakutenNewsService/RakutenNewsList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RakutenNewsListResponse>
   */
  rakutenNewsList(
    requestData: thisProto.RakutenNewsListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RakutenNewsListResponse> {
    return this.$raw
      .rakutenNewsList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenNewsService/RakutenNewsCreate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenNewsCreate(
    requestData: thisProto.RakutenNewsCreateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenNewsCreate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenNewsService/RakutenNewsInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.RakutenNewsInfoResponse>
   */
  rakutenNewsInfo(
    requestData: thisProto.RakutenNewsInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.RakutenNewsInfoResponse> {
    return this.$raw
      .rakutenNewsInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenNewsService/RakutenNewsDelete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenNewsDelete(
    requestData: thisProto.RakutenNewsDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenNewsDelete(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.RakutenNewsService/RakutenNewsUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  rakutenNewsUpdate(
    requestData: thisProto.RakutenNewsUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .rakutenNewsUpdate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
