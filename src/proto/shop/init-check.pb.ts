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
 * Message implementation for shop.InitCheckResponse
 */
export class InitCheckResponse implements GrpcMessage {
  static id = 'shop.InitCheckResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new InitCheckResponse();
    InitCheckResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: InitCheckResponse) {
    _instance.warnType = _instance.warnType || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: InitCheckResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.warnType = _instance.warnType || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    InitCheckResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: InitCheckResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.warnType && _instance.warnType.length) {
      _writer.writeRepeatedString(1, _instance.warnType);
    }
  }

  private _warnType?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of InitCheckResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<InitCheckResponse.AsObject>) {
    _value = _value || {};
    this.warnType = (_value.warnType || []).slice();
    InitCheckResponse.refineValues(this);
  }
  get warnType(): string[] | undefined {
    return this._warnType;
  }
  set warnType(value: string[] | undefined) {
    this._warnType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    InitCheckResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): InitCheckResponse.AsObject {
    return {
      warnType: (this.warnType || []).slice()
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
  ): InitCheckResponse.AsProtobufJSON {
    return {
      warnType: (this.warnType || []).slice()
    };
  }
}
export module InitCheckResponse {
  /**
   * Standard JavaScript object representation for InitCheckResponse
   */
  export interface AsObject {
    warnType?: string[];
  }

  /**
   * Protobuf JSON representation for InitCheckResponse
   */
  export interface AsProtobufJSON {
    warnType?: string[];
  }
}
