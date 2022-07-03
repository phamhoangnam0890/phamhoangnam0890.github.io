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
import * as thisProto from './login.pb';
import { GRPC_LOGIN_SERVICE_CLIENT_SETTINGS } from './login.pbconf';
/**
 * Service client implementation for products.LoginService
 */
@Injectable({ providedIn: 'any' })
export class LoginServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /products.LoginService/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LoginResponse>>
     */
    login: (
      requestData: thisProto.LoginRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LoginResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.LoginService/Login',
        requestData,
        requestMetadata,
        requestClass: thisProto.LoginRequest,
        responseClass: thisProto.LoginResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_LOGIN_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('products.LoginService', settings);
  }

  /**
   * Unary call @/products.LoginService/Login
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LoginResponse>
   */
  login(
    requestData: thisProto.LoginRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LoginResponse> {
    return this.$raw
      .login(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
