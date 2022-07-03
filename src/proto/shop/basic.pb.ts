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
 * Message implementation for shop.ListPurchasingResponse
 */
export class ListPurchasingResponse implements GrpcMessage {
  static id = 'shop.ListPurchasingResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPurchasingResponse();
    ListPurchasingResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPurchasingResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPurchasingResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new PurchasingData();
          _reader.readMessage(
            messageInitializer1,
            PurchasingData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListPurchasingResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPurchasingResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        PurchasingData.serializeBinaryToWriter
      );
    }
  }

  private _data?: PurchasingData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPurchasingResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListPurchasingResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new PurchasingData(m));
    ListPurchasingResponse.refineValues(this);
  }
  get data(): PurchasingData[] | undefined {
    return this._data;
  }
  set data(value: PurchasingData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPurchasingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPurchasingResponse.AsObject {
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
  ): ListPurchasingResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListPurchasingResponse {
  /**
   * Standard JavaScript object representation for ListPurchasingResponse
   */
  export interface AsObject {
    data?: PurchasingData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListPurchasingResponse
   */
  export interface AsProtobufJSON {
    data?: PurchasingData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.PurchasingData
 */
export class PurchasingData implements GrpcMessage {
  static id = 'shop.PurchasingData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchasingData();
    PurchasingData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchasingData) {
    _instance.purchasingId = _instance.purchasingId || '0';
    _instance.purchasingName = _instance.purchasingName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchasingData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchasingId = _reader.readInt64String();
          break;
        case 2:
          _instance.purchasingName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchasingData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchasingData,
    _writer: BinaryWriter
  ) {
    if (_instance.purchasingId) {
      _writer.writeInt64String(1, _instance.purchasingId);
    }
    if (_instance.purchasingName) {
      _writer.writeString(2, _instance.purchasingName);
    }
  }

  private _purchasingId?: string;
  private _purchasingName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchasingData to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchasingData.AsObject>) {
    _value = _value || {};
    this.purchasingId = _value.purchasingId;
    this.purchasingName = _value.purchasingName;
    PurchasingData.refineValues(this);
  }
  get purchasingId(): string | undefined {
    return this._purchasingId;
  }
  set purchasingId(value: string | undefined) {
    this._purchasingId = value;
  }
  get purchasingName(): string | undefined {
    return this._purchasingName;
  }
  set purchasingName(value: string | undefined) {
    this._purchasingName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PurchasingData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchasingData.AsObject {
    return {
      purchasingId: this.purchasingId,
      purchasingName: this.purchasingName
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
  ): PurchasingData.AsProtobufJSON {
    return {
      purchasingId: this.purchasingId,
      purchasingName: this.purchasingName
    };
  }
}
export module PurchasingData {
  /**
   * Standard JavaScript object representation for PurchasingData
   */
  export interface AsObject {
    purchasingId?: string;
    purchasingName?: string;
  }

  /**
   * Protobuf JSON representation for PurchasingData
   */
  export interface AsProtobufJSON {
    purchasingId?: string;
    purchasingName?: string;
  }
}

/**
 * Message implementation for shop.ListCategoriesResponse
 */
export class ListCategoriesResponse implements GrpcMessage {
  static id = 'shop.ListCategoriesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCategoriesResponse();
    ListCategoriesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCategoriesResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCategoriesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CategoryData();
          _reader.readMessage(
            messageInitializer1,
            CategoryData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListCategoriesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCategoriesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        CategoryData.serializeBinaryToWriter
      );
    }
  }

  private _data?: CategoryData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCategoriesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCategoriesResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new CategoryData(m));
    ListCategoriesResponse.refineValues(this);
  }
  get data(): CategoryData[] | undefined {
    return this._data;
  }
  set data(value: CategoryData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCategoriesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCategoriesResponse.AsObject {
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
  ): ListCategoriesResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCategoriesResponse {
  /**
   * Standard JavaScript object representation for ListCategoriesResponse
   */
  export interface AsObject {
    data?: CategoryData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCategoriesResponse
   */
  export interface AsProtobufJSON {
    data?: CategoryData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.CategoryData
 */
export class CategoryData implements GrpcMessage {
  static id = 'shop.CategoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CategoryData();
    CategoryData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CategoryData) {
    _instance.categoryId = _instance.categoryId || '0';
    _instance.categoryName = _instance.categoryName || '';
    _instance.yahooProductCategoryId = _instance.yahooProductCategoryId || '0';
    _instance.rakutenGenreId = _instance.rakutenGenreId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CategoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.categoryName = _reader.readString();
          break;
        case 3:
          _instance.yahooProductCategoryId = _reader.readInt64String();
          break;
        case 4:
          _instance.rakutenGenreId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CategoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CategoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeInt64String(1, _instance.categoryId);
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
    if (_instance.yahooProductCategoryId) {
      _writer.writeInt64String(3, _instance.yahooProductCategoryId);
    }
    if (_instance.rakutenGenreId) {
      _writer.writeInt64String(4, _instance.rakutenGenreId);
    }
  }

  private _categoryId?: string;
  private _categoryName?: string;
  private _yahooProductCategoryId?: string;
  private _rakutenGenreId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CategoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<CategoryData.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    this.categoryName = _value.categoryName;
    this.yahooProductCategoryId = _value.yahooProductCategoryId;
    this.rakutenGenreId = _value.rakutenGenreId;
    CategoryData.refineValues(this);
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }
  get categoryName(): string | undefined {
    return this._categoryName;
  }
  set categoryName(value: string | undefined) {
    this._categoryName = value;
  }
  get yahooProductCategoryId(): string | undefined {
    return this._yahooProductCategoryId;
  }
  set yahooProductCategoryId(value: string | undefined) {
    this._yahooProductCategoryId = value;
  }
  get rakutenGenreId(): string | undefined {
    return this._rakutenGenreId;
  }
  set rakutenGenreId(value: string | undefined) {
    this._rakutenGenreId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CategoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CategoryData.AsObject {
    return {
      categoryId: this.categoryId,
      categoryName: this.categoryName,
      yahooProductCategoryId: this.yahooProductCategoryId,
      rakutenGenreId: this.rakutenGenreId
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
  ): CategoryData.AsProtobufJSON {
    return {
      categoryId: this.categoryId,
      categoryName: this.categoryName,
      yahooProductCategoryId: this.yahooProductCategoryId,
      rakutenGenreId: this.rakutenGenreId
    };
  }
}
export module CategoryData {
  /**
   * Standard JavaScript object representation for CategoryData
   */
  export interface AsObject {
    categoryId?: string;
    categoryName?: string;
    yahooProductCategoryId?: string;
    rakutenGenreId?: string;
  }

  /**
   * Protobuf JSON representation for CategoryData
   */
  export interface AsProtobufJSON {
    categoryId?: string;
    categoryName?: string;
    yahooProductCategoryId?: string;
    rakutenGenreId?: string;
  }
}

/**
 * Message implementation for shop.ListCurrenciesResponse
 */
export class ListCurrenciesResponse implements GrpcMessage {
  static id = 'shop.ListCurrenciesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListCurrenciesResponse();
    ListCurrenciesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListCurrenciesResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListCurrenciesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new CurrencyData();
          _reader.readMessage(
            messageInitializer1,
            CurrencyData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListCurrenciesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListCurrenciesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        CurrencyData.serializeBinaryToWriter
      );
    }
  }

  private _data?: CurrencyData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListCurrenciesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListCurrenciesResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new CurrencyData(m));
    ListCurrenciesResponse.refineValues(this);
  }
  get data(): CurrencyData[] | undefined {
    return this._data;
  }
  set data(value: CurrencyData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListCurrenciesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListCurrenciesResponse.AsObject {
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
  ): ListCurrenciesResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListCurrenciesResponse {
  /**
   * Standard JavaScript object representation for ListCurrenciesResponse
   */
  export interface AsObject {
    data?: CurrencyData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListCurrenciesResponse
   */
  export interface AsProtobufJSON {
    data?: CurrencyData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.CurrencyData
 */
export class CurrencyData implements GrpcMessage {
  static id = 'shop.CurrencyData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CurrencyData();
    CurrencyData.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CurrencyData) {
    _instance.currencyId = _instance.currencyId || '0';
    _instance.currencyName = _instance.currencyName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CurrencyData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.currencyId = _reader.readInt64String();
          break;
        case 2:
          _instance.currencyName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CurrencyData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CurrencyData,
    _writer: BinaryWriter
  ) {
    if (_instance.currencyId) {
      _writer.writeInt64String(1, _instance.currencyId);
    }
    if (_instance.currencyName) {
      _writer.writeString(2, _instance.currencyName);
    }
  }

  private _currencyId?: string;
  private _currencyName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CurrencyData to deeply clone from
   */
  constructor(_value?: RecursivePartial<CurrencyData.AsObject>) {
    _value = _value || {};
    this.currencyId = _value.currencyId;
    this.currencyName = _value.currencyName;
    CurrencyData.refineValues(this);
  }
  get currencyId(): string | undefined {
    return this._currencyId;
  }
  set currencyId(value: string | undefined) {
    this._currencyId = value;
  }
  get currencyName(): string | undefined {
    return this._currencyName;
  }
  set currencyName(value: string | undefined) {
    this._currencyName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CurrencyData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CurrencyData.AsObject {
    return {
      currencyId: this.currencyId,
      currencyName: this.currencyName
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
  ): CurrencyData.AsProtobufJSON {
    return {
      currencyId: this.currencyId,
      currencyName: this.currencyName
    };
  }
}
export module CurrencyData {
  /**
   * Standard JavaScript object representation for CurrencyData
   */
  export interface AsObject {
    currencyId?: string;
    currencyName?: string;
  }

  /**
   * Protobuf JSON representation for CurrencyData
   */
  export interface AsProtobufJSON {
    currencyId?: string;
    currencyName?: string;
  }
}
