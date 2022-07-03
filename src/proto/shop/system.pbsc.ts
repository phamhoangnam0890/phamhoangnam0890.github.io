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
import * as thisProto from './system.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_SYSTEM_SERVICE_CLIENT_SETTINGS } from './system.pbconf';
/**
 * Service client implementation for shop.SystemService
 */
@Injectable({ providedIn: 'any' })
export class SystemServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.SystemService/GetSystemService
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetSystemServiceResponse>>
     */
    getSystemService: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetSystemServiceResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.SystemService/GetSystemService',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.GetSystemServiceResponse
      });
    },
    /**
     * Unary call: /shop.SystemService/UpdateSystemService
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    updateSystemService: (
      requestData: thisProto.UpdateSystemServiceRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.SystemService/UpdateSystemService',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateSystemServiceRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_SYSTEM_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.SystemService', settings);
  }

  /**
   * Unary call @/shop.SystemService/GetSystemService
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetSystemServiceResponse>
   */
  getSystemService(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetSystemServiceResponse> {
    return this.$raw
      .getSystemService(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.SystemService/UpdateSystemService
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  updateSystemService(
    requestData: thisProto.UpdateSystemServiceRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .updateSystemService(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
