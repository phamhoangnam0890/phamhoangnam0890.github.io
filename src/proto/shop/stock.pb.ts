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
 * Message implementation for shop.UploadStockImageRequest
 */
export class UploadStockImageRequest implements GrpcMessage {
  static id = 'shop.UploadStockImageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadStockImageRequest();
    UploadStockImageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadStockImageRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.imageName = _instance.imageName || '';
    _instance.imageData = _instance.imageData || '';
    _instance.imageType = _instance.imageType || '';
    _instance.imageAlt = _instance.imageAlt || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadStockImageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.imageName = _reader.readString();
          break;
        case 3:
          _instance.imageData = _reader.readString();
          break;
        case 4:
          _instance.imageType = _reader.readString();
          break;
        case 5:
          _instance.imageAlt = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UploadStockImageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadStockImageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.imageName) {
      _writer.writeString(2, _instance.imageName);
    }
    if (_instance.imageData) {
      _writer.writeString(3, _instance.imageData);
    }
    if (_instance.imageType) {
      _writer.writeString(4, _instance.imageType);
    }
    if (_instance.imageAlt) {
      _writer.writeString(5, _instance.imageAlt);
    }
  }

  private _productItemId?: string;
  private _imageName?: string;
  private _imageData?: string;
  private _imageType?: string;
  private _imageAlt?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadStockImageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadStockImageRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.imageName = _value.imageName;
    this.imageData = _value.imageData;
    this.imageType = _value.imageType;
    this.imageAlt = _value.imageAlt;
    UploadStockImageRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get imageName(): string | undefined {
    return this._imageName;
  }
  set imageName(value: string | undefined) {
    this._imageName = value;
  }
  get imageData(): string | undefined {
    return this._imageData;
  }
  set imageData(value: string | undefined) {
    this._imageData = value;
  }
  get imageType(): string | undefined {
    return this._imageType;
  }
  set imageType(value: string | undefined) {
    this._imageType = value;
  }
  get imageAlt(): string | undefined {
    return this._imageAlt;
  }
  set imageAlt(value: string | undefined) {
    this._imageAlt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadStockImageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadStockImageRequest.AsObject {
    return {
      productItemId: this.productItemId,
      imageName: this.imageName,
      imageData: this.imageData,
      imageType: this.imageType,
      imageAlt: this.imageAlt
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
  ): UploadStockImageRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      imageName: this.imageName,
      imageData: this.imageData,
      imageType: this.imageType,
      imageAlt: this.imageAlt
    };
  }
}
export module UploadStockImageRequest {
  /**
   * Standard JavaScript object representation for UploadStockImageRequest
   */
  export interface AsObject {
    productItemId?: string;
    imageName?: string;
    imageData?: string;
    imageType?: string;
    imageAlt?: string;
  }

