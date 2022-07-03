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
import * as thisProto from './categories.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_CATEGORIES_SERVICE_CLIENT_SETTINGS } from './categories.pbconf';
/**
 * Service client implementation for products.CategoriesService
 */
@Injectable({ providedIn: 'any' })
export class CategoriesServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /products.CategoriesService/CategoriesList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CategoriesListResponse>>
     */
    categoriesList: (
      requestData: thisProto.CategoriesListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CategoriesListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.CategoriesService/CategoriesList',
        requestData,
        requestMetadata,
        requestClass: thisProto.CategoriesListRequest,
        responseClass: thisProto.CategoriesListResponse
      });
    },
    /**
     * Unary call: /products.CategoriesService/CategoryInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CategoryInfoResponse>>
     */
    categoryInfo: (
      requestData: thisProto.CategoryInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CategoryInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.CategoriesService/CategoryInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.CategoryInfoRequest,
        responseClass: thisProto.CategoryInfoResponse
      });
    },
    /**
     * Unary call: /products.CategoriesService/CategoryEntry
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    categoryEntry: (
      requestData: thisProto.CategoryEntryRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/products.CategoriesService/CategoryEntry',
        requestData,
        requestMetadata,
        requestClass: thisProto.CategoryEntryRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_CATEGORIES_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'products.CategoriesService',
      settings
    );
  }

  /**
   * Unary call @/products.CategoriesService/CategoriesList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CategoriesListResponse>
   */
  categoriesList(
    requestData: thisProto.CategoriesListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CategoriesListResponse> {
    return this.$raw
      .categoriesList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/products.CategoriesService/CategoryInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CategoryInfoResponse>
   */
  categoryInfo(
    requestData: thisProto.CategoryInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CategoryInfoResponse> {
    return this.$raw
      .categoryInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/products.CategoriesService/CategoryEntry
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  categoryEntry(
    requestData: thisProto.CategoryEntryRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .categoryEntry(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
