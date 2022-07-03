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
 * Message implementation for shop.RakutenNewsCreateRequest
 */
export class RakutenNewsCreateRequest implements GrpcMessage {
  static id = 'shop.RakutenNewsCreateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsCreateRequest();
    RakutenNewsCreateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsCreateRequest) {
    _instance.status = _instance.status || '0';
    _instance.title = _instance.title || '';
    _instance.content = _instance.content || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsCreateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readInt64String();
          break;
        case 2:
          _instance.title = _reader.readString();
          break;
        case 3:
          _instance.content = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsCreateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsCreateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeInt64String(1, _instance.status);
    }
    if (_instance.title) {
      _writer.writeString(2, _instance.title);
    }
    if (_instance.content) {
      _writer.writeString(3, _instance.content);
    }
  }

  private _status?: string;
  private _title?: string;
  private _content?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsCreateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsCreateRequest.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    this.title = _value.title;
    this.content = _value.content;
    RakutenNewsCreateRequest.refineValues(this);
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get title(): string | undefined {
    return this._title;
  }
  set title(value: string | undefined) {
    this._title = value;
  }
  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsCreateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsCreateRequest.AsObject {
    return {
      status: this.status,
      title: this.title,
      content: this.content
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
  ): RakutenNewsCreateRequest.AsProtobufJSON {
    return {
      status: this.status,
      title: this.title,
      content: this.content
    };
  }
}
export module RakutenNewsCreateRequest {
  /**
   * Standard JavaScript object representation for RakutenNewsCreateRequest
   */
  export interface AsObject {
    status?: string;
    title?: string;
    content?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsCreateRequest
   */
  export interface AsProtobufJSON {
    status?: string;
    title?: string;
    content?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsInfoRequest
 */
export class RakutenNewsInfoRequest implements GrpcMessage {
  static id = 'shop.RakutenNewsInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsInfoRequest();
    RakutenNewsInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsInfoRequest) {
    _instance.rakutenNewsId = _instance.rakutenNewsId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenNewsId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenNewsId) {
      _writer.writeString(1, _instance.rakutenNewsId);
    }
  }

