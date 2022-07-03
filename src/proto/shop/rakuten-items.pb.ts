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
 * Message implementation for shop.GetRakutenProductRequest
 */
export class GetRakutenProductRequest implements GrpcMessage {
  static id = 'shop.GetRakutenProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRakutenProductRequest();
    GetRakutenProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRakutenProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRakutenProductRequest,
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

    GetRakutenProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRakutenProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRakutenProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetRakutenProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    GetRakutenProductRequest.refineValues(this);
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
    GetRakutenProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRakutenProductRequest.AsObject {
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
  ): GetRakutenProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module GetRakutenProductRequest {
  /**
   * Standard JavaScript object representation for GetRakutenProductRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for GetRakutenProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.GetRakutenProductResponse
 */
export class GetRakutenProductResponse implements GrpcMessage {
  static id = 'shop.GetRakutenProductResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRakutenProductResponse();
    GetRakutenProductResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRakutenProductResponse) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productControlNumber = _instance.productControlNumber || '';
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
    _instance.depotStatus = _instance.depotStatus || '0';
    _instance.price = _instance.price || '0';
    _instance.description = _instance.description || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRakutenProductResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.productControlNumber = _reader.readString();
          break;
        case 3:
          _instance.productId = _reader.readString();
          break;
        case 4:
          _instance.productItemName = _reader.readString();
          break;
        case 5:
          _instance.depotStatus = _reader.readInt64String();
          break;
        case 6:
          _instance.price = _reader.readInt64String();
          break;
        case 7:
          _instance.description = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetRakutenProductResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRakutenProductResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productControlNumber) {
      _writer.writeString(2, _instance.productControlNumber);
    }
    if (_instance.productId) {
      _writer.writeString(3, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(4, _instance.productItemName);
    }
    if (_instance.depotStatus) {
      _writer.writeInt64String(5, _instance.depotStatus);
    }
    if (_instance.price) {
      _writer.writeInt64String(6, _instance.price);
    }
    if (_instance.description) {
      _writer.writeString(7, _instance.description);
    }
  }

  private _productItemId?: string;
  private _productControlNumber?: string;
  private _productId?: string;
  private _productItemName?: string;
  private _depotStatus?: string;
  private _price?: string;
  private _description?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRakutenProductResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetRakutenProductResponse.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productControlNumber = _value.productControlNumber;
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    this.depotStatus = _value.depotStatus;
    this.price = _value.price;
    this.description = _value.description;
    GetRakutenProductResponse.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get productControlNumber(): string | undefined {
    return this._productControlNumber;
  }
  set productControlNumber(value: string | undefined) {
    this._productControlNumber = value;
  }
  get productId(): string | undefined {
    return this._productId;
  }
  set productId(value: string | undefined) {
    this._productId = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get depotStatus(): string | undefined {
    return this._depotStatus;
  }
  set depotStatus(value: string | undefined) {
    this._depotStatus = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetRakutenProductResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRakutenProductResponse.AsObject {
    return {
      productItemId: this.productItemId,
      productControlNumber: this.productControlNumber,
      productId: this.productId,
      productItemName: this.productItemName,
      depotStatus: this.depotStatus,
      price: this.price,
      description: this.description
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
  ): GetRakutenProductResponse.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productControlNumber: this.productControlNumber,
      productId: this.productId,
      productItemName: this.productItemName,
      depotStatus: this.depotStatus,
      price: this.price,
      description: this.description
    };
  }
}
export module GetRakutenProductResponse {
  /**
   * Standard JavaScript object representation for GetRakutenProductResponse
   */
  export interface AsObject {
    productItemId?: string;
    productControlNumber?: string;
    productId?: string;
    productItemName?: string;
    depotStatus?: string;
    price?: string;
    description?: string;
  }

