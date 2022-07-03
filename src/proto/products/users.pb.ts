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
 * Message implementation for products.UsersListRequest
 */
export class UsersListRequest implements GrpcMessage {
  static id = 'products.UsersListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UsersListRequest();
    UsersListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UsersListRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.keyWord = _instance.keyWord || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UsersListRequest,
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
          _instance.keyWord = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UsersListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UsersListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.keyWord) {
      _writer.writeString(2, _instance.keyWord);
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _keyWord?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UsersListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UsersListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.keyWord = _value.keyWord;
    UsersListRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }
  get keyWord(): string | undefined {
    return this._keyWord;
  }
  set keyWord(value: string | undefined) {
    this._keyWord = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UsersListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UsersListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      keyWord: this.keyWord
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
  ): UsersListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      keyWord: this.keyWord
    };
  }
}
export module UsersListRequest {
  /**
   * Standard JavaScript object representation for UsersListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    keyWord?: string;
  }

  /**
   * Protobuf JSON representation for UsersListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    keyWord?: string;
  }
}

/**
 * Message implementation for products.UsersListResponse
 */
export class UsersListResponse implements GrpcMessage {
  static id = 'products.UsersListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UsersListResponse();
    UsersListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UsersListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UsersListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new UserData();
          _reader.readMessage(
            messageInitializer1,
            UserData.deserializeBinaryFromReader
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

    UsersListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UsersListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        UserData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: UserData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UsersListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UsersListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new UserData(m));
    this.total = _value.total;
    UsersListResponse.refineValues(this);
  }
  get data(): UserData[] | undefined {
    return this._data;
  }
  set data(value: UserData[] | undefined) {
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
    UsersListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UsersListResponse.AsObject {
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
  ): UsersListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module UsersListResponse {
  /**
   * Standard JavaScript object representation for UsersListResponse
   */
  export interface AsObject {
    data?: UserData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for UsersListResponse
   */
  export interface AsProtobufJSON {
    data?: UserData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for products.UserData
 */
export class UserData implements GrpcMessage {
  static id = 'products.UserData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserData();
    UserData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserData) {
    _instance.userId = _instance.userId || '';
    _instance.userName = _instance.userName || '';
    _instance.userRole = _instance.userRole || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.tel = _instance.tel || '';
    _instance.email = _instance.email || '';
    _instance.loginId = _instance.loginId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        case 2:
          _instance.userName = _reader.readString();
          break;
        case 3:
          _instance.userRole = _reader.readString();
          break;
        case 4:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.tel = _reader.readString();
          break;
        case 6:
          _instance.email = _reader.readString();
          break;
        case 7:
          _instance.loginId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserData, _writer: BinaryWriter) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
    if (_instance.userName) {
      _writer.writeString(2, _instance.userName);
    }
    if (_instance.userRole) {
      _writer.writeString(3, _instance.userRole);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        4,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.tel) {
      _writer.writeString(5, _instance.tel);
    }
    if (_instance.email) {
      _writer.writeString(6, _instance.email);
    }
    if (_instance.loginId) {
      _writer.writeString(7, _instance.loginId);
    }
  }

  private _userId?: string;
  private _userName?: string;
  private _userRole?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _tel?: string;
  private _email?: string;
  private _loginId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserData to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserData.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    this.userName = _value.userName;
    this.userRole = _value.userRole;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.tel = _value.tel;
    this.email = _value.email;
    this.loginId = _value.loginId;
    UserData.refineValues(this);
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
  get userRole(): string | undefined {
    return this._userRole;
  }
  set userRole(value: string | undefined) {
    this._userRole = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get tel(): string | undefined {
    return this._tel;
  }
  set tel(value: string | undefined) {
    this._tel = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
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
    UserData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserData.AsObject {
    return {
      userId: this.userId,
      userName: this.userName,
      userRole: this.userRole,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      tel: this.tel,
      email: this.email,
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
  ): UserData.AsProtobufJSON {
    return {
      userId: this.userId,
      userName: this.userName,
      userRole: this.userRole,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      tel: this.tel,
      email: this.email,
      loginId: this.loginId
    };
  }
}
export module UserData {
  /**
   * Standard JavaScript object representation for UserData
   */
  export interface AsObject {
    userId?: string;
    userName?: string;
    userRole?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    tel?: string;
    email?: string;
    loginId?: string;
  }

  /**
   * Protobuf JSON representation for UserData
   */
  export interface AsProtobufJSON {
    userId?: string;
    userName?: string;
    userRole?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    tel?: string;
    email?: string;
    loginId?: string;
  }
}

/**
 * Message implementation for products.UserInfoRequest
 */
export class UserInfoRequest implements GrpcMessage {
  static id = 'products.UserInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfoRequest();
    UserInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfoRequest) {
    _instance.userId = _instance.userId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeString(1, _instance.userId);
    }
  }

  private _userId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfoRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId;
    UserInfoRequest.refineValues(this);
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
    UserInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfoRequest.AsObject {
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
  ): UserInfoRequest.AsProtobufJSON {
    return {
      userId: this.userId
    };
  }
}
export module UserInfoRequest {
  /**
   * Standard JavaScript object representation for UserInfoRequest
   */
  export interface AsObject {
    userId?: string;
  }

  /**
   * Protobuf JSON representation for UserInfoRequest
   */
  export interface AsProtobufJSON {
    userId?: string;
  }
}

/**
 * Message implementation for products.UserInfoResponse
 */
export class UserInfoResponse implements GrpcMessage {
  static id = 'products.UserInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfoResponse();
    UserInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfoResponse) {
    _instance.userName = _instance.userName || '';
    _instance.userRoleId = _instance.userRoleId || '0';
    _instance.userRole = _instance.userRole || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.tel = _instance.tel || '';
    _instance.email = _instance.email || '';
    _instance.loginId = _instance.loginId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userName = _reader.readString();
          break;
        case 2:
          _instance.userRoleId = _reader.readInt64String();
          break;
        case 3:
          _instance.userRole = _reader.readString();
          break;
        case 4:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.tel = _reader.readString();
          break;
        case 6:
          _instance.email = _reader.readString();
          break;
        case 7:
          _instance.loginId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.userName) {
      _writer.writeString(1, _instance.userName);
    }
    if (_instance.userRoleId) {
      _writer.writeInt64String(2, _instance.userRoleId);
    }
    if (_instance.userRole) {
      _writer.writeString(3, _instance.userRole);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        4,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.tel) {
      _writer.writeString(5, _instance.tel);
    }
    if (_instance.email) {
      _writer.writeString(6, _instance.email);
    }
    if (_instance.loginId) {
      _writer.writeString(7, _instance.loginId);
    }
  }

  private _userName?: string;
  private _userRoleId?: string;
  private _userRole?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _tel?: string;
  private _email?: string;
  private _loginId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfoResponse.AsObject>) {
    _value = _value || {};
    this.userName = _value.userName;
    this.userRoleId = _value.userRoleId;
    this.userRole = _value.userRole;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.tel = _value.tel;
    this.email = _value.email;
    this.loginId = _value.loginId;
    UserInfoResponse.refineValues(this);
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }
  get userRoleId(): string | undefined {
    return this._userRoleId;
  }
  set userRoleId(value: string | undefined) {
    this._userRoleId = value;
  }
  get userRole(): string | undefined {
    return this._userRole;
  }
  set userRole(value: string | undefined) {
    this._userRole = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get tel(): string | undefined {
    return this._tel;
  }
  set tel(value: string | undefined) {
    this._tel = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
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
    UserInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfoResponse.AsObject {
    return {
      userName: this.userName,
      userRoleId: this.userRoleId,
      userRole: this.userRole,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      tel: this.tel,
      email: this.email,
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
  ): UserInfoResponse.AsProtobufJSON {
    return {
      userName: this.userName,
      userRoleId: this.userRoleId,
      userRole: this.userRole,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      tel: this.tel,
      email: this.email,
      loginId: this.loginId
    };
  }
}
export module UserInfoResponse {
  /**
   * Standard JavaScript object representation for UserInfoResponse
   */
  export interface AsObject {
    userName?: string;
    userRoleId?: string;
    userRole?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    tel?: string;
    email?: string;
    loginId?: string;
  }

  /**
   * Protobuf JSON representation for UserInfoResponse
   */
  export interface AsProtobufJSON {
    userName?: string;
    userRoleId?: string;
    userRole?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    tel?: string;
    email?: string;
    loginId?: string;
  }
}

/**
 * Message implementation for products.UserEntryRequest
 */
export class UserEntryRequest implements GrpcMessage {
  static id = 'products.UserEntryRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserEntryRequest();
    UserEntryRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserEntryRequest) {
    _instance.userId = _instance.userId || undefined;
    _instance.userName = _instance.userName || '';
    _instance.userRoleId = _instance.userRoleId || '0';
    _instance.tel = _instance.tel || '';
    _instance.email = _instance.email || '';
    _instance.passwordThen = _instance.passwordThen || undefined;
    _instance.passwordNow = _instance.passwordNow || undefined;
    _instance.loginId = _instance.loginId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserEntryRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.userId = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.userId,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.userName = _reader.readString();
          break;
        case 3:
          _instance.userRoleId = _reader.readInt64String();
          break;
        case 4:
          _instance.tel = _reader.readString();
          break;
        case 5:
          _instance.email = _reader.readString();
          break;
        case 6:
          _instance.passwordThen = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.passwordThen,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.passwordNow = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.passwordNow,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.loginId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserEntryRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UserEntryRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.userId) {
      _writer.writeMessage(
        1,
        _instance.userId as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.userName) {
      _writer.writeString(2, _instance.userName);
    }
    if (_instance.userRoleId) {
      _writer.writeInt64String(3, _instance.userRoleId);
    }
    if (_instance.tel) {
      _writer.writeString(4, _instance.tel);
    }
    if (_instance.email) {
      _writer.writeString(5, _instance.email);
    }
    if (_instance.passwordThen) {
      _writer.writeMessage(
        6,
        _instance.passwordThen as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.passwordNow) {
      _writer.writeMessage(
        7,
        _instance.passwordNow as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.loginId) {
      _writer.writeString(8, _instance.loginId);
    }
  }

  private _userId?: googleProtobuf000.StringValue;
  private _userName?: string;
  private _userRoleId?: string;
  private _tel?: string;
  private _email?: string;
  private _passwordThen?: googleProtobuf000.StringValue;
  private _passwordNow?: googleProtobuf000.StringValue;
  private _loginId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserEntryRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserEntryRequest.AsObject>) {
    _value = _value || {};
    this.userId = _value.userId
      ? new googleProtobuf000.StringValue(_value.userId)
      : undefined;
    this.userName = _value.userName;
    this.userRoleId = _value.userRoleId;
    this.tel = _value.tel;
    this.email = _value.email;
    this.passwordThen = _value.passwordThen
      ? new googleProtobuf000.StringValue(_value.passwordThen)
      : undefined;
    this.passwordNow = _value.passwordNow
      ? new googleProtobuf000.StringValue(_value.passwordNow)
      : undefined;
    this.loginId = _value.loginId;
    UserEntryRequest.refineValues(this);
  }
  get userId(): googleProtobuf000.StringValue | undefined {
    return this._userId;
  }
  set userId(value: googleProtobuf000.StringValue | undefined) {
    this._userId = value;
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }
  get userRoleId(): string | undefined {
    return this._userRoleId;
  }
  set userRoleId(value: string | undefined) {
    this._userRoleId = value;
  }
  get tel(): string | undefined {
    return this._tel;
  }
  set tel(value: string | undefined) {
    this._tel = value;
  }
  get email(): string | undefined {
    return this._email;
  }
  set email(value: string | undefined) {
    this._email = value;
  }
  get passwordThen(): googleProtobuf000.StringValue | undefined {
    return this._passwordThen;
  }
  set passwordThen(value: googleProtobuf000.StringValue | undefined) {
    this._passwordThen = value;
  }
  get passwordNow(): googleProtobuf000.StringValue | undefined {
    return this._passwordNow;
  }
  set passwordNow(value: googleProtobuf000.StringValue | undefined) {
    this._passwordNow = value;
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
    UserEntryRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserEntryRequest.AsObject {
    return {
      userId: this.userId ? this.userId.toObject() : undefined,
      userName: this.userName,
      userRoleId: this.userRoleId,
      tel: this.tel,
      email: this.email,
      passwordThen: this.passwordThen
        ? this.passwordThen.toObject()
        : undefined,
      passwordNow: this.passwordNow ? this.passwordNow.toObject() : undefined,
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
  ): UserEntryRequest.AsProtobufJSON {
    return {
      userId: this.userId ? this.userId.toProtobufJSON(options) : null,
      userName: this.userName,
      userRoleId: this.userRoleId,
      tel: this.tel,
      email: this.email,
      passwordThen: this.passwordThen
        ? this.passwordThen.toProtobufJSON(options)
        : null,
      passwordNow: this.passwordNow
        ? this.passwordNow.toProtobufJSON(options)
        : null,
      loginId: this.loginId
    };
  }
}
export module UserEntryRequest {
  /**
   * Standard JavaScript object representation for UserEntryRequest
   */
  export interface AsObject {
    userId?: googleProtobuf000.StringValue.AsObject;
    userName?: string;
    userRoleId?: string;
    tel?: string;
    email?: string;
    passwordThen?: googleProtobuf000.StringValue.AsObject;
    passwordNow?: googleProtobuf000.StringValue.AsObject;
    loginId?: string;
  }

  /**
   * Protobuf JSON representation for UserEntryRequest
   */
  export interface AsProtobufJSON {
    userId?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    userName?: string;
    userRoleId?: string;
    tel?: string;
    email?: string;
    passwordThen?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    passwordNow?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    loginId?: string;
  }
}
