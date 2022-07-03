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
/**
 * Message implementation for products.RolesListResponse
 */
export class RolesListResponse implements GrpcMessage {
  static id = 'products.RolesListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RolesListResponse();
    RolesListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RolesListResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RolesListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new RoleData();
          _reader.readMessage(
            messageInitializer1,
            RoleData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    RolesListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RolesListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        RoleData.serializeBinaryToWriter
      );
    }
  }

  private _data?: RoleData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RolesListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<RolesListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new RoleData(m));
    RolesListResponse.refineValues(this);
  }
  get data(): RoleData[] | undefined {
    return this._data;
  }
  set data(value: RoleData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RolesListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RolesListResponse.AsObject {
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
  ): RolesListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module RolesListResponse {
  /**
   * Standard JavaScript object representation for RolesListResponse
   */
  export interface AsObject {
    data?: RoleData.AsObject[];
  }

  /**
   * Protobuf JSON representation for RolesListResponse
   */
  export interface AsProtobufJSON {
    data?: RoleData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for products.RoleData
 */
export class RoleData implements GrpcMessage {
  static id = 'products.RoleData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RoleData();
    RoleData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RoleData) {
    _instance.roleId = _instance.roleId || '0';
    _instance.roleName = _instance.roleName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RoleData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.roleId = _reader.readInt64String();
          break;
        case 2:
          _instance.roleName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RoleData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: RoleData, _writer: BinaryWriter) {
    if (_instance.roleId) {
      _writer.writeInt64String(1, _instance.roleId);
    }
    if (_instance.roleName) {
      _writer.writeString(2, _instance.roleName);
    }
  }

  private _roleId?: string;
  private _roleName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RoleData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RoleData.AsObject>) {
    _value = _value || {};
    this.roleId = _value.roleId;
    this.roleName = _value.roleName;
    RoleData.refineValues(this);
  }
  get roleId(): string | undefined {
    return this._roleId;
  }
  set roleId(value: string | undefined) {
    this._roleId = value;
  }
  get roleName(): string | undefined {
    return this._roleName;
  }
  set roleName(value: string | undefined) {
    this._roleName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RoleData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RoleData.AsObject {
    return {
      roleId: this.roleId,
      roleName: this.roleName
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
  ): RoleData.AsProtobufJSON {
    return {
      roleId: this.roleId,
      roleName: this.roleName
    };
  }
}
export module RoleData {
  /**
   * Standard JavaScript object representation for RoleData
   */
  export interface AsObject {
    roleId?: string;
    roleName?: string;
  }

  /**
   * Protobuf JSON representation for RoleData
   */
  export interface AsProtobufJSON {
    roleId?: string;
    roleName?: string;
  }
}
