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
 * Message implementation for shop.DeleteAppProductItemRequest
 */
export class DeleteAppProductItemRequest implements GrpcMessage {
  static id = 'shop.DeleteAppProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteAppProductItemRequest();
    DeleteAppProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteAppProductItemRequest) {
    _instance.pictureId = _instance.pictureId || '';
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteAppProductItemRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pictureId = _reader.readString();
          break;
        case 2:
          _instance.productItemId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteAppProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteAppProductItemRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.pictureId) {
      _writer.writeString(1, _instance.pictureId);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(2, _instance.productItemId);
    }
  }

  private _pictureId?: string;
  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteAppProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteAppProductItemRequest.AsObject>) {
    _value = _value || {};
    this.pictureId = _value.pictureId;
    this.productItemId = _value.productItemId;
    DeleteAppProductItemRequest.refineValues(this);
  }
  get pictureId(): string | undefined {
    return this._pictureId;
  }
  set pictureId(value: string | undefined) {
    this._pictureId = value;
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
    DeleteAppProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteAppProductItemRequest.AsObject {
    return {
      pictureId: this.pictureId,
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
  ): DeleteAppProductItemRequest.AsProtobufJSON {
    return {
      pictureId: this.pictureId,
      productItemId: this.productItemId
    };
  }
}
export module DeleteAppProductItemRequest {
  /**
   * Standard JavaScript object representation for DeleteAppProductItemRequest
   */
  export interface AsObject {
    pictureId?: string;
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for DeleteAppProductItemRequest
   */
  export interface AsProtobufJSON {
    pictureId?: string;
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.ListAppProductItemRequest
 */
export class ListAppProductItemRequest implements GrpcMessage {
  static id = 'shop.ListAppProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAppProductItemRequest();
    ListAppProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAppProductItemRequest) {
    _instance.productId = _instance.productId || undefined;
    _instance.sortId = _instance.sortId || undefined;
    _instance.offset = _instance.offset || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAppProductItemRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productId = new googleProtobuf001.StringValue();
          _reader.readMessage(
            _instance.productId,
            googleProtobuf001.StringValue.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.sortId = new googleProtobuf001.Int64Value();
          _reader.readMessage(
            _instance.sortId,
            googleProtobuf001.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.offset = new googleProtobuf001.Int64Value();
          _reader.readMessage(
            _instance.offset,
            googleProtobuf001.Int64Value.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListAppProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAppProductItemRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productId) {
      _writer.writeMessage(
        1,
        _instance.productId as any,
        googleProtobuf001.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.sortId) {
      _writer.writeMessage(
        2,
        _instance.sortId as any,
        googleProtobuf001.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.offset) {
      _writer.writeMessage(
        3,
        _instance.offset as any,
        googleProtobuf001.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _productId?: googleProtobuf001.StringValue;
  private _sortId?: googleProtobuf001.Int64Value;
  private _offset?: googleProtobuf001.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAppProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAppProductItemRequest.AsObject>) {
    _value = _value || {};
    this.productId = _value.productId
      ? new googleProtobuf001.StringValue(_value.productId)
      : undefined;
    this.sortId = _value.sortId
      ? new googleProtobuf001.Int64Value(_value.sortId)
      : undefined;
    this.offset = _value.offset
      ? new googleProtobuf001.Int64Value(_value.offset)
      : undefined;
    ListAppProductItemRequest.refineValues(this);
  }
  get productId(): googleProtobuf001.StringValue | undefined {
    return this._productId;
  }
  set productId(value: googleProtobuf001.StringValue | undefined) {
    this._productId = value;
  }
  get sortId(): googleProtobuf001.Int64Value | undefined {
    return this._sortId;
  }
  set sortId(value: googleProtobuf001.Int64Value | undefined) {
    this._sortId = value;
  }
  get offset(): googleProtobuf001.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf001.Int64Value | undefined) {
    this._offset = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListAppProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAppProductItemRequest.AsObject {
    return {
      productId: this.productId ? this.productId.toObject() : undefined,
      sortId: this.sortId ? this.sortId.toObject() : undefined,
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
  ): ListAppProductItemRequest.AsProtobufJSON {
    return {
      productId: this.productId ? this.productId.toProtobufJSON(options) : null,
      sortId: this.sortId ? this.sortId.toProtobufJSON(options) : null,
      offset: this.offset ? this.offset.toProtobufJSON(options) : null
    };
  }
}
export module ListAppProductItemRequest {
  /**
   * Standard JavaScript object representation for ListAppProductItemRequest
   */
  export interface AsObject {
    productId?: googleProtobuf001.StringValue.AsObject;
    sortId?: googleProtobuf001.Int64Value.AsObject;
    offset?: googleProtobuf001.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for ListAppProductItemRequest
   */
  export interface AsProtobufJSON {
    productId?: googleProtobuf001.StringValue.AsProtobufJSON | null;
    sortId?: googleProtobuf001.Int64Value.AsProtobufJSON | null;
    offset?: googleProtobuf001.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ListAppProductItemResponse
 */
export class ListAppProductItemResponse implements GrpcMessage {
  static id = 'shop.ListAppProductItemResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAppProductItemResponse();
    ListAppProductItemResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAppProductItemResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAppProductItemResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ListAppProductItem();
          _reader.readMessage(
            messageInitializer1,
            ListAppProductItem.deserializeBinaryFromReader
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

    ListAppProductItemResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAppProductItemResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        ListAppProductItem.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: ListAppProductItem[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAppProductItemResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAppProductItemResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new ListAppProductItem(m));
    this.total = _value.total;
    ListAppProductItemResponse.refineValues(this);
  }
  get data(): ListAppProductItem[] | undefined {
    return this._data;
  }
  set data(value: ListAppProductItem[] | undefined) {
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
    ListAppProductItemResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAppProductItemResponse.AsObject {
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
  ): ListAppProductItemResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module ListAppProductItemResponse {
  /**
   * Standard JavaScript object representation for ListAppProductItemResponse
   */
  export interface AsObject {
    data?: ListAppProductItem.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for ListAppProductItemResponse
   */
  export interface AsProtobufJSON {
    data?: ListAppProductItem.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.ListAppProductItem
 */
export class ListAppProductItem implements GrpcMessage {
  static id = 'shop.ListAppProductItem';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListAppProductItem();
    ListAppProductItem.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListAppProductItem) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productName = _instance.productName || '';
    _instance.picture = _instance.picture || [];
    _instance.productId = _instance.productId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListAppProductItem,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.productName = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new GetAppProductPicture();
          _reader.readMessage(
            messageInitializer3,
            GetAppProductPicture.deserializeBinaryFromReader
          );
          (_instance.picture = _instance.picture || []).push(
            messageInitializer3
          );
          break;
        case 4:
          _instance.productId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListAppProductItem.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListAppProductItem,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productName) {
      _writer.writeString(2, _instance.productName);
    }
    if (_instance.picture && _instance.picture.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.picture as any,
        GetAppProductPicture.serializeBinaryToWriter
      );
    }
    if (_instance.productId) {
      _writer.writeString(4, _instance.productId);
    }
  }

  private _productItemId?: string;
  private _productName?: string;
  private _picture?: GetAppProductPicture[];
  private _productId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListAppProductItem to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListAppProductItem.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productName = _value.productName;
    this.picture = (_value.picture || []).map(m => new GetAppProductPicture(m));
    this.productId = _value.productId;
    ListAppProductItem.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get picture(): GetAppProductPicture[] | undefined {
    return this._picture;
  }
  set picture(value: GetAppProductPicture[] | undefined) {
    this._picture = value;
  }
  get productId(): string | undefined {
    return this._productId;
  }
  set productId(value: string | undefined) {
    this._productId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListAppProductItem.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListAppProductItem.AsObject {
    return {
      productItemId: this.productItemId,
      productName: this.productName,
      picture: (this.picture || []).map(m => m.toObject()),
      productId: this.productId
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
  ): ListAppProductItem.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productName: this.productName,
      picture: (this.picture || []).map(m => m.toProtobufJSON(options)),
      productId: this.productId
    };
  }
}
export module ListAppProductItem {
  /**
   * Standard JavaScript object representation for ListAppProductItem
   */
  export interface AsObject {
    productItemId?: string;
    productName?: string;
    picture?: GetAppProductPicture.AsObject[];
    productId?: string;
  }

  /**
   * Protobuf JSON representation for ListAppProductItem
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productName?: string;
    picture?: GetAppProductPicture.AsProtobufJSON[] | null;
    productId?: string;
  }
}

/**
 * Message implementation for shop.GetAppProductItemRequest
 */
export class GetAppProductItemRequest implements GrpcMessage {
  static id = 'shop.GetAppProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAppProductItemRequest();
    GetAppProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAppProductItemRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAppProductItemRequest,
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

    GetAppProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAppProductItemRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAppProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAppProductItemRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    GetAppProductItemRequest.refineValues(this);
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
    GetAppProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAppProductItemRequest.AsObject {
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
  ): GetAppProductItemRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module GetAppProductItemRequest {
  /**
   * Standard JavaScript object representation for GetAppProductItemRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for GetAppProductItemRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.GetAppProductItemResponse
 */
export class GetAppProductItemResponse implements GrpcMessage {
  static id = 'shop.GetAppProductItemResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAppProductItemResponse();
    GetAppProductItemResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAppProductItemResponse) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productName = _instance.productName || '';
    _instance.picture = _instance.picture || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAppProductItemResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.productName = _reader.readString();
          break;
        case 3:
          const messageInitializer3 = new GetAppProductPicture();
          _reader.readMessage(
            messageInitializer3,
            GetAppProductPicture.deserializeBinaryFromReader
          );
          (_instance.picture = _instance.picture || []).push(
            messageInitializer3
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetAppProductItemResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAppProductItemResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productName) {
      _writer.writeString(2, _instance.productName);
    }
    if (_instance.picture && _instance.picture.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.picture as any,
        GetAppProductPicture.serializeBinaryToWriter
      );
    }
  }

  private _productItemId?: string;
  private _productName?: string;
  private _picture?: GetAppProductPicture[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAppProductItemResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAppProductItemResponse.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productName = _value.productName;
    this.picture = (_value.picture || []).map(m => new GetAppProductPicture(m));
    GetAppProductItemResponse.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get picture(): GetAppProductPicture[] | undefined {
    return this._picture;
  }
  set picture(value: GetAppProductPicture[] | undefined) {
    this._picture = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAppProductItemResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAppProductItemResponse.AsObject {
    return {
      productItemId: this.productItemId,
      productName: this.productName,
      picture: (this.picture || []).map(m => m.toObject())
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
  ): GetAppProductItemResponse.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productName: this.productName,
      picture: (this.picture || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetAppProductItemResponse {
  /**
   * Standard JavaScript object representation for GetAppProductItemResponse
   */
  export interface AsObject {
    productItemId?: string;
    productName?: string;
    picture?: GetAppProductPicture.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetAppProductItemResponse
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productName?: string;
    picture?: GetAppProductPicture.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.GetAppProductPicture
 */
export class GetAppProductPicture implements GrpcMessage {
  static id = 'shop.GetAppProductPicture';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAppProductPicture();
    GetAppProductPicture.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAppProductPicture) {
    _instance.pictureId = _instance.pictureId || '';
    _instance.pictureUrl = _instance.pictureUrl || '';
    _instance.pictureNo = _instance.pictureNo || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAppProductPicture,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pictureId = _reader.readString();
          break;
        case 2:
          _instance.pictureUrl = _reader.readString();
          break;
        case 3:
          _instance.pictureNo = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetAppProductPicture.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAppProductPicture,
    _writer: BinaryWriter
  ) {
    if (_instance.pictureId) {
      _writer.writeString(1, _instance.pictureId);
    }
    if (_instance.pictureUrl) {
      _writer.writeString(2, _instance.pictureUrl);
    }
    if (_instance.pictureNo) {
      _writer.writeInt64String(3, _instance.pictureNo);
    }
  }

  private _pictureId?: string;
  private _pictureUrl?: string;
  private _pictureNo?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAppProductPicture to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAppProductPicture.AsObject>) {
    _value = _value || {};
    this.pictureId = _value.pictureId;
    this.pictureUrl = _value.pictureUrl;
    this.pictureNo = _value.pictureNo;
    GetAppProductPicture.refineValues(this);
  }
  get pictureId(): string | undefined {
    return this._pictureId;
  }
  set pictureId(value: string | undefined) {
    this._pictureId = value;
  }
  get pictureUrl(): string | undefined {
    return this._pictureUrl;
  }
  set pictureUrl(value: string | undefined) {
    this._pictureUrl = value;
  }
  get pictureNo(): string | undefined {
    return this._pictureNo;
  }
  set pictureNo(value: string | undefined) {
    this._pictureNo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAppProductPicture.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAppProductPicture.AsObject {
    return {
      pictureId: this.pictureId,
      pictureUrl: this.pictureUrl,
      pictureNo: this.pictureNo
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
  ): GetAppProductPicture.AsProtobufJSON {
    return {
      pictureId: this.pictureId,
      pictureUrl: this.pictureUrl,
      pictureNo: this.pictureNo
    };
  }
}
export module GetAppProductPicture {
  /**
   * Standard JavaScript object representation for GetAppProductPicture
   */
  export interface AsObject {
    pictureId?: string;
    pictureUrl?: string;
    pictureNo?: string;
  }

  /**
   * Protobuf JSON representation for GetAppProductPicture
   */
  export interface AsProtobufJSON {
    pictureId?: string;
    pictureUrl?: string;
    pictureNo?: string;
  }
}

/**
 * Message implementation for shop.UploadAppProductItemRequest
 */
export class UploadAppProductItemRequest implements GrpcMessage {
  static id = 'shop.UploadAppProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadAppProductItemRequest();
    UploadAppProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadAppProductItemRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.pictureData = _instance.pictureData || '';
    _instance.pictureName = _instance.pictureName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadAppProductItemRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.pictureData = _reader.readString();
          break;
        case 3:
          _instance.pictureName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadAppProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadAppProductItemRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.pictureData) {
      _writer.writeString(2, _instance.pictureData);
    }
    if (_instance.pictureName) {
      _writer.writeString(3, _instance.pictureName);
    }
  }

  private _productItemId?: string;
  private _pictureData?: string;
  private _pictureName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadAppProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadAppProductItemRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.pictureData = _value.pictureData;
    this.pictureName = _value.pictureName;
    UploadAppProductItemRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get pictureData(): string | undefined {
    return this._pictureData;
  }
  set pictureData(value: string | undefined) {
    this._pictureData = value;
  }
  get pictureName(): string | undefined {
    return this._pictureName;
  }
  set pictureName(value: string | undefined) {
    this._pictureName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadAppProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadAppProductItemRequest.AsObject {
    return {
      productItemId: this.productItemId,
      pictureData: this.pictureData,
      pictureName: this.pictureName
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
  ): UploadAppProductItemRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      pictureData: this.pictureData,
      pictureName: this.pictureName
    };
  }
}
export module UploadAppProductItemRequest {
  /**
   * Standard JavaScript object representation for UploadAppProductItemRequest
   */
  export interface AsObject {
    productItemId?: string;
    pictureData?: string;
    pictureName?: string;
  }

  /**
   * Protobuf JSON representation for UploadAppProductItemRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    pictureData?: string;
    pictureName?: string;
  }
}
