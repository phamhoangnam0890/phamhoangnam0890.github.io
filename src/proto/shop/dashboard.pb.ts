/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for shop.DashboardOverviewResponse
 */
export class DashboardOverviewResponse implements GrpcMessage {
  static id = 'shop.DashboardOverviewResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DashboardOverviewResponse();
    DashboardOverviewResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DashboardOverviewResponse) {
    _instance.thisMonthOrderCount = _instance.thisMonthOrderCount || '0';
    _instance.publicProductCount = _instance.publicProductCount || '0';
    _instance.unshippedOrderCount = _instance.unshippedOrderCount || '0';
    _instance.recentOrders = _instance.recentOrders || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DashboardOverviewResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.thisMonthOrderCount = _reader.readInt64String();
          break;
        case 2:
          _instance.publicProductCount = _reader.readInt64String();
          break;
        case 3:
          _instance.unshippedOrderCount = _reader.readInt64String();
          break;
        case 4:
          (_instance.recentOrders = _instance.recentOrders || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    DashboardOverviewResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DashboardOverviewResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.thisMonthOrderCount) {
      _writer.writeInt64String(1, _instance.thisMonthOrderCount);
    }
    if (_instance.publicProductCount) {
      _writer.writeInt64String(2, _instance.publicProductCount);
    }
    if (_instance.unshippedOrderCount) {
      _writer.writeInt64String(3, _instance.unshippedOrderCount);
    }
    if (_instance.recentOrders && _instance.recentOrders.length) {
      _writer.writeRepeatedString(4, _instance.recentOrders);
    }
  }

  private _thisMonthOrderCount?: string;
  private _publicProductCount?: string;
  private _unshippedOrderCount?: string;
  private _recentOrders?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DashboardOverviewResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<DashboardOverviewResponse.AsObject>) {
    _value = _value || {};
    this.thisMonthOrderCount = _value.thisMonthOrderCount;
    this.publicProductCount = _value.publicProductCount;
    this.unshippedOrderCount = _value.unshippedOrderCount;
    this.recentOrders = (_value.recentOrders || []).slice();
    DashboardOverviewResponse.refineValues(this);
  }
  get thisMonthOrderCount(): string | undefined {
    return this._thisMonthOrderCount;
  }
  set thisMonthOrderCount(value: string | undefined) {
    this._thisMonthOrderCount = value;
  }
  get publicProductCount(): string | undefined {
    return this._publicProductCount;
  }
  set publicProductCount(value: string | undefined) {
    this._publicProductCount = value;
  }
  get unshippedOrderCount(): string | undefined {
    return this._unshippedOrderCount;
  }
  set unshippedOrderCount(value: string | undefined) {
    this._unshippedOrderCount = value;
  }
  get recentOrders(): string[] | undefined {
    return this._recentOrders;
  }
  set recentOrders(value: string[] | undefined) {
    this._recentOrders = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DashboardOverviewResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DashboardOverviewResponse.AsObject {
    return {
      thisMonthOrderCount: this.thisMonthOrderCount,
      publicProductCount: this.publicProductCount,
      unshippedOrderCount: this.unshippedOrderCount,
      recentOrders: (this.recentOrders || []).slice()
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DashboardOverviewResponse.AsProtobufJSON {
    return {
      thisMonthOrderCount: this.thisMonthOrderCount,
      publicProductCount: this.publicProductCount,
      unshippedOrderCount: this.unshippedOrderCount,
      recentOrders: (this.recentOrders || []).slice()
    };
  }
}
export module DashboardOverviewResponse {
  /**
   * Standard JavaScript object representation for DashboardOverviewResponse
   */
  export interface AsObject {
    thisMonthOrderCount?: string;
    publicProductCount?: string;
    unshippedOrderCount?: string;
    recentOrders?: string[];
  }

  /**
   * Protobuf JSON representation for DashboardOverviewResponse
   */
  export interface AsProtobufJSON {
    thisMonthOrderCount?: string;
    publicProductCount?: string;
    unshippedOrderCount?: string;
    recentOrders?: string[];
  }
}

/**
 * Message implementation for shop.CategoryRankingListResponse
 */
export class CategoryRankingListResponse implements GrpcMessage {
  static id = 'shop.CategoryRankingListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryRankingListResponse();
    CategoryRankingListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryRankingListResponse) {
    _instance.categories = _instance.categories || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryRankingListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categories = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryRankingListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryRankingListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.categories) {
      _writer.writeString(1, _instance.categories);
    }
  }

  private _categories?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryRankingListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryRankingListResponse.AsObject>) {
    _value = _value || {};
    this.categories = _value.categories;
    CategoryRankingListResponse.refineValues(this);
  }
  get categories(): string | undefined {
    return this._categories;
  }
  set categories(value: string | undefined) {
    this._categories = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryRankingListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryRankingListResponse.AsObject {
    return {
      categories: this.categories
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CategoryRankingListResponse.AsProtobufJSON {
    return {
      categories: this.categories
    };
  }
}
export module CategoryRankingListResponse {
  /**
   * Standard JavaScript object representation for CategoryRankingListResponse
   */
  export interface AsObject {
    categories?: string;
  }

  /**
   * Protobuf JSON representation for CategoryRankingListResponse
   */
  export interface AsProtobufJSON {
    categories?: string;
  }
}
