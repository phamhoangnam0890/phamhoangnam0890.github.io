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
 * Message implementation for shop.ListRakutenShopCategoryResponse
 */
export class ListRakutenShopCategoryResponse implements GrpcMessage {
  static id = 'shop.ListRakutenShopCategoryResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRakutenShopCategoryResponse();
    ListRakutenShopCategoryResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRakutenShopCategoryResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRakutenShopCategoryResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenShopCategory();
          _reader.readMessage(
            messageInitializer1,
            RakutenShopCategory.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListRakutenShopCategoryResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRakutenShopCategoryResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenShopCategory.serializeBinaryToWriter
      );
    }
  }

  private _data?: RakutenShopCategory[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRakutenShopCategoryResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRakutenShopCategoryResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenShopCategory(m));
    ListRakutenShopCategoryResponse.refineValues(this);
  }
  get data(): RakutenShopCategory[] | undefined {
    return this._data;
  }
  set data(value: RakutenShopCategory[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRakutenShopCategoryResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRakutenShopCategoryResponse.AsObject {
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
  ): ListRakutenShopCategoryResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListRakutenShopCategoryResponse {
  /**
   * Standard JavaScript object representation for ListRakutenShopCategoryResponse
   */
  export interface AsObject {
    data?: RakutenShopCategory.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListRakutenShopCategoryResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenShopCategory.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.RakutenShopCategory
 */
export class RakutenShopCategory implements GrpcMessage {
  static id = 'shop.RakutenShopCategory';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenShopCategory();
    RakutenShopCategory.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenShopCategory) {
    _instance.rakutenShopCategoryId = _instance.rakutenShopCategoryId || '0';
    _instance.shopCategoryName = _instance.shopCategoryName || '';
    _instance.entryNum = _instance.entryNum || '0';
    _instance.reflectionAt = _instance.reflectionAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenShopCategory,
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
        case 3:
          _instance.entryNum = _reader.readInt64String();
          break;
        case 4:
          _instance.reflectionAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.reflectionAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenShopCategory.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenShopCategory,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryId) {
      _writer.writeInt64String(1, _instance.rakutenShopCategoryId);
    }
    if (_instance.shopCategoryName) {
      _writer.writeString(2, _instance.shopCategoryName);
    }
    if (_instance.entryNum) {
      _writer.writeInt64String(3, _instance.entryNum);
    }
    if (_instance.reflectionAt) {
      _writer.writeMessage(
        4,
        _instance.reflectionAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _rakutenShopCategoryId?: string;
  private _shopCategoryName?: string;
  private _entryNum?: string;
  private _reflectionAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenShopCategory to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenShopCategory.AsObject>) {
    _value = _value || {};
    this.rakutenShopCategoryId = _value.rakutenShopCategoryId;
    this.shopCategoryName = _value.shopCategoryName;
    this.entryNum = _value.entryNum;
    this.reflectionAt = _value.reflectionAt
      ? new googleProtobuf002.Timestamp(_value.reflectionAt)
      : undefined;
    RakutenShopCategory.refineValues(this);
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
  get entryNum(): string | undefined {
    return this._entryNum;
  }
  set entryNum(value: string | undefined) {
    this._entryNum = value;
  }
  get reflectionAt(): googleProtobuf002.Timestamp | undefined {
    return this._reflectionAt;
  }
  set reflectionAt(value: googleProtobuf002.Timestamp | undefined) {
    this._reflectionAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenShopCategory.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenShopCategory.AsObject {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName,
      entryNum: this.entryNum,
      reflectionAt: this.reflectionAt ? this.reflectionAt.toObject() : undefined
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
  ): RakutenShopCategory.AsProtobufJSON {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName,
      entryNum: this.entryNum,
      reflectionAt: this.reflectionAt
        ? this.reflectionAt.toProtobufJSON(options)
        : null
    };
  }
}
export module RakutenShopCategory {
  /**
   * Standard JavaScript object representation for RakutenShopCategory
   */
  export interface AsObject {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
    entryNum?: string;
    reflectionAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenShopCategory
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
    entryNum?: string;
    reflectionAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetRakutenShopCategoryRequest
 */
export class GetRakutenShopCategoryRequest implements GrpcMessage {
  static id = 'shop.GetRakutenShopCategoryRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRakutenShopCategoryRequest();
    GetRakutenShopCategoryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRakutenShopCategoryRequest) {
    _instance.rakutenShopCategoryId = _instance.rakutenShopCategoryId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRakutenShopCategoryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenShopCategoryId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRakutenShopCategoryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRakutenShopCategoryRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryId) {
      _writer.writeInt64String(1, _instance.rakutenShopCategoryId);
    }
  }

  private _rakutenShopCategoryId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRakutenShopCategoryRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRakutenShopCategoryRequest.AsObject>
  ) {
    _value = _value || {};
    this.rakutenShopCategoryId = _value.rakutenShopCategoryId;
    GetRakutenShopCategoryRequest.refineValues(this);
  }
  get rakutenShopCategoryId(): string | undefined {
    return this._rakutenShopCategoryId;
  }
  set rakutenShopCategoryId(value: string | undefined) {
    this._rakutenShopCategoryId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRakutenShopCategoryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRakutenShopCategoryRequest.AsObject {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId
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
  ): GetRakutenShopCategoryRequest.AsProtobufJSON {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId
    };
  }
}
export module GetRakutenShopCategoryRequest {
  /**
   * Standard JavaScript object representation for GetRakutenShopCategoryRequest
   */
  export interface AsObject {
    rakutenShopCategoryId?: string;
  }

  /**
   * Protobuf JSON representation for GetRakutenShopCategoryRequest
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryId?: string;
  }
}

/**
 * Message implementation for shop.GetRakutenShopCategoryResponse
 */
export class GetRakutenShopCategoryResponse implements GrpcMessage {
  static id = 'shop.GetRakutenShopCategoryResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRakutenShopCategoryResponse();
    GetRakutenShopCategoryResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRakutenShopCategoryResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRakutenShopCategoryResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenShopCategoryItem();
          _reader.readMessage(
            messageInitializer1,
            RakutenShopCategoryItem.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetRakutenShopCategoryResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRakutenShopCategoryResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenShopCategoryItem.serializeBinaryToWriter
      );
    }
  }

  private _data?: RakutenShopCategoryItem[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRakutenShopCategoryResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetRakutenShopCategoryResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenShopCategoryItem(m));
    GetRakutenShopCategoryResponse.refineValues(this);
  }
  get data(): RakutenShopCategoryItem[] | undefined {
    return this._data;
  }
  set data(value: RakutenShopCategoryItem[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRakutenShopCategoryResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRakutenShopCategoryResponse.AsObject {
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
  ): GetRakutenShopCategoryResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetRakutenShopCategoryResponse {
  /**
   * Standard JavaScript object representation for GetRakutenShopCategoryResponse
   */
  export interface AsObject {
    data?: RakutenShopCategoryItem.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetRakutenShopCategoryResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenShopCategoryItem.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.RakutenShopCategoryItem
 */
export class RakutenShopCategoryItem implements GrpcMessage {
  static id = 'shop.RakutenShopCategoryItem';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenShopCategoryItem();
    RakutenShopCategoryItem.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenShopCategoryItem) {
    _instance.rakutenShopCategoryProductId =
      _instance.rakutenShopCategoryProductId || '';
    _instance.productItemId = _instance.productItemId || '0';
    _instance.pictureUrl = _instance.pictureUrl || '';
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenShopCategoryItem,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenShopCategoryProductId = _reader.readString();
          break;
        case 2:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 3:
          _instance.pictureUrl = _reader.readString();
          break;
        case 4:
          _instance.productId = _reader.readString();
          break;
        case 5:
          _instance.productItemName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenShopCategoryItem.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenShopCategoryItem,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryProductId) {
      _writer.writeString(1, _instance.rakutenShopCategoryProductId);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(2, _instance.productItemId);
    }
    if (_instance.pictureUrl) {
      _writer.writeString(3, _instance.pictureUrl);
    }
    if (_instance.productId) {
      _writer.writeString(4, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(5, _instance.productItemName);
    }
  }

  private _rakutenShopCategoryProductId?: string;
  private _productItemId?: string;
  private _pictureUrl?: string;
  private _productId?: string;
  private _productItemName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenShopCategoryItem to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenShopCategoryItem.AsObject>) {
    _value = _value || {};
    this.rakutenShopCategoryProductId = _value.rakutenShopCategoryProductId;
    this.productItemId = _value.productItemId;
    this.pictureUrl = _value.pictureUrl;
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    RakutenShopCategoryItem.refineValues(this);
  }
  get rakutenShopCategoryProductId(): string | undefined {
    return this._rakutenShopCategoryProductId;
  }
  set rakutenShopCategoryProductId(value: string | undefined) {
    this._rakutenShopCategoryProductId = value;
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get pictureUrl(): string | undefined {
    return this._pictureUrl;
  }
  set pictureUrl(value: string | undefined) {
    this._pictureUrl = value;
  }
  get productId(): string | undefined {
    return this._productId;
  }
  set productId(value: string | undefined) {
    this._productId = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenShopCategoryItem.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenShopCategoryItem.AsObject {
    return {
      rakutenShopCategoryProductId: this.rakutenShopCategoryProductId,
      productItemId: this.productItemId,
      pictureUrl: this.pictureUrl,
      productId: this.productId,
      productItemName: this.productItemName
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
  ): RakutenShopCategoryItem.AsProtobufJSON {
    return {
      rakutenShopCategoryProductId: this.rakutenShopCategoryProductId,
      productItemId: this.productItemId,
      pictureUrl: this.pictureUrl,
      productId: this.productId,
      productItemName: this.productItemName
    };
  }
}
export module RakutenShopCategoryItem {
  /**
   * Standard JavaScript object representation for RakutenShopCategoryItem
   */
  export interface AsObject {
    rakutenShopCategoryProductId?: string;
    productItemId?: string;
    pictureUrl?: string;
    productId?: string;
    productItemName?: string;
  }

  /**
   * Protobuf JSON representation for RakutenShopCategoryItem
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryProductId?: string;
    productItemId?: string;
    pictureUrl?: string;
    productId?: string;
    productItemName?: string;
  }
}

/**
 * Message implementation for shop.CreateRakutenShopCategoryRequest
 */
export class CreateRakutenShopCategoryRequest implements GrpcMessage {
  static id = 'shop.CreateRakutenShopCategoryRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateRakutenShopCategoryRequest();
    CreateRakutenShopCategoryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateRakutenShopCategoryRequest) {
    _instance.rakutenShopCategoryId = _instance.rakutenShopCategoryId || '0';
    _instance.productItemId = _instance.productItemId || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateRakutenShopCategoryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenShopCategoryId = _reader.readInt64String();
          break;
        case 2:
          (_instance.productItemId = _instance.productItemId || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateRakutenShopCategoryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateRakutenShopCategoryRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryId) {
      _writer.writeInt64String(1, _instance.rakutenShopCategoryId);
    }
    if (_instance.productItemId && _instance.productItemId.length) {
      _writer.writePackedInt64String(2, _instance.productItemId);
    }
  }

  private _rakutenShopCategoryId?: string;
  private _productItemId?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateRakutenShopCategoryRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateRakutenShopCategoryRequest.AsObject>
  ) {
    _value = _value || {};
    this.rakutenShopCategoryId = _value.rakutenShopCategoryId;
    this.productItemId = (_value.productItemId || []).slice();
    CreateRakutenShopCategoryRequest.refineValues(this);
  }
  get rakutenShopCategoryId(): string | undefined {
    return this._rakutenShopCategoryId;
  }
  set rakutenShopCategoryId(value: string | undefined) {
    this._rakutenShopCategoryId = value;
  }
  get productItemId(): string[] | undefined {
    return this._productItemId;
  }
  set productItemId(value: string[] | undefined) {
    this._productItemId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateRakutenShopCategoryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateRakutenShopCategoryRequest.AsObject {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      productItemId: (this.productItemId || []).slice()
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
  ): CreateRakutenShopCategoryRequest.AsProtobufJSON {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      productItemId: (this.productItemId || []).slice()
    };
  }
}
export module CreateRakutenShopCategoryRequest {
  /**
   * Standard JavaScript object representation for CreateRakutenShopCategoryRequest
   */
  export interface AsObject {
    rakutenShopCategoryId?: string;
    productItemId?: string[];
  }

  /**
   * Protobuf JSON representation for CreateRakutenShopCategoryRequest
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryId?: string;
    productItemId?: string[];
  }
}

/**
 * Message implementation for shop.ListRakutenShopCategoryProductRequest
 */
export class ListRakutenShopCategoryProductRequest implements GrpcMessage {
  static id = 'shop.ListRakutenShopCategoryProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRakutenShopCategoryProductRequest();
    ListRakutenShopCategoryProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRakutenShopCategoryProductRequest) {
    _instance.productId = _instance.productId || undefined;
    _instance.productItemName = _instance.productItemName || undefined;
    _instance.createdAtStart = _instance.createdAtStart || undefined;
    _instance.createdAtFinish = _instance.createdAtFinish || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRakutenShopCategoryProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productId = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productId,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.productItemName = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productItemName,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.createdAtStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAtStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.createdAtFinish = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAtFinish,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListRakutenShopCategoryProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRakutenShopCategoryProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productId) {
      _writer.writeMessage(
        1,
        _instance.productId as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.productItemName) {
      _writer.writeMessage(
        2,
        _instance.productItemName as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.createdAtStart) {
      _writer.writeMessage(
        3,
        _instance.createdAtStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAtFinish) {
      _writer.writeMessage(
        4,
        _instance.createdAtFinish as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _productId?: googleProtobuf000.StringValue;
  private _productItemName?: googleProtobuf000.StringValue;
  private _createdAtStart?: googleProtobuf002.Timestamp;
  private _createdAtFinish?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRakutenShopCategoryProductRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRakutenShopCategoryProductRequest.AsObject>
  ) {
    _value = _value || {};
    this.productId = _value.productId
      ? new googleProtobuf000.StringValue(_value.productId)
      : undefined;
    this.productItemName = _value.productItemName
      ? new googleProtobuf000.StringValue(_value.productItemName)
      : undefined;
    this.createdAtStart = _value.createdAtStart
      ? new googleProtobuf002.Timestamp(_value.createdAtStart)
      : undefined;
    this.createdAtFinish = _value.createdAtFinish
      ? new googleProtobuf002.Timestamp(_value.createdAtFinish)
      : undefined;
    ListRakutenShopCategoryProductRequest.refineValues(this);
  }
  get productId(): googleProtobuf000.StringValue | undefined {
    return this._productId;
  }
  set productId(value: googleProtobuf000.StringValue | undefined) {
    this._productId = value;
  }
  get productItemName(): googleProtobuf000.StringValue | undefined {
    return this._productItemName;
  }
  set productItemName(value: googleProtobuf000.StringValue | undefined) {
    this._productItemName = value;
  }
  get createdAtStart(): googleProtobuf002.Timestamp | undefined {
    return this._createdAtStart;
  }
  set createdAtStart(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAtStart = value;
  }
  get createdAtFinish(): googleProtobuf002.Timestamp | undefined {
    return this._createdAtFinish;
  }
  set createdAtFinish(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAtFinish = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRakutenShopCategoryProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRakutenShopCategoryProductRequest.AsObject {
    return {
      productId: this.productId ? this.productId.toObject() : undefined,
      productItemName: this.productItemName
        ? this.productItemName.toObject()
        : undefined,
      createdAtStart: this.createdAtStart
        ? this.createdAtStart.toObject()
        : undefined,
      createdAtFinish: this.createdAtFinish
        ? this.createdAtFinish.toObject()
        : undefined
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
  ): ListRakutenShopCategoryProductRequest.AsProtobufJSON {
    return {
      productId: this.productId ? this.productId.toProtobufJSON(options) : null,
      productItemName: this.productItemName
        ? this.productItemName.toProtobufJSON(options)
        : null,
      createdAtStart: this.createdAtStart
        ? this.createdAtStart.toProtobufJSON(options)
        : null,
      createdAtFinish: this.createdAtFinish
        ? this.createdAtFinish.toProtobufJSON(options)
        : null
    };
  }
}
export module ListRakutenShopCategoryProductRequest {
  /**
   * Standard JavaScript object representation for ListRakutenShopCategoryProductRequest
   */
  export interface AsObject {
    productId?: googleProtobuf000.StringValue.AsObject;
    productItemName?: googleProtobuf000.StringValue.AsObject;
    createdAtStart?: googleProtobuf002.Timestamp.AsObject;
    createdAtFinish?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ListRakutenShopCategoryProductRequest
   */
  export interface AsProtobufJSON {
    productId?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    productItemName?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    createdAtStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdAtFinish?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ListRakutenShopCategoryProductResponse
 */
export class ListRakutenShopCategoryProductResponse implements GrpcMessage {
  static id = 'shop.ListRakutenShopCategoryProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRakutenShopCategoryProductResponse();
    ListRakutenShopCategoryProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRakutenShopCategoryProductResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRakutenShopCategoryProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenShopCategoryProduct();
          _reader.readMessage(
            messageInitializer1,
            RakutenShopCategoryProduct.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListRakutenShopCategoryProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRakutenShopCategoryProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenShopCategoryProduct.serializeBinaryToWriter
      );
    }
  }

  private _data?: RakutenShopCategoryProduct[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRakutenShopCategoryProductResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRakutenShopCategoryProductResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenShopCategoryProduct(m));
    ListRakutenShopCategoryProductResponse.refineValues(this);
  }
  get data(): RakutenShopCategoryProduct[] | undefined {
    return this._data;
  }
  set data(value: RakutenShopCategoryProduct[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRakutenShopCategoryProductResponse.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRakutenShopCategoryProductResponse.AsObject {
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
  ): ListRakutenShopCategoryProductResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListRakutenShopCategoryProductResponse {
  /**
   * Standard JavaScript object representation for ListRakutenShopCategoryProductResponse
   */
  export interface AsObject {
    data?: RakutenShopCategoryProduct.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListRakutenShopCategoryProductResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenShopCategoryProduct.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.RakutenShopCategoryProduct
 */
export class RakutenShopCategoryProduct implements GrpcMessage {
  static id = 'shop.RakutenShopCategoryProduct';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenShopCategoryProduct();
    RakutenShopCategoryProduct.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenShopCategoryProduct) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
    _instance.productDescription = _instance.productDescription || '';
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.selectFlg = _instance.selectFlg || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenShopCategoryProduct,
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
          _instance.productItemName = _reader.readString();
          break;
        case 4:
          _instance.productDescription = _reader.readString();
          break;
        case 5:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.selectFlg = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenShopCategoryProduct.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenShopCategoryProduct,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(3, _instance.productItemName);
    }
    if (_instance.productDescription) {
      _writer.writeString(4, _instance.productDescription);
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        5,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.selectFlg) {
      _writer.writeBool(6, _instance.selectFlg);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productItemName?: string;
  private _productDescription?: string;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _selectFlg?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenShopCategoryProduct to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenShopCategoryProduct.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    this.productDescription = _value.productDescription;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.selectFlg = _value.selectFlg;
    RakutenShopCategoryProduct.refineValues(this);
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
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get productDescription(): string | undefined {
    return this._productDescription;
  }
  set productDescription(value: string | undefined) {
    this._productDescription = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get selectFlg(): boolean | undefined {
    return this._selectFlg;
  }
  set selectFlg(value: boolean | undefined) {
    this._selectFlg = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenShopCategoryProduct.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenShopCategoryProduct.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productItemName: this.productItemName,
      productDescription: this.productDescription,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      selectFlg: this.selectFlg
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
  ): RakutenShopCategoryProduct.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productItemName: this.productItemName,
      productDescription: this.productDescription,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      selectFlg: this.selectFlg
    };
  }
}
export module RakutenShopCategoryProduct {
  /**
   * Standard JavaScript object representation for RakutenShopCategoryProduct
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    productItemName?: string;
    productDescription?: string;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    selectFlg?: boolean;
  }

  /**
   * Protobuf JSON representation for RakutenShopCategoryProduct
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productItemName?: string;
    productDescription?: string;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    selectFlg?: boolean;
  }
}

/**
 * Message implementation for shop.ApplayRakutenProductCategoryRequest
 */
export class ApplayRakutenProductCategoryRequest implements GrpcMessage {
  static id = 'shop.ApplayRakutenProductCategoryRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ApplayRakutenProductCategoryRequest();
    ApplayRakutenProductCategoryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ApplayRakutenProductCategoryRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ApplayRakutenProductCategoryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ApplayRakutenProductCategoryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ApplayRakutenProductCategoryRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ApplayRakutenProductCategoryRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ApplayRakutenProductCategoryRequest.AsObject>
  ) {
    _value = _value || {};
    ApplayRakutenProductCategoryRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ApplayRakutenProductCategoryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ApplayRakutenProductCategoryRequest.AsObject {
    return {};
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
  ): ApplayRakutenProductCategoryRequest.AsProtobufJSON {
    return {};
  }
}
export module ApplayRakutenProductCategoryRequest {
  /**
   * Standard JavaScript object representation for ApplayRakutenProductCategoryRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ApplayRakutenProductCategoryRequest
   */
  export interface AsProtobufJSON {}
}