  /**
   * Protobuf JSON representation for GetRakutenProductResponse
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productControlNumber?: string;
    productId?: string;
    productItemName?: string;
    depotStatus?: string;
    price?: string;
    description?: string;
  }
}

/**
 * Message implementation for shop.UpdateRakutenProductRequest
 */
export class UpdateRakutenProductRequest implements GrpcMessage {
  static id = 'shop.UpdateRakutenProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateRakutenProductRequest();
    UpdateRakutenProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateRakutenProductRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.openStatus = _instance.openStatus || '0';
    _instance.price = _instance.price || '0';
    _instance.catchCopy = _instance.catchCopy || '';
    _instance.productDetail = _instance.productDetail || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateRakutenProductRequest,
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
          _instance.openStatus = _reader.readInt64String();
          break;
        case 4:
          _instance.price = _reader.readInt64String();
          break;
        case 5:
          _instance.catchCopy = _reader.readString();
          break;
        case 6:
          _instance.productDetail = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateRakutenProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateRakutenProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.openStatus) {
      _writer.writeInt64String(3, _instance.openStatus);
    }
    if (_instance.price) {
      _writer.writeInt64String(4, _instance.price);
    }
    if (_instance.catchCopy) {
      _writer.writeString(5, _instance.catchCopy);
    }
    if (_instance.productDetail) {
      _writer.writeString(6, _instance.productDetail);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _openStatus?: string;
  private _price?: string;
  private _catchCopy?: string;
  private _productDetail?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateRakutenProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateRakutenProductRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.openStatus = _value.openStatus;
    this.price = _value.price;
    this.catchCopy = _value.catchCopy;
    this.productDetail = _value.productDetail;
    UpdateRakutenProductRequest.refineValues(this);
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
  get openStatus(): string | undefined {
    return this._openStatus;
  }
  set openStatus(value: string | undefined) {
    this._openStatus = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get catchCopy(): string | undefined {
    return this._catchCopy;
  }
  set catchCopy(value: string | undefined) {
    this._catchCopy = value;
  }
  get productDetail(): string | undefined {
    return this._productDetail;
  }
  set productDetail(value: string | undefined) {
    this._productDetail = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateRakutenProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateRakutenProductRequest.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      openStatus: this.openStatus,
      price: this.price,
      catchCopy: this.catchCopy,
      productDetail: this.productDetail
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
  ): UpdateRakutenProductRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      openStatus: this.openStatus,
      price: this.price,
      catchCopy: this.catchCopy,
      productDetail: this.productDetail
    };
  }
}
export module UpdateRakutenProductRequest {
  /**
   * Standard JavaScript object representation for UpdateRakutenProductRequest
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    openStatus?: string;
    price?: string;
    catchCopy?: string;
    productDetail?: string;
  }

  /**
   * Protobuf JSON representation for UpdateRakutenProductRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    openStatus?: string;
    price?: string;
    catchCopy?: string;
    productDetail?: string;
  }
}

/**
 * Message implementation for shop.ApplayRakutenProductRequest
 */
export class ApplayRakutenProductRequest implements GrpcMessage {
  static id = 'shop.ApplayRakutenProductRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ApplayRakutenProductRequest();
    ApplayRakutenProductRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ApplayRakutenProductRequest) {
    _instance.itemId = _instance.itemId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ApplayRakutenProductRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.itemId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ApplayRakutenProductRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ApplayRakutenProductRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.itemId) {
      _writer.writeString(1, _instance.itemId);
    }
  }

  private _itemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ApplayRakutenProductRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ApplayRakutenProductRequest.AsObject>) {
    _value = _value || {};
    this.itemId = _value.itemId;
    ApplayRakutenProductRequest.refineValues(this);
  }
  get itemId(): string | undefined {
    return this._itemId;
  }
  set itemId(value: string | undefined) {
    this._itemId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ApplayRakutenProductRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ApplayRakutenProductRequest.AsObject {
    return {
      itemId: this.itemId
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
  ): ApplayRakutenProductRequest.AsProtobufJSON {
    return {
      itemId: this.itemId
    };
  }
}
export module ApplayRakutenProductRequest {
  /**
   * Standard JavaScript object representation for ApplayRakutenProductRequest
   */
  export interface AsObject {
    itemId?: string;
  }

  /**
   * Protobuf JSON representation for ApplayRakutenProductRequest
   */
  export interface AsProtobufJSON {
    itemId?: string;
  }
}
