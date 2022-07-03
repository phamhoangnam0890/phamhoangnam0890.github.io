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
 * Message implementation for shop.GetSystemServiceResponse
 */
export class GetSystemServiceResponse implements GrpcMessage {
  static id = 'shop.GetSystemServiceResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetSystemServiceResponse();
    GetSystemServiceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetSystemServiceResponse) {
    _instance.licenseKey = _instance.licenseKey || '';
    _instance.expiredAt = _instance.expiredAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetSystemServiceResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.licenseKey = _reader.readString();
          break;
        case 2:
          _instance.expiredAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.expiredAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetSystemServiceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetSystemServiceResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.licenseKey) {
      _writer.writeString(1, _instance.licenseKey);
    }
    if (_instance.expiredAt) {
      _writer.writeMessage(
        2,
        _instance.expiredAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _licenseKey?: string;
  private _expiredAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetSystemServiceResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetSystemServiceResponse.AsObject>) {
    _value = _value || {};
    this.licenseKey = _value.licenseKey;
    this.expiredAt = _value.expiredAt
      ? new googleProtobuf002.Timestamp(_value.expiredAt)
      : undefined;
    GetSystemServiceResponse.refineValues(this);
  }
  get licenseKey(): string | undefined {
    return this._licenseKey;
  }
  set licenseKey(value: string | undefined) {
    this._licenseKey = value;
  }
  get expiredAt(): googleProtobuf002.Timestamp | undefined {
    return this._expiredAt;
  }
  set expiredAt(value: googleProtobuf002.Timestamp | undefined) {
    this._expiredAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetSystemServiceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetSystemServiceResponse.AsObject {
    return {
      licenseKey: this.licenseKey,
      expiredAt: this.expiredAt ? this.expiredAt.toObject() : undefined
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
  ): GetSystemServiceResponse.AsProtobufJSON {
    return {
      licenseKey: this.licenseKey,
      expiredAt: this.expiredAt ? this.expiredAt.toProtobufJSON(options) : null
    };
  }
}
export module GetSystemServiceResponse {
  /**
   * Standard JavaScript object representation for GetSystemServiceResponse
   */
  export interface AsObject {
    licenseKey?: string;
    expiredAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for GetSystemServiceResponse
   */
  export interface AsProtobufJSON {
    licenseKey?: string;
    expiredAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.UpdateSystemServiceRequest
 */
export class UpdateSystemServiceRequest implements GrpcMessage {
  static id = 'shop.UpdateSystemServiceRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateSystemServiceRequest();
    UpdateSystemServiceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateSystemServiceRequest) {
    _instance.licenseKey = _instance.licenseKey || '';
    _instance.expiredAt = _instance.expiredAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateSystemServiceRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.licenseKey = _reader.readString();
          break;
        case 2:
          _instance.expiredAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.expiredAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateSystemServiceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateSystemServiceRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.licenseKey) {
      _writer.writeString(1, _instance.licenseKey);
    }
    if (_instance.expiredAt) {
      _writer.writeMessage(
        2,
        _instance.expiredAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _licenseKey?: string;
  private _expiredAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateSystemServiceRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateSystemServiceRequest.AsObject>) {
    _value = _value || {};
    this.licenseKey = _value.licenseKey;
    this.expiredAt = _value.expiredAt
      ? new googleProtobuf002.Timestamp(_value.expiredAt)
      : undefined;
    UpdateSystemServiceRequest.refineValues(this);
  }
  get licenseKey(): string | undefined {
    return this._licenseKey;
  }
  set licenseKey(value: string | undefined) {
    this._licenseKey = value;
  }
  get expiredAt(): googleProtobuf002.Timestamp | undefined {
    return this._expiredAt;
  }
  set expiredAt(value: googleProtobuf002.Timestamp | undefined) {
    this._expiredAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateSystemServiceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateSystemServiceRequest.AsObject {
    return {
      licenseKey: this.licenseKey,
      expiredAt: this.expiredAt ? this.expiredAt.toObject() : undefined
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
  ): UpdateSystemServiceRequest.AsProtobufJSON {
    return {
      licenseKey: this.licenseKey,
      expiredAt: this.expiredAt ? this.expiredAt.toProtobufJSON(options) : null
    };
  }
}
export module UpdateSystemServiceRequest {
  /**
   * Standard JavaScript object representation for UpdateSystemServiceRequest
   */
  export interface AsObject {
    licenseKey?: string;
    expiredAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateSystemServiceRequest
   */
  export interface AsProtobufJSON {
    licenseKey?: string;
    expiredAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}
