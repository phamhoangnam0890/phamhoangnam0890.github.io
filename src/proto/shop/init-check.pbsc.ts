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
import * as thisProto from './init-check.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_INIT_SYS_CHECK_SERVICE_CLIENT_SETTINGS } from './init-check.pbconf';
/**
 * Service client implementation for shop.InitSysCheckService
 */
@Injectable({ providedIn: 'any' })
export class InitSysCheckServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.InitSysCheckService/InitCheck
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.InitCheckResponse>>
     */
    initCheck: (
      requestData: googleProtobuf002.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.InitCheckResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.InitSysCheckService/InitCheck',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf002.Empty,
        responseClass: thisProto.InitCheckResponse
      });
    }
  };

  constructor(
    @Optional()
    @Inject(GRPC_INIT_SYS_CHECK_SERVICE_CLIENT_SETTINGS)
    settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'shop.InitSysCheckService',
      settings
    );
  }

  /**
   * Unary call @/shop.InitSysCheckService/InitCheck
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.InitCheckResponse>
   */
  initCheck(
    requestData: googleProtobuf002.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.InitCheckResponse> {
    return this.$raw
      .initCheck(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