  private _rakutenNewsId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsInfoRequest.AsObject>) {
    _value = _value || {};
    this.rakutenNewsId = _value.rakutenNewsId;
    RakutenNewsInfoRequest.refineValues(this);
  }
  get rakutenNewsId(): string | undefined {
    return this._rakutenNewsId;
  }
  set rakutenNewsId(value: string | undefined) {
    this._rakutenNewsId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsInfoRequest.AsObject {
    return {
      rakutenNewsId: this.rakutenNewsId
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
  ): RakutenNewsInfoRequest.AsProtobufJSON {
    return {
      rakutenNewsId: this.rakutenNewsId
    };
  }
}
export module RakutenNewsInfoRequest {
  /**
   * Standard JavaScript object representation for RakutenNewsInfoRequest
   */
  export interface AsObject {
    rakutenNewsId?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsInfoRequest
   */
  export interface AsProtobufJSON {
    rakutenNewsId?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsDeleteRequest
 */
export class RakutenNewsDeleteRequest implements GrpcMessage {
  static id = 'shop.RakutenNewsDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsDeleteRequest();
    RakutenNewsDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsDeleteRequest) {
    _instance.rakutenNewsId = _instance.rakutenNewsId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsDeleteRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenNewsId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenNewsId) {
      _writer.writeString(1, _instance.rakutenNewsId);
    }
  }

  private _rakutenNewsId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsDeleteRequest.AsObject>) {
    _value = _value || {};
    this.rakutenNewsId = _value.rakutenNewsId;
    RakutenNewsDeleteRequest.refineValues(this);
  }
  get rakutenNewsId(): string | undefined {
    return this._rakutenNewsId;
  }
  set rakutenNewsId(value: string | undefined) {
    this._rakutenNewsId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsDeleteRequest.AsObject {
    return {
      rakutenNewsId: this.rakutenNewsId
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
  ): RakutenNewsDeleteRequest.AsProtobufJSON {
    return {
      rakutenNewsId: this.rakutenNewsId
    };
  }
}
export module RakutenNewsDeleteRequest {
  /**
   * Standard JavaScript object representation for RakutenNewsDeleteRequest
   */
  export interface AsObject {
    rakutenNewsId?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsDeleteRequest
   */
  export interface AsProtobufJSON {
    rakutenNewsId?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsUpdateRequest
 */
export class RakutenNewsUpdateRequest implements GrpcMessage {
  static id = 'shop.RakutenNewsUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsUpdateRequest();
    RakutenNewsUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsUpdateRequest) {
    _instance.rakutenNewsId = _instance.rakutenNewsId || '';
    _instance.status = _instance.status || '0';
    _instance.content = _instance.content || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenNewsId = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readInt64String();
          break;
        case 3:
          _instance.content = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenNewsId) {
      _writer.writeString(1, _instance.rakutenNewsId);
    }
    if (_instance.status) {
      _writer.writeInt64String(2, _instance.status);
    }
    if (_instance.content) {
      _writer.writeString(3, _instance.content);
    }
  }

  private _rakutenNewsId?: string;
  private _status?: string;
  private _content?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsUpdateRequest.AsObject>) {
    _value = _value || {};
    this.rakutenNewsId = _value.rakutenNewsId;
    this.status = _value.status;
    this.content = _value.content;
    RakutenNewsUpdateRequest.refineValues(this);
  }
  get rakutenNewsId(): string | undefined {
    return this._rakutenNewsId;
  }
  set rakutenNewsId(value: string | undefined) {
    this._rakutenNewsId = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsUpdateRequest.AsObject {
    return {
      rakutenNewsId: this.rakutenNewsId,
      status: this.status,
      content: this.content
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
  ): RakutenNewsUpdateRequest.AsProtobufJSON {
    return {
      rakutenNewsId: this.rakutenNewsId,
      status: this.status,
      content: this.content
    };
  }
}
export module RakutenNewsUpdateRequest {
  /**
   * Standard JavaScript object representation for RakutenNewsUpdateRequest
   */
  export interface AsObject {
    rakutenNewsId?: string;
    status?: string;
    content?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsUpdateRequest
   */
  export interface AsProtobufJSON {
    rakutenNewsId?: string;
    status?: string;
    content?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsInfoResponse
 */
export class RakutenNewsInfoResponse implements GrpcMessage {
  static id = 'shop.RakutenNewsInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsInfoResponse();
    RakutenNewsInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsInfoResponse) {
    _instance.status = _instance.status || '0';
    _instance.statusName = _instance.statusName || '';
    _instance.content = _instance.content || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.status = _reader.readInt64String();
          break;
        case 2:
          _instance.statusName = _reader.readString();
          break;
        case 3:
          _instance.content = _reader.readString();
          break;
        case 4:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.status) {
      _writer.writeInt64String(1, _instance.status);
    }
    if (_instance.statusName) {
      _writer.writeString(2, _instance.statusName);
    }
    if (_instance.content) {
      _writer.writeString(3, _instance.content);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        4,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _status?: string;
  private _statusName?: string;
  private _content?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsInfoResponse.AsObject>) {
    _value = _value || {};
    this.status = _value.status;
    this.statusName = _value.statusName;
    this.content = _value.content;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    RakutenNewsInfoResponse.refineValues(this);
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get statusName(): string | undefined {
    return this._statusName;
  }
  set statusName(value: string | undefined) {
    this._statusName = value;
  }
  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsInfoResponse.AsObject {
    return {
      status: this.status,
      statusName: this.statusName,
      content: this.content,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined
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
  ): RakutenNewsInfoResponse.AsProtobufJSON {
    return {
      status: this.status,
      statusName: this.statusName,
      content: this.content,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module RakutenNewsInfoResponse {
  /**
   * Standard JavaScript object representation for RakutenNewsInfoResponse
   */
  export interface AsObject {
    status?: string;
    statusName?: string;
    content?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenNewsInfoResponse
   */
  export interface AsProtobufJSON {
    status?: string;
    statusName?: string;
    content?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.RakutenNewsListRequest
 */
export class RakutenNewsListRequest implements GrpcMessage {
  static id = 'shop.RakutenNewsListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsListRequest();
    RakutenNewsListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsListRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.status = _instance.status || '0';
    _instance.content = _instance.content || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsListRequest,
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
        case 2:
          _instance.status = _reader.readInt64String();
          break;
        case 3:
          _instance.content = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.status) {
      _writer.writeInt64String(2, _instance.status);
    }
    if (_instance.content) {
      _writer.writeString(3, _instance.content);
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _status?: string;
  private _content?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.status = _value.status;
    this.content = _value.content;
    RakutenNewsListRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      status: this.status,
      content: this.content
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
  ): RakutenNewsListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      status: this.status,
      content: this.content
    };
  }
}
export module RakutenNewsListRequest {
  /**
   * Standard JavaScript object representation for RakutenNewsListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    status?: string;
    content?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    status?: string;
    content?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsListResponse
 */
export class RakutenNewsListResponse implements GrpcMessage {
  static id = 'shop.RakutenNewsListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsListResponse();
    RakutenNewsListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenNewsData();
          _reader.readMessage(
            messageInitializer1,
            RakutenNewsData.deserializeBinaryFromReader
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

    RakutenNewsListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenNewsData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: RakutenNewsData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenNewsData(m));
    this.total = _value.total;
    RakutenNewsListResponse.refineValues(this);
  }
  get data(): RakutenNewsData[] | undefined {
    return this._data;
  }
  set data(value: RakutenNewsData[] | undefined) {
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
    RakutenNewsListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsListResponse.AsObject {
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
  ): RakutenNewsListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module RakutenNewsListResponse {
  /**
   * Standard JavaScript object representation for RakutenNewsListResponse
   */
  export interface AsObject {
    data?: RakutenNewsData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for RakutenNewsListResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenNewsData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.RakutenNewsData
 */
export class RakutenNewsData implements GrpcMessage {
  static id = 'shop.RakutenNewsData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenNewsData();
    RakutenNewsData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenNewsData) {
    _instance.rakutenNewsId = _instance.rakutenNewsId || '';
    _instance.status = _instance.status || '0';
    _instance.statusName = _instance.statusName || '';
    _instance.content = _instance.content || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenNewsData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenNewsId = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readInt64String();
          break;
        case 3:
          _instance.statusName = _reader.readString();
          break;
        case 4:
          _instance.content = _reader.readString();
          break;
        case 5:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenNewsData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenNewsData,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenNewsId) {
      _writer.writeString(1, _instance.rakutenNewsId);
    }
    if (_instance.status) {
      _writer.writeInt64String(2, _instance.status);
    }
    if (_instance.statusName) {
      _writer.writeString(3, _instance.statusName);
    }
    if (_instance.content) {
      _writer.writeString(4, _instance.content);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        5,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _rakutenNewsId?: string;
  private _status?: string;
  private _statusName?: string;
  private _content?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenNewsData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenNewsData.AsObject>) {
    _value = _value || {};
    this.rakutenNewsId = _value.rakutenNewsId;
    this.status = _value.status;
    this.statusName = _value.statusName;
    this.content = _value.content;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    RakutenNewsData.refineValues(this);
  }
  get rakutenNewsId(): string | undefined {
    return this._rakutenNewsId;
  }
  set rakutenNewsId(value: string | undefined) {
    this._rakutenNewsId = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get statusName(): string | undefined {
    return this._statusName;
  }
  set statusName(value: string | undefined) {
    this._statusName = value;
  }
  get content(): string | undefined {
    return this._content;
  }
  set content(value: string | undefined) {
    this._content = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenNewsData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenNewsData.AsObject {
    return {
      rakutenNewsId: this.rakutenNewsId,
      status: this.status,
      statusName: this.statusName,
      content: this.content,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined
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
  ): RakutenNewsData.AsProtobufJSON {
    return {
      rakutenNewsId: this.rakutenNewsId,
      status: this.status,
      statusName: this.statusName,
      content: this.content,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module RakutenNewsData {
  /**
   * Standard JavaScript object representation for RakutenNewsData
   */
  export interface AsObject {
    rakutenNewsId?: string;
    status?: string;
    statusName?: string;
    content?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenNewsData
   */
  export interface AsProtobufJSON {
    rakutenNewsId?: string;
    status?: string;
    statusName?: string;
    content?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}
