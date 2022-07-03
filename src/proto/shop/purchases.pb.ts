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
 * Message implementation for shop.PurchasesListRequest
 */
export class PurchasesListRequest implements GrpcMessage {
  static id = 'shop.PurchasesListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesListRequest();
    PurchasesListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesListRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.productNo = _instance.productNo || undefined;
    _instance.productName = _instance.productName || undefined;
    _instance.supplierName = _instance.supplierName || undefined;
    _instance.purchaseDateStart = _instance.purchaseDateStart || undefined;
    _instance.purchaseDateEnd = _instance.purchaseDateEnd || undefined;
    _instance.purchaseUserInCharge =
      _instance.purchaseUserInCharge || undefined;
    _instance.statuses = _instance.statuses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesListRequest,
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
          _instance.productNo = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productNo,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.productName = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productName,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.supplierName = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.supplierName,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.purchaseDateStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.purchaseDateStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.purchaseDateEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.purchaseDateEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.purchaseUserInCharge = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.purchaseUserInCharge,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          (_instance.statuses = _instance.statuses || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasesListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.productNo) {
      _writer.writeMessage(
        2,
        _instance.productNo as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.productName) {
      _writer.writeMessage(
        3,
        _instance.productName as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.supplierName) {
      _writer.writeMessage(
        4,
        _instance.supplierName as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseDateStart) {
      _writer.writeMessage(
        5,
        _instance.purchaseDateStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseDateEnd) {
      _writer.writeMessage(
        6,
        _instance.purchaseDateEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseUserInCharge) {
      _writer.writeMessage(
        7,
        _instance.purchaseUserInCharge as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedInt64String(8, _instance.statuses);
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _productNo?: googleProtobuf000.StringValue;
  private _productName?: googleProtobuf000.StringValue;
  private _supplierName?: googleProtobuf000.Int64Value;
  private _purchaseDateStart?: googleProtobuf002.Timestamp;
  private _purchaseDateEnd?: googleProtobuf002.Timestamp;
  private _purchaseUserInCharge?: googleProtobuf002.Timestamp;
  private _statuses?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasesListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.productNo = _value.productNo
      ? new googleProtobuf000.StringValue(_value.productNo)
      : undefined;
    this.productName = _value.productName
      ? new googleProtobuf000.StringValue(_value.productName)
      : undefined;
    this.supplierName = _value.supplierName
      ? new googleProtobuf000.Int64Value(_value.supplierName)
      : undefined;
    this.purchaseDateStart = _value.purchaseDateStart
      ? new googleProtobuf002.Timestamp(_value.purchaseDateStart)
      : undefined;
    this.purchaseDateEnd = _value.purchaseDateEnd
      ? new googleProtobuf002.Timestamp(_value.purchaseDateEnd)
      : undefined;
    this.purchaseUserInCharge = _value.purchaseUserInCharge
      ? new googleProtobuf002.Timestamp(_value.purchaseUserInCharge)
      : undefined;
    this.statuses = (_value.statuses || []).slice();
    PurchasesListRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }
  get productNo(): googleProtobuf000.StringValue | undefined {
    return this._productNo;
  }
  set productNo(value: googleProtobuf000.StringValue | undefined) {
    this._productNo = value;
  }
  get productName(): googleProtobuf000.StringValue | undefined {
    return this._productName;
  }
  set productName(value: googleProtobuf000.StringValue | undefined) {
    this._productName = value;
  }
  get supplierName(): googleProtobuf000.Int64Value | undefined {
    return this._supplierName;
  }
  set supplierName(value: googleProtobuf000.Int64Value | undefined) {
    this._supplierName = value;
  }
  get purchaseDateStart(): googleProtobuf002.Timestamp | undefined {
    return this._purchaseDateStart;
  }
  set purchaseDateStart(value: googleProtobuf002.Timestamp | undefined) {
    this._purchaseDateStart = value;
  }
  get purchaseDateEnd(): googleProtobuf002.Timestamp | undefined {
    return this._purchaseDateEnd;
  }
  set purchaseDateEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._purchaseDateEnd = value;
  }
  get purchaseUserInCharge(): googleProtobuf002.Timestamp | undefined {
    return this._purchaseUserInCharge;
  }
  set purchaseUserInCharge(value: googleProtobuf002.Timestamp | undefined) {
    this._purchaseUserInCharge = value;
  }
  get statuses(): string[] | undefined {
    return this._statuses;
  }
  set statuses(value: string[] | undefined) {
    this._statuses = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasesListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      productNo: this.productNo ? this.productNo.toObject() : undefined,
      productName: this.productName ? this.productName.toObject() : undefined,
      supplierName: this.supplierName
        ? this.supplierName.toObject()
        : undefined,
      purchaseDateStart: this.purchaseDateStart
        ? this.purchaseDateStart.toObject()
        : undefined,
      purchaseDateEnd: this.purchaseDateEnd
        ? this.purchaseDateEnd.toObject()
        : undefined,
      purchaseUserInCharge: this.purchaseUserInCharge
        ? this.purchaseUserInCharge.toObject()
        : undefined,
      statuses: (this.statuses || []).slice()
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
  ): PurchasesListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      productNo: this.productNo ? this.productNo.toProtobufJSON(options) : null,
      productName: this.productName
        ? this.productName.toProtobufJSON(options)
        : null,
      supplierName: this.supplierName
        ? this.supplierName.toProtobufJSON(options)
        : null,
      purchaseDateStart: this.purchaseDateStart
        ? this.purchaseDateStart.toProtobufJSON(options)
        : null,
      purchaseDateEnd: this.purchaseDateEnd
        ? this.purchaseDateEnd.toProtobufJSON(options)
        : null,
      purchaseUserInCharge: this.purchaseUserInCharge
        ? this.purchaseUserInCharge.toProtobufJSON(options)
        : null,
      statuses: (this.statuses || []).slice()
    };
  }
}
export module PurchasesListRequest {
  /**
   * Standard JavaScript object representation for PurchasesListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    productNo?: googleProtobuf000.StringValue.AsObject;
    productName?: googleProtobuf000.StringValue.AsObject;
    supplierName?: googleProtobuf000.Int64Value.AsObject;
    purchaseDateStart?: googleProtobuf002.Timestamp.AsObject;
    purchaseDateEnd?: googleProtobuf002.Timestamp.AsObject;
    purchaseUserInCharge?: googleProtobuf002.Timestamp.AsObject;
    statuses?: string[];
  }

  /**
   * Protobuf JSON representation for PurchasesListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    productNo?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    productName?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    supplierName?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    purchaseDateStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    purchaseDateEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    purchaseUserInCharge?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    statuses?: string[];
  }
}

/**
 * Message implementation for shop.PurchasesListResponse
 */
export class PurchasesListResponse implements GrpcMessage {
  static id = 'shop.PurchasesListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesListResponse();
    PurchasesListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new PurchasesListData();
          _reader.readMessage(
            messageInitializer1,
            PurchasesListData.deserializeBinaryFromReader
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

    PurchasesListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        PurchasesListData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: PurchasesListData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasesListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new PurchasesListData(m));
    this.total = _value.total;
    PurchasesListResponse.refineValues(this);
  }
  get data(): PurchasesListData[] | undefined {
    return this._data;
  }
  set data(value: PurchasesListData[] | undefined) {
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
    PurchasesListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesListResponse.AsObject {
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
  ): PurchasesListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module PurchasesListResponse {
  /**
   * Standard JavaScript object representation for PurchasesListResponse
   */
  export interface AsObject {
    data?: PurchasesListData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for PurchasesListResponse
   */
  export interface AsProtobufJSON {
    data?: PurchasesListData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.PurchasesListData
 */
export class PurchasesListData implements GrpcMessage {
  static id = 'shop.PurchasesListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesListData();
    PurchasesListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesListData) {
    _instance.productNo = _instance.productNo || '';
    _instance.productName = _instance.productName || '';
    _instance.quantity = _instance.quantity || '';
    _instance.supplierName = _instance.supplierName || '';
    _instance.purchaseDate = _instance.purchaseDate || '';
    _instance.purchaseUserInCharge = _instance.purchaseUserInCharge || '';
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesListData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productNo = _reader.readString();
          break;
        case 2:
          _instance.productName = _reader.readString();
          break;
        case 3:
          _instance.quantity = _reader.readString();
          break;
        case 4:
          _instance.supplierName = _reader.readString();
          break;
        case 5:
          _instance.purchaseDate = _reader.readString();
          break;
        case 6:
          _instance.purchaseUserInCharge = _reader.readString();
          break;
        case 7:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasesListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesListData,
    _writer: BinaryWriter
  ) {
    if (_instance.productNo) {
      _writer.writeString(1, _instance.productNo);
    }
    if (_instance.productName) {
      _writer.writeString(2, _instance.productName);
    }
    if (_instance.quantity) {
      _writer.writeString(3, _instance.quantity);
    }
    if (_instance.supplierName) {
      _writer.writeString(4, _instance.supplierName);
    }
    if (_instance.purchaseDate) {
      _writer.writeString(5, _instance.purchaseDate);
    }
    if (_instance.purchaseUserInCharge) {
      _writer.writeString(6, _instance.purchaseUserInCharge);
    }
    if (_instance.status) {
      _writer.writeString(7, _instance.status);
    }
  }

  private _productNo?: string;
  private _productName?: string;
  private _quantity?: string;
  private _supplierName?: string;
  private _purchaseDate?: string;
  private _purchaseUserInCharge?: string;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasesListData.AsObject>) {
    _value = _value || {};
    this.productNo = _value.productNo;
    this.productName = _value.productName;
    this.quantity = _value.quantity;
    this.supplierName = _value.supplierName;
    this.purchaseDate = _value.purchaseDate;
    this.purchaseUserInCharge = _value.purchaseUserInCharge;
    this.status = _value.status;
    PurchasesListData.refineValues(this);
  }
  get productNo(): string | undefined {
    return this._productNo;
  }
  set productNo(value: string | undefined) {
    this._productNo = value;
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get supplierName(): string | undefined {
    return this._supplierName;
  }
  set supplierName(value: string | undefined) {
    this._supplierName = value;
  }
  get purchaseDate(): string | undefined {
    return this._purchaseDate;
  }
  set purchaseDate(value: string | undefined) {
    this._purchaseDate = value;
  }
  get purchaseUserInCharge(): string | undefined {
    return this._purchaseUserInCharge;
  }
  set purchaseUserInCharge(value: string | undefined) {
    this._purchaseUserInCharge = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasesListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesListData.AsObject {
    return {
      productNo: this.productNo,
      productName: this.productName,
      quantity: this.quantity,
      supplierName: this.supplierName,
      purchaseDate: this.purchaseDate,
      purchaseUserInCharge: this.purchaseUserInCharge,
      status: this.status
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
  ): PurchasesListData.AsProtobufJSON {
    return {
      productNo: this.productNo,
      productName: this.productName,
      quantity: this.quantity,
      supplierName: this.supplierName,
      purchaseDate: this.purchaseDate,
      purchaseUserInCharge: this.purchaseUserInCharge,
      status: this.status
    };
  }
}
export module PurchasesListData {
  /**
   * Standard JavaScript object representation for PurchasesListData
   */
  export interface AsObject {
    productNo?: string;
    productName?: string;
    quantity?: string;
    supplierName?: string;
    purchaseDate?: string;
    purchaseUserInCharge?: string;
    status?: string;
  }

  /**
   * Protobuf JSON representation for PurchasesListData
   */
  export interface AsProtobufJSON {
    productNo?: string;
    productName?: string;
    quantity?: string;
    supplierName?: string;
    purchaseDate?: string;
    purchaseUserInCharge?: string;
    status?: string;
  }
}

/**
 * Message implementation for shop.PurchasesListInfoRequest
 */
export class PurchasesListInfoRequest implements GrpcMessage {
  static id = 'shop.PurchasesListInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesListInfoRequest();
    PurchasesListInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesListInfoRequest) {
    _instance.purchaseId = _instance.purchaseId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesListInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchaseId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasesListInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesListInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.purchaseId) {
      _writer.writeString(1, _instance.purchaseId);
    }
  }

  private _purchaseId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesListInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasesListInfoRequest.AsObject>) {
    _value = _value || {};
    this.purchaseId = _value.purchaseId;
    PurchasesListInfoRequest.refineValues(this);
  }
  get purchaseId(): string | undefined {
    return this._purchaseId;
  }
  set purchaseId(value: string | undefined) {
    this._purchaseId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasesListInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesListInfoRequest.AsObject {
    return {
      purchaseId: this.purchaseId
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
  ): PurchasesListInfoRequest.AsProtobufJSON {
    return {
      purchaseId: this.purchaseId
    };
  }
}
export module PurchasesListInfoRequest {
  /**
   * Standard JavaScript object representation for PurchasesListInfoRequest
   */
  export interface AsObject {
    purchaseId?: string;
  }

  /**
   * Protobuf JSON representation for PurchasesListInfoRequest
   */
  export interface AsProtobufJSON {
    purchaseId?: string;
  }
}

/**
 * Message implementation for shop.PurchasesListInfoResponse
 */
export class PurchasesListInfoResponse implements GrpcMessage {
  static id = 'shop.PurchasesListInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesListInfoResponse();
    PurchasesListInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesListInfoResponse) {
    _instance.productNo = _instance.productNo || '';
    _instance.productName = _instance.productName || '';
    _instance.quantity = _instance.quantity || '';
    _instance.supplierName = _instance.supplierName || '';
    _instance.purchaseDate = _instance.purchaseDate || '';
    _instance.purchaseUserInCharge = _instance.purchaseUserInCharge || '';
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesListInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productNo = _reader.readString();
          break;
        case 2:
          _instance.productName = _reader.readString();
          break;
        case 3:
          _instance.quantity = _reader.readString();
          break;
        case 4:
          _instance.supplierName = _reader.readString();
          break;
        case 5:
          _instance.purchaseDate = _reader.readString();
          break;
        case 6:
          _instance.purchaseUserInCharge = _reader.readString();
          break;
        case 7:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasesListInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesListInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productNo) {
      _writer.writeString(1, _instance.productNo);
    }
    if (_instance.productName) {
      _writer.writeString(2, _instance.productName);
    }
    if (_instance.quantity) {
      _writer.writeString(3, _instance.quantity);
    }
    if (_instance.supplierName) {
      _writer.writeString(4, _instance.supplierName);
    }
    if (_instance.purchaseDate) {
      _writer.writeString(5, _instance.purchaseDate);
    }
    if (_instance.purchaseUserInCharge) {
      _writer.writeString(6, _instance.purchaseUserInCharge);
    }
    if (_instance.status) {
      _writer.writeString(7, _instance.status);
    }
  }

  private _productNo?: string;
  private _productName?: string;
  private _quantity?: string;
  private _supplierName?: string;
  private _purchaseDate?: string;
  private _purchaseUserInCharge?: string;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesListInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasesListInfoResponse.AsObject>) {
    _value = _value || {};
    this.productNo = _value.productNo;
    this.productName = _value.productName;
    this.quantity = _value.quantity;
    this.supplierName = _value.supplierName;
    this.purchaseDate = _value.purchaseDate;
    this.purchaseUserInCharge = _value.purchaseUserInCharge;
    this.status = _value.status;
    PurchasesListInfoResponse.refineValues(this);
  }
  get productNo(): string | undefined {
    return this._productNo;
  }
  set productNo(value: string | undefined) {
    this._productNo = value;
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get supplierName(): string | undefined {
    return this._supplierName;
  }
  set supplierName(value: string | undefined) {
    this._supplierName = value;
  }
  get purchaseDate(): string | undefined {
    return this._purchaseDate;
  }
  set purchaseDate(value: string | undefined) {
    this._purchaseDate = value;
  }
  get purchaseUserInCharge(): string | undefined {
    return this._purchaseUserInCharge;
  }
  set purchaseUserInCharge(value: string | undefined) {
    this._purchaseUserInCharge = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasesListInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesListInfoResponse.AsObject {
    return {
      productNo: this.productNo,
      productName: this.productName,
      quantity: this.quantity,
      supplierName: this.supplierName,
      purchaseDate: this.purchaseDate,
      purchaseUserInCharge: this.purchaseUserInCharge,
      status: this.status
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
  ): PurchasesListInfoResponse.AsProtobufJSON {
    return {
      productNo: this.productNo,
      productName: this.productName,
      quantity: this.quantity,
      supplierName: this.supplierName,
      purchaseDate: this.purchaseDate,
      purchaseUserInCharge: this.purchaseUserInCharge,
      status: this.status
    };
  }
}
export module PurchasesListInfoResponse {
  /**
   * Standard JavaScript object representation for PurchasesListInfoResponse
   */
  export interface AsObject {
    productNo?: string;
    productName?: string;
    quantity?: string;
    supplierName?: string;
    purchaseDate?: string;
    purchaseUserInCharge?: string;
    status?: string;
  }

  /**
   * Protobuf JSON representation for PurchasesListInfoResponse
   */
  export interface AsProtobufJSON {
    productNo?: string;
    productName?: string;
    quantity?: string;
    supplierName?: string;
    purchaseDate?: string;
    purchaseUserInCharge?: string;
    status?: string;
  }
}

/**
 * Message implementation for shop.PurchasesStatusChangeRequest
 */
export class PurchasesStatusChangeRequest implements GrpcMessage {
  static id = 'shop.PurchasesStatusChangeRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasesStatusChangeRequest();
    PurchasesStatusChangeRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasesStatusChangeRequest) {
    _instance.purchaseId = _instance.purchaseId || '';
    _instance.status = _instance.status || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasesStatusChangeRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchaseId = _reader.readString();
          break;
        case 2:
          _instance.status = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasesStatusChangeRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasesStatusChangeRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.purchaseId) {
      _writer.writeString(1, _instance.purchaseId);
    }
    if (_instance.status) {
      _writer.writeInt64String(2, _instance.status);
    }
  }

  private _purchaseId?: string;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasesStatusChangeRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<PurchasesStatusChangeRequest.AsObject>
  ) {
    _value = _value || {};
    this.purchaseId = _value.purchaseId;
    this.status = _value.status;
    PurchasesStatusChangeRequest.refineValues(this);
  }
  get purchaseId(): string | undefined {
    return this._purchaseId;
  }
  set purchaseId(value: string | undefined) {
    this._purchaseId = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasesStatusChangeRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasesStatusChangeRequest.AsObject {
    return {
      purchaseId: this.purchaseId,
      status: this.status
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
  ): PurchasesStatusChangeRequest.AsProtobufJSON {
    return {
      purchaseId: this.purchaseId,
      status: this.status
    };
  }
}
export module PurchasesStatusChangeRequest {
  /**
   * Standard JavaScript object representation for PurchasesStatusChangeRequest
   */
  export interface AsObject {
    purchaseId?: string;
    status?: string;
  }

  /**
   * Protobuf JSON representation for PurchasesStatusChangeRequest
   */
  export interface AsProtobufJSON {
    purchaseId?: string;
    status?: string;
  }
}
