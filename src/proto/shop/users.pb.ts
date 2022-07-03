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
 * Message implementation for shop.ListUserRequest
 */
export class ListUserRequest implements GrpcMessage {
  static id = 'shop.ListUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserRequest();
    ListUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserRequest) {
    _instance.offset = _instance.offset || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserRequest,
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

    ListUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserRequest,
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
   * @param _value initial values object or instance of ListUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    ListUserRequest.refineValues(this);
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
    ListUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserRequest.AsObject {
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
  ): ListUserRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null
    };
  }
}
export module ListUserRequest {
  /**
   * Standard JavaScript object representation for ListUserRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for ListUserRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ListUserResponse
 */
export class ListUserResponse implements GrpcMessage {
  static id = 'shop.ListUserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListUserResponse();
    ListUserResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListUserResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListUserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UsersListData();
          _reader.readMessage(
            messageInitializer1,
            UsersListData.deserializeBinaryFromReader
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

    ListUserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListUserResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        UsersListData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: UsersListData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListUserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListUserResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new UsersListData(m));
    this.total = _value.total;
    ListUserResponse.refineValues(this);
  }
  get data(): UsersListData[] | undefined {
    return this._data;
  }
  set data(value: UsersListData[] | undefined) {
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
    ListUserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListUserResponse.AsObject {
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
  ): ListUserResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module ListUserResponse {
  /**
   * Standard JavaScript object representation for ListUserResponse
   */
  export interface AsObject {
    data?: UsersListData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for ListUserResponse
   */
  export interface AsProtobufJSON {
    data?: UsersListData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.UsersListData
 */
export class UsersListData implements GrpcMessage {
  static id = 'shop.UsersListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UsersListData();
    UsersListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UsersListData) {
    _instance.no = _instance.no || '0';
    _instance.userId = _instance.userId || '0';
    _instance.userName = _instance.userName || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UsersListData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.no = _reader.readInt64String();
          break;
        case 2:
          _instance.userId = _reader.readInt64String();
          break;
        case 3:
          _instance.userName = _reader.readString();
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

    UsersListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UsersListData,
    _writer: BinaryWriter
  ) {
    if (_instance.no) {
      _writer.writeInt64String(1, _instance.no);
    }
    if (_instance.userId) {
      _writer.writeInt64String(2, _instance.userId);
    }
    if (_instance.userName) {
      _writer.writeString(3, _instance.userName);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        4,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _no?: string;
  private _userId?: string;
  private _userName?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UsersListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<UsersListData.AsObject>) {
    _value = _value || {};
    this.no = _value.no;
    this.userId = _value.userId;
    this.userName = _value.userName;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    UsersListData.refineValues(this);
  }
  get no(): string | undefined {
    return this._no;
  }
  set no(value: string | undefined) {
    this._no = value;
  }
  get userId(): string | undefined {
    return this._userId;
  }
  set userId(value: string | undefined) {
    this._userId = value;
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
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
    UsersListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UsersListData.AsObject {
    return {
      no: this.no,
      userId: this.userId,
      userName: this.userName,
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
  ): UsersListData.AsProtobufJSON {
    return {
      no: this.no,
      userId: this.userId,
      userName: this.userName,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module UsersListData {
  /**
   * Standard JavaScript object representation for UsersListData
   */
  export interface AsObject {
    no?: string;
    userId?: string;
    userName?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for UsersListData
   */
  export interface AsProtobufJSON {
    no?: string;
    userId?: string;
    userName?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetUserInfoRequest
 */
export class GetUserInfoRequest implements GrpcMessage {
  static id = 'shop.GetUserInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserInfoRequest();
    GetUserInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserInfoRequest) {
    _instance.userId = _instance.userId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeInt64String(1, _instance.userId);
    }
  }

  private _userId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserInfoRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    GetUserInfoRequest.refineValues(this);
  }
  get userId(): string | undefined {
    return this._userId;
  }
  set userId(value: string | undefined) {
    this._userId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserInfoRequest.AsObject {
    return {
      userId: this.userId
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
  ): GetUserInfoRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module GetUserInfoRequest {
  /**
   * Standard JavaScript object representation for GetUserInfoRequest
   */
  export interface AsObject {
    userId?: string;
  }

  /**
   * Protobuf JSON representation for GetUserInfoRequest
   */
  export interface AsProtobufJSON {
    userId?: string;
  }
}

/**
 * Message implementation for shop.GetUserInfoResponse
 */
export class GetUserInfoResponse implements GrpcMessage {
  static id = 'shop.GetUserInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserInfoResponse();
    GetUserInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserInfoResponse) {
    _instance.userName = _instance.userName || '';
    _instance.loginId = _instance.loginId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          _instance.loginId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetUserInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.loginId) {
      _writer.writeString(2, _instance.loginId);
    }
  }

  private _userName?: string;
  private _loginId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserInfoResponse.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.loginId = _value.loginId;
    GetUserInfoResponse.refineValues(this);
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }
  get loginId(): string | undefined {
    return this._loginId;
  }
  set loginId(value: string | undefined) {
    this._loginId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetUserInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserInfoResponse.AsObject {
    return {
      userName: this.userName,
      loginId: this.loginId
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
  ): GetUserInfoResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      loginId: this.loginId
    };
  }
}
export module GetUserInfoResponse {
  /**
   * Standard JavaScript object representation for GetUserInfoResponse
   */
  export interface AsObject {
    userName?: string;
    loginId?: string;
  }

  /**
   * Protobuf JSON representation for GetUserInfoResponse
   */
  export interface AsProtobufJSON {
    userName?: string;
    loginId?: string;
  }
}

/**
 * Message implementation for shop.CreateUserRequest
 */
export class CreateUserRequest implements GrpcMessage {
  static id = 'shop.CreateUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateUserRequest();
    CreateUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateUserRequest) {
    _instance.userName = _instance.userName || '';
    _instance.loginId = _instance.loginId || '';
    _instance.password = _instance.password || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          _instance.loginId = _reader.readString();
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.loginId) {
      _writer.writeString(2, _instance.loginId);
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
  }

  private _userName?: string;
  private _loginId?: string;
  private _password?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateUserRequest.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.loginId = _value.loginId;
    this.password = _value.password;
    CreateUserRequest.refineValues(this);
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }
  get loginId(): string | undefined {
    return this._loginId;
  }
  set loginId(value: string | undefined) {
    this._loginId = value;
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
    CreateUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateUserRequest.AsObject {
    return {
      userName: this.userName,
      loginId: this.loginId,
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
  ): CreateUserRequest.AsProtobufJSON {
    return {
      userName: this.userName,
      loginId: this.loginId,
      password: this.password
    };
  }
}
export module CreateUserRequest {
  /**
   * Standard JavaScript object representation for CreateUserRequest
   */
  export interface AsObject {
    userName?: string;
    loginId?: string;
    password?: string;
  }

  /**
   * Protobuf JSON representation for CreateUserRequest
   */
  export interface AsProtobufJSON {
    userName?: string;
    loginId?: string;
    password?: string;
  }
}
