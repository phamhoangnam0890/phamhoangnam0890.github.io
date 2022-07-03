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
 * Message implementation for shop.RakutenEventDeleteRequest
 */
export class RakutenEventDeleteRequest implements GrpcMessage {
  static id = 'shop.RakutenEventDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventDeleteRequest();
    RakutenEventDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventDeleteRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventDeleteRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenEventDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
  }

  private _rakutenEventId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventDeleteRequest.AsObject>) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    RakutenEventDeleteRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenEventDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventDeleteRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId
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
  ): RakutenEventDeleteRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId
    };
  }
}
export module RakutenEventDeleteRequest {
  /**
   * Standard JavaScript object representation for RakutenEventDeleteRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
  }

  /**
   * Protobuf JSON representation for RakutenEventDeleteRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
  }
}

/**
 * Message implementation for shop.RakutenEventCreateRequest
 */
export class RakutenEventCreateRequest implements GrpcMessage {
  static id = 'shop.RakutenEventCreateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventCreateRequest();
    RakutenEventCreateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventCreateRequest) {
    _instance.rakutenEventName = _instance.rakutenEventName || '';
    _instance.startYearMonth = _instance.startYearMonth || '';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventCreateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventName = _reader.readString();
          break;
        case 2:
          _instance.startYearMonth = _reader.readString();
          break;
        case 3:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
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

    RakutenEventCreateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventCreateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventName) {
      _writer.writeString(1, _instance.rakutenEventName);
    }
    if (_instance.startYearMonth) {
      _writer.writeString(2, _instance.startYearMonth);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        3,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        4,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        5,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _rakutenEventName?: string;
  private _startYearMonth?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _createdAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventCreateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventCreateRequest.AsObject>) {
    _value = _value || {};
    this.rakutenEventName = _value.rakutenEventName;
    this.startYearMonth = _value.startYearMonth;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    RakutenEventCreateRequest.refineValues(this);
  }
  get rakutenEventName(): string | undefined {
    return this._rakutenEventName;
  }
  set rakutenEventName(value: string | undefined) {
    this._rakutenEventName = value;
  }
  get startYearMonth(): string | undefined {
    return this._startYearMonth;
  }
  set startYearMonth(value: string | undefined) {
    this._startYearMonth = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
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
    RakutenEventCreateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventCreateRequest.AsObject {
    return {
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
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
  ): RakutenEventCreateRequest.AsProtobufJSON {
    return {
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module RakutenEventCreateRequest {
  /**
   * Standard JavaScript object representation for RakutenEventCreateRequest
   */
  export interface AsObject {
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenEventCreateRequest
   */
  export interface AsProtobufJSON {
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.RakutenEventInfoRequest
 */
export class RakutenEventInfoRequest implements GrpcMessage {
  static id = 'shop.RakutenEventInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventInfoRequest();
    RakutenEventInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventInfoRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenEventInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
  }

  private _rakutenEventId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventInfoRequest.AsObject>) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    RakutenEventInfoRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenEventInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventInfoRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId
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
  ): RakutenEventInfoRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId
    };
  }
}
export module RakutenEventInfoRequest {
  /**
   * Standard JavaScript object representation for RakutenEventInfoRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
  }

  /**
   * Protobuf JSON representation for RakutenEventInfoRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
  }
}

/**
 * Message implementation for shop.RakutenEventEditRequest
 */
export class RakutenEventEditRequest implements GrpcMessage {
  static id = 'shop.RakutenEventEditRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventEditRequest();
    RakutenEventEditRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventEditRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.rakutenEventName = _instance.rakutenEventName || '';
    _instance.startYearMonth = _instance.startYearMonth || '';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventEditRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 2:
          _instance.rakutenEventName = _reader.readString();
          break;
        case 3:
          _instance.startYearMonth = _reader.readString();
          break;
        case 4:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
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

    RakutenEventEditRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventEditRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
    if (_instance.rakutenEventName) {
      _writer.writeString(2, _instance.rakutenEventName);
    }
    if (_instance.startYearMonth) {
      _writer.writeString(3, _instance.startYearMonth);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        4,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        5,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _rakutenEventId?: string;
  private _rakutenEventName?: string;
  private _startYearMonth?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _createdAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventEditRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventEditRequest.AsObject>) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    this.rakutenEventName = _value.rakutenEventName;
    this.startYearMonth = _value.startYearMonth;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    RakutenEventEditRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get rakutenEventName(): string | undefined {
    return this._rakutenEventName;
  }
  set rakutenEventName(value: string | undefined) {
    this._rakutenEventName = value;
  }
  get startYearMonth(): string | undefined {
    return this._startYearMonth;
  }
  set startYearMonth(value: string | undefined) {
    this._startYearMonth = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
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
    RakutenEventEditRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventEditRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
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
  ): RakutenEventEditRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module RakutenEventEditRequest {
  /**
   * Standard JavaScript object representation for RakutenEventEditRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenEventEditRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.RakutenEventListRequest
 */
export class RakutenEventListRequest implements GrpcMessage {
  static id = 'shop.RakutenEventListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventListRequest();
    RakutenEventListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventListRequest) {
    _instance.eventName = _instance.eventName || '';
    _instance.offset = _instance.offset || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.eventName = _reader.readString();
          break;
        case 2:
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

    RakutenEventListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.eventName) {
      _writer.writeString(1, _instance.eventName);
    }
    if (_instance.offset) {
      _writer.writeMessage(
        2,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _eventName?: string;
  private _offset?: googleProtobuf000.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventListRequest.AsObject>) {
    _value = _value || {};
    this.eventName = _value.eventName;
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    RakutenEventListRequest.refineValues(this);
  }
  get eventName(): string | undefined {
    return this._eventName;
  }
  set eventName(value: string | undefined) {
    this._eventName = value;
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
    RakutenEventListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventListRequest.AsObject {
    return {
      eventName: this.eventName,
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
  ): RakutenEventListRequest.AsProtobufJSON {
    return {
      eventName: this.eventName,
      offset: this.offset ? this.offset.toProtobufJSON(options) : null
    };
  }
}
export module RakutenEventListRequest {
  /**
   * Standard JavaScript object representation for RakutenEventListRequest
   */
  export interface AsObject {
    eventName?: string;
    offset?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenEventListRequest
   */
  export interface AsProtobufJSON {
    eventName?: string;
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.RakutenEventListResponse
 */
export class RakutenEventListResponse implements GrpcMessage {
  static id = 'shop.RakutenEventListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventListResponse();
    RakutenEventListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenEventData();
          _reader.readMessage(
            messageInitializer1,
            RakutenEventData.deserializeBinaryFromReader
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

    RakutenEventListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenEventData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: RakutenEventData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenEventData(m));
    this.total = _value.total;
    RakutenEventListResponse.refineValues(this);
  }
  get data(): RakutenEventData[] | undefined {
    return this._data;
  }
  set data(value: RakutenEventData[] | undefined) {
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
    RakutenEventListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventListResponse.AsObject {
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
  ): RakutenEventListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module RakutenEventListResponse {
  /**
   * Standard JavaScript object representation for RakutenEventListResponse
   */
  export interface AsObject {
    data?: RakutenEventData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for RakutenEventListResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenEventData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.RakutenEventData
 */
export class RakutenEventData implements GrpcMessage {
  static id = 'shop.RakutenEventData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventData();
    RakutenEventData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventData) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.rakutenEventName = _instance.rakutenEventName || '';
    _instance.startYearMonth = _instance.startYearMonth || '';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
    _instance.productItems = _instance.productItems || [];
    _instance.reflectionAt = _instance.reflectionAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 2:
          _instance.rakutenEventName = _reader.readString();
          break;
        case 3:
          _instance.startYearMonth = _reader.readString();
          break;
        case 4:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          const messageInitializer7 = new RakutenEventProductItems();
          _reader.readMessage(
            messageInitializer7,
            RakutenEventProductItems.deserializeBinaryFromReader
          );
          (_instance.productItems = _instance.productItems || []).push(
            messageInitializer7
          );
          break;
        case 8:
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

    RakutenEventData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventData,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
    if (_instance.rakutenEventName) {
      _writer.writeString(2, _instance.rakutenEventName);
    }
    if (_instance.startYearMonth) {
      _writer.writeString(3, _instance.startYearMonth);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        4,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        5,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        6,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.productItems && _instance.productItems.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.productItems as any,
        RakutenEventProductItems.serializeBinaryToWriter
      );
    }
    if (_instance.reflectionAt) {
      _writer.writeMessage(
        8,
        _instance.reflectionAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _rakutenEventId?: string;
  private _rakutenEventName?: string;
  private _startYearMonth?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _createdAt?: googleProtobuf002.Timestamp;
  private _productItems?: RakutenEventProductItems[];
  private _reflectionAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventData.AsObject>) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    this.rakutenEventName = _value.rakutenEventName;
    this.startYearMonth = _value.startYearMonth;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    this.productItems = (_value.productItems || []).map(
      m => new RakutenEventProductItems(m)
    );
    this.reflectionAt = _value.reflectionAt
      ? new googleProtobuf002.Timestamp(_value.reflectionAt)
      : undefined;
    RakutenEventData.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get rakutenEventName(): string | undefined {
    return this._rakutenEventName;
  }
  set rakutenEventName(value: string | undefined) {
    this._rakutenEventName = value;
  }
  get startYearMonth(): string | undefined {
    return this._startYearMonth;
  }
  set startYearMonth(value: string | undefined) {
    this._startYearMonth = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }
  get productItems(): RakutenEventProductItems[] | undefined {
    return this._productItems;
  }
  set productItems(value: RakutenEventProductItems[] | undefined) {
    this._productItems = value;
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
    RakutenEventData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventData.AsObject {
    return {
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined,
      productItems: (this.productItems || []).map(m => m.toObject()),
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
  ): RakutenEventData.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null,
      productItems: (this.productItems || []).map(m =>
        m.toProtobufJSON(options)
      ),
      reflectionAt: this.reflectionAt
        ? this.reflectionAt.toProtobufJSON(options)
        : null
    };
  }
}
export module RakutenEventData {
  /**
   * Standard JavaScript object representation for RakutenEventData
   */
  export interface AsObject {
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
    productItems?: RakutenEventProductItems.AsObject[];
    reflectionAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for RakutenEventData
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    productItems?: RakutenEventProductItems.AsProtobufJSON[] | null;
    reflectionAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.RakutenEventProductItems
 */
export class RakutenEventProductItems implements GrpcMessage {
  static id = 'shop.RakutenEventProductItems';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventProductItems();
    RakutenEventProductItems.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventProductItems) {
    _instance.rakutenEventProductItemId =
      _instance.rakutenEventProductItemId || '';
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.price = _instance.price || '0';
    _instance.sourcePrice = _instance.sourcePrice || '0';
    _instance.lastReflectionAt = _instance.lastReflectionAt || undefined;
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.productItemName = _instance.productItemName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.stockInventory = _instance.stockInventory || '0';
    _instance.stock = _instance.stock || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventProductItems,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventProductItemId = _reader.readString();
          break;
        case 2:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 3:
          _instance.productId = _reader.readString();
          break;
        case 4:
          _instance.price = _reader.readInt64String();
          break;
        case 5:
          _instance.sourcePrice = _reader.readInt64String();
          break;
        case 6:
          _instance.lastReflectionAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.lastReflectionAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.productItemName = _reader.readString();
          break;
        case 9:
          _instance.categoryName = _reader.readString();
          break;
        case 10:
          _instance.stockInventory = _reader.readInt64String();
          break;
        case 11:
          _instance.stock = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenEventProductItems.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventProductItems,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventProductItemId) {
      _writer.writeString(1, _instance.rakutenEventProductItemId);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(2, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(3, _instance.productId);
    }
    if (_instance.price) {
      _writer.writeInt64String(4, _instance.price);
    }
    if (_instance.sourcePrice) {
      _writer.writeInt64String(5, _instance.sourcePrice);
    }
    if (_instance.lastReflectionAt) {
      _writer.writeMessage(
        6,
        _instance.lastReflectionAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        7,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.productItemName) {
      _writer.writeString(8, _instance.productItemName);
    }
    if (_instance.categoryName) {
      _writer.writeString(9, _instance.categoryName);
    }
    if (_instance.stockInventory) {
      _writer.writeInt64String(10, _instance.stockInventory);
    }
    if (_instance.stock) {
      _writer.writeInt64String(11, _instance.stock);
    }
  }

  private _rakutenEventProductItemId?: string;
  private _productItemId?: string;
  private _productId?: string;
  private _price?: string;
  private _sourcePrice?: string;
  private _lastReflectionAt?: googleProtobuf002.Timestamp;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _productItemName?: string;
  private _categoryName?: string;
  private _stockInventory?: string;
  private _stock?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventProductItems to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventProductItems.AsObject>) {
    _value = _value || {};
    this.rakutenEventProductItemId = _value.rakutenEventProductItemId;
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.price = _value.price;
    this.sourcePrice = _value.sourcePrice;
    this.lastReflectionAt = _value.lastReflectionAt
      ? new googleProtobuf002.Timestamp(_value.lastReflectionAt)
      : undefined;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.productItemName = _value.productItemName;
    this.categoryName = _value.categoryName;
    this.stockInventory = _value.stockInventory;
    this.stock = _value.stock;
    RakutenEventProductItems.refineValues(this);
  }
  get rakutenEventProductItemId(): string | undefined {
    return this._rakutenEventProductItemId;
  }
  set rakutenEventProductItemId(value: string | undefined) {
    this._rakutenEventProductItemId = value;
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
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get sourcePrice(): string | undefined {
    return this._sourcePrice;
  }
  set sourcePrice(value: string | undefined) {
    this._sourcePrice = value;
  }
  get lastReflectionAt(): googleProtobuf002.Timestamp | undefined {
    return this._lastReflectionAt;
  }
  set lastReflectionAt(value: googleProtobuf002.Timestamp | undefined) {
    this._lastReflectionAt = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }
  get stockInventory(): string | undefined {
    return this._stockInventory;
  }
  set stockInventory(value: string | undefined) {
    this._stockInventory = value;
  }
  get stock(): string | undefined {
    return this._stock;
  }
  set stock(value: string | undefined) {
    this._stock = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenEventProductItems.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventProductItems.AsObject {
    return {
      rakutenEventProductItemId: this.rakutenEventProductItemId,
      productItemId: this.productItemId,
      productId: this.productId,
      price: this.price,
      sourcePrice: this.sourcePrice,
      lastReflectionAt: this.lastReflectionAt
        ? this.lastReflectionAt.toObject()
        : undefined,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      productItemName: this.productItemName,
      categoryName: this.categoryName,
      stockInventory: this.stockInventory,
      stock: this.stock
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
  ): RakutenEventProductItems.AsProtobufJSON {
    return {
      rakutenEventProductItemId: this.rakutenEventProductItemId,
      productItemId: this.productItemId,
      productId: this.productId,
      price: this.price,
      sourcePrice: this.sourcePrice,
      lastReflectionAt: this.lastReflectionAt
        ? this.lastReflectionAt.toProtobufJSON(options)
        : null,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      productItemName: this.productItemName,
      categoryName: this.categoryName,
      stockInventory: this.stockInventory,
      stock: this.stock
    };
  }
}
export module RakutenEventProductItems {
  /**
   * Standard JavaScript object representation for RakutenEventProductItems
   */
  export interface AsObject {
    rakutenEventProductItemId?: string;
    productItemId?: string;
    productId?: string;
    price?: string;
    sourcePrice?: string;
    lastReflectionAt?: googleProtobuf002.Timestamp.AsObject;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    productItemName?: string;
    categoryName?: string;
    stockInventory?: string;
    stock?: string;
  }

  /**
   * Protobuf JSON representation for RakutenEventProductItems
   */
  export interface AsProtobufJSON {
    rakutenEventProductItemId?: string;
    productItemId?: string;
    productId?: string;
    price?: string;
    sourcePrice?: string;
    lastReflectionAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    productItemName?: string;
    categoryName?: string;
    stockInventory?: string;
    stock?: string;
  }
}

/**
 * Message implementation for shop.ListRakutenEventProductRequest
 */
export class ListRakutenEventProductRequest implements GrpcMessage {
  static id = 'shop.ListRakutenEventProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRakutenEventProductRequest();
    ListRakutenEventProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRakutenEventProductRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRakutenEventProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    ListRakutenEventProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRakutenEventProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
  }

  private _rakutenEventId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRakutenEventProductRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRakutenEventProductRequest.AsObject>
  ) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    ListRakutenEventProductRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRakutenEventProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRakutenEventProductRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId
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
  ): ListRakutenEventProductRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId
    };
  }
}
export module ListRakutenEventProductRequest {
  /**
   * Standard JavaScript object representation for ListRakutenEventProductRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
  }

  /**
   * Protobuf JSON representation for ListRakutenEventProductRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
  }
}

/**
 * Message implementation for shop.ListRakutenEventProductResponse
 */
export class ListRakutenEventProductResponse implements GrpcMessage {
  static id = 'shop.ListRakutenEventProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRakutenEventProductResponse();
    ListRakutenEventProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRakutenEventProductResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRakutenEventProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RakutenEventProductData();
          _reader.readMessage(
            messageInitializer1,
            RakutenEventProductData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListRakutenEventProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRakutenEventProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RakutenEventProductData.serializeBinaryToWriter
      );
    }
  }

  private _data?: RakutenEventProductData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRakutenEventProductResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ListRakutenEventProductResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RakutenEventProductData(m));
    ListRakutenEventProductResponse.refineValues(this);
  }
  get data(): RakutenEventProductData[] | undefined {
    return this._data;
  }
  set data(value: RakutenEventProductData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRakutenEventProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRakutenEventProductResponse.AsObject {
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
  ): ListRakutenEventProductResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListRakutenEventProductResponse {
  /**
   * Standard JavaScript object representation for ListRakutenEventProductResponse
   */
  export interface AsObject {
    data?: RakutenEventProductData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListRakutenEventProductResponse
   */
  export interface AsProtobufJSON {
    data?: RakutenEventProductData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.RakutenEventProductData
 */
export class RakutenEventProductData implements GrpcMessage {
  static id = 'shop.RakutenEventProductData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenEventProductData();
    RakutenEventProductData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenEventProductData) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productName = _instance.productName || '';
    _instance.price = _instance.price || '0';
    _instance.stockInventory = _instance.stockInventory || '0';
    _instance.stock = _instance.stock || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenEventProductData,
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
          _instance.productName = _reader.readString();
          break;
        case 4:
          _instance.price = _reader.readInt64String();
          break;
        case 5:
          _instance.stockInventory = _reader.readInt64String();
          break;
        case 6:
          _instance.stock = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenEventProductData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenEventProductData,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.productName) {
      _writer.writeString(3, _instance.productName);
    }
    if (_instance.price) {
      _writer.writeInt64String(4, _instance.price);
    }
    if (_instance.stockInventory) {
      _writer.writeInt64String(5, _instance.stockInventory);
    }
    if (_instance.stock) {
      _writer.writeInt64String(6, _instance.stock);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productName?: string;
  private _price?: string;
  private _stockInventory?: string;
  private _stock?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenEventProductData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenEventProductData.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productName = _value.productName;
    this.price = _value.price;
    this.stockInventory = _value.stockInventory;
    this.stock = _value.stock;
    RakutenEventProductData.refineValues(this);
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
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get stockInventory(): string | undefined {
    return this._stockInventory;
  }
  set stockInventory(value: string | undefined) {
    this._stockInventory = value;
  }
  get stock(): string | undefined {
    return this._stock;
  }
  set stock(value: string | undefined) {
    this._stock = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenEventProductData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenEventProductData.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      price: this.price,
      stockInventory: this.stockInventory,
      stock: this.stock
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
  ): RakutenEventProductData.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      price: this.price,
      stockInventory: this.stockInventory,
      stock: this.stock
    };
  }
}
export module RakutenEventProductData {
  /**
   * Standard JavaScript object representation for RakutenEventProductData
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    productName?: string;
    price?: string;
    stockInventory?: string;
    stock?: string;
  }

  /**
   * Protobuf JSON representation for RakutenEventProductData
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productName?: string;
    price?: string;
    stockInventory?: string;
    stock?: string;
  }
}

/**
 * Message implementation for shop.CreateRakutenEventProductRequest
 */
export class CreateRakutenEventProductRequest implements GrpcMessage {
  static id = 'shop.CreateRakutenEventProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateRakutenEventProductRequest();
    CreateRakutenEventProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateRakutenEventProductRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.entryData = _instance.entryData || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateRakutenEventProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 2:
          const messageInitializer2 = new CreateRakutenEventProductData();
          _reader.readMessage(
            messageInitializer2,
            CreateRakutenEventProductData.deserializeBinaryFromReader
          );
          (_instance.entryData = _instance.entryData || []).push(
            messageInitializer2
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateRakutenEventProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateRakutenEventProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
    if (_instance.entryData && _instance.entryData.length) {
      _writer.writeRepeatedMessage(
        2,
        _instance.entryData as any,
        CreateRakutenEventProductData.serializeBinaryToWriter
      );
    }
  }

  private _rakutenEventId?: string;
  private _entryData?: CreateRakutenEventProductData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateRakutenEventProductRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateRakutenEventProductRequest.AsObject>
  ) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    this.entryData = (_value.entryData || []).map(
      m => new CreateRakutenEventProductData(m)
    );
    CreateRakutenEventProductRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get entryData(): CreateRakutenEventProductData[] | undefined {
    return this._entryData;
  }
  set entryData(value: CreateRakutenEventProductData[] | undefined) {
    this._entryData = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateRakutenEventProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateRakutenEventProductRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId,
      entryData: (this.entryData || []).map(m => m.toObject())
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
  ): CreateRakutenEventProductRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId,
      entryData: (this.entryData || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CreateRakutenEventProductRequest {
  /**
   * Standard JavaScript object representation for CreateRakutenEventProductRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
    entryData?: CreateRakutenEventProductData.AsObject[];
  }

  /**
   * Protobuf JSON representation for CreateRakutenEventProductRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
    entryData?: CreateRakutenEventProductData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.CreateRakutenEventProductData
 */
export class CreateRakutenEventProductData implements GrpcMessage {
  static id = 'shop.CreateRakutenEventProductData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateRakutenEventProductData();
    CreateRakutenEventProductData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateRakutenEventProductData) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.price = _instance.price || '0';
    _instance.stockNum = _instance.stockNum || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateRakutenEventProductData,
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
          _instance.price = _reader.readInt64String();
          break;
        case 4:
          _instance.stockNum = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateRakutenEventProductData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateRakutenEventProductData,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.price) {
      _writer.writeInt64String(3, _instance.price);
    }
    if (_instance.stockNum) {
      _writer.writeInt64String(4, _instance.stockNum);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _price?: string;
  private _stockNum?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateRakutenEventProductData to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CreateRakutenEventProductData.AsObject>
  ) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.price = _value.price;
    this.stockNum = _value.stockNum;
    CreateRakutenEventProductData.refineValues(this);
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
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get stockNum(): string | undefined {
    return this._stockNum;
  }
  set stockNum(value: string | undefined) {
    this._stockNum = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateRakutenEventProductData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateRakutenEventProductData.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      price: this.price,
      stockNum: this.stockNum
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
  ): CreateRakutenEventProductData.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      price: this.price,
      stockNum: this.stockNum
    };
  }
}
export module CreateRakutenEventProductData {
  /**
   * Standard JavaScript object representation for CreateRakutenEventProductData
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    price?: string;
    stockNum?: string;
  }

  /**
   * Protobuf JSON representation for CreateRakutenEventProductData
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    price?: string;
    stockNum?: string;
  }
}

/**
 * Message implementation for shop.ReflectionRakutenEventRequest
 */
export class ReflectionRakutenEventRequest implements GrpcMessage {
  static id = 'shop.ReflectionRakutenEventRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ReflectionRakutenEventRequest();
    ReflectionRakutenEventRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ReflectionRakutenEventRequest) {
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ReflectionRakutenEventRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    ReflectionRakutenEventRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ReflectionRakutenEventRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(1, _instance.rakutenEventId);
    }
  }

  private _rakutenEventId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ReflectionRakutenEventRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ReflectionRakutenEventRequest.AsObject>
  ) {
    _value = _value || {};
    this.rakutenEventId = _value.rakutenEventId;
    ReflectionRakutenEventRequest.refineValues(this);
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ReflectionRakutenEventRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ReflectionRakutenEventRequest.AsObject {
    return {
      rakutenEventId: this.rakutenEventId
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
  ): ReflectionRakutenEventRequest.AsProtobufJSON {
    return {
      rakutenEventId: this.rakutenEventId
    };
  }
}
export module ReflectionRakutenEventRequest {
  /**
   * Standard JavaScript object representation for ReflectionRakutenEventRequest
   */
  export interface AsObject {
    rakutenEventId?: string;
  }

  /**
   * Protobuf JSON representation for ReflectionRakutenEventRequest
   */
  export interface AsProtobufJSON {
    rakutenEventId?: string;
  }
}
