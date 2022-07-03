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
/**
 * Message implementation for shop.GetBaseProductRequest
 */
export class GetBaseProductRequest implements GrpcMessage {
  static id = 'shop.GetBaseProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetBaseProductRequest();
    GetBaseProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetBaseProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetBaseProductRequest,
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

    GetBaseProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetBaseProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetBaseProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetBaseProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    GetBaseProductRequest.refineValues(this);
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
    GetBaseProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetBaseProductRequest.AsObject {
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
  ): GetBaseProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module GetBaseProductRequest {
  /**
   * Standard JavaScript object representation for GetBaseProductRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for GetBaseProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.GetBaseProductResponse
 */
export class GetBaseProductResponse implements GrpcMessage {
  static id = 'shop.GetBaseProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetBaseProductResponse();
    GetBaseProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetBaseProductResponse) {
    _instance.description = _instance.description || '';
    _instance.status = _instance.status || '0';
    _instance.priceTax = _instance.priceTax || '';
    _instance.reflectionAt = _instance.reflectionAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetBaseProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.description = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readInt64String();
          break;
        case 3:
          _instance.priceTax = _reader.readString();
          break;
        case 4:
          _instance.reflectionAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.reflectionAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetBaseProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetBaseProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.description) {
      _writer.writeString(1, _instance.description);
    }
    if (_instance.status) {
      _writer.writeInt64String(2, _instance.status);
    }
    if (_instance.priceTax) {
      _writer.writeString(3, _instance.priceTax);
    }
    if (_instance.reflectionAt) {
      _writer.writeMessage(
        4,
        _instance.reflectionAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _description?: string;
  private _status?: string;
  private _priceTax?: string;
  private _reflectionAt?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetBaseProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetBaseProductResponse.AsObject>) {
    _value = _value || {};
    this.description = _value.description;
    this.status = _value.status;
    this.priceTax = _value.priceTax;
    this.reflectionAt = _value.reflectionAt
      ? new googleProtobuf001.Timestamp(_value.reflectionAt)
      : undefined;
    GetBaseProductResponse.refineValues(this);
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get priceTax(): string | undefined {
    return this._priceTax;
  }
  set priceTax(value: string | undefined) {
    this._priceTax = value;
  }
  get reflectionAt(): googleProtobuf001.Timestamp | undefined {
    return this._reflectionAt;
  }
  set reflectionAt(value: googleProtobuf001.Timestamp | undefined) {
    this._reflectionAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetBaseProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetBaseProductResponse.AsObject {
    return {
      description: this.description,
      status: this.status,
      priceTax: this.priceTax,
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
  ): GetBaseProductResponse.AsProtobufJSON {
    return {
      description: this.description,
      status: this.status,
      priceTax: this.priceTax,
      reflectionAt: this.reflectionAt
        ? this.reflectionAt.toProtobufJSON(options)
        : null
    };
  }
}
export module GetBaseProductResponse {
  /**
   * Standard JavaScript object representation for GetBaseProductResponse
   */
  export interface AsObject {
    description?: string;
    status?: string;
    priceTax?: string;
    reflectionAt?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for GetBaseProductResponse
   */
  export interface AsProtobufJSON {
    description?: string;
    status?: string;
    priceTax?: string;
    reflectionAt?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.UpdateBaseProductRequest
 */
export class UpdateBaseProductRequest implements GrpcMessage {
  static id = 'shop.UpdateBaseProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateBaseProductRequest();
    UpdateBaseProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateBaseProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.description = _instance.description || '';
    _instance.status = _instance.status || '0';
    _instance.priceTax = _instance.priceTax || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateBaseProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.description = _reader.readString();
          break;
        case 3:
          _instance.status = _reader.readInt64String();
          break;
        case 4:
          _instance.priceTax = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateBaseProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateBaseProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.description) {
      _writer.writeString(2, _instance.description);
    }
    if (_instance.status) {
      _writer.writeInt64String(3, _instance.status);
    }
    if (_instance.priceTax) {
      _writer.writeString(4, _instance.priceTax);
    }
  }

  private _productItemId?: string;
  private _description?: string;
  private _status?: string;
  private _priceTax?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateBaseProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateBaseProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.description = _value.description;
    this.status = _value.status;
    this.priceTax = _value.priceTax;
    UpdateBaseProductRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get priceTax(): string | undefined {
    return this._priceTax;
  }
  set priceTax(value: string | undefined) {
    this._priceTax = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateBaseProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateBaseProductRequest.AsObject {
    return {
      productItemId: this.productItemId,
      description: this.description,
      status: this.status,
      priceTax: this.priceTax
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
  ): UpdateBaseProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      description: this.description,
      status: this.status,
      priceTax: this.priceTax
    };
  }
}
export module UpdateBaseProductRequest {
  /**
   * Standard JavaScript object representation for UpdateBaseProductRequest
   */
  export interface AsObject {
    productItemId?: string;
    description?: string;
    status?: string;
    priceTax?: string;
  }

  /**
   * Protobuf JSON representation for UpdateBaseProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    description?: string;
    status?: string;
    priceTax?: string;
  }
}

/**
 * Message implementation for shop.ApplayBaseProductRequest
 */
export class ApplayBaseProductRequest implements GrpcMessage {
  static id = 'shop.ApplayBaseProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ApplayBaseProductRequest();
    ApplayBaseProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ApplayBaseProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ApplayBaseProductRequest,
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

    ApplayBaseProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ApplayBaseProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ApplayBaseProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ApplayBaseProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    ApplayBaseProductRequest.refineValues(this);
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
    ApplayBaseProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ApplayBaseProductRequest.AsObject {
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
  ): ApplayBaseProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module ApplayBaseProductRequest {
  /**
   * Standard JavaScript object representation for ApplayBaseProductRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for ApplayBaseProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}
