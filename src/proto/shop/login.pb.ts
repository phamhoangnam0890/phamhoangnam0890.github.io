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

/**
 * Message implementation for shop.LoginRequest
 */
export class LoginRequest implements GrpcMessage {
  static id = 'shop.LoginRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginRequest();
    LoginRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginRequest) {
    _instance.id = _instance.id || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeString(1, _instance.id);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
  }

  private _id?: string;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.password = _value.password;
    LoginRequest.refineValues(this);
  }
  get id(): string | undefined {
    return this._id;
  }
  set id(value: string | undefined) {
    this._id = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginRequest.AsObject {
    return {
      id: this.id,
      password: this.password
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
  ): LoginRequest.AsProtobufJSON {
    return {
      id: this.id,
      password: this.password
    };
  }
}
export module LoginRequest {
  /**
   * Standard JavaScript object representation for LoginRequest
   */
  export interface AsObject {
    id?: string;
    password?: string;
  }

  /**
   * Protobuf JSON representation for LoginRequest
   */
  export interface AsProtobufJSON {
    id?: string;
    password?: string;
  }
}

/**
 * Message implementation for shop.LoginResponse
 */
export class LoginResponse implements GrpcMessage {
  static id = 'shop.LoginResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginResponse();
    LoginResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginResponse) {
    _instance.token = _instance.token || '';
    _instance.userName = _instance.userName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.token = _reader.readString();
          break;
        case 2:
          _instance.userName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.token) {
      _writer.writeString(1, _instance.token);
    }
    if (_instance.userName) {
      _writer.writeString(2, _instance.userName);
    }
  }

  private _token?: string;
  private _userName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginResponse.AsObject>) {
    _value = _value || {};
    this.token = _value.token;
    this.userName = _value.userName;
    LoginResponse.refineValues(this);
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginResponse.AsObject {
    return {
      token: this.token,
      userName: this.userName
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
  ): LoginResponse.AsProtobufJSON {
    return {
      token: this.token,
      userName: this.userName
    };
  }
}
export module LoginResponse {
  /**
   * Standard JavaScript object representation for LoginResponse
   */
  export interface AsObject {
    token?: string;
    userName?: string;
  }

  /**
   * Protobuf JSON representation for LoginResponse
   */
  export interface AsProtobufJSON {
    token?: string;
    userName?: string;
  }
}
