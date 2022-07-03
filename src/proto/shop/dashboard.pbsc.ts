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
import * as thisProto from './dashboard.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_DASHBOARD_SERVICE_CLIENT_SETTINGS } from './dashboard.pbconf';
/**
 * Service client implementation for shop.DashboardService
 */
@Injectable({ providedIn: 'any' })
export class DashboardServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.DashboardService/DashboardOverview
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DashboardOverviewResponse>>
     */
    dashboardOverview: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DashboardOverviewResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.DashboardService/DashboardOverview',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.DashboardOverviewResponse
      });
    },
    /**
     * Unary call: /shop.DashboardService/CategoryRankingList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CategoryRankingListResponse>>
     */
    categoryRankingList: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CategoryRankingListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.DashboardService/CategoryRankingList',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.CategoryRankingListResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_DASHBOARD_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.DashboardService', settings);
  }

  /**
   * Unary call @/shop.DashboardService/DashboardOverview
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DashboardOverviewResponse>
   */
  dashboardOverview(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DashboardOverviewResponse> {
    return this.$raw
      .dashboardOverview(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.DashboardService/CategoryRankingList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CategoryRankingListResponse>
   */
  categoryRankingList(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CategoryRankingListResponse> {
    return this.$raw
      .categoryRankingList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
