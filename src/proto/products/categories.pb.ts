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
 * Message implementation for products.CategoriesListRequest
 */
export class CategoriesListRequest implements GrpcMessage {
  static id = 'products.CategoriesListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoriesListRequest();
    CategoriesListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoriesListRequest) {
    _instance.offset = _instance.offset || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoriesListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.offset = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.offset,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CategoriesListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoriesListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _offset?: googleProtobuf000.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoriesListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoriesListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    CategoriesListRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoriesListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoriesListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined
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
  ): CategoriesListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null
    };
  }
}
export module CategoriesListRequest {
  /**
   * Standard JavaScript object representation for CategoriesListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for CategoriesListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for products.CategoriesListResponse
 */
export class CategoriesListResponse implements GrpcMessage {
  static id = 'products.CategoriesListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoriesListResponse();
    CategoriesListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoriesListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoriesListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CategoryData();
          _reader.readMessage(
            messageInitializer1,
            CategoryData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        case 2:
          _instance.total = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoriesListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoriesListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        CategoryData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: CategoryData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoriesListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoriesListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new CategoryData(m));
    this.total = _value.total;
    CategoriesListResponse.refineValues(this);
  }
  get data(): CategoryData[] | undefined {
    return this._data;
  }
  set data(value: CategoryData[] | undefined) {
    this._data = value;
  }
  get total(): string | undefined {
    return this._total;
  }
  set total(value: string | undefined) {
    this._total = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoriesListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoriesListResponse.AsObject {
    return {
      data: (this.data || []).map(m => m.toObject()),
      total: this.total
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
  ): CategoriesListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module CategoriesListResponse {
  /**
   * Standard JavaScript object representation for CategoriesListResponse
   */
  export interface AsObject {
    data?: CategoryData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for CategoriesListResponse
   */
  export interface AsProtobufJSON {
    data?: CategoryData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for products.CategoryData
 */
export class CategoryData implements GrpcMessage {
  static id = 'products.CategoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryData();
    CategoryData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryData) {
    _instance.categoryId = _instance.categoryId || '0';
    _instance.categoryName = _instance.categoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.categoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeInt64String(1, _instance.categoryId);
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
  }

  private _categoryId?: string;
  private _categoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryData.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    this.categoryName = _value.categoryName;
    CategoryData.refineValues(this);
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryData.AsObject {
    return {
      categoryId: this.categoryId,
      categoryName: this.categoryName
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
  ): CategoryData.AsProtobufJSON {
    return {
      categoryId: this.categoryId,
      categoryName: this.categoryName
    };
  }
}
export module CategoryData {
  /**
   * Standard JavaScript object representation for CategoryData
   */
  export interface AsObject {
    categoryId?: string;
    categoryName?: string;
  }

  /**
   * Protobuf JSON representation for CategoryData
   */
  export interface AsProtobufJSON {
    categoryId?: string;
    categoryName?: string;
  }
}

/**
 * Message implementation for products.CategoryInfoRequest
 */
export class CategoryInfoRequest implements GrpcMessage {
  static id = 'products.CategoryInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryInfoRequest();
    CategoryInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryInfoRequest) {
    _instance.categoryId = _instance.categoryId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeInt64String(1, _instance.categoryId);
    }
  }

  private _categoryId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryInfoRequest.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    CategoryInfoRequest.refineValues(this);
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryInfoRequest.AsObject {
    return {
      categoryId: this.categoryId
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
  ): CategoryInfoRequest.AsProtobufJSON {
    return {
      categoryId: this.categoryId
    };
  }
}
export module CategoryInfoRequest {
  /**
   * Standard JavaScript object representation for CategoryInfoRequest
   */
  export interface AsObject {
    categoryId?: string;
  }

  /**
   * Protobuf JSON representation for CategoryInfoRequest
   */
  export interface AsProtobufJSON {
    categoryId?: string;
  }
}

/**
 * Message implementation for products.CategoryInfoResponse
 */
export class CategoryInfoResponse implements GrpcMessage {
  static id = 'products.CategoryInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryInfoResponse();
    CategoryInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryInfoResponse) {
    _instance.categoryName = _instance.categoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryName) {
      _writer.writeString(1, _instance.categoryName);
    }
  }

  private _categoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryInfoResponse.AsObject>) {
    _value = _value || {};
    this.categoryName = _value.categoryName;
    CategoryInfoResponse.refineValues(this);
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryInfoResponse.AsObject {
    return {
      categoryName: this.categoryName
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
  ): CategoryInfoResponse.AsProtobufJSON {
    return {
      categoryName: this.categoryName
    };
  }
}
export module CategoryInfoResponse {
  /**
   * Standard JavaScript object representation for CategoryInfoResponse
   */
  export interface AsObject {
    categoryName?: string;
  }

  /**
   * Protobuf JSON representation for CategoryInfoResponse
   */
  export interface AsProtobufJSON {
    categoryName?: string;
  }
}

/**
 * Message implementation for products.CategoryEntryRequest
 */
export class CategoryEntryRequest implements GrpcMessage {
  static id = 'products.CategoryEntryRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryEntryRequest();
    CategoryEntryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryEntryRequest) {
    _instance.categoryId = _instance.categoryId || undefined;
    _instance.categoryName = _instance.categoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryEntryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.categoryId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.categoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryEntryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryEntryRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeMessage(
        1,
        _instance.categoryId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
  }

  private _categoryId?: googleProtobuf000.Int64Value;
  private _categoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryEntryRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryEntryRequest.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId
      ? new googleProtobuf000.Int64Value(_value.categoryId)
      : undefined;
    this.categoryName = _value.categoryName;
    CategoryEntryRequest.refineValues(this);
  }
  get categoryId(): googleProtobuf000.Int64Value | undefined {
    return this._categoryId;
  }
  set categoryId(value: googleProtobuf000.Int64Value | undefined) {
    this._categoryId = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryEntryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryEntryRequest.AsObject {
    return {
      categoryId: this.categoryId ? this.categoryId.toObject() : undefined,
      categoryName: this.categoryName
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
  ): CategoryEntryRequest.AsProtobufJSON {
    return {
      categoryId: this.categoryId
        ? this.categoryId.toProtobufJSON(options)
        : null,
      categoryName: this.categoryName
    };
  }
}
export module CategoryEntryRequest {
  /**
   * Standard JavaScript object representation for CategoryEntryRequest
   */
  export interface AsObject {
    categoryId?: googleProtobuf000.Int64Value.AsObject;
    categoryName?: string;
  }

  /**
   * Protobuf JSON representation for CategoryEntryRequest
   */
  export interface AsProtobufJSON {
    categoryId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    categoryName?: string;
  }
}
