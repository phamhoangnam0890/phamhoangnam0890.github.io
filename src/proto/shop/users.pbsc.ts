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
 * Service client implementation for shop.UsersService
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
     * Unary call: /shop.UsersService/ListUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListUserResponse>>
     */
    listUsers: (
      requestData: thisProto.ListUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListUserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.UsersService/ListUsers',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListUserRequest,
        responseClass: thisProto.ListUserResponse
      });
    },
    /**
     * Unary call: /shop.UsersService/GetUserInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetUserInfoResponse>>
     */
    getUserInfo: (
      requestData: thisProto.GetUserInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetUserInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.UsersService/GetUserInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserInfoRequest,
        responseClass: thisProto.GetUserInfoResponse
      });
    },
    /**
     * Unary call: /shop.UsersService/CreateUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    createUser: (
      requestData: thisProto.CreateUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.UsersService/CreateUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateUserRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.UsersService', settings);
  }

  /**
   * Unary call @/shop.UsersService/ListUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListUserResponse>
   */
  listUsers(
    requestData: thisProto.ListUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListUserResponse> {
    return this.$raw
      .listUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.UsersService/GetUserInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetUserInfoResponse>
   */
  getUserInfo(
    requestData: thisProto.GetUserInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetUserInfoResponse> {
    return this.$raw
      .getUserInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.UsersService/CreateUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  createUser(
    requestData: thisProto.CreateUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .createUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