  /**
   * Protobuf JSON representation for UploadStockImageRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    imageName?: string;
    imageData?: string;
    imageType?: string;
    imageAlt?: string;
  }
}

/**
 * Message implementation for shop.UploadShopStockInfoResponse
 */
export class UploadShopStockInfoResponse implements GrpcMessage {
  static id = 'shop.UploadShopStockInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadShopStockInfoResponse();
    UploadShopStockInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadShopStockInfoResponse) {
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadShopStockInfoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
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

    UploadShopStockInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadShopStockInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.updatedAt) {
      _writer.writeMessage(
        1,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _updatedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadShopStockInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadShopStockInfoResponse.AsObject>) {
    _value = _value || {};
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    UploadShopStockInfoResponse.refineValues(this);
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
    UploadShopStockInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadShopStockInfoResponse.AsObject {
    return {
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
  ): UploadShopStockInfoResponse.AsProtobufJSON {
    return {
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module UploadShopStockInfoResponse {
  /**
   * Standard JavaScript object representation for UploadShopStockInfoResponse
   */
  export interface AsObject {
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for UploadShopStockInfoResponse
   */
  export interface AsProtobufJSON {
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.UploadStockImageResponse
 */
export class UploadStockImageResponse implements GrpcMessage {
  static id = 'shop.UploadStockImageResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadStockImageResponse();
    UploadStockImageResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadStockImageResponse) {
    _instance.image = _instance.image || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadStockImageResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.image = new StockImageInfo();
          _reader.readMessage(
            _instance.image,
            StockImageInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UploadStockImageResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadStockImageResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.image) {
      _writer.writeMessage(
        1,
        _instance.image as any,
        StockImageInfo.serializeBinaryToWriter
      );
    }
  }

  private _image?: StockImageInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadStockImageResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<UploadStockImageResponse.AsObject>) {
    _value = _value || {};
    this.image = _value.image ? new StockImageInfo(_value.image) : undefined;
    UploadStockImageResponse.refineValues(this);
  }
  get image(): StockImageInfo | undefined {
    return this._image;
  }
  set image(value: StockImageInfo | undefined) {
    this._image = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadStockImageResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadStockImageResponse.AsObject {
    return {
      image: this.image ? this.image.toObject() : undefined
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
  ): UploadStockImageResponse.AsProtobufJSON {
    return {
      image: this.image ? this.image.toProtobufJSON(options) : null
    };
  }
}
export module UploadStockImageResponse {
  /**
   * Standard JavaScript object representation for UploadStockImageResponse
   */
  export interface AsObject {
    image?: StockImageInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for UploadStockImageResponse
   */
  export interface AsProtobufJSON {
    image?: StockImageInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.StockUpdateRequest
 */
export class StockUpdateRequest implements GrpcMessage {
  static id = 'shop.StockUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockUpdateRequest();
    StockUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockUpdateRequest) {
    _instance.rakutenNum = _instance.rakutenNum || '0';
    _instance.yahooNum = _instance.yahooNum || '0';
    _instance.baseNum = _instance.baseNum || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 12:
          _instance.rakutenNum = _reader.readInt64String();
          break;
        case 13:
          _instance.yahooNum = _reader.readInt64String();
          break;
        case 14:
          _instance.baseNum = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    StockUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenNum) {
      _writer.writeInt64String(12, _instance.rakutenNum);
    }
    if (_instance.yahooNum) {
      _writer.writeInt64String(13, _instance.yahooNum);
    }
    if (_instance.baseNum) {
      _writer.writeInt64String(14, _instance.baseNum);
    }
  }

  private _rakutenNum?: string;
  private _yahooNum?: string;
  private _baseNum?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockUpdateRequest.AsObject>) {
    _value = _value || {};
    this.rakutenNum = _value.rakutenNum;
    this.yahooNum = _value.yahooNum;
    this.baseNum = _value.baseNum;
    StockUpdateRequest.refineValues(this);
  }
  get rakutenNum(): string | undefined {
    return this._rakutenNum;
  }
  set rakutenNum(value: string | undefined) {
    this._rakutenNum = value;
  }
  get yahooNum(): string | undefined {
    return this._yahooNum;
  }
  set yahooNum(value: string | undefined) {
    this._yahooNum = value;
  }
  get baseNum(): string | undefined {
    return this._baseNum;
  }
  set baseNum(value: string | undefined) {
    this._baseNum = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockUpdateRequest.AsObject {
    return {
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum
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
  ): StockUpdateRequest.AsProtobufJSON {
    return {
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum
    };
  }
}
export module StockUpdateRequest {
  /**
   * Standard JavaScript object representation for StockUpdateRequest
   */
  export interface AsObject {
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
  }

  /**
   * Protobuf JSON representation for StockUpdateRequest
   */
  export interface AsProtobufJSON {
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
  }
}

/**
 * Message implementation for shop.StockListRequest
 */
export class StockListRequest implements GrpcMessage {
  static id = 'shop.StockListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockListRequest();
    StockListRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockListRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.productNo = _instance.productNo || undefined;
    _instance.productTitle = _instance.productTitle || undefined;
    _instance.categoryId = _instance.categoryId || undefined;
    _instance.priceRangeFrom = _instance.priceRangeFrom || undefined;
    _instance.priceRangeTo = _instance.priceRangeTo || undefined;
    _instance.sorting = _instance.sorting || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockListRequest,
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
          _instance.productTitle = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.productTitle,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.categoryId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.categoryId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.priceRangeFrom = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.priceRangeFrom,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.priceRangeTo = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.priceRangeTo,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.sorting = new StockSortModel();
          _reader.readMessage(
            _instance.sorting,
            StockSortModel.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StockListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockListRequest,
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
    if (_instance.productTitle) {
      _writer.writeMessage(
        3,
        _instance.productTitle as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.categoryId) {
      _writer.writeMessage(
        4,
        _instance.categoryId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.priceRangeFrom) {
      _writer.writeMessage(
        5,
        _instance.priceRangeFrom as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.priceRangeTo) {
      _writer.writeMessage(
        6,
        _instance.priceRangeTo as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.sorting) {
      _writer.writeMessage(
        7,
        _instance.sorting as any,
        StockSortModel.serializeBinaryToWriter
      );
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _productNo?: googleProtobuf000.StringValue;
  private _productTitle?: googleProtobuf000.StringValue;
  private _categoryId?: googleProtobuf000.Int64Value;
  private _priceRangeFrom?: googleProtobuf000.StringValue;
  private _priceRangeTo?: googleProtobuf000.StringValue;
  private _sorting?: StockSortModel;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockListRequest.AsObject>) {
    _value = _value || {};
    this.offset = _value.offset
      ? new googleProtobuf000.Int64Value(_value.offset)
      : undefined;
    this.productNo = _value.productNo
      ? new googleProtobuf000.StringValue(_value.productNo)
      : undefined;
    this.productTitle = _value.productTitle
      ? new googleProtobuf000.StringValue(_value.productTitle)
      : undefined;
    this.categoryId = _value.categoryId
      ? new googleProtobuf000.Int64Value(_value.categoryId)
      : undefined;
    this.priceRangeFrom = _value.priceRangeFrom
      ? new googleProtobuf000.StringValue(_value.priceRangeFrom)
      : undefined;
    this.priceRangeTo = _value.priceRangeTo
      ? new googleProtobuf000.StringValue(_value.priceRangeTo)
      : undefined;
    this.sorting = _value.sorting
      ? new StockSortModel(_value.sorting)
      : undefined;
    StockListRequest.refineValues(this);
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
  get productTitle(): googleProtobuf000.StringValue | undefined {
    return this._productTitle;
  }
  set productTitle(value: googleProtobuf000.StringValue | undefined) {
    this._productTitle = value;
  }
  get categoryId(): googleProtobuf000.Int64Value | undefined {
    return this._categoryId;
  }
  set categoryId(value: googleProtobuf000.Int64Value | undefined) {
    this._categoryId = value;
  }
  get priceRangeFrom(): googleProtobuf000.StringValue | undefined {
    return this._priceRangeFrom;
  }
  set priceRangeFrom(value: googleProtobuf000.StringValue | undefined) {
    this._priceRangeFrom = value;
  }
  get priceRangeTo(): googleProtobuf000.StringValue | undefined {
    return this._priceRangeTo;
  }
  set priceRangeTo(value: googleProtobuf000.StringValue | undefined) {
    this._priceRangeTo = value;
  }
  get sorting(): StockSortModel | undefined {
    return this._sorting;
  }
  set sorting(value: StockSortModel | undefined) {
    this._sorting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockListRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      productNo: this.productNo ? this.productNo.toObject() : undefined,
      productTitle: this.productTitle
        ? this.productTitle.toObject()
        : undefined,
      categoryId: this.categoryId ? this.categoryId.toObject() : undefined,
      priceRangeFrom: this.priceRangeFrom
        ? this.priceRangeFrom.toObject()
        : undefined,
      priceRangeTo: this.priceRangeTo
        ? this.priceRangeTo.toObject()
        : undefined,
      sorting: this.sorting ? this.sorting.toObject() : undefined
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
  ): StockListRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      productNo: this.productNo ? this.productNo.toProtobufJSON(options) : null,
      productTitle: this.productTitle
        ? this.productTitle.toProtobufJSON(options)
        : null,
      categoryId: this.categoryId
        ? this.categoryId.toProtobufJSON(options)
        : null,
      priceRangeFrom: this.priceRangeFrom
        ? this.priceRangeFrom.toProtobufJSON(options)
        : null,
      priceRangeTo: this.priceRangeTo
        ? this.priceRangeTo.toProtobufJSON(options)
        : null,
      sorting: this.sorting ? this.sorting.toProtobufJSON(options) : null
    };
  }
}
export module StockListRequest {
  /**
   * Standard JavaScript object representation for StockListRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    productNo?: googleProtobuf000.StringValue.AsObject;
    productTitle?: googleProtobuf000.StringValue.AsObject;
    categoryId?: googleProtobuf000.Int64Value.AsObject;
    priceRangeFrom?: googleProtobuf000.StringValue.AsObject;
    priceRangeTo?: googleProtobuf000.StringValue.AsObject;
    sorting?: StockSortModel.AsObject;
  }

  /**
   * Protobuf JSON representation for StockListRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    productNo?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    productTitle?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    categoryId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    priceRangeFrom?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    priceRangeTo?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    sorting?: StockSortModel.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.StockSortModel
 */
export class StockSortModel implements GrpcMessage {
  static id = 'shop.StockSortModel';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockSortModel();
    StockSortModel.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockSortModel) {
    _instance.type = _instance.type || '0';
    _instance.asc = _instance.asc || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockSortModel,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.type = _reader.readInt64String();
          break;
        case 2:
          _instance.asc = _reader.readBool();
          break;
        default:
          _reader.skipField();
      }
    }

    StockSortModel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockSortModel,
    _writer: BinaryWriter
  ) {
    if (_instance.type) {
      _writer.writeInt64String(1, _instance.type);
    }
    if (_instance.asc) {
      _writer.writeBool(2, _instance.asc);
    }
  }

  private _type?: string;
  private _asc?: boolean;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockSortModel to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockSortModel.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.asc = _value.asc;
    StockSortModel.refineValues(this);
  }
  get type(): string | undefined {
    return this._type;
  }
  set type(value: string | undefined) {
    this._type = value;
  }
  get asc(): boolean | undefined {
    return this._asc;
  }
  set asc(value: boolean | undefined) {
    this._asc = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockSortModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockSortModel.AsObject {
    return {
      type: this.type,
      asc: this.asc
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
  ): StockSortModel.AsProtobufJSON {
    return {
      type: this.type,
      asc: this.asc
    };
  }
}
export module StockSortModel {
  /**
   * Standard JavaScript object representation for StockSortModel
   */
  export interface AsObject {
    type?: string;
    asc?: boolean;
  }

  /**
   * Protobuf JSON representation for StockSortModel
   */
  export interface AsProtobufJSON {
    type?: string;
    asc?: boolean;
  }
}

/**
 * Message implementation for shop.StockListResponse
 */
export class StockListResponse implements GrpcMessage {
  static id = 'shop.StockListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockListResponse();
    StockListResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockListResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new StockListData();
          _reader.readMessage(
            messageInitializer1,
            StockListData.deserializeBinaryFromReader
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

    StockListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockListResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        StockListData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: StockListData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockListResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new StockListData(m));
    this.total = _value.total;
    StockListResponse.refineValues(this);
  }
  get data(): StockListData[] | undefined {
    return this._data;
  }
  set data(value: StockListData[] | undefined) {
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
    StockListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockListResponse.AsObject {
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
  ): StockListResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module StockListResponse {
  /**
   * Standard JavaScript object representation for StockListResponse
   */
  export interface AsObject {
    data?: StockListData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for StockListResponse
   */
  export interface AsProtobufJSON {
    data?: StockListData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.StockListData
 */
export class StockListData implements GrpcMessage {
  static id = 'shop.StockListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockListData();
    StockListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockListData) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productName = _instance.productName || '';
    _instance.num = _instance.num || '0';
    _instance.rakutenNum = _instance.rakutenNum || '0';
    _instance.yahooNum = _instance.yahooNum || '0';
    _instance.baseNum = _instance.baseNum || '0';
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.totalSales = _instance.totalSales || '';
    _instance.imagesPath = _instance.imagesPath || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockListData,
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
          _instance.productName = _reader.readString();
          break;
        case 4:
          _instance.num = _reader.readInt64String();
          break;
        case 5:
          _instance.rakutenNum = _reader.readInt64String();
          break;
        case 6:
          _instance.yahooNum = _reader.readInt64String();
          break;
        case 7:
          _instance.baseNum = _reader.readInt64String();
          break;
        case 8:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 9:
          _instance.totalSales = _reader.readString();
          break;
        case 10:
          (_instance.imagesPath = _instance.imagesPath || []).push(
            _reader.readString()
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StockListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockListData,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.productName) {
      _writer.writeString(3, _instance.productName);
    }
    if (_instance.num) {
      _writer.writeInt64String(4, _instance.num);
    }
    if (_instance.rakutenNum) {
      _writer.writeInt64String(5, _instance.rakutenNum);
    }
    if (_instance.yahooNum) {
      _writer.writeInt64String(6, _instance.yahooNum);
    }
    if (_instance.baseNum) {
      _writer.writeInt64String(7, _instance.baseNum);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        8,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.totalSales) {
      _writer.writeString(9, _instance.totalSales);
    }
    if (_instance.imagesPath && _instance.imagesPath.length) {
      _writer.writeRepeatedString(10, _instance.imagesPath);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productName?: string;
  private _num?: string;
  private _rakutenNum?: string;
  private _yahooNum?: string;
  private _baseNum?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _totalSales?: string;
  private _imagesPath?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockListData.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productName = _value.productName;
    this.num = _value.num;
    this.rakutenNum = _value.rakutenNum;
    this.yahooNum = _value.yahooNum;
    this.baseNum = _value.baseNum;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.totalSales = _value.totalSales;
    this.imagesPath = (_value.imagesPath || []).slice();
    StockListData.refineValues(this);
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
  get productName(): string | undefined {
    return this._productName;
  }
  set productName(value: string | undefined) {
    this._productName = value;
  }
  get num(): string | undefined {
    return this._num;
  }
  set num(value: string | undefined) {
    this._num = value;
  }
  get rakutenNum(): string | undefined {
    return this._rakutenNum;
  }
  set rakutenNum(value: string | undefined) {
    this._rakutenNum = value;
  }
  get yahooNum(): string | undefined {
    return this._yahooNum;
  }
  set yahooNum(value: string | undefined) {
    this._yahooNum = value;
  }
  get baseNum(): string | undefined {
    return this._baseNum;
  }
  set baseNum(value: string | undefined) {
    this._baseNum = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get totalSales(): string | undefined {
    return this._totalSales;
  }
  set totalSales(value: string | undefined) {
    this._totalSales = value;
  }
  get imagesPath(): string[] | undefined {
    return this._imagesPath;
  }
  set imagesPath(value: string[] | undefined) {
    this._imagesPath = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockListData.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      num: this.num,
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      totalSales: this.totalSales,
      imagesPath: (this.imagesPath || []).slice()
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
  ): StockListData.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      num: this.num,
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      totalSales: this.totalSales,
      imagesPath: (this.imagesPath || []).slice()
    };
  }
}
export module StockListData {
  /**
   * Standard JavaScript object representation for StockListData
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    productName?: string;
    num?: string;
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    totalSales?: string;
    imagesPath?: string[];
  }

  /**
   * Protobuf JSON representation for StockListData
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productName?: string;
    num?: string;
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    totalSales?: string;
    imagesPath?: string[];
  }
}

/**
 * Message implementation for shop.StockInfoRequest
 */
export class StockInfoRequest implements GrpcMessage {
  static id = 'shop.StockInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockInfoRequest();
    StockInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockInfoRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockInfoRequest,
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

    StockInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockInfoRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    StockInfoRequest.refineValues(this);
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
    StockInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockInfoRequest.AsObject {
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
  ): StockInfoRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module StockInfoRequest {
  /**
   * Standard JavaScript object representation for StockInfoRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for StockInfoRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.StockInfoResponse
 */
export class StockInfoResponse implements GrpcMessage {
  static id = 'shop.StockInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockInfoResponse();
    StockInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockInfoResponse) {
    _instance.productName = _instance.productName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.categoryId = _instance.categoryId || '0';
    _instance.supplierName = _instance.supplierName || '';
    _instance.supplierId = _instance.supplierId || '0';
    _instance.supplierProductUrl = _instance.supplierProductUrl || '';
    _instance.productDetails = _instance.productDetails || '';
    _instance.sellingPrice = _instance.sellingPrice || '';
    _instance.purchaseUnitPrice = _instance.purchaseUnitPrice || '';
    _instance.currencyType = _instance.currencyType || '0';
    _instance.currencyName = _instance.currencyName || '';
    _instance.rakutenNum = _instance.rakutenNum || '0';
    _instance.yahooNum = _instance.yahooNum || '0';
    _instance.baseNum = _instance.baseNum || '0';
    _instance.totalSales = _instance.totalSales || '';
    _instance.images = _instance.images || [];
    _instance.salesHistoryData = _instance.salesHistoryData || [];
    _instance.priceChangeData = _instance.priceChangeData || [];
    _instance.purchaseHistoryData = _instance.purchaseHistoryData || [];
    _instance.updatedAt = _instance.updatedAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockInfoResponse,
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
          _instance.categoryId = _reader.readInt64String();
          break;
        case 4:
          _instance.supplierName = _reader.readString();
          break;
        case 5:
          _instance.supplierId = _reader.readInt64String();
          break;
        case 6:
          _instance.supplierProductUrl = _reader.readString();
          break;
        case 7:
          _instance.productDetails = _reader.readString();
          break;
        case 8:
          _instance.sellingPrice = _reader.readString();
          break;
        case 9:
          _instance.purchaseUnitPrice = _reader.readString();
          break;
        case 10:
          _instance.currencyType = _reader.readInt64String();
          break;
        case 11:
          _instance.currencyName = _reader.readString();
          break;
        case 12:
          _instance.rakutenNum = _reader.readInt64String();
          break;
        case 13:
          _instance.yahooNum = _reader.readInt64String();
          break;
        case 14:
          _instance.baseNum = _reader.readInt64String();
          break;
        case 15:
          _instance.totalSales = _reader.readString();
          break;
        case 16:
          const messageInitializer16 = new StockImageInfo();
          _reader.readMessage(
            messageInitializer16,
            StockImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(
            messageInitializer16
          );
          break;
        case 17:
          const messageInitializer17 = new SalesHistoryData();
          _reader.readMessage(
            messageInitializer17,
            SalesHistoryData.deserializeBinaryFromReader
          );
          (_instance.salesHistoryData = _instance.salesHistoryData || []).push(
            messageInitializer17
          );
          break;
        case 18:
          const messageInitializer18 = new PriceChangeData();
          _reader.readMessage(
            messageInitializer18,
            PriceChangeData.deserializeBinaryFromReader
          );
          (_instance.priceChangeData = _instance.priceChangeData || []).push(
            messageInitializer18
          );
          break;
        case 19:
          const messageInitializer19 = new PurchaseHistoryData();
          _reader.readMessage(
            messageInitializer19,
            PurchaseHistoryData.deserializeBinaryFromReader
          );
          (_instance.purchaseHistoryData =
            _instance.purchaseHistoryData || []).push(messageInitializer19);
          break;
        case 20:
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

    StockInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockInfoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productName) {
      _writer.writeString(1, _instance.productName);
    }
    if (_instance.categoryName) {
      _writer.writeString(2, _instance.categoryName);
    }
    if (_instance.categoryId) {
      _writer.writeInt64String(3, _instance.categoryId);
    }
    if (_instance.supplierName) {
      _writer.writeString(4, _instance.supplierName);
    }
    if (_instance.supplierId) {
      _writer.writeInt64String(5, _instance.supplierId);
    }
    if (_instance.supplierProductUrl) {
      _writer.writeString(6, _instance.supplierProductUrl);
    }
    if (_instance.productDetails) {
      _writer.writeString(7, _instance.productDetails);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(8, _instance.sellingPrice);
    }
    if (_instance.purchaseUnitPrice) {
      _writer.writeString(9, _instance.purchaseUnitPrice);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(10, _instance.currencyType);
    }
    if (_instance.currencyName) {
      _writer.writeString(11, _instance.currencyName);
    }
    if (_instance.rakutenNum) {
      _writer.writeInt64String(12, _instance.rakutenNum);
    }
    if (_instance.yahooNum) {
      _writer.writeInt64String(13, _instance.yahooNum);
    }
    if (_instance.baseNum) {
      _writer.writeInt64String(14, _instance.baseNum);
    }
    if (_instance.totalSales) {
      _writer.writeString(15, _instance.totalSales);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        16,
        _instance.images as any,
        StockImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.salesHistoryData && _instance.salesHistoryData.length) {
      _writer.writeRepeatedMessage(
        17,
        _instance.salesHistoryData as any,
        SalesHistoryData.serializeBinaryToWriter
      );
    }
    if (_instance.priceChangeData && _instance.priceChangeData.length) {
      _writer.writeRepeatedMessage(
        18,
        _instance.priceChangeData as any,
        PriceChangeData.serializeBinaryToWriter
      );
    }
    if (_instance.purchaseHistoryData && _instance.purchaseHistoryData.length) {
      _writer.writeRepeatedMessage(
        19,
        _instance.purchaseHistoryData as any,
        PurchaseHistoryData.serializeBinaryToWriter
      );
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        20,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _productName?: string;
  private _categoryName?: string;
  private _categoryId?: string;
  private _supplierName?: string;
  private _supplierId?: string;
  private _supplierProductUrl?: string;
  private _productDetails?: string;
  private _sellingPrice?: string;
  private _purchaseUnitPrice?: string;
  private _currencyType?: string;
  private _currencyName?: string;
  private _rakutenNum?: string;
  private _yahooNum?: string;
  private _baseNum?: string;
  private _totalSales?: string;
  private _images?: StockImageInfo[];
  private _salesHistoryData?: SalesHistoryData[];
  private _priceChangeData?: PriceChangeData[];
  private _purchaseHistoryData?: PurchaseHistoryData[];
  private _updatedAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockInfoResponse.AsObject>) {
    _value = _value || {};
    this.productName = _value.productName;
    this.categoryName = _value.categoryName;
    this.categoryId = _value.categoryId;
    this.supplierName = _value.supplierName;
    this.supplierId = _value.supplierId;
    this.supplierProductUrl = _value.supplierProductUrl;
    this.productDetails = _value.productDetails;
    this.sellingPrice = _value.sellingPrice;
    this.purchaseUnitPrice = _value.purchaseUnitPrice;
    this.currencyType = _value.currencyType;
    this.currencyName = _value.currencyName;
    this.rakutenNum = _value.rakutenNum;
    this.yahooNum = _value.yahooNum;
    this.baseNum = _value.baseNum;
    this.totalSales = _value.totalSales;
    this.images = (_value.images || []).map(m => new StockImageInfo(m));
    this.salesHistoryData = (_value.salesHistoryData || []).map(
      m => new SalesHistoryData(m)
    );
    this.priceChangeData = (_value.priceChangeData || []).map(
      m => new PriceChangeData(m)
    );
    this.purchaseHistoryData = (_value.purchaseHistoryData || []).map(
      m => new PurchaseHistoryData(m)
    );
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    StockInfoResponse.refineValues(this);
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
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }
  get supplierName(): string | undefined {
    return this._supplierName;
  }
  set supplierName(value: string | undefined) {
    this._supplierName = value;
  }
  get supplierId(): string | undefined {
    return this._supplierId;
  }
  set supplierId(value: string | undefined) {
    this._supplierId = value;
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
  get purchaseUnitPrice(): string | undefined {
    return this._purchaseUnitPrice;
  }
  set purchaseUnitPrice(value: string | undefined) {
    this._purchaseUnitPrice = value;
  }
  get currencyType(): string | undefined {
    return this._currencyType;
  }
  set currencyType(value: string | undefined) {
    this._currencyType = value;
  }
  get currencyName(): string | undefined {
    return this._currencyName;
  }
  set currencyName(value: string | undefined) {
    this._currencyName = value;
  }
  get rakutenNum(): string | undefined {
    return this._rakutenNum;
  }
  set rakutenNum(value: string | undefined) {
    this._rakutenNum = value;
  }
  get yahooNum(): string | undefined {
    return this._yahooNum;
  }
  set yahooNum(value: string | undefined) {
    this._yahooNum = value;
  }
  get baseNum(): string | undefined {
    return this._baseNum;
  }
  set baseNum(value: string | undefined) {
    this._baseNum = value;
  }
  get totalSales(): string | undefined {
    return this._totalSales;
  }
  set totalSales(value: string | undefined) {
    this._totalSales = value;
  }
  get images(): StockImageInfo[] | undefined {
    return this._images;
  }
  set images(value: StockImageInfo[] | undefined) {
    this._images = value;
  }
  get salesHistoryData(): SalesHistoryData[] | undefined {
    return this._salesHistoryData;
  }
  set salesHistoryData(value: SalesHistoryData[] | undefined) {
    this._salesHistoryData = value;
  }
  get priceChangeData(): PriceChangeData[] | undefined {
    return this._priceChangeData;
  }
  set priceChangeData(value: PriceChangeData[] | undefined) {
    this._priceChangeData = value;
  }
  get purchaseHistoryData(): PurchaseHistoryData[] | undefined {
    return this._purchaseHistoryData;
  }
  set purchaseHistoryData(value: PurchaseHistoryData[] | undefined) {
    this._purchaseHistoryData = value;
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
    StockInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockInfoResponse.AsObject {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      categoryId: this.categoryId,
      supplierName: this.supplierName,
      supplierId: this.supplierId,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
      purchaseUnitPrice: this.purchaseUnitPrice,
      currencyType: this.currencyType,
      currencyName: this.currencyName,
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum,
      totalSales: this.totalSales,
      images: (this.images || []).map(m => m.toObject()),
      salesHistoryData: (this.salesHistoryData || []).map(m => m.toObject()),
      priceChangeData: (this.priceChangeData || []).map(m => m.toObject()),
      purchaseHistoryData: (this.purchaseHistoryData || []).map(m =>
        m.toObject()
      ),
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
  ): StockInfoResponse.AsProtobufJSON {
    return {
      productName: this.productName,
      categoryName: this.categoryName,
      categoryId: this.categoryId,
      supplierName: this.supplierName,
      supplierId: this.supplierId,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
      purchaseUnitPrice: this.purchaseUnitPrice,
      currencyType: this.currencyType,
      currencyName: this.currencyName,
      rakutenNum: this.rakutenNum,
      yahooNum: this.yahooNum,
      baseNum: this.baseNum,
      totalSales: this.totalSales,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      salesHistoryData: (this.salesHistoryData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      priceChangeData: (this.priceChangeData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      purchaseHistoryData: (this.purchaseHistoryData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null
    };
  }
}
export module StockInfoResponse {
  /**
   * Standard JavaScript object representation for StockInfoResponse
   */
  export interface AsObject {
    productName?: string;
    categoryName?: string;
    categoryId?: string;
    supplierName?: string;
    supplierId?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    purchaseUnitPrice?: string;
    currencyType?: string;
    currencyName?: string;
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
    totalSales?: string;
    images?: StockImageInfo.AsObject[];
    salesHistoryData?: SalesHistoryData.AsObject[];
    priceChangeData?: PriceChangeData.AsObject[];
    purchaseHistoryData?: PurchaseHistoryData.AsObject[];
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for StockInfoResponse
   */
  export interface AsProtobufJSON {
    productName?: string;
    categoryName?: string;
    categoryId?: string;
    supplierName?: string;
    supplierId?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    purchaseUnitPrice?: string;
    currencyType?: string;
    currencyName?: string;
    rakutenNum?: string;
    yahooNum?: string;
    baseNum?: string;
    totalSales?: string;
    images?: StockImageInfo.AsProtobufJSON[] | null;
    salesHistoryData?: SalesHistoryData.AsProtobufJSON[] | null;
    priceChangeData?: PriceChangeData.AsProtobufJSON[] | null;
    purchaseHistoryData?: PurchaseHistoryData.AsProtobufJSON[] | null;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.SalesHistoryData
 */
export class SalesHistoryData implements GrpcMessage {
  static id = 'shop.SalesHistoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SalesHistoryData();
    SalesHistoryData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SalesHistoryData) {
    _instance.purchaseDate = _instance.purchaseDate || undefined;
    _instance.quantity = _instance.quantity || '';
    _instance.sex = _instance.sex || '';
    _instance.age = _instance.age || '';
    _instance.multiplePurchasesFlg = _instance.multiplePurchasesFlg || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SalesHistoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchaseDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.purchaseDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.quantity = _reader.readString();
          break;
        case 3:
          _instance.sex = _reader.readString();
          break;
        case 4:
          _instance.age = _reader.readString();
          break;
        case 5:
          _instance.multiplePurchasesFlg = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    SalesHistoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SalesHistoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.purchaseDate) {
      _writer.writeMessage(
        1,
        _instance.purchaseDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.quantity) {
      _writer.writeString(2, _instance.quantity);
    }
    if (_instance.sex) {
      _writer.writeString(3, _instance.sex);
    }
    if (_instance.age) {
      _writer.writeString(4, _instance.age);
    }
    if (_instance.multiplePurchasesFlg) {
      _writer.writeString(5, _instance.multiplePurchasesFlg);
    }
  }

  private _purchaseDate?: googleProtobuf002.Timestamp;
  private _quantity?: string;
  private _sex?: string;
  private _age?: string;
  private _multiplePurchasesFlg?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SalesHistoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<SalesHistoryData.AsObject>) {
    _value = _value || {};
    this.purchaseDate = _value.purchaseDate
      ? new googleProtobuf002.Timestamp(_value.purchaseDate)
      : undefined;
    this.quantity = _value.quantity;
    this.sex = _value.sex;
    this.age = _value.age;
    this.multiplePurchasesFlg = _value.multiplePurchasesFlg;
    SalesHistoryData.refineValues(this);
  }
  get purchaseDate(): googleProtobuf002.Timestamp | undefined {
    return this._purchaseDate;
  }
  set purchaseDate(value: googleProtobuf002.Timestamp | undefined) {
    this._purchaseDate = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get sex(): string | undefined {
    return this._sex;
  }
  set sex(value: string | undefined) {
    this._sex = value;
  }
  get age(): string | undefined {
    return this._age;
  }
  set age(value: string | undefined) {
    this._age = value;
  }
  get multiplePurchasesFlg(): string | undefined {
    return this._multiplePurchasesFlg;
  }
  set multiplePurchasesFlg(value: string | undefined) {
    this._multiplePurchasesFlg = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    SalesHistoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SalesHistoryData.AsObject {
    return {
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toObject()
        : undefined,
      quantity: this.quantity,
      sex: this.sex,
      age: this.age,
      multiplePurchasesFlg: this.multiplePurchasesFlg
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
  ): SalesHistoryData.AsProtobufJSON {
    return {
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toProtobufJSON(options)
        : null,
      quantity: this.quantity,
      sex: this.sex,
      age: this.age,
      multiplePurchasesFlg: this.multiplePurchasesFlg
    };
  }
}
export module SalesHistoryData {
  /**
   * Standard JavaScript object representation for SalesHistoryData
   */
  export interface AsObject {
    purchaseDate?: googleProtobuf002.Timestamp.AsObject;
    quantity?: string;
    sex?: string;
    age?: string;
    multiplePurchasesFlg?: string;
  }

  /**
   * Protobuf JSON representation for SalesHistoryData
   */
  export interface AsProtobufJSON {
    purchaseDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    quantity?: string;
    sex?: string;
    age?: string;
    multiplePurchasesFlg?: string;
  }
}

/**
 * Message implementation for shop.PriceChangeData
 */
export class PriceChangeData implements GrpcMessage {
  static id = 'shop.PriceChangeData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PriceChangeData();
    PriceChangeData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PriceChangeData) {
    _instance.changeDate = _instance.changeDate || undefined;
    _instance.amountOfMoney = _instance.amountOfMoney || '';
    _instance.upDownFlg = _instance.upDownFlg || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PriceChangeData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.changeDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.changeDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.amountOfMoney = _reader.readString();
          break;
        case 3:
          _instance.upDownFlg = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    PriceChangeData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PriceChangeData,
    _writer: BinaryWriter
  ) {
    if (_instance.changeDate) {
      _writer.writeMessage(
        1,
        _instance.changeDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.amountOfMoney) {
      _writer.writeString(2, _instance.amountOfMoney);
    }
    if (_instance.upDownFlg) {
      _writer.writeInt64String(3, _instance.upDownFlg);
    }
  }

  private _changeDate?: googleProtobuf002.Timestamp;
  private _amountOfMoney?: string;
  private _upDownFlg?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PriceChangeData to deeply clone from
   */
  constructor(_value?: RecursivePartial<PriceChangeData.AsObject>) {
    _value = _value || {};
    this.changeDate = _value.changeDate
      ? new googleProtobuf002.Timestamp(_value.changeDate)
      : undefined;
    this.amountOfMoney = _value.amountOfMoney;
    this.upDownFlg = _value.upDownFlg;
    PriceChangeData.refineValues(this);
  }
  get changeDate(): googleProtobuf002.Timestamp | undefined {
    return this._changeDate;
  }
  set changeDate(value: googleProtobuf002.Timestamp | undefined) {
    this._changeDate = value;
  }
  get amountOfMoney(): string | undefined {
    return this._amountOfMoney;
  }
  set amountOfMoney(value: string | undefined) {
    this._amountOfMoney = value;
  }
  get upDownFlg(): string | undefined {
    return this._upDownFlg;
  }
  set upDownFlg(value: string | undefined) {
    this._upDownFlg = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PriceChangeData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PriceChangeData.AsObject {
    return {
      changeDate: this.changeDate ? this.changeDate.toObject() : undefined,
      amountOfMoney: this.amountOfMoney,
      upDownFlg: this.upDownFlg
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
  ): PriceChangeData.AsProtobufJSON {
    return {
      changeDate: this.changeDate
        ? this.changeDate.toProtobufJSON(options)
        : null,
      amountOfMoney: this.amountOfMoney,
      upDownFlg: this.upDownFlg
    };
  }
}
export module PriceChangeData {
  /**
   * Standard JavaScript object representation for PriceChangeData
   */
  export interface AsObject {
    changeDate?: googleProtobuf002.Timestamp.AsObject;
    amountOfMoney?: string;
    upDownFlg?: string;
  }

  /**
   * Protobuf JSON representation for PriceChangeData
   */
  export interface AsProtobufJSON {
    changeDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    amountOfMoney?: string;
    upDownFlg?: string;
  }
}

/**
 * Message implementation for shop.PurchaseHistoryData
 */
export class PurchaseHistoryData implements GrpcMessage {
  static id = 'shop.PurchaseHistoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PurchaseHistoryData();
    PurchaseHistoryData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PurchaseHistoryData) {
    _instance.purchaseDate = _instance.purchaseDate || undefined;
    _instance.quantity = _instance.quantity || '';
    _instance.supplier = _instance.supplier || '';
    _instance.purchaseCharge = _instance.purchaseCharge || '';
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PurchaseHistoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchaseDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.purchaseDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 2:
          _instance.quantity = _reader.readString();
          break;
        case 3:
          _instance.supplier = _reader.readString();
          break;
        case 4:
          _instance.purchaseCharge = _reader.readString();
          break;
        case 5:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PurchaseHistoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PurchaseHistoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.purchaseDate) {
      _writer.writeMessage(
        1,
        _instance.purchaseDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.quantity) {
      _writer.writeString(2, _instance.quantity);
    }
    if (_instance.supplier) {
      _writer.writeString(3, _instance.supplier);
    }
    if (_instance.purchaseCharge) {
      _writer.writeString(4, _instance.purchaseCharge);
    }
    if (_instance.status) {
      _writer.writeString(5, _instance.status);
    }
  }

  private _purchaseDate?: googleProtobuf002.Timestamp;
  private _quantity?: string;
  private _supplier?: string;
  private _purchaseCharge?: string;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PurchaseHistoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<PurchaseHistoryData.AsObject>) {
    _value = _value || {};
    this.purchaseDate = _value.purchaseDate
      ? new googleProtobuf002.Timestamp(_value.purchaseDate)
      : undefined;
    this.quantity = _value.quantity;
    this.supplier = _value.supplier;
    this.purchaseCharge = _value.purchaseCharge;
    this.status = _value.status;
    PurchaseHistoryData.refineValues(this);
  }
  get purchaseDate(): googleProtobuf002.Timestamp | undefined {
    return this._purchaseDate;
  }
  set purchaseDate(value: googleProtobuf002.Timestamp | undefined) {
    this._purchaseDate = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get supplier(): string | undefined {
    return this._supplier;
  }
  set supplier(value: string | undefined) {
    this._supplier = value;
  }
  get purchaseCharge(): string | undefined {
    return this._purchaseCharge;
  }
  set purchaseCharge(value: string | undefined) {
    this._purchaseCharge = value;
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
    PurchaseHistoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PurchaseHistoryData.AsObject {
    return {
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toObject()
        : undefined,
      quantity: this.quantity,
      supplier: this.supplier,
      purchaseCharge: this.purchaseCharge,
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
  ): PurchaseHistoryData.AsProtobufJSON {
    return {
      purchaseDate: this.purchaseDate
        ? this.purchaseDate.toProtobufJSON(options)
        : null,
      quantity: this.quantity,
      supplier: this.supplier,
      purchaseCharge: this.purchaseCharge,
      status: this.status
    };
  }
}
export module PurchaseHistoryData {
  /**
   * Standard JavaScript object representation for PurchaseHistoryData
   */
  export interface AsObject {
    purchaseDate?: googleProtobuf002.Timestamp.AsObject;
    quantity?: string;
    supplier?: string;
    purchaseCharge?: string;
    status?: string;
  }

  /**
   * Protobuf JSON representation for PurchaseHistoryData
   */
  export interface AsProtobufJSON {
    purchaseDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    quantity?: string;
    supplier?: string;
    purchaseCharge?: string;
    status?: string;
  }
}

/**
 * Message implementation for shop.StockImageInfo
 */
export class StockImageInfo implements GrpcMessage {
  static id = 'shop.StockImageInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockImageInfo();
    StockImageInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockImageInfo) {
    _instance.pictureId = _instance.pictureId || '';
    _instance.imagePath = _instance.imagePath || '';
    _instance.imageName = _instance.imageName || '';
    _instance.imageAlt = _instance.imageAlt || '';
    _instance.imageNo = _instance.imageNo || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockImageInfo,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.pictureId = _reader.readString();
          break;
        case 2:
          _instance.imagePath = _reader.readString();
          break;
        case 3:
          _instance.imageName = _reader.readString();
          break;
        case 4:
          _instance.imageAlt = _reader.readString();
          break;
        case 5:
          _instance.imageNo = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    StockImageInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockImageInfo,
    _writer: BinaryWriter
  ) {
    if (_instance.pictureId) {
      _writer.writeString(1, _instance.pictureId);
    }
    if (_instance.imagePath) {
      _writer.writeString(2, _instance.imagePath);
    }
    if (_instance.imageName) {
      _writer.writeString(3, _instance.imageName);
    }
    if (_instance.imageAlt) {
      _writer.writeString(4, _instance.imageAlt);
    }
    if (_instance.imageNo) {
      _writer.writeInt64String(5, _instance.imageNo);
    }
  }

  private _pictureId?: string;
  private _imagePath?: string;
  private _imageName?: string;
  private _imageAlt?: string;
  private _imageNo?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockImageInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockImageInfo.AsObject>) {
    _value = _value || {};
    this.pictureId = _value.pictureId;
    this.imagePath = _value.imagePath;
    this.imageName = _value.imageName;
    this.imageAlt = _value.imageAlt;
    this.imageNo = _value.imageNo;
    StockImageInfo.refineValues(this);
  }
  get pictureId(): string | undefined {
    return this._pictureId;
  }
  set pictureId(value: string | undefined) {
    this._pictureId = value;
  }
  get imagePath(): string | undefined {
    return this._imagePath;
  }
  set imagePath(value: string | undefined) {
    this._imagePath = value;
  }
  get imageName(): string | undefined {
    return this._imageName;
  }
  set imageName(value: string | undefined) {
    this._imageName = value;
  }
  get imageAlt(): string | undefined {
    return this._imageAlt;
  }
  set imageAlt(value: string | undefined) {
    this._imageAlt = value;
  }
  get imageNo(): string | undefined {
    return this._imageNo;
  }
  set imageNo(value: string | undefined) {
    this._imageNo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockImageInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockImageInfo.AsObject {
    return {
      pictureId: this.pictureId,
      imagePath: this.imagePath,
      imageName: this.imageName,
      imageAlt: this.imageAlt,
      imageNo: this.imageNo
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
  ): StockImageInfo.AsProtobufJSON {
    return {
      pictureId: this.pictureId,
      imagePath: this.imagePath,
      imageName: this.imageName,
      imageAlt: this.imageAlt,
      imageNo: this.imageNo
    };
  }
}
export module StockImageInfo {
  /**
   * Standard JavaScript object representation for StockImageInfo
   */
  export interface AsObject {
    pictureId?: string;
    imagePath?: string;
    imageName?: string;
    imageAlt?: string;
    imageNo?: string;
  }

  /**
   * Protobuf JSON representation for StockImageInfo
   */
  export interface AsProtobufJSON {
    pictureId?: string;
    imagePath?: string;
    imageName?: string;
    imageAlt?: string;
    imageNo?: string;
  }
}

/**
 * Message implementation for shop.CreateStockRequest
 */
export class CreateStockRequest implements GrpcMessage {
  static id = 'shop.CreateStockRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateStockRequest();
    CreateStockRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateStockRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.num = _instance.num || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateStockRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.num = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    CreateStockRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateStockRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.num) {
      _writer.writeInt64String(2, _instance.num);
    }
  }

  private _productItemId?: string;
  private _num?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateStockRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateStockRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.num = _value.num;
    CreateStockRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get num(): string | undefined {
    return this._num;
  }
  set num(value: string | undefined) {
    this._num = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateStockRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateStockRequest.AsObject {
    return {
      productItemId: this.productItemId,
      num: this.num
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
  ): CreateStockRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      num: this.num
    };
  }
}
export module CreateStockRequest {
  /**
   * Standard JavaScript object representation for CreateStockRequest
   */
  export interface AsObject {
    productItemId?: string;
    num?: string;
  }

  /**
   * Protobuf JSON representation for CreateStockRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    num?: string;
  }
}
