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
 * Message implementation for shop.ListOrderRequest
 */
export class ListOrderRequest implements GrpcMessage {
  static id = 'shop.ListOrderRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOrderRequest();
    ListOrderRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOrderRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.userName = _instance.userName || undefined;
    _instance.productTitle = _instance.productTitle || undefined;
    _instance.purchaseStoreId = _instance.purchaseStoreId || undefined;
    _instance.purchaseDateStart = _instance.purchaseDateStart || undefined;
    _instance.purchaseDateEnd = _instance.purchaseDateEnd || undefined;
    _instance.statuses = _instance.statuses || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOrderRequest,
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
          _instance.userName = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.userName,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.productTitle = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productTitle,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.purchaseStoreId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.purchaseStoreId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.purchaseDateStart = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.purchaseDateStart,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.purchaseDateEnd = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.purchaseDateEnd,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          (_instance.statuses = _instance.statuses || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListOrderRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOrderRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.userName) {
      _writer.writeMessage(
        2,
        _instance.userName as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.productTitle) {
      _writer.writeMessage(
        3,
        _instance.productTitle as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseStoreId) {
      _writer.writeMessage(
        4,
        _instance.purchaseStoreId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseDateStart) {
      _writer.writeMessage(
        5,
        _instance.purchaseDateStart as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseDateEnd) {
      _writer.writeMessage(
        6,
        _instance.purchaseDateEnd as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.statuses && _instance.statuses.length) {
      _writer.writePackedInt64String(7, _instance.statuses);
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _userName?: googleProtobuf000.StringValue;
  private _productTitle?: googleProtobuf000.StringValue;
  private _purchaseStoreId?: googleProtobuf000.Int64Value;
  private _purchaseDateStart?: googleProtobuf001.Timestamp;
  private _purchaseDateEnd?: googleProtobuf001.Timestamp;
  private _statuses?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOrderRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOrderRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.userName = _value.userName
      ? new googleProtobuf000.StringValue(_value.userName)
      : undefined;
    this.productTitle = _value.productTitle
      ? new googleProtobuf000.StringValue(_value.productTitle)
      : undefined;
    this.purchaseStoreId = _value.purchaseStoreId
      ? new googleProtobuf000.Int64Value(_value.purchaseStoreId)
      : undefined;
    this.purchaseDateStart = _value.purchaseDateStart
      ? new googleProtobuf001.Timestamp(_value.purchaseDateStart)
      : undefined;
    this.purchaseDateEnd = _value.purchaseDateEnd
      ? new googleProtobuf001.Timestamp(_value.purchaseDateEnd)
      : undefined;
    this.statuses = (_value.statuses || []).slice();
    ListOrderRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }
  get userName(): googleProtobuf000.StringValue | undefined {
    return this._userName;
  }
  set userName(value: googleProtobuf000.StringValue | undefined) {
    this._userName = value;
  }
  get productTitle(): googleProtobuf000.StringValue | undefined {
    return this._productTitle;
  }
  set productTitle(value: googleProtobuf000.StringValue | undefined) {
    this._productTitle = value;
  }
  get purchaseStoreId(): googleProtobuf000.Int64Value | undefined {
    return this._purchaseStoreId;
  }
  set purchaseStoreId(value: googleProtobuf000.Int64Value | undefined) {
    this._purchaseStoreId = value;
  }
  get purchaseDateStart(): googleProtobuf001.Timestamp | undefined {
    return this._purchaseDateStart;
  }
  set purchaseDateStart(value: googleProtobuf001.Timestamp | undefined) {
    this._purchaseDateStart = value;
  }
  get purchaseDateEnd(): googleProtobuf001.Timestamp | undefined {
    return this._purchaseDateEnd;
  }
  set purchaseDateEnd(value: googleProtobuf001.Timestamp | undefined) {
    this._purchaseDateEnd = value;
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
    ListOrderRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOrderRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      userName: this.userName ? this.userName.toObject() : undefined,
      productTitle: this.productTitle
        ? this.productTitle.toObject()
        : undefined,
      purchaseStoreId: this.purchaseStoreId
        ? this.purchaseStoreId.toObject()
        : undefined,
      purchaseDateStart: this.purchaseDateStart
        ? this.purchaseDateStart.toObject()
        : undefined,
      purchaseDateEnd: this.purchaseDateEnd
        ? this.purchaseDateEnd.toObject()
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
  ): ListOrderRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      userName: this.userName ? this.userName.toProtobufJSON(options) : null,
      productTitle: this.productTitle
        ? this.productTitle.toProtobufJSON(options)
        : null,
      purchaseStoreId: this.purchaseStoreId
        ? this.purchaseStoreId.toProtobufJSON(options)
        : null,
      purchaseDateStart: this.purchaseDateStart
        ? this.purchaseDateStart.toProtobufJSON(options)
        : null,
      purchaseDateEnd: this.purchaseDateEnd
        ? this.purchaseDateEnd.toProtobufJSON(options)
        : null,
      statuses: (this.statuses || []).slice()
    };
  }
}
export module ListOrderRequest {
  /**
   * Standard JavaScript object representation for ListOrderRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    userName?: googleProtobuf000.StringValue.AsObject;
    productTitle?: googleProtobuf000.StringValue.AsObject;
    purchaseStoreId?: googleProtobuf000.Int64Value.AsObject;
    purchaseDateStart?: googleProtobuf001.Timestamp.AsObject;
    purchaseDateEnd?: googleProtobuf001.Timestamp.AsObject;
    statuses?: string[];
  }

  /**
   * Protobuf JSON representation for ListOrderRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    userName?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    productTitle?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    purchaseStoreId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    purchaseDateStart?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    purchaseDateEnd?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    statuses?: string[];
  }
}

/**
 * Message implementation for shop.ListOrderResponse
 */
export class ListOrderResponse implements GrpcMessage {
  static id = 'shop.ListOrderResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListOrderResponse();
    ListOrderResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListOrderResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListOrderResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new OrdersListData();
          _reader.readMessage(
            messageInitializer1,
            OrdersListData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListOrderResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListOrderResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        OrdersListData.serializeBinaryToWriter
      );
    }
  }

  private _data?: OrdersListData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListOrderResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListOrderResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new OrdersListData(m));
    ListOrderResponse.refineValues(this);
  }
  get data(): OrdersListData[] | undefined {
    return this._data;
  }
  set data(value: OrdersListData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListOrderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListOrderResponse.AsObject {
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
  ): ListOrderResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListOrderResponse {
  /**
   * Standard JavaScript object representation for ListOrderResponse
   */
  export interface AsObject {
    data?: OrdersListData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListOrderResponse
   */
  export interface AsProtobufJSON {
    data?: OrdersListData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.OrdersListData
 */
export class OrdersListData implements GrpcMessage {
  static id = 'shop.OrdersListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new OrdersListData();
    OrdersListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: OrdersListData) {
    _instance.no = _instance.no || '0';
    _instance.userName = _instance.userName || '';
    _instance.productTitle = _instance.productTitle || '';
    _instance.purchaseStoreName = _instance.purchaseStoreName || '';
    _instance.purchaseStoreQuantity = _instance.purchaseStoreQuantity || '';
    _instance.purchaseDate = _instance.purchaseDate || undefined;
    _instance.statusName = _instance.statusName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: OrdersListData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.no = _reader.readInt64String();
          break;
        case 2:
          _instance.userName = _reader.readString();
          break;
        case 3:
          _instance.productTitle = _reader.readString();
          break;
        case 4:
          _instance.purchaseStoreName = _reader.readString();
          break;
        case 5:
          _instance.purchaseStoreQuantity = _reader.readString();
          break;
        case 6:
          _instance.purchaseDate = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.purchaseDate,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.statusName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    OrdersListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: OrdersListData,
    _writer: BinaryWriter
  ) {
    if (_instance.no) {
      _writer.writeInt64String(1, _instance.no);
    }
    if (_instance.userName) {
      _writer.writeString(2, _instance.userName);
    }
    if (_instance.productTitle) {
      _writer.writeString(3, _instance.productTitle);
    }
    if (_instance.purchaseStoreName) {
      _writer.writeString(4, _instance.purchaseStoreName);
    }
    if (_instance.purchaseStoreQuantity) {
      _writer.writeString(5, _instance.purchaseStoreQuantity);
    }
    if (_instance.purchaseDate) {
      _writer.writeMessage(
        6,
        _instance.purchaseDate as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.statusName) {
      _writer.writeString(7, _instance.statusName);
    }
  }

  private _no?: string;
  private _userName?: string;
  private _productTitle?: string;
  private _purchaseStoreName?: string;
  private _purchaseStoreQuantity?: string;
  private _purchaseDate?: googleProtobuf001.Timestamp;
  private _statusName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of OrdersListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<OrdersListData.AsObject>) {
    _value = _value || {};
    this.no = _value.no;
    this.userName = _value.userName;
    this.productTitle = _value.productTitle;
    this.purchaseStoreName = _value.purchaseStoreName;
    this.purchaseStoreQuantity = _value.purchaseStoreQuantity;
    this.purchaseDate = _value.purchaseDate
      ? new googleProtobuf001.Timestamp(_value.purchaseDate)
      : undefined;
    this.statusName = _value.statusName;
    OrdersListData.refineValues(this);
  }
  get no(): string | undefined {
    return this._no;
  }
  set no(value: string | undefined) {
    this._no = value;
  }
  get userName(): string | undefined {
    return this._userName;
  }
  set userName(value: string | undefined) {
    this._userName = value;
  }
  get productTitle(): string | undefined {
    return this._productTitle;
  }
  set productTitle(value: string | undefined) {
    this._productTitle = value;
  }
  get purchaseStoreName(): string | undefined {
    return this._purchaseStoreName;
  }
  set purchaseStoreName(value: string | undefined) {
    this._purchaseStoreName = value;
  }
  get purchaseStoreQuantity(): string | undefined {
    return this._purchaseStoreQuantity;
  }
  set purchaseStoreQuantity(value: string | undefined) {
    this._purchaseStoreQuantity = value;
  }
  get purchaseDate(): googleProtobuf001.Timestamp | undefined {
    return this._purchaseDate;
  }
  set purchaseDate(value: googleProtobuf001.Timestamp | undefined) {
    this._purchaseDate = value;
  }
  get statusName(): string | undefined {
    return this._statusName;
  }
  set statusName(value: string | undefined) {
    this._statusName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    OrdersListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): OrdersListData.AsObject {
    return {
      no: this.no,
      userName: this.userName,
      productTitle: this.productTitle,
      purchaseStoreName: this.purchaseStoreName,
      purchaseStoreQuantity: this.purchaseStoreQuantity,
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toObject()
        : undefined,
      statusName: this.statusName
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
  ): OrdersListData.AsProtobufJSON {
    return {
      no: this.no,
      userName: this.userName,
      productTitle: this.productTitle,
      purchaseStoreName: this.purchaseStoreName,
      purchaseStoreQuantity: this.purchaseStoreQuantity,
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toProtobufJSON(options)
        : null,
      statusName: this.statusName
    };
  }
}
export module OrdersListData {
  /**
   * Standard JavaScript object representation for OrdersListData
   */
  export interface AsObject {
    no?: string;
    userName?: string;
    productTitle?: string;
    purchaseStoreName?: string;
    purchaseStoreQuantity?: string;
    purchaseDate?: googleProtobuf001.Timestamp.AsObject;
    statusName?: string;
  }

  /**
   * Protobuf JSON representation for OrdersListData
   */
  export interface AsProtobufJSON {
    no?: string;
    userName?: string;
    productTitle?: string;
    purchaseStoreName?: string;
    purchaseStoreQuantity?: string;
    purchaseDate?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    statusName?: string;
  }
}

/**
 * Message implementation for shop.GetOrderInfoRequest
 */
export class GetOrderInfoRequest implements GrpcMessage {
  static id = 'shop.GetOrderInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetOrderInfoRequest();
    GetOrderInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetOrderInfoRequest) {
    _instance.orderId = _instance.orderId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetOrderInfoRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.orderId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetOrderInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetOrderInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.orderId) {
      _writer.writeString(1, _instance.orderId);
    }
  }

  private _orderId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetOrderInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetOrderInfoRequest.AsObject>) {
    _value = _value || {};
    this.orderId = _value.orderId;
    GetOrderInfoRequest.refineValues(this);
  }
  get orderId(): string | undefined {
    return this._orderId;
  }
  set orderId(value: string | undefined) {
    this._orderId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetOrderInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetOrderInfoRequest.AsObject {
    return {
      orderId: this.orderId
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
  ): GetOrderInfoRequest.AsProtobufJSON {
    return {
      orderId: this.orderId
    };
  }
}
export module GetOrderInfoRequest {
  /**
   * Standard JavaScript object representation for GetOrderInfoRequest
   */
  export interface AsObject {
    orderId?: string;
  }

  /**
   * Protobuf JSON representation for GetOrderInfoRequest
   */
  export interface AsProtobufJSON {
    orderId?: string;
  }
}

/**
 * Message implementation for shop.GetOrderInfoResponse
 */
export class GetOrderInfoResponse implements GrpcMessage {
  static id = 'shop.GetOrderInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetOrderInfoResponse();
    GetOrderInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetOrderInfoResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetOrderInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    GetOrderInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetOrderInfoResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetOrderInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetOrderInfoResponse.AsObject>) {
    _value = _value || {};
    GetOrderInfoResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetOrderInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetOrderInfoResponse.AsObject {
    return {};
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
  ): GetOrderInfoResponse.AsProtobufJSON {
    return {};
  }
}
export module GetOrderInfoResponse {
  /**
   * Standard JavaScript object representation for GetOrderInfoResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for GetOrderInfoResponse
   */
  export interface AsProtobufJSON {}
}
