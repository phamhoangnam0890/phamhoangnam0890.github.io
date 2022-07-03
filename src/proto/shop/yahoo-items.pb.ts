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
 * Message implementation for shop.GetYahooProductCategorieResponse
 */
export class GetYahooProductCategorieResponse implements GrpcMessage {
  static id = 'shop.GetYahooProductCategorieResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetYahooProductCategorieResponse();
    GetYahooProductCategorieResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetYahooProductCategorieResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetYahooProductCategorieResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new YahooProductCategory();
          _reader.readMessage(
            messageInitializer1,
            YahooProductCategory.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetYahooProductCategorieResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetYahooProductCategorieResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        YahooProductCategory.serializeBinaryToWriter
      );
    }
  }

  private _data?: YahooProductCategory[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetYahooProductCategorieResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetYahooProductCategorieResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new YahooProductCategory(m));
    GetYahooProductCategorieResponse.refineValues(this);
  }
  get data(): YahooProductCategory[] | undefined {
    return this._data;
  }
  set data(value: YahooProductCategory[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetYahooProductCategorieResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetYahooProductCategorieResponse.AsObject {
    return {
      data: (this.data || []).map(m => m.toObject())
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
  ): GetYahooProductCategorieResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetYahooProductCategorieResponse {
  /**
   * Standard JavaScript object representation for GetYahooProductCategorieResponse
   */
  export interface AsObject {
    data?: YahooProductCategory.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetYahooProductCategorieResponse
   */
  export interface AsProtobufJSON {
    data?: YahooProductCategory.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.YahooProductCategory
 */
export class YahooProductCategory implements GrpcMessage {
  static id = 'shop.YahooProductCategory';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new YahooProductCategory();
    YahooProductCategory.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: YahooProductCategory) {
    _instance.productCategoryId = _instance.productCategoryId || '0';
    _instance.productCategoryName = _instance.productCategoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: YahooProductCategory,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productCategoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.productCategoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    YahooProductCategory.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: YahooProductCategory,
    _writer: BinaryWriter
  ) {
    if (_instance.productCategoryId) {
      _writer.writeInt64String(1, _instance.productCategoryId);
    }
    if (_instance.productCategoryName) {
      _writer.writeString(2, _instance.productCategoryName);
    }
  }

  private _productCategoryId?: string;
  private _productCategoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of YahooProductCategory to deeply clone from
   */
  constructor(_value?: RecursivePartial<YahooProductCategory.AsObject>) {
    _value = _value || {};
    this.productCategoryId = _value.productCategoryId;
    this.productCategoryName = _value.productCategoryName;
    YahooProductCategory.refineValues(this);
  }
  get productCategoryId(): string | undefined {
    return this._productCategoryId;
  }
  set productCategoryId(value: string | undefined) {
    this._productCategoryId = value;
  }
  get productCategoryName(): string | undefined {
    return this._productCategoryName;
  }
  set productCategoryName(value: string | undefined) {
    this._productCategoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    YahooProductCategory.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): YahooProductCategory.AsObject {
    return {
      productCategoryId: this.productCategoryId,
      productCategoryName: this.productCategoryName
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
  ): YahooProductCategory.AsProtobufJSON {
    return {
      productCategoryId: this.productCategoryId,
      productCategoryName: this.productCategoryName
    };
  }
}
export module YahooProductCategory {
  /**
   * Standard JavaScript object representation for YahooProductCategory
   */
  export interface AsObject {
    productCategoryId?: string;
    productCategoryName?: string;
  }

  /**
   * Protobuf JSON representation for YahooProductCategory
   */
  export interface AsProtobufJSON {
    productCategoryId?: string;
    productCategoryName?: string;
  }
}

/**
 * Message implementation for shop.GetYahooProductSpecRequest
 */
export class GetYahooProductSpecRequest implements GrpcMessage {
  static id = 'shop.GetYahooProductSpecRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetYahooProductSpecRequest();
    GetYahooProductSpecRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetYahooProductSpecRequest) {
    _instance.productCategoryId = _instance.productCategoryId || '0';
    _instance.categoryId = _instance.categoryId || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetYahooProductSpecRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productCategoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.categoryId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.categoryId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetYahooProductSpecRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetYahooProductSpecRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productCategoryId) {
      _writer.writeInt64String(1, _instance.productCategoryId);
    }
    if (_instance.categoryId) {
      _writer.writeMessage(
        2,
        _instance.categoryId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _productCategoryId?: string;
  private _categoryId?: googleProtobuf000.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetYahooProductSpecRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetYahooProductSpecRequest.AsObject>) {
    _value = _value || {};
    this.productCategoryId = _value.productCategoryId;
    this.categoryId = _value.categoryId
      ? new googleProtobuf000.Int64Value(_value.categoryId)
      : undefined;
    GetYahooProductSpecRequest.refineValues(this);
  }
  get productCategoryId(): string | undefined {
    return this._productCategoryId;
  }
  set productCategoryId(value: string | undefined) {
    this._productCategoryId = value;
  }
  get categoryId(): googleProtobuf000.Int64Value | undefined {
    return this._categoryId;
  }
  set categoryId(value: googleProtobuf000.Int64Value | undefined) {
    this._categoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetYahooProductSpecRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetYahooProductSpecRequest.AsObject {
    return {
      productCategoryId: this.productCategoryId,
      categoryId: this.categoryId ? this.categoryId.toObject() : undefined
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
  ): GetYahooProductSpecRequest.AsProtobufJSON {
    return {
      productCategoryId: this.productCategoryId,
      categoryId: this.categoryId
        ? this.categoryId.toProtobufJSON(options)
        : null
    };
  }
}
export module GetYahooProductSpecRequest {
  /**
   * Standard JavaScript object representation for GetYahooProductSpecRequest
   */
  export interface AsObject {
    productCategoryId?: string;
    categoryId?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for GetYahooProductSpecRequest
   */
  export interface AsProtobufJSON {
    productCategoryId?: string;
    categoryId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetYahooProductSpecResponse
 */
export class GetYahooProductSpecResponse implements GrpcMessage {
  static id = 'shop.GetYahooProductSpecResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetYahooProductSpecResponse();
    GetYahooProductSpecResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetYahooProductSpecResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetYahooProductSpecResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new YahooProductSpec();
          _reader.readMessage(
            messageInitializer1,
            YahooProductSpec.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetYahooProductSpecResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetYahooProductSpecResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        YahooProductSpec.serializeBinaryToWriter
      );
    }
  }

  private _data?: YahooProductSpec[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetYahooProductSpecResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetYahooProductSpecResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new YahooProductSpec(m));
    GetYahooProductSpecResponse.refineValues(this);
  }
  get data(): YahooProductSpec[] | undefined {
    return this._data;
  }
  set data(value: YahooProductSpec[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetYahooProductSpecResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetYahooProductSpecResponse.AsObject {
    return {
      data: (this.data || []).map(m => m.toObject())
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
  ): GetYahooProductSpecResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetYahooProductSpecResponse {
  /**
   * Standard JavaScript object representation for GetYahooProductSpecResponse
   */
  export interface AsObject {
    data?: YahooProductSpec.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetYahooProductSpecResponse
   */
  export interface AsProtobufJSON {
    data?: YahooProductSpec.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.YahooProductSpec
 */
export class YahooProductSpec implements GrpcMessage {
  static id = 'shop.YahooProductSpec';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new YahooProductSpec();
    YahooProductSpec.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: YahooProductSpec) {
    _instance.specId = _instance.specId || '0';
    _instance.specName = _instance.specName || '';
    _instance.selectionType = _instance.selectionType || '0';
    _instance.values = _instance.values || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: YahooProductSpec,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.specId = _reader.readInt64String();
          break;
        case 2:
          _instance.specName = _reader.readString();
          break;
        case 3:
          _instance.selectionType = _reader.readInt64String();
          break;
        case 4:
          const messageInitializer4 = new YahooProductSpecValue();
          _reader.readMessage(
            messageInitializer4,
            YahooProductSpecValue.deserializeBinaryFromReader
          );
          (_instance.values = _instance.values || []).push(messageInitializer4);
          break;
        default:
          _reader.skipField();
      }
    }

    YahooProductSpec.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: YahooProductSpec,
    _writer: BinaryWriter
  ) {
    if (_instance.specId) {
      _writer.writeInt64String(1, _instance.specId);
    }
    if (_instance.specName) {
      _writer.writeString(2, _instance.specName);
    }
    if (_instance.selectionType) {
      _writer.writeInt64String(3, _instance.selectionType);
    }
    if (_instance.values && _instance.values.length) {
      _writer.writeRepeatedMessage(
        4,
        _instance.values as any,
        YahooProductSpecValue.serializeBinaryToWriter
      );
    }
  }

  private _specId?: string;
  private _specName?: string;
  private _selectionType?: string;
  private _values?: YahooProductSpecValue[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of YahooProductSpec to deeply clone from
   */
  constructor(_value?: RecursivePartial<YahooProductSpec.AsObject>) {
    _value = _value || {};
    this.specId = _value.specId;
    this.specName = _value.specName;
    this.selectionType = _value.selectionType;
    this.values = (_value.values || []).map(m => new YahooProductSpecValue(m));
    YahooProductSpec.refineValues(this);
  }
  get specId(): string | undefined {
    return this._specId;
  }
  set specId(value: string | undefined) {
    this._specId = value;
  }
  get specName(): string | undefined {
    return this._specName;
  }
  set specName(value: string | undefined) {
    this._specName = value;
  }
  get selectionType(): string | undefined {
    return this._selectionType;
  }
  set selectionType(value: string | undefined) {
    this._selectionType = value;
  }
  get values(): YahooProductSpecValue[] | undefined {
    return this._values;
  }
  set values(value: YahooProductSpecValue[] | undefined) {
    this._values = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    YahooProductSpec.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): YahooProductSpec.AsObject {
    return {
      specId: this.specId,
      specName: this.specName,
      selectionType: this.selectionType,
      values: (this.values || []).map(m => m.toObject())
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
  ): YahooProductSpec.AsProtobufJSON {
    return {
      specId: this.specId,
      specName: this.specName,
      selectionType: this.selectionType,
      values: (this.values || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module YahooProductSpec {
  /**
   * Standard JavaScript object representation for YahooProductSpec
   */
  export interface AsObject {
    specId?: string;
    specName?: string;
    selectionType?: string;
    values?: YahooProductSpecValue.AsObject[];
  }

  /**
   * Protobuf JSON representation for YahooProductSpec
   */
  export interface AsProtobufJSON {
    specId?: string;
    specName?: string;
    selectionType?: string;
    values?: YahooProductSpecValue.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.YahooProductSpecValue
 */
export class YahooProductSpecValue implements GrpcMessage {
  static id = 'shop.YahooProductSpecValue';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new YahooProductSpecValue();
    YahooProductSpecValue.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: YahooProductSpecValue) {
    _instance.specValueId = _instance.specValueId || '0';
    _instance.specValueName = _instance.specValueName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: YahooProductSpecValue,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.specValueId = _reader.readInt64String();
          break;
        case 2:
          _instance.specValueName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    YahooProductSpecValue.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: YahooProductSpecValue,
    _writer: BinaryWriter
  ) {
    if (_instance.specValueId) {
      _writer.writeInt64String(1, _instance.specValueId);
    }
    if (_instance.specValueName) {
      _writer.writeString(2, _instance.specValueName);
    }
  }

  private _specValueId?: string;
  private _specValueName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of YahooProductSpecValue to deeply clone from
   */
  constructor(_value?: RecursivePartial<YahooProductSpecValue.AsObject>) {
    _value = _value || {};
    this.specValueId = _value.specValueId;
    this.specValueName = _value.specValueName;
    YahooProductSpecValue.refineValues(this);
  }
  get specValueId(): string | undefined {
    return this._specValueId;
  }
  set specValueId(value: string | undefined) {
    this._specValueId = value;
  }
  get specValueName(): string | undefined {
    return this._specValueName;
  }
  set specValueName(value: string | undefined) {
    this._specValueName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    YahooProductSpecValue.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): YahooProductSpecValue.AsObject {
    return {
      specValueId: this.specValueId,
      specValueName: this.specValueName
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
  ): YahooProductSpecValue.AsProtobufJSON {
    return {
      specValueId: this.specValueId,
      specValueName: this.specValueName
    };
  }
}
export module YahooProductSpecValue {
  /**
   * Standard JavaScript object representation for YahooProductSpecValue
   */
  export interface AsObject {
    specValueId?: string;
    specValueName?: string;
  }

  /**
   * Protobuf JSON representation for YahooProductSpecValue
   */
  export interface AsProtobufJSON {
    specValueId?: string;
    specValueName?: string;
  }
}

/**
 * Message implementation for shop.GetYahooProductRequest
 */
export class GetYahooProductRequest implements GrpcMessage {
  static id = 'shop.GetYahooProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetYahooProductRequest();
    GetYahooProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetYahooProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetYahooProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetYahooProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetYahooProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetYahooProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetYahooProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    GetYahooProductRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetYahooProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetYahooProductRequest.AsObject {
    return {
      productItemId: this.productItemId
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
  ): GetYahooProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module GetYahooProductRequest {
  /**
   * Standard JavaScript object representation for GetYahooProductRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for GetYahooProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.GetYahooProductResponse
 */
export class GetYahooProductResponse implements GrpcMessage {
  static id = 'shop.GetYahooProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetYahooProductResponse();
    GetYahooProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetYahooProductResponse) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.path = _instance.path || '';
    _instance.openStatus = _instance.openStatus || '0';
    _instance.productItemName = _instance.productItemName || '';
    _instance.productCategoryId = _instance.productCategoryId || '';
    _instance.productCategoryName = _instance.productCategoryName || '';
    _instance.price = _instance.price || '0';
    _instance.salePrice = _instance.salePrice || '0';
    _instance.specValue = _instance.specValue || [];
    _instance.catchCopy = _instance.catchCopy || '';
    _instance.productDetail = _instance.productDetail || '';
    _instance.yahooRakutenCategoryData =
      _instance.yahooRakutenCategoryData || [];
    _instance.rakutenEventData = _instance.rakutenEventData || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetYahooProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.productId = _reader.readString();
          break;
        case 3:
          _instance.path = _reader.readString();
          break;
        case 4:
          _instance.openStatus = _reader.readInt64String();
          break;
        case 5:
          _instance.productItemName = _reader.readString();
          break;
        case 6:
          _instance.productCategoryId = _reader.readString();
          break;
        case 7:
          _instance.productCategoryName = _reader.readString();
          break;
        case 8:
          _instance.price = _reader.readInt64String();
          break;
        case 9:
          _instance.salePrice = _reader.readInt64String();
          break;
        case 10:
          const messageInitializer10 = new YahooProductSpecValue();
          _reader.readMessage(
            messageInitializer10,
            YahooProductSpecValue.deserializeBinaryFromReader
          );
          (_instance.specValue = _instance.specValue || []).push(
            messageInitializer10
          );
          break;
        case 11:
          _instance.catchCopy = _reader.readString();
          break;
        case 12:
          _instance.productDetail = _reader.readString();
          break;
        case 13:
          const messageInitializer13 = new YahooRakutenCategoryData();
          _reader.readMessage(
            messageInitializer13,
            YahooRakutenCategoryData.deserializeBinaryFromReader
          );
          (_instance.yahooRakutenCategoryData =
            _instance.yahooRakutenCategoryData || []).push(
            messageInitializer13
          );
          break;
        case 14:
          const messageInitializer14 = new YahooRakutenEventData();
          _reader.readMessage(
            messageInitializer14,
            YahooRakutenEventData.deserializeBinaryFromReader
          );
          (_instance.rakutenEventData = _instance.rakutenEventData || []).push(
            messageInitializer14
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetYahooProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetYahooProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.path) {
      _writer.writeString(3, _instance.path);
    }
    if (_instance.openStatus) {
      _writer.writeInt64String(4, _instance.openStatus);
    }
    if (_instance.productItemName) {
      _writer.writeString(5, _instance.productItemName);
    }
    if (_instance.productCategoryId) {
      _writer.writeString(6, _instance.productCategoryId);
    }
    if (_instance.productCategoryName) {
      _writer.writeString(7, _instance.productCategoryName);
    }
    if (_instance.price) {
      _writer.writeInt64String(8, _instance.price);
    }
    if (_instance.salePrice) {
      _writer.writeInt64String(9, _instance.salePrice);
    }
    if (_instance.specValue && _instance.specValue.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.specValue as any,
        YahooProductSpecValue.serializeBinaryToWriter
      );
    }
    if (_instance.catchCopy) {
      _writer.writeString(11, _instance.catchCopy);
    }
    if (_instance.productDetail) {
      _writer.writeString(12, _instance.productDetail);
    }
    if (
      _instance.yahooRakutenCategoryData &&
      _instance.yahooRakutenCategoryData.length
    ) {
      _writer.writeRepeatedMessage(
        13,
        _instance.yahooRakutenCategoryData as any,
        YahooRakutenCategoryData.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventData && _instance.rakutenEventData.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.rakutenEventData as any,
        YahooRakutenEventData.serializeBinaryToWriter
      );
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _path?: string;
  private _openStatus?: string;
  private _productItemName?: string;
  private _productCategoryId?: string;
  private _productCategoryName?: string;
  private _price?: string;
  private _salePrice?: string;
  private _specValue?: YahooProductSpecValue[];
  private _catchCopy?: string;
  private _productDetail?: string;
  private _yahooRakutenCategoryData?: YahooRakutenCategoryData[];
  private _rakutenEventData?: YahooRakutenEventData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetYahooProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetYahooProductResponse.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.path = _value.path;
    this.openStatus = _value.openStatus;
    this.productItemName = _value.productItemName;
    this.productCategoryId = _value.productCategoryId;
    this.productCategoryName = _value.productCategoryName;
    this.price = _value.price;
    this.salePrice = _value.salePrice;
    this.specValue = (_value.specValue || []).map(
      m => new YahooProductSpecValue(m)
    );
    this.catchCopy = _value.catchCopy;
    this.productDetail = _value.productDetail;
    this.yahooRakutenCategoryData = (_value.yahooRakutenCategoryData || []).map(
      m => new YahooRakutenCategoryData(m)
    );
    this.rakutenEventData = (_value.rakutenEventData || []).map(
      m => new YahooRakutenEventData(m)
    );
    GetYahooProductResponse.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get productId(): string | undefined {
    return this._productId;
  }
  set productId(value: string | undefined) {
    this._productId = value;
  }
  get path(): string | undefined {
    return this._path;
  }
  set path(value: string | undefined) {
    this._path = value;
  }
  get openStatus(): string | undefined {
    return this._openStatus;
  }
  set openStatus(value: string | undefined) {
    this._openStatus = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get productCategoryId(): string | undefined {
    return this._productCategoryId;
  }
  set productCategoryId(value: string | undefined) {
    this._productCategoryId = value;
  }
  get productCategoryName(): string | undefined {
    return this._productCategoryName;
  }
  set productCategoryName(value: string | undefined) {
    this._productCategoryName = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get salePrice(): string | undefined {
    return this._salePrice;
  }
  set salePrice(value: string | undefined) {
    this._salePrice = value;
  }
  get specValue(): YahooProductSpecValue[] | undefined {
    return this._specValue;
  }
  set specValue(value: YahooProductSpecValue[] | undefined) {
    this._specValue = value;
  }
  get catchCopy(): string | undefined {
    return this._catchCopy;
  }
  set catchCopy(value: string | undefined) {
    this._catchCopy = value;
  }
  get productDetail(): string | undefined {
    return this._productDetail;
  }
  set productDetail(value: string | undefined) {
    this._productDetail = value;
  }
  get yahooRakutenCategoryData(): YahooRakutenCategoryData[] | undefined {
    return this._yahooRakutenCategoryData;
  }
  set yahooRakutenCategoryData(value: YahooRakutenCategoryData[] | undefined) {
    this._yahooRakutenCategoryData = value;
  }
  get rakutenEventData(): YahooRakutenEventData[] | undefined {
    return this._rakutenEventData;
  }
  set rakutenEventData(value: YahooRakutenEventData[] | undefined) {
    this._rakutenEventData = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetYahooProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetYahooProductResponse.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      path: this.path,
      openStatus: this.openStatus,
      productItemName: this.productItemName,
      productCategoryId: this.productCategoryId,
      productCategoryName: this.productCategoryName,
      price: this.price,
      salePrice: this.salePrice,
      specValue: (this.specValue || []).map(m => m.toObject()),
      catchCopy: this.catchCopy,
      productDetail: this.productDetail,
      yahooRakutenCategoryData: (this.yahooRakutenCategoryData || []).map(m =>
        m.toObject()
      ),
      rakutenEventData: (this.rakutenEventData || []).map(m => m.toObject())
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
  ): GetYahooProductResponse.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      path: this.path,
      openStatus: this.openStatus,
      productItemName: this.productItemName,
      productCategoryId: this.productCategoryId,
      productCategoryName: this.productCategoryName,
      price: this.price,
      salePrice: this.salePrice,
      specValue: (this.specValue || []).map(m => m.toProtobufJSON(options)),
      catchCopy: this.catchCopy,
      productDetail: this.productDetail,
      yahooRakutenCategoryData: (this.yahooRakutenCategoryData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      rakutenEventData: (this.rakutenEventData || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module GetYahooProductResponse {
  /**
   * Standard JavaScript object representation for GetYahooProductResponse
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    path?: string;
    openStatus?: string;
    productItemName?: string;
    productCategoryId?: string;
    productCategoryName?: string;
    price?: string;
    salePrice?: string;
    specValue?: YahooProductSpecValue.AsObject[];
    catchCopy?: string;
    productDetail?: string;
    yahooRakutenCategoryData?: YahooRakutenCategoryData.AsObject[];
    rakutenEventData?: YahooRakutenEventData.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetYahooProductResponse
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    path?: string;
    openStatus?: string;
    productItemName?: string;
    productCategoryId?: string;
    productCategoryName?: string;
    price?: string;
    salePrice?: string;
    specValue?: YahooProductSpecValue.AsProtobufJSON[] | null;
    catchCopy?: string;
    productDetail?: string;
    yahooRakutenCategoryData?: YahooRakutenCategoryData.AsProtobufJSON[] | null;
    rakutenEventData?: YahooRakutenEventData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.YahooRakutenEventData
 */
export class YahooRakutenEventData implements GrpcMessage {
  static id = 'shop.YahooRakutenEventData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new YahooRakutenEventData();
    YahooRakutenEventData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: YahooRakutenEventData) {
    _instance.eventProductItemId = _instance.eventProductItemId || '';
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.productItemId = _instance.productItemId || '0';
    _instance.createdAt = _instance.createdAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: YahooRakutenEventData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.eventProductItemId = _reader.readString();
          break;
        case 2:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 3:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 4:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    YahooRakutenEventData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: YahooRakutenEventData,
    _writer: BinaryWriter
  ) {
    if (_instance.eventProductItemId) {
      _writer.writeString(1, _instance.eventProductItemId);
    }
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(2, _instance.rakutenEventId);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(3, _instance.productItemId);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        4,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _eventProductItemId?: string;
  private _rakutenEventId?: string;
  private _productItemId?: string;
  private _createdAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of YahooRakutenEventData to deeply clone from
   */
  constructor(_value?: RecursivePartial<YahooRakutenEventData.AsObject>) {
    _value = _value || {};
    this.eventProductItemId = _value.eventProductItemId;
    this.rakutenEventId = _value.rakutenEventId;
    this.productItemId = _value.productItemId;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    YahooRakutenEventData.refineValues(this);
  }
  get eventProductItemId(): string | undefined {
    return this._eventProductItemId;
  }
  set eventProductItemId(value: string | undefined) {
    this._eventProductItemId = value;
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    YahooRakutenEventData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): YahooRakutenEventData.AsObject {
    return {
      eventProductItemId: this.eventProductItemId,
      rakutenEventId: this.rakutenEventId,
      productItemId: this.productItemId,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined
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
  ): YahooRakutenEventData.AsProtobufJSON {
    return {
      eventProductItemId: this.eventProductItemId,
      rakutenEventId: this.rakutenEventId,
      productItemId: this.productItemId,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module YahooRakutenEventData {
  /**
   * Standard JavaScript object representation for YahooRakutenEventData
   */
  export interface AsObject {
    eventProductItemId?: string;
    rakutenEventId?: string;
    productItemId?: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for YahooRakutenEventData
   */
  export interface AsProtobufJSON {
    eventProductItemId?: string;
    rakutenEventId?: string;
    productItemId?: string;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.UpdateYahooProductRequest
 */
export class UpdateYahooProductRequest implements GrpcMessage {
  static id = 'shop.UpdateYahooProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateYahooProductRequest();
    UpdateYahooProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateYahooProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.openStatus = _instance.openStatus || '0';
    _instance.productItemName = _instance.productItemName || '';
    _instance.price = _instance.price || '0';
    _instance.salePrice = _instance.salePrice || '0';
    _instance.q = _instance.q || [];
    _instance.catchCopy = _instance.catchCopy || '';
    _instance.productDetail = _instance.productDetail || '';
    _instance.productCategoryId = _instance.productCategoryId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateYahooProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.openStatus = _reader.readInt64String();
          break;
        case 3:
          _instance.productItemName = _reader.readString();
          break;
        case 4:
          _instance.price = _reader.readInt64String();
          break;
        case 5:
          _instance.salePrice = _reader.readInt64String();
          break;
        case 6:
          const messageInitializer6 = new YahooProductSpecValue();
          _reader.readMessage(
            messageInitializer6,
            YahooProductSpecValue.deserializeBinaryFromReader
          );
          (_instance.q = _instance.q || []).push(messageInitializer6);
          break;
        case 7:
          _instance.catchCopy = _reader.readString();
          break;
        case 8:
          _instance.productDetail = _reader.readString();
          break;
        case 9:
          _instance.productCategoryId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateYahooProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateYahooProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.openStatus) {
      _writer.writeInt64String(2, _instance.openStatus);
    }
    if (_instance.productItemName) {
      _writer.writeString(3, _instance.productItemName);
    }
    if (_instance.price) {
      _writer.writeInt64String(4, _instance.price);
    }
    if (_instance.salePrice) {
      _writer.writeInt64String(5, _instance.salePrice);
    }
    if (_instance.q && _instance.q.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.q as any,
        YahooProductSpecValue.serializeBinaryToWriter
      );
    }
    if (_instance.catchCopy) {
      _writer.writeString(7, _instance.catchCopy);
    }
    if (_instance.productDetail) {
      _writer.writeString(8, _instance.productDetail);
    }
    if (_instance.productCategoryId) {
      _writer.writeString(9, _instance.productCategoryId);
    }
  }

  private _productItemId?: string;
  private _openStatus?: string;
  private _productItemName?: string;
  private _price?: string;
  private _salePrice?: string;
  private _q?: YahooProductSpecValue[];
  private _catchCopy?: string;
  private _productDetail?: string;
  private _productCategoryId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateYahooProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateYahooProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.openStatus = _value.openStatus;
    this.productItemName = _value.productItemName;
    this.price = _value.price;
    this.salePrice = _value.salePrice;
    this.q = (_value.q || []).map(m => new YahooProductSpecValue(m));
    this.catchCopy = _value.catchCopy;
    this.productDetail = _value.productDetail;
    this.productCategoryId = _value.productCategoryId;
    UpdateYahooProductRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get openStatus(): string | undefined {
    return this._openStatus;
  }
  set openStatus(value: string | undefined) {
    this._openStatus = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get salePrice(): string | undefined {
    return this._salePrice;
  }
  set salePrice(value: string | undefined) {
    this._salePrice = value;
  }
  get q(): YahooProductSpecValue[] | undefined {
    return this._q;
  }
  set q(value: YahooProductSpecValue[] | undefined) {
    this._q = value;
  }
  get catchCopy(): string | undefined {
    return this._catchCopy;
  }
  set catchCopy(value: string | undefined) {
    this._catchCopy = value;
  }
  get productDetail(): string | undefined {
    return this._productDetail;
  }
  set productDetail(value: string | undefined) {
    this._productDetail = value;
  }
  get productCategoryId(): string | undefined {
    return this._productCategoryId;
  }
  set productCategoryId(value: string | undefined) {
    this._productCategoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateYahooProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateYahooProductRequest.AsObject {
    return {
      productItemId: this.productItemId,
      openStatus: this.openStatus,
      productItemName: this.productItemName,
      price: this.price,
      salePrice: this.salePrice,
      q: (this.q || []).map(m => m.toObject()),
      catchCopy: this.catchCopy,
      productDetail: this.productDetail,
      productCategoryId: this.productCategoryId
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
  ): UpdateYahooProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      openStatus: this.openStatus,
      productItemName: this.productItemName,
      price: this.price,
      salePrice: this.salePrice,
      q: (this.q || []).map(m => m.toProtobufJSON(options)),
      catchCopy: this.catchCopy,
      productDetail: this.productDetail,
      productCategoryId: this.productCategoryId
    };
  }
}
export module UpdateYahooProductRequest {
  /**
   * Standard JavaScript object representation for UpdateYahooProductRequest
   */
  export interface AsObject {
    productItemId?: string;
    openStatus?: string;
    productItemName?: string;
    price?: string;
    salePrice?: string;
    q?: YahooProductSpecValue.AsObject[];
    catchCopy?: string;
    productDetail?: string;
    productCategoryId?: string;
  }

  /**
   * Protobuf JSON representation for UpdateYahooProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    openStatus?: string;
    productItemName?: string;
    price?: string;
    salePrice?: string;
    q?: YahooProductSpecValue.AsProtobufJSON[] | null;
    catchCopy?: string;
    productDetail?: string;
    productCategoryId?: string;
  }
}

/**
 * Message implementation for shop.ApplayYahooProductRequest
 */
export class ApplayYahooProductRequest implements GrpcMessage {
  static id = 'shop.ApplayYahooProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ApplayYahooProductRequest();
    ApplayYahooProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ApplayYahooProductRequest) {
    _instance.itemId = _instance.itemId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ApplayYahooProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.itemId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ApplayYahooProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ApplayYahooProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.itemId) {
      _writer.writeString(1, _instance.itemId);
    }
  }

  private _itemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ApplayYahooProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ApplayYahooProductRequest.AsObject>) {
    _value = _value || {};
    this.itemId = _value.itemId;
    ApplayYahooProductRequest.refineValues(this);
  }
  get itemId(): string | undefined {
    return this._itemId;
  }
  set itemId(value: string | undefined) {
    this._itemId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ApplayYahooProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ApplayYahooProductRequest.AsObject {
    return {
      itemId: this.itemId
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
  ): ApplayYahooProductRequest.AsProtobufJSON {
    return {
      itemId: this.itemId
    };
  }
}
export module ApplayYahooProductRequest {
  /**
   * Standard JavaScript object representation for ApplayYahooProductRequest
   */
  export interface AsObject {
    itemId?: string;
  }

  /**
   * Protobuf JSON representation for ApplayYahooProductRequest
   */
  export interface AsProtobufJSON {
    itemId?: string;
  }
}

/**
 * Message implementation for shop.YahooRakutenCategoryData
 */
export class YahooRakutenCategoryData implements GrpcMessage {
  static id = 'shop.YahooRakutenCategoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new YahooRakutenCategoryData();
    YahooRakutenCategoryData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: YahooRakutenCategoryData) {
    _instance.rakutenShopCategoryId = _instance.rakutenShopCategoryId || '0';
    _instance.shopCategoryName = _instance.shopCategoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: YahooRakutenCategoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenShopCategoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.shopCategoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    YahooRakutenCategoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: YahooRakutenCategoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryId) {
      _writer.writeInt64String(1, _instance.rakutenShopCategoryId);
    }
    if (_instance.shopCategoryName) {
      _writer.writeString(2, _instance.shopCategoryName);
    }
  }

  private _rakutenShopCategoryId?: string;
  private _shopCategoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of YahooRakutenCategoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<YahooRakutenCategoryData.AsObject>) {
    _value = _value || {};
    this.rakutenShopCategoryId = _value.rakutenShopCategoryId;
    this.shopCategoryName = _value.shopCategoryName;
    YahooRakutenCategoryData.refineValues(this);
  }
  get rakutenShopCategoryId(): string | undefined {
    return this._rakutenShopCategoryId;
  }
  set rakutenShopCategoryId(value: string | undefined) {
    this._rakutenShopCategoryId = value;
  }
  get shopCategoryName(): string | undefined {
    return this._shopCategoryName;
  }
  set shopCategoryName(value: string | undefined) {
    this._shopCategoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    YahooRakutenCategoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): YahooRakutenCategoryData.AsObject {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName
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
  ): YahooRakutenCategoryData.AsProtobufJSON {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName
    };
  }
}
export module YahooRakutenCategoryData {
  /**
   * Standard JavaScript object representation for YahooRakutenCategoryData
   */
  export interface AsObject {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
  }

  /**
   * Protobuf JSON representation for YahooRakutenCategoryData
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
  }
}
