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
import * as thisProto from './stock.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import { GRPC_STOCK_SERVICE_CLIENT_SETTINGS } from './stock.pbconf';
/**
 * Service client implementation for shop.StockService
 */
@Injectable({ providedIn: 'any' })
export class StockServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /shop.StockService/StockList
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StockListResponse>>
     */
    stockList: (
      requestData: thisProto.StockListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StockListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/StockList',
        requestData,
        requestMetadata,
        requestClass: thisProto.StockListRequest,
        responseClass: thisProto.StockListResponse
      });
    },
    /**
     * Unary call: /shop.StockService/StockInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StockInfoResponse>>
     */
    stockInfo: (
      requestData: thisProto.StockInfoRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StockInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/StockInfo',
        requestData,
        requestMetadata,
        requestClass: thisProto.StockInfoRequest,
        responseClass: thisProto.StockInfoResponse
      });
    },
    /**
     * Unary call: /shop.StockService/StockUpdate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    stockUpdate: (
      requestData: thisProto.StockUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/StockUpdate',
        requestData,
        requestMetadata,
        requestClass: thisProto.StockUpdateRequest,
        responseClass: googleProtobuf001.Empty
      });
    },
    /**
     * Unary call: /shop.StockService/UploadStockImage
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UploadStockImageResponse>>
     */
    uploadStockImage: (
      requestData: thisProto.UploadStockImageRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UploadStockImageResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/UploadStockImage',
        requestData,
        requestMetadata,
        requestClass: thisProto.UploadStockImageRequest,
        responseClass: thisProto.UploadStockImageResponse
      });
    },
    /**
     * Unary call: /shop.StockService/UploadShopStockInfo
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UploadShopStockInfoResponse>>
     */
    uploadShopStockInfo: (
      requestData: googleProtobuf001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UploadShopStockInfoResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/UploadShopStockInfo',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf001.Empty,
        responseClass: thisProto.UploadShopStockInfoResponse
      });
    },
    /**
     * Unary call: /shop.StockService/CreateStock
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf001.Empty>>
     */
    createStock: (
      requestData: thisProto.CreateStockRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf001.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/shop.StockService/CreateStock',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateStockRequest,
        responseClass: googleProtobuf001.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_STOCK_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('shop.StockService', settings);
  }

  /**
   * Unary call @/shop.StockService/StockList
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StockListResponse>
   */
  stockList(
    requestData: thisProto.StockListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StockListResponse> {
    return this.$raw
      .stockList(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.StockService/StockInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StockInfoResponse>
   */
  stockInfo(
    requestData: thisProto.StockInfoRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StockInfoResponse> {
    return this.$raw
      .stockInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.StockService/StockUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  stockUpdate(
    requestData: thisProto.StockUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .stockUpdate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.StockService/UploadStockImage
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadStockImageResponse>
   */
  uploadStockImage(
    requestData: thisProto.UploadStockImageRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UploadStockImageResponse> {
    return this.$raw
      .uploadStockImage(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.StockService/UploadShopStockInfo
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UploadShopStockInfoResponse>
   */
  uploadShopStockInfo(
    requestData: googleProtobuf001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UploadShopStockInfoResponse> {
    return this.$raw
      .uploadShopStockInfo(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/shop.StockService/CreateStock
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf001.Empty>
   */
  createStock(
    requestData: thisProto.CreateStockRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf001.Empty> {
    return this.$raw
      .createStock(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
