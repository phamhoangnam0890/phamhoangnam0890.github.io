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
import * as thisProto from './users.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_USERS_SERVICE_CLIENT_SETTINGS } from './users.pbconf';
/**
 * Service client implementation for products.UsersService
 */
@Injectable({ providedIn: 'any' })
export class UsersServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /products.UsersService/UsersList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UsersListResponse>>
     */
    usersList: (
      requestData: thisProto.UsersListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UsersListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.UsersService/UsersList',
        requestData,
        requestMetadata,
        requestClass: thisProto.UsersListRequest,
        responseClass: thisProto.UsersListResponse
      });
    },
    /**
     * Unary call: /products.UsersService/UserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserInfoResponse>>
     */
    userInfo: (
      requestData: thisProto.UserInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.UsersService/UserInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfoRequest,
        responseClass: thisProto.UserInfoResponse
      });
    },
    /**
     * Unary call: /products.UsersService/UserEntry
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    userEntry: (
      requestData: thisProto.UserEntryRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.UsersService/UserEntry',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserEntryRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('products.UsersService', settings);
  }

  /**
   * Unary call @/products.UsersService/UsersList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UsersListResponse>
   */
  usersList(
    requestData: thisProto.UsersListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UsersListResponse> {
    return this.$raw
      .usersList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/products.UsersService/UserInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserInfoResponse>
   */
  userInfo(
    requestData: thisProto.UserInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserInfoResponse> {
    return this.$raw
      .userInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/products.UsersService/UserEntry
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  userEntry(
    requestData: thisProto.UserEntryRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .userEntry(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
