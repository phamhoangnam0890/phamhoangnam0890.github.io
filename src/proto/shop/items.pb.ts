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
 * Message implementation for shop.ItemsListRequest
 */
export class ItemsListRequest implements GrpcMessage {
  static id = 'shop.ItemsListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemsListRequest();
    ItemsListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemsListRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.productName = _instance.productName || undefined;
    _instance.category = _instance.category || undefined;
    _instance.supplier = _instance.supplier || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemsListRequest,
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
          _instance.productName = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productName,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.category = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.category,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.supplier = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.supplier,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ItemsListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemsListRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.offset) {
      _writer.writeMessage(
        1,
        _instance.offset as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.productName) {
      _writer.writeMessage(
        2,
        _instance.productName as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.category) {
      _writer.writeMessage(
        3,
        _instance.category as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.supplier) {
      _writer.writeMessage(
        4,
        _instance.supplier as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _productName?: googleProtobuf000.StringValue;
  private _category?: googleProtobuf000.Int64Value;
  private _supplier?: googleProtobuf000.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemsListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemsListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.productName = _value.productName
      ? new googleProtobuf000.StringValue(_value.productName)
      : undefined;
    this.category = _value.category
      ? new googleProtobuf000.Int64Value(_value.category)
      : undefined;
    this.supplier = _value.supplier
      ? new googleProtobuf000.Int64Value(_value.supplier)
      : undefined;
    ItemsListRequest.refineValues(this);
  }
  get offset(): googleProtobuf000.Int64Value | undefined {
    return this._offset;
  }
  set offset(value: googleProtobuf000.Int64Value | undefined) {
    this._offset = value;
  }
  get productName(): googleProtobuf000.StringValue | undefined {
    return this._productName;
  }
  set productName(value: googleProtobuf000.StringValue | undefined) {
    this._productName = value;
  }
  get category(): googleProtobuf000.Int64Value | undefined {
    return this._category;
  }
  set category(value: googleProtobuf000.Int64Value | undefined) {
    this._category = value;
  }
  get supplier(): googleProtobuf000.Int64Value | undefined {
    return this._supplier;
  }
  set supplier(value: googleProtobuf000.Int64Value | undefined) {
    this._supplier = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemsListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemsListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      productName: this.productName ? this.productName.toObject() : undefined,
      category: this.category ? this.category.toObject() : undefined,
      supplier: this.supplier ? this.supplier.toObject() : undefined
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
  ): ItemsListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      productName: this.productName
        ? this.productName.toProtobufJSON(options)
        : null,
      category: this.category ? this.category.toProtobufJSON(options) : null,
      supplier: this.supplier ? this.supplier.toProtobufJSON(options) : null
    };
  }
}
export module ItemsListRequest {
  /**
   * Standard JavaScript object representation for ItemsListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    productName?: googleProtobuf000.StringValue.AsObject;
    category?: googleProtobuf000.Int64Value.AsObject;
    supplier?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for ItemsListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    productName?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    category?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    supplier?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ItemsListResponse
 */
export class ItemsListResponse implements GrpcMessage {
  static id = 'shop.ItemsListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemsListResponse();
    ItemsListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemsListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemsListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ItemsListData();
          _reader.readMessage(
            messageInitializer1,
            ItemsListData.deserializeBinaryFromReader
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

    ItemsListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemsListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        ItemsListData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: ItemsListData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemsListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemsListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new ItemsListData(m));
    this.total = _value.total;
    ItemsListResponse.refineValues(this);
  }
  get data(): ItemsListData[] | undefined {
    return this._data;
  }
  set data(value: ItemsListData[] | undefined) {
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
    ItemsListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemsListResponse.AsObject {
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
  ): ItemsListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module ItemsListResponse {
  /**
   * Standard JavaScript object representation for ItemsListResponse
   */
  export interface AsObject {
    data?: ItemsListData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for ItemsListResponse
   */
  export interface AsProtobufJSON {
    data?: ItemsListData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.ItemsListData
 */
export class ItemsListData implements GrpcMessage {
  static id = 'shop.ItemsListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemsListData();
    ItemsListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemsListData) {
    _instance.productName = _instance.productName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.supplierName = _instance.supplierName || '';
    _instance.sellingPrice = _instance.sellingPrice || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemsListData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productName = _reader.readString();
          break;
        case 2:
          _instance.categoryName = _reader.readString();
          break;
        case 3:
          _instance.supplierName = _reader.readString();
          break;
        case 4:
          _instance.sellingPrice = _reader.readString();
          break;
        case 5:
          _instance.updatedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ItemsListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemsListData,
    _writer: BinaryWriter
  ) {
    if (_instance.productName) {
      _writer.writeString(1, _instance.productName);
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
    if (_instance.supplierName) {
      _writer.writeString(3, _instance.supplierName);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(4, _instance.sellingPrice);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        5,
        _instance.updatedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _productName?: string;
  private _categoryName?: string;
  private _supplierName?: string;
  private _sellingPrice?: string;
  private _updatedAt?: googleProtobuf001.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemsListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemsListData.AsObject>) {
    _value = _value || {};
    this.productName = _value.productName;
    this.categoryName = _value.categoryName;
    this.supplierName = _value.supplierName;
    this.sellingPrice = _value.sellingPrice;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf001.Timestamp(_value.updatedAt)
      : undefined;
    ItemsListData.refineValues(this);
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }
  get supplierName(): string | undefined {
    return this._supplierName;
  }
  set supplierName(value: string | undefined) {
    this._supplierName = value;
  }
  get sellingPrice(): string | undefined {
    return this._sellingPrice;
  }
  set sellingPrice(value: string | undefined) {
    this._sellingPrice = value;
  }
  get updatedAt(): googleProtobuf001.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._updatedAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ItemsListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemsListData.AsObject {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      sellingPrice: this.sellingPrice,
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
  ): ItemsListData.AsProtobufJSON {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      sellingPrice: this.sellingPrice,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module ItemsListData {
  /**
   * Standard JavaScript object representation for ItemsListData
   */
  export interface AsObject {
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    sellingPrice?: string;
    updatedAt?: googleProtobuf001.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ItemsListData
   */
  export interface AsProtobufJSON {
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    sellingPrice?: string;
    updatedAt?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ItemsInfoRequest
 */
export class ItemsInfoRequest implements GrpcMessage {
  static id = 'shop.ItemsInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemsInfoRequest();
    ItemsInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemsInfoRequest) {
    _instance.itemId = _instance.itemId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemsInfoRequest,
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

    ItemsInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemsInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.itemId) {
      _writer.writeString(1, _instance.itemId);
    }
  }

  private _itemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemsInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemsInfoRequest.AsObject>) {
    _value = _value || {};
    this.itemId = _value.itemId;
    ItemsInfoRequest.refineValues(this);
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
    ItemsInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemsInfoRequest.AsObject {
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
  ): ItemsInfoRequest.AsProtobufJSON {
    return {
      itemId: this.itemId
    };
  }
}
export module ItemsInfoRequest {
  /**
   * Standard JavaScript object representation for ItemsInfoRequest
   */
  export interface AsObject {
    itemId?: string;
  }

  /**
   * Protobuf JSON representation for ItemsInfoRequest
   */
  export interface AsProtobufJSON {
    itemId?: string;
  }
}

/**
 * Message implementation for shop.ItemsInfoResponse
 */
export class ItemsInfoResponse implements GrpcMessage {
  static id = 'shop.ItemsInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ItemsInfoResponse();
    ItemsInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ItemsInfoResponse) {
    _instance.productName = _instance.productName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.supplierName = _instance.supplierName || '';
    _instance.supplierProductUrl = _instance.supplierProductUrl || '';
    _instance.productDetails = _instance.productDetails || '';
    _instance.sellingPrice = _instance.sellingPrice || '';
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ItemsInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productName = _reader.readString();
          break;
        case 2:
          _instance.categoryName = _reader.readString();
          break;
        case 3:
          _instance.supplierName = _reader.readString();
          break;
        case 4:
          _instance.supplierProductUrl = _reader.readString();
          break;
        case 5:
          _instance.productDetails = _reader.readString();
          break;
        case 6:
          _instance.sellingPrice = _reader.readString();
          break;
        case 7:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ItemsInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ItemsInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productName) {
      _writer.writeString(1, _instance.productName);
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
    if (_instance.supplierName) {
      _writer.writeString(3, _instance.supplierName);
    }
    if (_instance.supplierProductUrl) {
      _writer.writeString(4, _instance.supplierProductUrl);
    }
    if (_instance.productDetails) {
      _writer.writeString(5, _instance.productDetails);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(6, _instance.sellingPrice);
    }
    if (_instance.status) {
      _writer.writeString(7, _instance.status);
    }
  }

  private _productName?: string;
  private _categoryName?: string;
  private _supplierName?: string;
  private _supplierProductUrl?: string;
  private _productDetails?: string;
  private _sellingPrice?: string;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ItemsInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ItemsInfoResponse.AsObject>) {
    _value = _value || {};
    this.productName = _value.productName;
    this.categoryName = _value.categoryName;
    this.supplierName = _value.supplierName;
    this.supplierProductUrl = _value.supplierProductUrl;
    this.productDetails = _value.productDetails;
    this.sellingPrice = _value.sellingPrice;
    this.status = _value.status;
    ItemsInfoResponse.refineValues(this);
  }
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }
  get supplierName(): string | undefined {
    return this._supplierName;
  }
  set supplierName(value: string | undefined) {
    this._supplierName = value;
  }
  get supplierProductUrl(): string | undefined {
    return this._supplierProductUrl;
  }
  set supplierProductUrl(value: string | undefined) {
    this._supplierProductUrl = value;
  }
  get productDetails(): string | undefined {
    return this._productDetails;
  }
  set productDetails(value: string | undefined) {
    this._productDetails = value;
  }
  get sellingPrice(): string | undefined {
    return this._sellingPrice;
  }
  set sellingPrice(value: string | undefined) {
    this._sellingPrice = value;
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
    ItemsInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ItemsInfoResponse.AsObject {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
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
  ): ItemsInfoResponse.AsProtobufJSON {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
      status: this.status
    };
  }
}
export module ItemsInfoResponse {
  /**
   * Standard JavaScript object representation for ItemsInfoResponse
   */
  export interface AsObject {
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    status?: string;
  }

  /**
   * Protobuf JSON representation for ItemsInfoResponse
   */
  export interface AsProtobufJSON {
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    status?: string;
  }
}
