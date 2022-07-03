/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions,
  uint8ArrayToBase64
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for shop.ProductItemSortModel
 */
export class ProductItemSortModel implements GrpcMessage {
  static id = 'shop.ProductItemSortModel';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductItemSortModel();
    ProductItemSortModel.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductItemSortModel) {
    _instance.type = _instance.type || '0';
    _instance.asc = _instance.asc || false;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductItemSortModel,
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

    ProductItemSortModel.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductItemSortModel,
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
   * @param _value initial values object or instance of ProductItemSortModel to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductItemSortModel.AsObject>) {
    _value = _value || {};
    this.type = _value.type;
    this.asc = _value.asc;
    ProductItemSortModel.refineValues(this);
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
    ProductItemSortModel.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductItemSortModel.AsObject {
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
  ): ProductItemSortModel.AsProtobufJSON {
    return {
      type: this.type,
      asc: this.asc
    };
  }
}
export module ProductItemSortModel {
  /**
   * Standard JavaScript object representation for ProductItemSortModel
   */
  export interface AsObject {
    type?: string;
    asc?: boolean;
  }

  /**
   * Protobuf JSON representation for ProductItemSortModel
   */
  export interface AsProtobufJSON {
    type?: string;
    asc?: boolean;
  }
}

/**
 * Message implementation for shop.GetProductItemsImageRequest
 */
export class GetProductItemsImageRequest implements GrpcMessage {
  static id = 'shop.GetProductItemsImageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductItemsImageRequest();
    GetProductItemsImageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductItemsImageRequest) {
    _instance.path = _instance.path || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductItemsImageRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.path = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProductItemsImageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductItemsImageRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.path) {
      _writer.writeString(1, _instance.path);
    }
  }

  private _path?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemsImageRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductItemsImageRequest.AsObject>) {
    _value = _value || {};
    this.path = _value.path;
    GetProductItemsImageRequest.refineValues(this);
  }
  get path(): string | undefined {
    return this._path;
  }
  set path(value: string | undefined) {
    this._path = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProductItemsImageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductItemsImageRequest.AsObject {
    return {
      path: this.path
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
  ): GetProductItemsImageRequest.AsProtobufJSON {
    return {
      path: this.path
    };
  }
}
export module GetProductItemsImageRequest {
  /**
   * Standard JavaScript object representation for GetProductItemsImageRequest
   */
  export interface AsObject {
    path?: string;
  }

  /**
   * Protobuf JSON representation for GetProductItemsImageRequest
   */
  export interface AsProtobufJSON {
    path?: string;
  }
}

/**
 * Message implementation for shop.GetProductItemsImageResponse
 */
export class GetProductItemsImageResponse implements GrpcMessage {
  static id = 'shop.GetProductItemsImageResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductItemsImageResponse();
    GetProductItemsImageResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductItemsImageResponse) {
    _instance.data = _instance.data || new Uint8Array();
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductItemsImageResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.data = _reader.readBytes();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProductItemsImageResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductItemsImageResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeBytes(1, _instance.data);
    }
  }

  private _data?: Uint8Array;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemsImageResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<GetProductItemsImageResponse.AsObject>
  ) {
    _value = _value || {};
    this.data = _value.data;
    GetProductItemsImageResponse.refineValues(this);
  }
  get data(): Uint8Array | undefined {
    return this._data;
  }
  set data(value: Uint8Array | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProductItemsImageResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductItemsImageResponse.AsObject {
    return {
      data: this.data ? this.data.subarray(0) : new Uint8Array()
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
  ): GetProductItemsImageResponse.AsProtobufJSON {
    return {
      data: this.data ? uint8ArrayToBase64(this.data) : ''
    };
  }
}
export module GetProductItemsImageResponse {
  /**
   * Standard JavaScript object representation for GetProductItemsImageResponse
   */
  export interface AsObject {
    data?: Uint8Array;
  }

  /**
   * Protobuf JSON representation for GetProductItemsImageResponse
   */
  export interface AsProtobufJSON {
    data?: string;
  }
}

/**
 * Message implementation for shop.UploadProductItemsImageRequest
 */
export class UploadProductItemsImageRequest implements GrpcMessage {
  static id = 'shop.UploadProductItemsImageRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadProductItemsImageRequest();
    UploadProductItemsImageRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadProductItemsImageRequest) {
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
    _instance: UploadProductItemsImageRequest,
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

    UploadProductItemsImageRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadProductItemsImageRequest,
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
   * @param _value initial values object or instance of UploadProductItemsImageRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UploadProductItemsImageRequest.AsObject>
  ) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.imageName = _value.imageName;
    this.imageData = _value.imageData;
    this.imageType = _value.imageType;
    this.imageAlt = _value.imageAlt;
    UploadProductItemsImageRequest.refineValues(this);
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
    UploadProductItemsImageRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadProductItemsImageRequest.AsObject {
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
  ): UploadProductItemsImageRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      imageName: this.imageName,
      imageData: this.imageData,
      imageType: this.imageType,
      imageAlt: this.imageAlt
    };
  }
}
export module UploadProductItemsImageRequest {
  /**
   * Standard JavaScript object representation for UploadProductItemsImageRequest
   */
  export interface AsObject {
    productItemId?: string;
    imageName?: string;
    imageData?: string;
    imageType?: string;
    imageAlt?: string;
  }

  /**
   * Protobuf JSON representation for UploadProductItemsImageRequest
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
 * Message implementation for shop.UploadProductItemsImageResponse
 */
export class UploadProductItemsImageResponse implements GrpcMessage {
  static id = 'shop.UploadProductItemsImageResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadProductItemsImageResponse();
    UploadProductItemsImageResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadProductItemsImageResponse) {
    _instance.image = _instance.image || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadProductItemsImageResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.image = new ProductImageInfo();
          _reader.readMessage(
            _instance.image,
            ProductImageInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UploadProductItemsImageResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadProductItemsImageResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.image) {
      _writer.writeMessage(
        1,
        _instance.image as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
  }

  private _image?: ProductImageInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadProductItemsImageResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UploadProductItemsImageResponse.AsObject>
  ) {
    _value = _value || {};
    this.image = _value.image ? new ProductImageInfo(_value.image) : undefined;
    UploadProductItemsImageResponse.refineValues(this);
  }
  get image(): ProductImageInfo | undefined {
    return this._image;
  }
  set image(value: ProductImageInfo | undefined) {
    this._image = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadProductItemsImageResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadProductItemsImageResponse.AsObject {
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
  ): UploadProductItemsImageResponse.AsProtobufJSON {
    return {
      image: this.image ? this.image.toProtobufJSON(options) : null
    };
  }
}
export module UploadProductItemsImageResponse {
  /**
   * Standard JavaScript object representation for UploadProductItemsImageResponse
   */
  export interface AsObject {
    image?: ProductImageInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for UploadProductItemsImageResponse
   */
  export interface AsProtobufJSON {
    image?: ProductImageInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ProductImageInfo
 */
export class ProductImageInfo implements GrpcMessage {
  static id = 'shop.ProductImageInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductImageInfo();
    ProductImageInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductImageInfo) {
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
    _instance: ProductImageInfo,
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

    ProductImageInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductImageInfo,
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
   * @param _value initial values object or instance of ProductImageInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductImageInfo.AsObject>) {
    _value = _value || {};
    this.pictureId = _value.pictureId;
    this.imagePath = _value.imagePath;
    this.imageName = _value.imageName;
    this.imageAlt = _value.imageAlt;
    this.imageNo = _value.imageNo;
    ProductImageInfo.refineValues(this);
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
    ProductImageInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductImageInfo.AsObject {
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
  ): ProductImageInfo.AsProtobufJSON {
    return {
      pictureId: this.pictureId,
      imagePath: this.imagePath,
      imageName: this.imageName,
      imageAlt: this.imageAlt,
      imageNo: this.imageNo
    };
  }
}
export module ProductImageInfo {
  /**
   * Standard JavaScript object representation for ProductImageInfo
   */
  export interface AsObject {
    pictureId?: string;
    imagePath?: string;
    imageName?: string;
    imageAlt?: string;
    imageNo?: string;
  }

  /**
   * Protobuf JSON representation for ProductImageInfo
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
 * Message implementation for shop.UploadProductItemsImageSourceRequest
 */
export class UploadProductItemsImageSourceRequest implements GrpcMessage {
  static id = 'shop.UploadProductItemsImageSourceRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadProductItemsImageSourceRequest();
    UploadProductItemsImageSourceRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadProductItemsImageSourceRequest) {
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
    _instance: UploadProductItemsImageSourceRequest,
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

    UploadProductItemsImageSourceRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadProductItemsImageSourceRequest,
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
   * @param _value initial values object or instance of UploadProductItemsImageSourceRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UploadProductItemsImageSourceRequest.AsObject>
  ) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.imageName = _value.imageName;
    this.imageData = _value.imageData;
    this.imageType = _value.imageType;
    this.imageAlt = _value.imageAlt;
    UploadProductItemsImageSourceRequest.refineValues(this);
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
    UploadProductItemsImageSourceRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadProductItemsImageSourceRequest.AsObject {
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
  ): UploadProductItemsImageSourceRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      imageName: this.imageName,
      imageData: this.imageData,
      imageType: this.imageType,
      imageAlt: this.imageAlt
    };
  }
}
export module UploadProductItemsImageSourceRequest {
  /**
   * Standard JavaScript object representation for UploadProductItemsImageSourceRequest
   */
  export interface AsObject {
    productItemId?: string;
    imageName?: string;
    imageData?: string;
    imageType?: string;
    imageAlt?: string;
  }

  /**
   * Protobuf JSON representation for UploadProductItemsImageSourceRequest
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
 * Message implementation for shop.UploadProductItemsImageSourceResponse
 */
export class UploadProductItemsImageSourceResponse implements GrpcMessage {
  static id = 'shop.UploadProductItemsImageSourceResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UploadProductItemsImageSourceResponse();
    UploadProductItemsImageSourceResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UploadProductItemsImageSourceResponse) {
    _instance.image = _instance.image || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UploadProductItemsImageSourceResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.image = new ProductImageSourceInfo();
          _reader.readMessage(
            _instance.image,
            ProductImageSourceInfo.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UploadProductItemsImageSourceResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UploadProductItemsImageSourceResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.image) {
      _writer.writeMessage(
        1,
        _instance.image as any,
        ProductImageSourceInfo.serializeBinaryToWriter
      );
    }
  }

  private _image?: ProductImageSourceInfo;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UploadProductItemsImageSourceResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<UploadProductItemsImageSourceResponse.AsObject>
  ) {
    _value = _value || {};
    this.image = _value.image
      ? new ProductImageSourceInfo(_value.image)
      : undefined;
    UploadProductItemsImageSourceResponse.refineValues(this);
  }
  get image(): ProductImageSourceInfo | undefined {
    return this._image;
  }
  set image(value: ProductImageSourceInfo | undefined) {
    this._image = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UploadProductItemsImageSourceResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UploadProductItemsImageSourceResponse.AsObject {
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
  ): UploadProductItemsImageSourceResponse.AsProtobufJSON {
    return {
      image: this.image ? this.image.toProtobufJSON(options) : null
    };
  }
}
export module UploadProductItemsImageSourceResponse {
  /**
   * Standard JavaScript object representation for UploadProductItemsImageSourceResponse
   */
  export interface AsObject {
    image?: ProductImageSourceInfo.AsObject;
  }

  /**
   * Protobuf JSON representation for UploadProductItemsImageSourceResponse
   */
  export interface AsProtobufJSON {
    image?: ProductImageSourceInfo.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ProductImageSourceInfo
 */
export class ProductImageSourceInfo implements GrpcMessage {
  static id = 'shop.ProductImageSourceInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductImageSourceInfo();
    ProductImageSourceInfo.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductImageSourceInfo) {
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
    _instance: ProductImageSourceInfo,
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

    ProductImageSourceInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductImageSourceInfo,
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
   * @param _value initial values object or instance of ProductImageSourceInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductImageSourceInfo.AsObject>) {
    _value = _value || {};
    this.pictureId = _value.pictureId;
    this.imagePath = _value.imagePath;
    this.imageName = _value.imageName;
    this.imageAlt = _value.imageAlt;
    this.imageNo = _value.imageNo;
    ProductImageSourceInfo.refineValues(this);
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
    ProductImageSourceInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductImageSourceInfo.AsObject {
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
  ): ProductImageSourceInfo.AsProtobufJSON {
    return {
      pictureId: this.pictureId,
      imagePath: this.imagePath,
      imageName: this.imageName,
      imageAlt: this.imageAlt,
      imageNo: this.imageNo
    };
  }
}
export module ProductImageSourceInfo {
  /**
   * Standard JavaScript object representation for ProductImageSourceInfo
   */
  export interface AsObject {
    pictureId?: string;
    imagePath?: string;
    imageName?: string;
    imageAlt?: string;
    imageNo?: string;
  }

  /**
   * Protobuf JSON representation for ProductImageSourceInfo
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
 * Message implementation for shop.ListProductItemRequest
 */
export class ListProductItemRequest implements GrpcMessage {
  static id = 'shop.ListProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProductItemRequest();
    ListProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProductItemRequest) {
    _instance.offset = _instance.offset || undefined;
    _instance.productName = _instance.productName || undefined;
    _instance.category = _instance.category || undefined;
    _instance.supplier = _instance.supplier || undefined;
    _instance.status = _instance.status || undefined;
    _instance.rakutenEventId = _instance.rakutenEventId || undefined;
    _instance.sorting = _instance.sorting || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProductItemRequest,
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
        case 5:
          _instance.status = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.status,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.rakutenEventId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.rakutenEventId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.sorting = new ProductItemSortModel();
          _reader.readMessage(
            _instance.sorting,
            ProductItemSortModel.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProductItemRequest,
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
    if (_instance.status) {
      _writer.writeMessage(
        5,
        _instance.status as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventId) {
      _writer.writeMessage(
        6,
        _instance.rakutenEventId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.sorting) {
      _writer.writeMessage(
        7,
        _instance.sorting as any,
        ProductItemSortModel.serializeBinaryToWriter
      );
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _productName?: googleProtobuf000.StringValue;
  private _category?: googleProtobuf000.Int64Value;
  private _supplier?: googleProtobuf000.Int64Value;
  private _status?: googleProtobuf000.Int64Value;
  private _rakutenEventId?: googleProtobuf000.Int64Value;
  private _sorting?: ProductItemSortModel;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProductItemRequest.AsObject>) {
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
    this.status = _value.status
      ? new googleProtobuf000.Int64Value(_value.status)
      : undefined;
    this.rakutenEventId = _value.rakutenEventId
      ? new googleProtobuf000.Int64Value(_value.rakutenEventId)
      : undefined;
    this.sorting = _value.sorting
      ? new ProductItemSortModel(_value.sorting)
      : undefined;
    ListProductItemRequest.refineValues(this);
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
  get status(): googleProtobuf000.Int64Value | undefined {
    return this._status;
  }
  set status(value: googleProtobuf000.Int64Value | undefined) {
    this._status = value;
  }
  get rakutenEventId(): googleProtobuf000.Int64Value | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: googleProtobuf000.Int64Value | undefined) {
    this._rakutenEventId = value;
  }
  get sorting(): ProductItemSortModel | undefined {
    return this._sorting;
  }
  set sorting(value: ProductItemSortModel | undefined) {
    this._sorting = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProductItemRequest.AsObject {
    return {
      offset: this.offset ? this.offset.toObject() : undefined,
      productName: this.productName ? this.productName.toObject() : undefined,
      category: this.category ? this.category.toObject() : undefined,
      supplier: this.supplier ? this.supplier.toObject() : undefined,
      status: this.status ? this.status.toObject() : undefined,
      rakutenEventId: this.rakutenEventId
        ? this.rakutenEventId.toObject()
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
  ): ListProductItemRequest.AsProtobufJSON {
    return {
      offset: this.offset ? this.offset.toProtobufJSON(options) : null,
      productName: this.productName
        ? this.productName.toProtobufJSON(options)
        : null,
      category: this.category ? this.category.toProtobufJSON(options) : null,
      supplier: this.supplier ? this.supplier.toProtobufJSON(options) : null,
      status: this.status ? this.status.toProtobufJSON(options) : null,
      rakutenEventId: this.rakutenEventId
        ? this.rakutenEventId.toProtobufJSON(options)
        : null,
      sorting: this.sorting ? this.sorting.toProtobufJSON(options) : null
    };
  }
}
export module ListProductItemRequest {
  /**
   * Standard JavaScript object representation for ListProductItemRequest
   */
  export interface AsObject {
    offset?: googleProtobuf000.Int64Value.AsObject;
    productName?: googleProtobuf000.StringValue.AsObject;
    category?: googleProtobuf000.Int64Value.AsObject;
    supplier?: googleProtobuf000.Int64Value.AsObject;
    status?: googleProtobuf000.Int64Value.AsObject;
    rakutenEventId?: googleProtobuf000.Int64Value.AsObject;
    sorting?: ProductItemSortModel.AsObject;
  }

  /**
   * Protobuf JSON representation for ListProductItemRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    productName?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    category?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    supplier?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    status?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    rakutenEventId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    sorting?: ProductItemSortModel.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ListProductItemsResponse
 */
export class ListProductItemsResponse implements GrpcMessage {
  static id = 'shop.ListProductItemsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListProductItemsResponse();
    ListProductItemsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListProductItemsResponse) {
    _instance.data = _instance.data || [];
    _instance.total = _instance.total || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListProductItemsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ProductItemsListData();
          _reader.readMessage(
            messageInitializer1,
            ProductItemsListData.deserializeBinaryFromReader
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

    ListProductItemsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListProductItemsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        ProductItemsListData.serializeBinaryToWriter
      );
    }
    if (_instance.total) {
      _writer.writeInt64String(2, _instance.total);
    }
  }

  private _data?: ProductItemsListData[];
  private _total?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListProductItemsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListProductItemsResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new ProductItemsListData(m));
    this.total = _value.total;
    ListProductItemsResponse.refineValues(this);
  }
  get data(): ProductItemsListData[] | undefined {
    return this._data;
  }
  set data(value: ProductItemsListData[] | undefined) {
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
    ListProductItemsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListProductItemsResponse.AsObject {
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
  ): ListProductItemsResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options)),
      total: this.total
    };
  }
}
export module ListProductItemsResponse {
  /**
   * Standard JavaScript object representation for ListProductItemsResponse
   */
  export interface AsObject {
    data?: ProductItemsListData.AsObject[];
    total?: string;
  }

  /**
   * Protobuf JSON representation for ListProductItemsResponse
   */
  export interface AsProtobufJSON {
    data?: ProductItemsListData.AsProtobufJSON[] | null;
    total?: string;
  }
}

/**
 * Message implementation for shop.ProductItemsListData
 */
export class ProductItemsListData implements GrpcMessage {
  static id = 'shop.ProductItemsListData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductItemsListData();
    ProductItemsListData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductItemsListData) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productName = _instance.productName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.supplierName = _instance.supplierName || '';
    _instance.sellingPrice = _instance.sellingPrice || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.noReflection = _instance.noReflection || false;
    _instance.openStatus = _instance.openStatus || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductItemsListData,
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
          _instance.categoryName = _reader.readString();
          break;
        case 5:
          _instance.supplierName = _reader.readString();
          break;
        case 6:
          _instance.sellingPrice = _reader.readString();
          break;
        case 7:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.noReflection = _reader.readBool();
          break;
        case 9:
          (_instance.openStatus = _instance.openStatus || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ProductItemsListData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductItemsListData,
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
    if (_instance.categoryName) {
      _writer.writeString(4, _instance.categoryName);
    }
    if (_instance.supplierName) {
      _writer.writeString(5, _instance.supplierName);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(6, _instance.sellingPrice);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        7,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.noReflection) {
      _writer.writeBool(8, _instance.noReflection);
    }
    if (_instance.openStatus && _instance.openStatus.length) {
      _writer.writePackedInt64String(9, _instance.openStatus);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productName?: string;
  private _categoryName?: string;
  private _supplierName?: string;
  private _sellingPrice?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _noReflection?: boolean;
  private _openStatus?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductItemsListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductItemsListData.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productName = _value.productName;
    this.categoryName = _value.categoryName;
    this.supplierName = _value.supplierName;
    this.sellingPrice = _value.sellingPrice;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.noReflection = _value.noReflection;
    this.openStatus = (_value.openStatus || []).slice();
    ProductItemsListData.refineValues(this);
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
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get noReflection(): boolean | undefined {
    return this._noReflection;
  }
  set noReflection(value: boolean | undefined) {
    this._noReflection = value;
  }
  get openStatus(): string[] | undefined {
    return this._openStatus;
  }
  set openStatus(value: string[] | undefined) {
    this._openStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductItemsListData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductItemsListData.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      sellingPrice: this.sellingPrice,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      noReflection: this.noReflection,
      openStatus: (this.openStatus || []).slice()
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
  ): ProductItemsListData.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      categoryName: this.categoryName,
      supplierName: this.supplierName,
      sellingPrice: this.sellingPrice,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      noReflection: this.noReflection,
      openStatus: (this.openStatus || []).slice()
    };
  }
}
export module ProductItemsListData {
  /**
   * Standard JavaScript object representation for ProductItemsListData
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    sellingPrice?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    noReflection?: boolean;
    openStatus?: string[];
  }

  /**
   * Protobuf JSON representation for ProductItemsListData
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productName?: string;
    categoryName?: string;
    supplierName?: string;
    sellingPrice?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    noReflection?: boolean;
    openStatus?: string[];
  }
}

/**
 * Message implementation for shop.GetProductItemInfoRequest
 */
export class GetProductItemInfoRequest implements GrpcMessage {
  static id = 'shop.GetProductItemInfoRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductItemInfoRequest();
    GetProductItemInfoRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductItemInfoRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductItemInfoRequest,
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

    GetProductItemInfoRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductItemInfoRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemInfoRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductItemInfoRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    GetProductItemInfoRequest.refineValues(this);
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
    GetProductItemInfoRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductItemInfoRequest.AsObject {
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
  ): GetProductItemInfoRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module GetProductItemInfoRequest {
  /**
   * Standard JavaScript object representation for GetProductItemInfoRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for GetProductItemInfoRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.GetProductItemsInfoResponse
 */
export class GetProductItemsInfoResponse implements GrpcMessage {
  static id = 'shop.GetProductItemsInfoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductItemsInfoResponse();
    GetProductItemsInfoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductItemsInfoResponse) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productName = _instance.productName || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.categoryId = _instance.categoryId || '0';
    _instance.supplierName = _instance.supplierName || '';
    _instance.supplierId = _instance.supplierId || '0';
    _instance.supplierProductUrl = _instance.supplierProductUrl || '';
    _instance.productDetails = _instance.productDetails || '';
    _instance.sellingPrice = _instance.sellingPrice || '';
    _instance.purchaseUnitPrice = _instance.purchaseUnitPrice || '';
    _instance.purchaseUnitPriceCurrency =
      _instance.purchaseUnitPriceCurrency || '';
    _instance.currencyType = _instance.currencyType || '0';
    _instance.images = _instance.images || [];
    _instance.rakutenCategoryData = _instance.rakutenCategoryData || [];
    _instance.rakutenEventData = _instance.rakutenEventData || [];
    _instance.periodType = _instance.periodType || '0';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.japanPrice = _instance.japanPrice || '';
    _instance.imagesSource = _instance.imagesSource || [];
    _instance.stockQuantity = _instance.stockQuantity || [];
    _instance.productStatus = _instance.productStatus || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductItemsInfoResponse,
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
          _instance.categoryName = _reader.readString();
          break;
        case 5:
          _instance.categoryId = _reader.readInt64String();
          break;
        case 6:
          _instance.supplierName = _reader.readString();
          break;
        case 7:
          _instance.supplierId = _reader.readInt64String();
          break;
        case 8:
          _instance.supplierProductUrl = _reader.readString();
          break;
        case 9:
          _instance.productDetails = _reader.readString();
          break;
        case 10:
          _instance.sellingPrice = _reader.readString();
          break;
        case 11:
          _instance.purchaseUnitPrice = _reader.readString();
          break;
        case 12:
          _instance.purchaseUnitPriceCurrency = _reader.readString();
          break;
        case 13:
          _instance.currencyType = _reader.readInt64String();
          break;
        case 14:
          const messageInitializer14 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer14,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(
            messageInitializer14
          );
          break;
        case 15:
          const messageInitializer15 = new RakutenCategoryData();
          _reader.readMessage(
            messageInitializer15,
            RakutenCategoryData.deserializeBinaryFromReader
          );
          (_instance.rakutenCategoryData =
            _instance.rakutenCategoryData || []).push(messageInitializer15);
          break;
        case 16:
          const messageInitializer16 = new ProductItemRakutenEventData();
          _reader.readMessage(
            messageInitializer16,
            ProductItemRakutenEventData.deserializeBinaryFromReader
          );
          (_instance.rakutenEventData = _instance.rakutenEventData || []).push(
            messageInitializer16
          );
          break;
        case 17:
          _instance.periodType = _reader.readInt64String();
          break;
        case 18:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.japanPrice = _reader.readString();
          break;
        case 21:
          const messageInitializer21 = new ProductImageSourceInfo();
          _reader.readMessage(
            messageInitializer21,
            ProductImageSourceInfo.deserializeBinaryFromReader
          );
          (_instance.imagesSource = _instance.imagesSource || []).push(
            messageInitializer21
          );
          break;
        case 22:
          const messageInitializer22 = new StockQuantityData();
          _reader.readMessage(
            messageInitializer22,
            StockQuantityData.deserializeBinaryFromReader
          );
          (_instance.stockQuantity = _instance.stockQuantity || []).push(
            messageInitializer22
          );
          break;
        case 23:
          _instance.productStatus = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProductItemsInfoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductItemsInfoResponse,
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
    if (_instance.categoryName) {
      _writer.writeString(4, _instance.categoryName);
    }
    if (_instance.categoryId) {
      _writer.writeInt64String(5, _instance.categoryId);
    }
    if (_instance.supplierName) {
      _writer.writeString(6, _instance.supplierName);
    }
    if (_instance.supplierId) {
      _writer.writeInt64String(7, _instance.supplierId);
    }
    if (_instance.supplierProductUrl) {
      _writer.writeString(8, _instance.supplierProductUrl);
    }
    if (_instance.productDetails) {
      _writer.writeString(9, _instance.productDetails);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(10, _instance.sellingPrice);
    }
    if (_instance.purchaseUnitPrice) {
      _writer.writeString(11, _instance.purchaseUnitPrice);
    }
    if (_instance.purchaseUnitPriceCurrency) {
      _writer.writeString(12, _instance.purchaseUnitPriceCurrency);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(13, _instance.currencyType);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenCategoryData && _instance.rakutenCategoryData.length) {
      _writer.writeRepeatedMessage(
        15,
        _instance.rakutenCategoryData as any,
        RakutenCategoryData.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventData && _instance.rakutenEventData.length) {
      _writer.writeRepeatedMessage(
        16,
        _instance.rakutenEventData as any,
        ProductItemRakutenEventData.serializeBinaryToWriter
      );
    }
    if (_instance.periodType) {
      _writer.writeInt64String(17, _instance.periodType);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        18,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        19,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.japanPrice) {
      _writer.writeString(20, _instance.japanPrice);
    }
    if (_instance.imagesSource && _instance.imagesSource.length) {
      _writer.writeRepeatedMessage(
        21,
        _instance.imagesSource as any,
        ProductImageSourceInfo.serializeBinaryToWriter
      );
    }
    if (_instance.stockQuantity && _instance.stockQuantity.length) {
      _writer.writeRepeatedMessage(
        22,
        _instance.stockQuantity as any,
        StockQuantityData.serializeBinaryToWriter
      );
    }
    if (_instance.productStatus) {
      _writer.writeString(23, _instance.productStatus);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productName?: string;
  private _categoryName?: string;
  private _categoryId?: string;
  private _supplierName?: string;
  private _supplierId?: string;
  private _supplierProductUrl?: string;
  private _productDetails?: string;
  private _sellingPrice?: string;
  private _purchaseUnitPrice?: string;
  private _purchaseUnitPriceCurrency?: string;
  private _currencyType?: string;
  private _images?: ProductImageInfo[];
  private _rakutenCategoryData?: RakutenCategoryData[];
  private _rakutenEventData?: ProductItemRakutenEventData[];
  private _periodType?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _japanPrice?: string;
  private _imagesSource?: ProductImageSourceInfo[];
  private _stockQuantity?: StockQuantityData[];
  private _productStatus?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemsInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductItemsInfoResponse.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productName = _value.productName;
    this.categoryName = _value.categoryName;
    this.categoryId = _value.categoryId;
    this.supplierName = _value.supplierName;
    this.supplierId = _value.supplierId;
    this.supplierProductUrl = _value.supplierProductUrl;
    this.productDetails = _value.productDetails;
    this.sellingPrice = _value.sellingPrice;
    this.purchaseUnitPrice = _value.purchaseUnitPrice;
    this.purchaseUnitPriceCurrency = _value.purchaseUnitPriceCurrency;
    this.currencyType = _value.currencyType;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.rakutenCategoryData = (_value.rakutenCategoryData || []).map(
      m => new RakutenCategoryData(m)
    );
    this.rakutenEventData = (_value.rakutenEventData || []).map(
      m => new ProductItemRakutenEventData(m)
    );
    this.periodType = _value.periodType;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.japanPrice = _value.japanPrice;
    this.imagesSource = (_value.imagesSource || []).map(
      m => new ProductImageSourceInfo(m)
    );
    this.stockQuantity = (_value.stockQuantity || []).map(
      m => new StockQuantityData(m)
    );
    this.productStatus = _value.productStatus;
    GetProductItemsInfoResponse.refineValues(this);
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
  get purchaseUnitPriceCurrency(): string | undefined {
    return this._purchaseUnitPriceCurrency;
  }
  set purchaseUnitPriceCurrency(value: string | undefined) {
    this._purchaseUnitPriceCurrency = value;
  }
  get currencyType(): string | undefined {
    return this._currencyType;
  }
  set currencyType(value: string | undefined) {
    this._currencyType = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get rakutenCategoryData(): RakutenCategoryData[] | undefined {
    return this._rakutenCategoryData;
  }
  set rakutenCategoryData(value: RakutenCategoryData[] | undefined) {
    this._rakutenCategoryData = value;
  }
  get rakutenEventData(): ProductItemRakutenEventData[] | undefined {
    return this._rakutenEventData;
  }
  set rakutenEventData(value: ProductItemRakutenEventData[] | undefined) {
    this._rakutenEventData = value;
  }
  get periodType(): string | undefined {
    return this._periodType;
  }
  set periodType(value: string | undefined) {
    this._periodType = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
  }
  get japanPrice(): string | undefined {
    return this._japanPrice;
  }
  set japanPrice(value: string | undefined) {
    this._japanPrice = value;
  }
  get imagesSource(): ProductImageSourceInfo[] | undefined {
    return this._imagesSource;
  }
  set imagesSource(value: ProductImageSourceInfo[] | undefined) {
    this._imagesSource = value;
  }
  get stockQuantity(): StockQuantityData[] | undefined {
    return this._stockQuantity;
  }
  set stockQuantity(value: StockQuantityData[] | undefined) {
    this._stockQuantity = value;
  }
  get productStatus(): string | undefined {
    return this._productStatus;
  }
  set productStatus(value: string | undefined) {
    this._productStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProductItemsInfoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductItemsInfoResponse.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      categoryName: this.categoryName,
      categoryId: this.categoryId,
      supplierName: this.supplierName,
      supplierId: this.supplierId,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
      purchaseUnitPrice: this.purchaseUnitPrice,
      purchaseUnitPriceCurrency: this.purchaseUnitPriceCurrency,
      currencyType: this.currencyType,
      images: (this.images || []).map(m => m.toObject()),
      rakutenCategoryData: (this.rakutenCategoryData || []).map(m =>
        m.toObject()
      ),
      rakutenEventData: (this.rakutenEventData || []).map(m => m.toObject()),
      periodType: this.periodType,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
      japanPrice: this.japanPrice,
      imagesSource: (this.imagesSource || []).map(m => m.toObject()),
      stockQuantity: (this.stockQuantity || []).map(m => m.toObject()),
      productStatus: this.productStatus
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
  ): GetProductItemsInfoResponse.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      categoryName: this.categoryName,
      categoryId: this.categoryId,
      supplierName: this.supplierName,
      supplierId: this.supplierId,
      supplierProductUrl: this.supplierProductUrl,
      productDetails: this.productDetails,
      sellingPrice: this.sellingPrice,
      purchaseUnitPrice: this.purchaseUnitPrice,
      purchaseUnitPriceCurrency: this.purchaseUnitPriceCurrency,
      currencyType: this.currencyType,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      rakutenCategoryData: (this.rakutenCategoryData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      rakutenEventData: (this.rakutenEventData || []).map(m =>
        m.toProtobufJSON(options)
      ),
      periodType: this.periodType,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      japanPrice: this.japanPrice,
      imagesSource: (this.imagesSource || []).map(m =>
        m.toProtobufJSON(options)
      ),
      stockQuantity: (this.stockQuantity || []).map(m =>
        m.toProtobufJSON(options)
      ),
      productStatus: this.productStatus
    };
  }
}
export module GetProductItemsInfoResponse {
  /**
   * Standard JavaScript object representation for GetProductItemsInfoResponse
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    productName?: string;
    categoryName?: string;
    categoryId?: string;
    supplierName?: string;
    supplierId?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    purchaseUnitPrice?: string;
    purchaseUnitPriceCurrency?: string;
    currencyType?: string;
    images?: ProductImageInfo.AsObject[];
    rakutenCategoryData?: RakutenCategoryData.AsObject[];
    rakutenEventData?: ProductItemRakutenEventData.AsObject[];
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    japanPrice?: string;
    imagesSource?: ProductImageSourceInfo.AsObject[];
    stockQuantity?: StockQuantityData.AsObject[];
    productStatus?: string;
  }

  /**
   * Protobuf JSON representation for GetProductItemsInfoResponse
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productName?: string;
    categoryName?: string;
    categoryId?: string;
    supplierName?: string;
    supplierId?: string;
    supplierProductUrl?: string;
    productDetails?: string;
    sellingPrice?: string;
    purchaseUnitPrice?: string;
    purchaseUnitPriceCurrency?: string;
    currencyType?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    rakutenCategoryData?: RakutenCategoryData.AsProtobufJSON[] | null;
    rakutenEventData?: ProductItemRakutenEventData.AsProtobufJSON[] | null;
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    japanPrice?: string;
    imagesSource?: ProductImageSourceInfo.AsProtobufJSON[] | null;
    stockQuantity?: StockQuantityData.AsProtobufJSON[] | null;
    productStatus?: string;
  }
}

/**
 * Message implementation for shop.StockQuantityData
 */
export class StockQuantityData implements GrpcMessage {
  static id = 'shop.StockQuantityData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StockQuantityData();
    StockQuantityData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StockQuantityData) {
    _instance.storeId = _instance.storeId || '0';
    _instance.storeName = _instance.storeName || '';
    _instance.stockQuantity = _instance.stockQuantity || '0';
    _instance.lastReflectionAt = _instance.lastReflectionAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StockQuantityData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.storeId = _reader.readInt64String();
          break;
        case 2:
          _instance.storeName = _reader.readString();
          break;
        case 3:
          _instance.stockQuantity = _reader.readInt64String();
          break;
        case 6:
          _instance.lastReflectionAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.lastReflectionAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StockQuantityData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StockQuantityData,
    _writer: BinaryWriter
  ) {
    if (_instance.storeId) {
      _writer.writeInt64String(1, _instance.storeId);
    }
    if (_instance.storeName) {
      _writer.writeString(2, _instance.storeName);
    }
    if (_instance.stockQuantity) {
      _writer.writeInt64String(3, _instance.stockQuantity);
    }
    if (_instance.lastReflectionAt) {
      _writer.writeMessage(
        6,
        _instance.lastReflectionAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _storeId?: string;
  private _storeName?: string;
  private _stockQuantity?: string;
  private _lastReflectionAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StockQuantityData to deeply clone from
   */
  constructor(_value?: RecursivePartial<StockQuantityData.AsObject>) {
    _value = _value || {};
    this.storeId = _value.storeId;
    this.storeName = _value.storeName;
    this.stockQuantity = _value.stockQuantity;
    this.lastReflectionAt = _value.lastReflectionAt
      ? new googleProtobuf002.Timestamp(_value.lastReflectionAt)
      : undefined;
    StockQuantityData.refineValues(this);
  }
  get storeId(): string | undefined {
    return this._storeId;
  }
  set storeId(value: string | undefined) {
    this._storeId = value;
  }
  get storeName(): string | undefined {
    return this._storeName;
  }
  set storeName(value: string | undefined) {
    this._storeName = value;
  }
  get stockQuantity(): string | undefined {
    return this._stockQuantity;
  }
  set stockQuantity(value: string | undefined) {
    this._stockQuantity = value;
  }
  get lastReflectionAt(): googleProtobuf002.Timestamp | undefined {
    return this._lastReflectionAt;
  }
  set lastReflectionAt(value: googleProtobuf002.Timestamp | undefined) {
    this._lastReflectionAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StockQuantityData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StockQuantityData.AsObject {
    return {
      storeId: this.storeId,
      storeName: this.storeName,
      stockQuantity: this.stockQuantity,
      lastReflectionAt: this.lastReflectionAt
        ? this.lastReflectionAt.toObject()
        : undefined
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
  ): StockQuantityData.AsProtobufJSON {
    return {
      storeId: this.storeId,
      storeName: this.storeName,
      stockQuantity: this.stockQuantity,
      lastReflectionAt: this.lastReflectionAt
        ? this.lastReflectionAt.toProtobufJSON(options)
        : null
    };
  }
}
export module StockQuantityData {
  /**
   * Standard JavaScript object representation for StockQuantityData
   */
  export interface AsObject {
    storeId?: string;
    storeName?: string;
    stockQuantity?: string;
    lastReflectionAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for StockQuantityData
   */
  export interface AsProtobufJSON {
    storeId?: string;
    storeName?: string;
    stockQuantity?: string;
    lastReflectionAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetProductItemNoResponse
 */
export class GetProductItemNoResponse implements GrpcMessage {
  static id = 'shop.GetProductItemNoResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetProductItemNoResponse();
    GetProductItemNoResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetProductItemNoResponse) {
    _instance.productItemNo = _instance.productItemNo || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetProductItemNoResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.productItemNo = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetProductItemNoResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetProductItemNoResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemNo) {
      _writer.writeString(1, _instance.productItemNo);
    }
  }

  private _productItemNo?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemNoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductItemNoResponse.AsObject>) {
    _value = _value || {};
    this.productItemNo = _value.productItemNo;
    GetProductItemNoResponse.refineValues(this);
  }
  get productItemNo(): string | undefined {
    return this._productItemNo;
  }
  set productItemNo(value: string | undefined) {
    this._productItemNo = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetProductItemNoResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetProductItemNoResponse.AsObject {
    return {
      productItemNo: this.productItemNo
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
  ): GetProductItemNoResponse.AsProtobufJSON {
    return {
      productItemNo: this.productItemNo
    };
  }
}
export module GetProductItemNoResponse {
  /**
   * Standard JavaScript object representation for GetProductItemNoResponse
   */
  export interface AsObject {
    productItemNo?: string;
  }

  /**
   * Protobuf JSON representation for GetProductItemNoResponse
   */
  export interface AsProtobufJSON {
    productItemNo?: string;
  }
}

/**
 * Message implementation for shop.CreateProductItemRequest
 */
export class CreateProductItemRequest implements GrpcMessage {
  static id = 'shop.CreateProductItemRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateProductItemRequest();
    CreateProductItemRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateProductItemRequest) {
    _instance.categoryId = _instance.categoryId || '0';
    _instance.productItemName = _instance.productItemName || '';
    _instance.purchasingPrice = _instance.purchasingPrice || '';
    _instance.currencyType = _instance.currencyType || '0';
    _instance.purchasingSite = _instance.purchasingSite || '0';
    _instance.purchasingUrl = _instance.purchasingUrl || '';
    _instance.productItemCatchcopy = _instance.productItemCatchcopy || '';
    _instance.productItemExt = _instance.productItemExt || '';
    _instance.salesUnitPrice = _instance.salesUnitPrice || '';
    _instance.images = _instance.images || [];
    _instance.yahooSpec = _instance.yahooSpec || [];
    _instance.yahooSalePrice = _instance.yahooSalePrice || undefined;
    _instance.rakutenCategoryIds = _instance.rakutenCategoryIds || [];
    _instance.periodType = _instance.periodType || '0';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.copySourceProductItemId =
      _instance.copySourceProductItemId || undefined;
    _instance.rakutenEventIds = _instance.rakutenEventIds || [];
    _instance.copySourceProductId = _instance.copySourceProductId || undefined;
    _instance.imagesSource = _instance.imagesSource || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateProductItemRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.categoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.productItemName = _reader.readString();
          break;
        case 3:
          _instance.purchasingPrice = _reader.readString();
          break;
        case 4:
          _instance.currencyType = _reader.readInt64String();
          break;
        case 5:
          _instance.purchasingSite = _reader.readInt64String();
          break;
        case 6:
          _instance.purchasingUrl = _reader.readString();
          break;
        case 7:
          _instance.productItemCatchcopy = _reader.readString();
          break;
        case 8:
          _instance.productItemExt = _reader.readString();
          break;
        case 9:
          _instance.salesUnitPrice = _reader.readString();
          break;
        case 10:
          const messageInitializer10 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer10,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(
            messageInitializer10
          );
          break;
        case 11:
          const messageInitializer11 = new ProductItemYahooProductSpecValue();
          _reader.readMessage(
            messageInitializer11,
            ProductItemYahooProductSpecValue.deserializeBinaryFromReader
          );
          (_instance.yahooSpec = _instance.yahooSpec || []).push(
            messageInitializer11
          );
          break;
        case 12:
          _instance.yahooSalePrice = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.yahooSalePrice,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 13:
          (_instance.rakutenCategoryIds =
            _instance.rakutenCategoryIds || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        case 14:
          _instance.periodType = _reader.readInt64String();
          break;
        case 15:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 16:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 17:
          _instance.copySourceProductItemId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.copySourceProductItemId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 18:
          (_instance.rakutenEventIds = _instance.rakutenEventIds || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        case 19:
          _instance.copySourceProductId = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.copySourceProductId,
            googleProtobuf000.StringValue.deserializeBinaryFromReader
          );
          break;
        case 20:
          const messageInitializer20 = new ProductImageSourceInfo();
          _reader.readMessage(
            messageInitializer20,
            ProductImageSourceInfo.deserializeBinaryFromReader
          );
          (_instance.imagesSource = _instance.imagesSource || []).push(
            messageInitializer20
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateProductItemRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateProductItemRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.categoryId) {
      _writer.writeInt64String(1, _instance.categoryId);
    }
    if (_instance.productItemName) {
      _writer.writeString(2, _instance.productItemName);
    }
    if (_instance.purchasingPrice) {
      _writer.writeString(3, _instance.purchasingPrice);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(4, _instance.currencyType);
    }
    if (_instance.purchasingSite) {
      _writer.writeInt64String(5, _instance.purchasingSite);
    }
    if (_instance.purchasingUrl) {
      _writer.writeString(6, _instance.purchasingUrl);
    }
    if (_instance.productItemCatchcopy) {
      _writer.writeString(7, _instance.productItemCatchcopy);
    }
    if (_instance.productItemExt) {
      _writer.writeString(8, _instance.productItemExt);
    }
    if (_instance.salesUnitPrice) {
      _writer.writeString(9, _instance.salesUnitPrice);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        10,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.yahooSpec && _instance.yahooSpec.length) {
      _writer.writeRepeatedMessage(
        11,
        _instance.yahooSpec as any,
        ProductItemYahooProductSpecValue.serializeBinaryToWriter
      );
    }
    if (_instance.yahooSalePrice) {
      _writer.writeMessage(
        12,
        _instance.yahooSalePrice as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenCategoryIds && _instance.rakutenCategoryIds.length) {
      _writer.writePackedInt64String(13, _instance.rakutenCategoryIds);
    }
    if (_instance.periodType) {
      _writer.writeInt64String(14, _instance.periodType);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        15,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        16,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.copySourceProductItemId) {
      _writer.writeMessage(
        17,
        _instance.copySourceProductItemId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventIds && _instance.rakutenEventIds.length) {
      _writer.writePackedInt64String(18, _instance.rakutenEventIds);
    }
    if (_instance.copySourceProductId) {
      _writer.writeMessage(
        19,
        _instance.copySourceProductId as any,
        googleProtobuf000.StringValue.serializeBinaryToWriter
      );
    }
    if (_instance.imagesSource && _instance.imagesSource.length) {
      _writer.writeRepeatedMessage(
        20,
        _instance.imagesSource as any,
        ProductImageSourceInfo.serializeBinaryToWriter
      );
    }
  }

  private _categoryId?: string;
  private _productItemName?: string;
  private _purchasingPrice?: string;
  private _currencyType?: string;
  private _purchasingSite?: string;
  private _purchasingUrl?: string;
  private _productItemCatchcopy?: string;
  private _productItemExt?: string;
  private _salesUnitPrice?: string;
  private _images?: ProductImageInfo[];
  private _yahooSpec?: ProductItemYahooProductSpecValue[];
  private _yahooSalePrice?: googleProtobuf000.Int64Value;
  private _rakutenCategoryIds?: string[];
  private _periodType?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _copySourceProductItemId?: googleProtobuf000.Int64Value;
  private _rakutenEventIds?: string[];
  private _copySourceProductId?: googleProtobuf000.StringValue;
  private _imagesSource?: ProductImageSourceInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProductItemRequest.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    this.productItemName = _value.productItemName;
    this.purchasingPrice = _value.purchasingPrice;
    this.currencyType = _value.currencyType;
    this.purchasingSite = _value.purchasingSite;
    this.purchasingUrl = _value.purchasingUrl;
    this.productItemCatchcopy = _value.productItemCatchcopy;
    this.productItemExt = _value.productItemExt;
    this.salesUnitPrice = _value.salesUnitPrice;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.yahooSpec = (_value.yahooSpec || []).map(
      m => new ProductItemYahooProductSpecValue(m)
    );
    this.yahooSalePrice = _value.yahooSalePrice
      ? new googleProtobuf000.Int64Value(_value.yahooSalePrice)
      : undefined;
    this.rakutenCategoryIds = (_value.rakutenCategoryIds || []).slice();
    this.periodType = _value.periodType;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.copySourceProductItemId = _value.copySourceProductItemId
      ? new googleProtobuf000.Int64Value(_value.copySourceProductItemId)
      : undefined;
    this.rakutenEventIds = (_value.rakutenEventIds || []).slice();
    this.copySourceProductId = _value.copySourceProductId
      ? new googleProtobuf000.StringValue(_value.copySourceProductId)
      : undefined;
    this.imagesSource = (_value.imagesSource || []).map(
      m => new ProductImageSourceInfo(m)
    );
    CreateProductItemRequest.refineValues(this);
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get purchasingPrice(): string | undefined {
    return this._purchasingPrice;
  }
  set purchasingPrice(value: string | undefined) {
    this._purchasingPrice = value;
  }
  get currencyType(): string | undefined {
    return this._currencyType;
  }
  set currencyType(value: string | undefined) {
    this._currencyType = value;
  }
  get purchasingSite(): string | undefined {
    return this._purchasingSite;
  }
  set purchasingSite(value: string | undefined) {
    this._purchasingSite = value;
  }
  get purchasingUrl(): string | undefined {
    return this._purchasingUrl;
  }
  set purchasingUrl(value: string | undefined) {
    this._purchasingUrl = value;
  }
  get productItemCatchcopy(): string | undefined {
    return this._productItemCatchcopy;
  }
  set productItemCatchcopy(value: string | undefined) {
    this._productItemCatchcopy = value;
  }
  get productItemExt(): string | undefined {
    return this._productItemExt;
  }
  set productItemExt(value: string | undefined) {
    this._productItemExt = value;
  }
  get salesUnitPrice(): string | undefined {
    return this._salesUnitPrice;
  }
  set salesUnitPrice(value: string | undefined) {
    this._salesUnitPrice = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get yahooSpec(): ProductItemYahooProductSpecValue[] | undefined {
    return this._yahooSpec;
  }
  set yahooSpec(value: ProductItemYahooProductSpecValue[] | undefined) {
    this._yahooSpec = value;
  }
  get yahooSalePrice(): googleProtobuf000.Int64Value | undefined {
    return this._yahooSalePrice;
  }
  set yahooSalePrice(value: googleProtobuf000.Int64Value | undefined) {
    this._yahooSalePrice = value;
  }
  get rakutenCategoryIds(): string[] | undefined {
    return this._rakutenCategoryIds;
  }
  set rakutenCategoryIds(value: string[] | undefined) {
    this._rakutenCategoryIds = value;
  }
  get periodType(): string | undefined {
    return this._periodType;
  }
  set periodType(value: string | undefined) {
    this._periodType = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
  }
  get copySourceProductItemId(): googleProtobuf000.Int64Value | undefined {
    return this._copySourceProductItemId;
  }
  set copySourceProductItemId(value: googleProtobuf000.Int64Value | undefined) {
    this._copySourceProductItemId = value;
  }
  get rakutenEventIds(): string[] | undefined {
    return this._rakutenEventIds;
  }
  set rakutenEventIds(value: string[] | undefined) {
    this._rakutenEventIds = value;
  }
  get copySourceProductId(): googleProtobuf000.StringValue | undefined {
    return this._copySourceProductId;
  }
  set copySourceProductId(value: googleProtobuf000.StringValue | undefined) {
    this._copySourceProductId = value;
  }
  get imagesSource(): ProductImageSourceInfo[] | undefined {
    return this._imagesSource;
  }
  set imagesSource(value: ProductImageSourceInfo[] | undefined) {
    this._imagesSource = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateProductItemRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateProductItemRequest.AsObject {
    return {
      categoryId: this.categoryId,
      productItemName: this.productItemName,
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType,
      purchasingSite: this.purchasingSite,
      purchasingUrl: this.purchasingUrl,
      productItemCatchcopy: this.productItemCatchcopy,
      productItemExt: this.productItemExt,
      salesUnitPrice: this.salesUnitPrice,
      images: (this.images || []).map(m => m.toObject()),
      yahooSpec: (this.yahooSpec || []).map(m => m.toObject()),
      yahooSalePrice: this.yahooSalePrice
        ? this.yahooSalePrice.toObject()
        : undefined,
      rakutenCategoryIds: (this.rakutenCategoryIds || []).slice(),
      periodType: this.periodType,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
      copySourceProductItemId: this.copySourceProductItemId
        ? this.copySourceProductItemId.toObject()
        : undefined,
      rakutenEventIds: (this.rakutenEventIds || []).slice(),
      copySourceProductId: this.copySourceProductId
        ? this.copySourceProductId.toObject()
        : undefined,
      imagesSource: (this.imagesSource || []).map(m => m.toObject())
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
  ): CreateProductItemRequest.AsProtobufJSON {
    return {
      categoryId: this.categoryId,
      productItemName: this.productItemName,
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType,
      purchasingSite: this.purchasingSite,
      purchasingUrl: this.purchasingUrl,
      productItemCatchcopy: this.productItemCatchcopy,
      productItemExt: this.productItemExt,
      salesUnitPrice: this.salesUnitPrice,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      yahooSpec: (this.yahooSpec || []).map(m => m.toProtobufJSON(options)),
      yahooSalePrice: this.yahooSalePrice
        ? this.yahooSalePrice.toProtobufJSON(options)
        : null,
      rakutenCategoryIds: (this.rakutenCategoryIds || []).slice(),
      periodType: this.periodType,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      copySourceProductItemId: this.copySourceProductItemId
        ? this.copySourceProductItemId.toProtobufJSON(options)
        : null,
      rakutenEventIds: (this.rakutenEventIds || []).slice(),
      copySourceProductId: this.copySourceProductId
        ? this.copySourceProductId.toProtobufJSON(options)
        : null,
      imagesSource: (this.imagesSource || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module CreateProductItemRequest {
  /**
   * Standard JavaScript object representation for CreateProductItemRequest
   */
  export interface AsObject {
    categoryId?: string;
    productItemName?: string;
    purchasingPrice?: string;
    currencyType?: string;
    purchasingSite?: string;
    purchasingUrl?: string;
    productItemCatchcopy?: string;
    productItemExt?: string;
    salesUnitPrice?: string;
    images?: ProductImageInfo.AsObject[];
    yahooSpec?: ProductItemYahooProductSpecValue.AsObject[];
    yahooSalePrice?: googleProtobuf000.Int64Value.AsObject;
    rakutenCategoryIds?: string[];
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    copySourceProductItemId?: googleProtobuf000.Int64Value.AsObject;
    rakutenEventIds?: string[];
    copySourceProductId?: googleProtobuf000.StringValue.AsObject;
    imagesSource?: ProductImageSourceInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for CreateProductItemRequest
   */
  export interface AsProtobufJSON {
    categoryId?: string;
    productItemName?: string;
    purchasingPrice?: string;
    currencyType?: string;
    purchasingSite?: string;
    purchasingUrl?: string;
    productItemCatchcopy?: string;
    productItemExt?: string;
    salesUnitPrice?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    yahooSpec?: ProductItemYahooProductSpecValue.AsProtobufJSON[] | null;
    yahooSalePrice?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    rakutenCategoryIds?: string[];
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    copySourceProductItemId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    rakutenEventIds?: string[];
    copySourceProductId?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    imagesSource?: ProductImageSourceInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.CreateProductItemResponse
 */
export class CreateProductItemResponse implements GrpcMessage {
  static id = 'shop.CreateProductItemResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateProductItemResponse();
    CreateProductItemResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateProductItemResponse) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateProductItemResponse,
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

    CreateProductItemResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateProductItemResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProductItemResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProductItemResponse.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    CreateProductItemResponse.refineValues(this);
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
    CreateProductItemResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateProductItemResponse.AsObject {
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
  ): CreateProductItemResponse.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module CreateProductItemResponse {
  /**
   * Standard JavaScript object representation for CreateProductItemResponse
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for CreateProductItemResponse
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.UpdateProductItemsRequest
 */
export class UpdateProductItemsRequest implements GrpcMessage {
  static id = 'shop.UpdateProductItemsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateProductItemsRequest();
    UpdateProductItemsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateProductItemsRequest) {
    _instance.productItemId = _instance.productItemId || '0';
    _instance.productId = _instance.productId || '';
    _instance.categoryId = _instance.categoryId || '0';
    _instance.productItemName = _instance.productItemName || '';
    _instance.purchasingPrice = _instance.purchasingPrice || '';
    _instance.currencyType = _instance.currencyType || '0';
    _instance.purchasingSite = _instance.purchasingSite || '0';
    _instance.purchasingUrl = _instance.purchasingUrl || '';
    _instance.productDetails = _instance.productDetails || '';
    _instance.salesUnitPrice = _instance.salesUnitPrice || '';
    _instance.images = _instance.images || [];
    _instance.deletePictureId = _instance.deletePictureId || [];
    _instance.productItemCatchcopy = _instance.productItemCatchcopy || '';
    _instance.yahooSpec = _instance.yahooSpec || [];
    _instance.yahooSalePrice = _instance.yahooSalePrice || undefined;
    _instance.rakutenCategoryIds = _instance.rakutenCategoryIds || [];
    _instance.periodType = _instance.periodType || '0';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.copySourceProductItemId =
      _instance.copySourceProductItemId || undefined;
    _instance.rakutenEventIds = _instance.rakutenEventIds || [];
    _instance.imagesSource = _instance.imagesSource || [];
    _instance.deleteSourcePictureId = _instance.deleteSourcePictureId || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateProductItemsRequest,
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
          _instance.categoryId = _reader.readInt64String();
          break;
        case 4:
          _instance.productItemName = _reader.readString();
          break;
        case 5:
          _instance.purchasingPrice = _reader.readString();
          break;
        case 6:
          _instance.currencyType = _reader.readInt64String();
          break;
        case 7:
          _instance.purchasingSite = _reader.readInt64String();
          break;
        case 8:
          _instance.purchasingUrl = _reader.readString();
          break;
        case 9:
          _instance.productDetails = _reader.readString();
          break;
        case 10:
          _instance.salesUnitPrice = _reader.readString();
          break;
        case 11:
          const messageInitializer11 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer11,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(
            messageInitializer11
          );
          break;
        case 12:
          (_instance.deletePictureId = _instance.deletePictureId || []).push(
            _reader.readString()
          );
          break;
        case 13:
          _instance.productItemCatchcopy = _reader.readString();
          break;
        case 14:
          const messageInitializer14 = new ProductItemYahooProductSpecValue();
          _reader.readMessage(
            messageInitializer14,
            ProductItemYahooProductSpecValue.deserializeBinaryFromReader
          );
          (_instance.yahooSpec = _instance.yahooSpec || []).push(
            messageInitializer14
          );
          break;
        case 15:
          _instance.yahooSalePrice = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.yahooSalePrice,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 16:
          (_instance.rakutenCategoryIds =
            _instance.rakutenCategoryIds || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        case 17:
          _instance.periodType = _reader.readInt64String();
          break;
        case 18:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 19:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 20:
          _instance.copySourceProductItemId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.copySourceProductItemId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 21:
          (_instance.rakutenEventIds = _instance.rakutenEventIds || []).push(
            ...(_reader.readPackedInt64String() || [])
          );
          break;
        case 22:
          const messageInitializer22 = new ProductImageSourceInfo();
          _reader.readMessage(
            messageInitializer22,
            ProductImageSourceInfo.deserializeBinaryFromReader
          );
          (_instance.imagesSource = _instance.imagesSource || []).push(
            messageInitializer22
          );
          break;
        case 23:
          (_instance.deleteSourcePictureId =
            _instance.deleteSourcePictureId || []).push(_reader.readString());
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateProductItemsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateProductItemsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.categoryId) {
      _writer.writeInt64String(3, _instance.categoryId);
    }
    if (_instance.productItemName) {
      _writer.writeString(4, _instance.productItemName);
    }
    if (_instance.purchasingPrice) {
      _writer.writeString(5, _instance.purchasingPrice);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(6, _instance.currencyType);
    }
    if (_instance.purchasingSite) {
      _writer.writeInt64String(7, _instance.purchasingSite);
    }
    if (_instance.purchasingUrl) {
      _writer.writeString(8, _instance.purchasingUrl);
    }
    if (_instance.productDetails) {
      _writer.writeString(9, _instance.productDetails);
    }
    if (_instance.salesUnitPrice) {
      _writer.writeString(10, _instance.salesUnitPrice);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        11,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.deletePictureId && _instance.deletePictureId.length) {
      _writer.writeRepeatedString(12, _instance.deletePictureId);
    }
    if (_instance.productItemCatchcopy) {
      _writer.writeString(13, _instance.productItemCatchcopy);
    }
    if (_instance.yahooSpec && _instance.yahooSpec.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.yahooSpec as any,
        ProductItemYahooProductSpecValue.serializeBinaryToWriter
      );
    }
    if (_instance.yahooSalePrice) {
      _writer.writeMessage(
        15,
        _instance.yahooSalePrice as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenCategoryIds && _instance.rakutenCategoryIds.length) {
      _writer.writePackedInt64String(16, _instance.rakutenCategoryIds);
    }
    if (_instance.periodType) {
      _writer.writeInt64String(17, _instance.periodType);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        18,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        19,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.copySourceProductItemId) {
      _writer.writeMessage(
        20,
        _instance.copySourceProductItemId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventIds && _instance.rakutenEventIds.length) {
      _writer.writePackedInt64String(21, _instance.rakutenEventIds);
    }
    if (_instance.imagesSource && _instance.imagesSource.length) {
      _writer.writeRepeatedMessage(
        22,
        _instance.imagesSource as any,
        ProductImageSourceInfo.serializeBinaryToWriter
      );
    }
    if (
      _instance.deleteSourcePictureId &&
      _instance.deleteSourcePictureId.length
    ) {
      _writer.writeRepeatedString(23, _instance.deleteSourcePictureId);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _categoryId?: string;
  private _productItemName?: string;
  private _purchasingPrice?: string;
  private _currencyType?: string;
  private _purchasingSite?: string;
  private _purchasingUrl?: string;
  private _productDetails?: string;
  private _salesUnitPrice?: string;
  private _images?: ProductImageInfo[];
  private _deletePictureId?: string[];
  private _productItemCatchcopy?: string;
  private _yahooSpec?: ProductItemYahooProductSpecValue[];
  private _yahooSalePrice?: googleProtobuf000.Int64Value;
  private _rakutenCategoryIds?: string[];
  private _periodType?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _copySourceProductItemId?: googleProtobuf000.Int64Value;
  private _rakutenEventIds?: string[];
  private _imagesSource?: ProductImageSourceInfo[];
  private _deleteSourcePictureId?: string[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateProductItemsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateProductItemsRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.categoryId = _value.categoryId;
    this.productItemName = _value.productItemName;
    this.purchasingPrice = _value.purchasingPrice;
    this.currencyType = _value.currencyType;
    this.purchasingSite = _value.purchasingSite;
    this.purchasingUrl = _value.purchasingUrl;
    this.productDetails = _value.productDetails;
    this.salesUnitPrice = _value.salesUnitPrice;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.deletePictureId = (_value.deletePictureId || []).slice();
    this.productItemCatchcopy = _value.productItemCatchcopy;
    this.yahooSpec = (_value.yahooSpec || []).map(
      m => new ProductItemYahooProductSpecValue(m)
    );
    this.yahooSalePrice = _value.yahooSalePrice
      ? new googleProtobuf000.Int64Value(_value.yahooSalePrice)
      : undefined;
    this.rakutenCategoryIds = (_value.rakutenCategoryIds || []).slice();
    this.periodType = _value.periodType;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.copySourceProductItemId = _value.copySourceProductItemId
      ? new googleProtobuf000.Int64Value(_value.copySourceProductItemId)
      : undefined;
    this.rakutenEventIds = (_value.rakutenEventIds || []).slice();
    this.imagesSource = (_value.imagesSource || []).map(
      m => new ProductImageSourceInfo(m)
    );
    this.deleteSourcePictureId = (_value.deleteSourcePictureId || []).slice();
    UpdateProductItemsRequest.refineValues(this);
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
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
  }
  get productItemName(): string | undefined {
    return this._productItemName;
  }
  set productItemName(value: string | undefined) {
    this._productItemName = value;
  }
  get purchasingPrice(): string | undefined {
    return this._purchasingPrice;
  }
  set purchasingPrice(value: string | undefined) {
    this._purchasingPrice = value;
  }
  get currencyType(): string | undefined {
    return this._currencyType;
  }
  set currencyType(value: string | undefined) {
    this._currencyType = value;
  }
  get purchasingSite(): string | undefined {
    return this._purchasingSite;
  }
  set purchasingSite(value: string | undefined) {
    this._purchasingSite = value;
  }
  get purchasingUrl(): string | undefined {
    return this._purchasingUrl;
  }
  set purchasingUrl(value: string | undefined) {
    this._purchasingUrl = value;
  }
  get productDetails(): string | undefined {
    return this._productDetails;
  }
  set productDetails(value: string | undefined) {
    this._productDetails = value;
  }
  get salesUnitPrice(): string | undefined {
    return this._salesUnitPrice;
  }
  set salesUnitPrice(value: string | undefined) {
    this._salesUnitPrice = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get deletePictureId(): string[] | undefined {
    return this._deletePictureId;
  }
  set deletePictureId(value: string[] | undefined) {
    this._deletePictureId = value;
  }
  get productItemCatchcopy(): string | undefined {
    return this._productItemCatchcopy;
  }
  set productItemCatchcopy(value: string | undefined) {
    this._productItemCatchcopy = value;
  }
  get yahooSpec(): ProductItemYahooProductSpecValue[] | undefined {
    return this._yahooSpec;
  }
  set yahooSpec(value: ProductItemYahooProductSpecValue[] | undefined) {
    this._yahooSpec = value;
  }
  get yahooSalePrice(): googleProtobuf000.Int64Value | undefined {
    return this._yahooSalePrice;
  }
  set yahooSalePrice(value: googleProtobuf000.Int64Value | undefined) {
    this._yahooSalePrice = value;
  }
  get rakutenCategoryIds(): string[] | undefined {
    return this._rakutenCategoryIds;
  }
  set rakutenCategoryIds(value: string[] | undefined) {
    this._rakutenCategoryIds = value;
  }
  get periodType(): string | undefined {
    return this._periodType;
  }
  set periodType(value: string | undefined) {
    this._periodType = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
  }
  get copySourceProductItemId(): googleProtobuf000.Int64Value | undefined {
    return this._copySourceProductItemId;
  }
  set copySourceProductItemId(value: googleProtobuf000.Int64Value | undefined) {
    this._copySourceProductItemId = value;
  }
  get rakutenEventIds(): string[] | undefined {
    return this._rakutenEventIds;
  }
  set rakutenEventIds(value: string[] | undefined) {
    this._rakutenEventIds = value;
  }
  get imagesSource(): ProductImageSourceInfo[] | undefined {
    return this._imagesSource;
  }
  set imagesSource(value: ProductImageSourceInfo[] | undefined) {
    this._imagesSource = value;
  }
  get deleteSourcePictureId(): string[] | undefined {
    return this._deleteSourcePictureId;
  }
  set deleteSourcePictureId(value: string[] | undefined) {
    this._deleteSourcePictureId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateProductItemsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateProductItemsRequest.AsObject {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      categoryId: this.categoryId,
      productItemName: this.productItemName,
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType,
      purchasingSite: this.purchasingSite,
      purchasingUrl: this.purchasingUrl,
      productDetails: this.productDetails,
      salesUnitPrice: this.salesUnitPrice,
      images: (this.images || []).map(m => m.toObject()),
      deletePictureId: (this.deletePictureId || []).slice(),
      productItemCatchcopy: this.productItemCatchcopy,
      yahooSpec: (this.yahooSpec || []).map(m => m.toObject()),
      yahooSalePrice: this.yahooSalePrice
        ? this.yahooSalePrice.toObject()
        : undefined,
      rakutenCategoryIds: (this.rakutenCategoryIds || []).slice(),
      periodType: this.periodType,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
      copySourceProductItemId: this.copySourceProductItemId
        ? this.copySourceProductItemId.toObject()
        : undefined,
      rakutenEventIds: (this.rakutenEventIds || []).slice(),
      imagesSource: (this.imagesSource || []).map(m => m.toObject()),
      deleteSourcePictureId: (this.deleteSourcePictureId || []).slice()
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
  ): UpdateProductItemsRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      categoryId: this.categoryId,
      productItemName: this.productItemName,
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType,
      purchasingSite: this.purchasingSite,
      purchasingUrl: this.purchasingUrl,
      productDetails: this.productDetails,
      salesUnitPrice: this.salesUnitPrice,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      deletePictureId: (this.deletePictureId || []).slice(),
      productItemCatchcopy: this.productItemCatchcopy,
      yahooSpec: (this.yahooSpec || []).map(m => m.toProtobufJSON(options)),
      yahooSalePrice: this.yahooSalePrice
        ? this.yahooSalePrice.toProtobufJSON(options)
        : null,
      rakutenCategoryIds: (this.rakutenCategoryIds || []).slice(),
      periodType: this.periodType,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      copySourceProductItemId: this.copySourceProductItemId
        ? this.copySourceProductItemId.toProtobufJSON(options)
        : null,
      rakutenEventIds: (this.rakutenEventIds || []).slice(),
      imagesSource: (this.imagesSource || []).map(m =>
        m.toProtobufJSON(options)
      ),
      deleteSourcePictureId: (this.deleteSourcePictureId || []).slice()
    };
  }
}
export module UpdateProductItemsRequest {
  /**
   * Standard JavaScript object representation for UpdateProductItemsRequest
   */
  export interface AsObject {
    productItemId?: string;
    productId?: string;
    categoryId?: string;
    productItemName?: string;
    purchasingPrice?: string;
    currencyType?: string;
    purchasingSite?: string;
    purchasingUrl?: string;
    productDetails?: string;
    salesUnitPrice?: string;
    images?: ProductImageInfo.AsObject[];
    deletePictureId?: string[];
    productItemCatchcopy?: string;
    yahooSpec?: ProductItemYahooProductSpecValue.AsObject[];
    yahooSalePrice?: googleProtobuf000.Int64Value.AsObject;
    rakutenCategoryIds?: string[];
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    copySourceProductItemId?: googleProtobuf000.Int64Value.AsObject;
    rakutenEventIds?: string[];
    imagesSource?: ProductImageSourceInfo.AsObject[];
    deleteSourcePictureId?: string[];
  }

  /**
   * Protobuf JSON representation for UpdateProductItemsRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    categoryId?: string;
    productItemName?: string;
    purchasingPrice?: string;
    currencyType?: string;
    purchasingSite?: string;
    purchasingUrl?: string;
    productDetails?: string;
    salesUnitPrice?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    deletePictureId?: string[];
    productItemCatchcopy?: string;
    yahooSpec?: ProductItemYahooProductSpecValue.AsProtobufJSON[] | null;
    yahooSalePrice?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    rakutenCategoryIds?: string[];
    periodType?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    copySourceProductItemId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    rakutenEventIds?: string[];
    imagesSource?: ProductImageSourceInfo.AsProtobufJSON[] | null;
    deleteSourcePictureId?: string[];
  }
}

/**
 * Message implementation for shop.ListShopReflectionRequest
 */
export class ListShopReflectionRequest implements GrpcMessage {
  static id = 'shop.ListShopReflectionRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListShopReflectionRequest();
    ListShopReflectionRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListShopReflectionRequest) {
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListShopReflectionRequest,
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

    ListShopReflectionRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListShopReflectionRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.productItemId) {
      _writer.writeInt64String(1, _instance.productItemId);
    }
  }

  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListShopReflectionRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListShopReflectionRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    ListShopReflectionRequest.refineValues(this);
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
    ListShopReflectionRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListShopReflectionRequest.AsObject {
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
  ): ListShopReflectionRequest.AsProtobufJSON {
    return {
      productItemId: this.productItemId
    };
  }
}
export module ListShopReflectionRequest {
  /**
   * Standard JavaScript object representation for ListShopReflectionRequest
   */
  export interface AsObject {
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for ListShopReflectionRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.ListShopReflectionResponse
 */
export class ListShopReflectionResponse implements GrpcMessage {
  static id = 'shop.ListShopReflectionResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListShopReflectionResponse();
    ListShopReflectionResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListShopReflectionResponse) {
    _instance.data = _instance.data || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListShopReflectionResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new ShopReflectionData();
          _reader.readMessage(
            messageInitializer1,
            ShopReflectionData.deserializeBinaryFromReader
          );
          (_instance.data = _instance.data || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    ListShopReflectionResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListShopReflectionResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.data && _instance.data.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.data as any,
        ShopReflectionData.serializeBinaryToWriter
      );
    }
  }

  private _data?: ShopReflectionData[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListShopReflectionResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListShopReflectionResponse.AsObject>) {
    _value = _value || {};
    this.data = (_value.data || []).map(m => new ShopReflectionData(m));
    ListShopReflectionResponse.refineValues(this);
  }
  get data(): ShopReflectionData[] | undefined {
    return this._data;
  }
  set data(value: ShopReflectionData[] | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListShopReflectionResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListShopReflectionResponse.AsObject {
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
  ): ListShopReflectionResponse.AsProtobufJSON {
    return {
      data: (this.data || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListShopReflectionResponse {
  /**
   * Standard JavaScript object representation for ListShopReflectionResponse
   */
  export interface AsObject {
    data?: ShopReflectionData.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListShopReflectionResponse
   */
  export interface AsProtobufJSON {
    data?: ShopReflectionData.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.ShopReflectionData
 */
export class ShopReflectionData implements GrpcMessage {
  static id = 'shop.ShopReflectionData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShopReflectionData();
    ShopReflectionData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShopReflectionData) {
    _instance.shopTypeId = _instance.shopTypeId || '0';
    _instance.shopName = _instance.shopName || '';
    _instance.reflectionAt = _instance.reflectionAt || undefined;
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.status = _instance.status || '0';
    _instance.productItemId = _instance.productItemId || '0';
    _instance.entryAt = _instance.entryAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShopReflectionData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.shopTypeId = _reader.readInt64String();
          break;
        case 2:
          _instance.shopName = _reader.readString();
          break;
        case 3:
          _instance.reflectionAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.reflectionAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 5:
          _instance.status = _reader.readInt64String();
          break;
        case 6:
          _instance.productItemId = _reader.readInt64String();
          break;
        case 7:
          _instance.entryAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.entryAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ShopReflectionData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ShopReflectionData,
    _writer: BinaryWriter
  ) {
    if (_instance.shopTypeId) {
      _writer.writeInt64String(1, _instance.shopTypeId);
    }
    if (_instance.shopName) {
      _writer.writeString(2, _instance.shopName);
    }
    if (_instance.reflectionAt) {
      _writer.writeMessage(
        3,
        _instance.reflectionAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        4,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.status) {
      _writer.writeInt64String(5, _instance.status);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(6, _instance.productItemId);
    }
    if (_instance.entryAt) {
      _writer.writeMessage(
        7,
        _instance.entryAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _shopTypeId?: string;
  private _shopName?: string;
  private _reflectionAt?: googleProtobuf002.Timestamp;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _status?: string;
  private _productItemId?: string;
  private _entryAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShopReflectionData to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShopReflectionData.AsObject>) {
    _value = _value || {};
    this.shopTypeId = _value.shopTypeId;
    this.shopName = _value.shopName;
    this.reflectionAt = _value.reflectionAt
      ? new googleProtobuf002.Timestamp(_value.reflectionAt)
      : undefined;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.status = _value.status;
    this.productItemId = _value.productItemId;
    this.entryAt = _value.entryAt
      ? new googleProtobuf002.Timestamp(_value.entryAt)
      : undefined;
    ShopReflectionData.refineValues(this);
  }
  get shopTypeId(): string | undefined {
    return this._shopTypeId;
  }
  set shopTypeId(value: string | undefined) {
    this._shopTypeId = value;
  }
  get shopName(): string | undefined {
    return this._shopName;
  }
  set shopName(value: string | undefined) {
    this._shopName = value;
  }
  get reflectionAt(): googleProtobuf002.Timestamp | undefined {
    return this._reflectionAt;
  }
  set reflectionAt(value: googleProtobuf002.Timestamp | undefined) {
    this._reflectionAt = value;
  }
  get updatedAt(): googleProtobuf002.Timestamp | undefined {
    return this._updatedAt;
  }
  set updatedAt(value: googleProtobuf002.Timestamp | undefined) {
    this._updatedAt = value;
  }
  get status(): string | undefined {
    return this._status;
  }
  set status(value: string | undefined) {
    this._status = value;
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get entryAt(): googleProtobuf002.Timestamp | undefined {
    return this._entryAt;
  }
  set entryAt(value: googleProtobuf002.Timestamp | undefined) {
    this._entryAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ShopReflectionData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShopReflectionData.AsObject {
    return {
      shopTypeId: this.shopTypeId,
      shopName: this.shopName,
      reflectionAt: this.reflectionAt
        ? this.reflectionAt.toObject()
        : undefined,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
      status: this.status,
      productItemId: this.productItemId,
      entryAt: this.entryAt ? this.entryAt.toObject() : undefined
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
  ): ShopReflectionData.AsProtobufJSON {
    return {
      shopTypeId: this.shopTypeId,
      shopName: this.shopName,
      reflectionAt: this.reflectionAt
        ? this.reflectionAt.toProtobufJSON(options)
        : null,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      status: this.status,
      productItemId: this.productItemId,
      entryAt: this.entryAt ? this.entryAt.toProtobufJSON(options) : null
    };
  }
}
export module ShopReflectionData {
  /**
   * Standard JavaScript object representation for ShopReflectionData
   */
  export interface AsObject {
    shopTypeId?: string;
    shopName?: string;
    reflectionAt?: googleProtobuf002.Timestamp.AsObject;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    status?: string;
    productItemId?: string;
    entryAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ShopReflectionData
   */
  export interface AsProtobufJSON {
    shopTypeId?: string;
    shopName?: string;
    reflectionAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    status?: string;
    productItemId?: string;
    entryAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.ShopStatusUpdateRequest
 */
export class ShopStatusUpdateRequest implements GrpcMessage {
  static id = 'shop.ShopStatusUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ShopStatusUpdateRequest();
    ShopStatusUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ShopStatusUpdateRequest) {
    _instance.shopTypeId = _instance.shopTypeId || '0';
    _instance.newStatus = _instance.newStatus || '0';
    _instance.productItemId = _instance.productItemId || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ShopStatusUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.shopTypeId = _reader.readInt64String();
          break;
        case 2:
          _instance.newStatus = _reader.readInt64String();
          break;
        case 3:
          _instance.productItemId = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    ShopStatusUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ShopStatusUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.shopTypeId) {
      _writer.writeInt64String(1, _instance.shopTypeId);
    }
    if (_instance.newStatus) {
      _writer.writeInt64String(2, _instance.newStatus);
    }
    if (_instance.productItemId) {
      _writer.writeInt64String(3, _instance.productItemId);
    }
  }

  private _shopTypeId?: string;
  private _newStatus?: string;
  private _productItemId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ShopStatusUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ShopStatusUpdateRequest.AsObject>) {
    _value = _value || {};
    this.shopTypeId = _value.shopTypeId;
    this.newStatus = _value.newStatus;
    this.productItemId = _value.productItemId;
    ShopStatusUpdateRequest.refineValues(this);
  }
  get shopTypeId(): string | undefined {
    return this._shopTypeId;
  }
  set shopTypeId(value: string | undefined) {
    this._shopTypeId = value;
  }
  get newStatus(): string | undefined {
    return this._newStatus;
  }
  set newStatus(value: string | undefined) {
    this._newStatus = value;
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
    ShopStatusUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ShopStatusUpdateRequest.AsObject {
    return {
      shopTypeId: this.shopTypeId,
      newStatus: this.newStatus,
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
  ): ShopStatusUpdateRequest.AsProtobufJSON {
    return {
      shopTypeId: this.shopTypeId,
      newStatus: this.newStatus,
      productItemId: this.productItemId
    };
  }
}
export module ShopStatusUpdateRequest {
  /**
   * Standard JavaScript object representation for ShopStatusUpdateRequest
   */
  export interface AsObject {
    shopTypeId?: string;
    newStatus?: string;
    productItemId?: string;
  }

  /**
   * Protobuf JSON representation for ShopStatusUpdateRequest
   */
  export interface AsProtobufJSON {
    shopTypeId?: string;
    newStatus?: string;
    productItemId?: string;
  }
}

/**
 * Message implementation for shop.RakutenCategoryData
 */
export class RakutenCategoryData implements GrpcMessage {
  static id = 'shop.RakutenCategoryData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RakutenCategoryData();
    RakutenCategoryData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RakutenCategoryData) {
    _instance.rakutenShopCategoryId = _instance.rakutenShopCategoryId || '0';
    _instance.shopCategoryName = _instance.shopCategoryName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RakutenCategoryData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.rakutenShopCategoryId = _reader.readInt64String();
          break;
        case 2:
          _instance.shopCategoryName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RakutenCategoryData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RakutenCategoryData,
    _writer: BinaryWriter
  ) {
    if (_instance.rakutenShopCategoryId) {
      _writer.writeInt64String(1, _instance.rakutenShopCategoryId);
    }
    if (_instance.shopCategoryName) {
      _writer.writeString(2, _instance.shopCategoryName);
    }
  }

  private _rakutenShopCategoryId?: string;
  private _shopCategoryName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RakutenCategoryData to deeply clone from
   */
  constructor(_value?: RecursivePartial<RakutenCategoryData.AsObject>) {
    _value = _value || {};
    this.rakutenShopCategoryId = _value.rakutenShopCategoryId;
    this.shopCategoryName = _value.shopCategoryName;
    RakutenCategoryData.refineValues(this);
  }
  get rakutenShopCategoryId(): string | undefined {
    return this._rakutenShopCategoryId;
  }
  set rakutenShopCategoryId(value: string | undefined) {
    this._rakutenShopCategoryId = value;
  }
  get shopCategoryName(): string | undefined {
    return this._shopCategoryName;
  }
  set shopCategoryName(value: string | undefined) {
    this._shopCategoryName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RakutenCategoryData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RakutenCategoryData.AsObject {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName
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
  ): RakutenCategoryData.AsProtobufJSON {
    return {
      rakutenShopCategoryId: this.rakutenShopCategoryId,
      shopCategoryName: this.shopCategoryName
    };
  }
}
export module RakutenCategoryData {
  /**
   * Standard JavaScript object representation for RakutenCategoryData
   */
  export interface AsObject {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
  }

  /**
   * Protobuf JSON representation for RakutenCategoryData
   */
  export interface AsProtobufJSON {
    rakutenShopCategoryId?: string;
    shopCategoryName?: string;
  }
}

/**
 * Message implementation for shop.ProductItemRakutenEventData
 */
export class ProductItemRakutenEventData implements GrpcMessage {
  static id = 'shop.ProductItemRakutenEventData';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductItemRakutenEventData();
    ProductItemRakutenEventData.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductItemRakutenEventData) {
    _instance.eventProductItemId = _instance.eventProductItemId || '';
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.rakutenEventName = _instance.rakutenEventName || '';
    _instance.startYearMonth = _instance.startYearMonth || '';
    _instance.periodStart = _instance.periodStart || undefined;
    _instance.periodEnd = _instance.periodEnd || undefined;
    _instance.createdAt = _instance.createdAt || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductItemRakutenEventData,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.eventProductItemId = _reader.readString();
          break;
        case 2:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 3:
          _instance.rakutenEventName = _reader.readString();
          break;
        case 4:
          _instance.startYearMonth = _reader.readString();
          break;
        case 5:
          _instance.periodStart = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodStart,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 6:
          _instance.periodEnd = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.periodEnd,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 7:
          _instance.createdAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.createdAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ProductItemRakutenEventData.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductItemRakutenEventData,
    _writer: BinaryWriter
  ) {
    if (_instance.eventProductItemId) {
      _writer.writeString(1, _instance.eventProductItemId);
    }
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(2, _instance.rakutenEventId);
    }
    if (_instance.rakutenEventName) {
      _writer.writeString(3, _instance.rakutenEventName);
    }
    if (_instance.startYearMonth) {
      _writer.writeString(4, _instance.startYearMonth);
    }
    if (_instance.periodStart) {
      _writer.writeMessage(
        5,
        _instance.periodStart as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.periodEnd) {
      _writer.writeMessage(
        6,
        _instance.periodEnd as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.createdAt) {
      _writer.writeMessage(
        7,
        _instance.createdAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _eventProductItemId?: string;
  private _rakutenEventId?: string;
  private _rakutenEventName?: string;
  private _startYearMonth?: string;
  private _periodStart?: googleProtobuf002.Timestamp;
  private _periodEnd?: googleProtobuf002.Timestamp;
  private _createdAt?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductItemRakutenEventData to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductItemRakutenEventData.AsObject>) {
    _value = _value || {};
    this.eventProductItemId = _value.eventProductItemId;
    this.rakutenEventId = _value.rakutenEventId;
    this.rakutenEventName = _value.rakutenEventName;
    this.startYearMonth = _value.startYearMonth;
    this.periodStart = _value.periodStart
      ? new googleProtobuf002.Timestamp(_value.periodStart)
      : undefined;
    this.periodEnd = _value.periodEnd
      ? new googleProtobuf002.Timestamp(_value.periodEnd)
      : undefined;
    this.createdAt = _value.createdAt
      ? new googleProtobuf002.Timestamp(_value.createdAt)
      : undefined;
    ProductItemRakutenEventData.refineValues(this);
  }
  get eventProductItemId(): string | undefined {
    return this._eventProductItemId;
  }
  set eventProductItemId(value: string | undefined) {
    this._eventProductItemId = value;
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get rakutenEventName(): string | undefined {
    return this._rakutenEventName;
  }
  set rakutenEventName(value: string | undefined) {
    this._rakutenEventName = value;
  }
  get startYearMonth(): string | undefined {
    return this._startYearMonth;
  }
  set startYearMonth(value: string | undefined) {
    this._startYearMonth = value;
  }
  get periodStart(): googleProtobuf002.Timestamp | undefined {
    return this._periodStart;
  }
  set periodStart(value: googleProtobuf002.Timestamp | undefined) {
    this._periodStart = value;
  }
  get periodEnd(): googleProtobuf002.Timestamp | undefined {
    return this._periodEnd;
  }
  set periodEnd(value: googleProtobuf002.Timestamp | undefined) {
    this._periodEnd = value;
  }
  get createdAt(): googleProtobuf002.Timestamp | undefined {
    return this._createdAt;
  }
  set createdAt(value: googleProtobuf002.Timestamp | undefined) {
    this._createdAt = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductItemRakutenEventData.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductItemRakutenEventData.AsObject {
    return {
      eventProductItemId: this.eventProductItemId,
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart ? this.periodStart.toObject() : undefined,
      periodEnd: this.periodEnd ? this.periodEnd.toObject() : undefined,
      createdAt: this.createdAt ? this.createdAt.toObject() : undefined
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
  ): ProductItemRakutenEventData.AsProtobufJSON {
    return {
      eventProductItemId: this.eventProductItemId,
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      startYearMonth: this.startYearMonth,
      periodStart: this.periodStart
        ? this.periodStart.toProtobufJSON(options)
        : null,
      periodEnd: this.periodEnd ? this.periodEnd.toProtobufJSON(options) : null,
      createdAt: this.createdAt ? this.createdAt.toProtobufJSON(options) : null
    };
  }
}
export module ProductItemRakutenEventData {
  /**
   * Standard JavaScript object representation for ProductItemRakutenEventData
   */
  export interface AsObject {
    eventProductItemId?: string;
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsObject;
    periodEnd?: googleProtobuf002.Timestamp.AsObject;
    createdAt?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for ProductItemRakutenEventData
   */
  export interface AsProtobufJSON {
    eventProductItemId?: string;
    rakutenEventId?: string;
    rakutenEventName?: string;
    startYearMonth?: string;
    periodStart?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    periodEnd?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    createdAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetExchangeRateRequest
 */
export class GetExchangeRateRequest implements GrpcMessage {
  static id = 'shop.GetExchangeRateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetExchangeRateRequest();
    GetExchangeRateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetExchangeRateRequest) {
    _instance.purchasingPrice = _instance.purchasingPrice || '';
    _instance.currencyType = _instance.currencyType || '0';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetExchangeRateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.purchasingPrice = _reader.readString();
          break;
        case 2:
          _instance.currencyType = _reader.readInt64String();
          break;
        default:
          _reader.skipField();
      }
    }

    GetExchangeRateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetExchangeRateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.purchasingPrice) {
      _writer.writeString(1, _instance.purchasingPrice);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(2, _instance.currencyType);
    }
  }

  private _purchasingPrice?: string;
  private _currencyType?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetExchangeRateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetExchangeRateRequest.AsObject>) {
    _value = _value || {};
    this.purchasingPrice = _value.purchasingPrice;
    this.currencyType = _value.currencyType;
    GetExchangeRateRequest.refineValues(this);
  }
  get purchasingPrice(): string | undefined {
    return this._purchasingPrice;
  }
  set purchasingPrice(value: string | undefined) {
    this._purchasingPrice = value;
  }
  get currencyType(): string | undefined {
    return this._currencyType;
  }
  set currencyType(value: string | undefined) {
    this._currencyType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetExchangeRateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetExchangeRateRequest.AsObject {
    return {
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType
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
  ): GetExchangeRateRequest.AsProtobufJSON {
    return {
      purchasingPrice: this.purchasingPrice,
      currencyType: this.currencyType
    };
  }
}
export module GetExchangeRateRequest {
  /**
   * Standard JavaScript object representation for GetExchangeRateRequest
   */
  export interface AsObject {
    purchasingPrice?: string;
    currencyType?: string;
  }

  /**
   * Protobuf JSON representation for GetExchangeRateRequest
   */
  export interface AsProtobufJSON {
    purchasingPrice?: string;
    currencyType?: string;
  }
}

/**
 * Message implementation for shop.GetExchangeRateResponse
 */
export class GetExchangeRateResponse implements GrpcMessage {
  static id = 'shop.GetExchangeRateResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetExchangeRateResponse();
    GetExchangeRateResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetExchangeRateResponse) {
    _instance.jpyPrice = _instance.jpyPrice || '';
    _instance.vndPrice = _instance.vndPrice || '';
    _instance.rateDate = _instance.rateDate || undefined;
    _instance.usdPrice = _instance.usdPrice || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetExchangeRateResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.jpyPrice = _reader.readString();
          break;
        case 2:
          _instance.vndPrice = _reader.readString();
          break;
        case 3:
          _instance.rateDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.rateDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 4:
          _instance.usdPrice = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetExchangeRateResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetExchangeRateResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.jpyPrice) {
      _writer.writeString(1, _instance.jpyPrice);
    }
    if (_instance.vndPrice) {
      _writer.writeString(2, _instance.vndPrice);
    }
    if (_instance.rateDate) {
      _writer.writeMessage(
        3,
        _instance.rateDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.usdPrice) {
      _writer.writeString(4, _instance.usdPrice);
    }
  }

  private _jpyPrice?: string;
  private _vndPrice?: string;
  private _rateDate?: googleProtobuf002.Timestamp;
  private _usdPrice?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetExchangeRateResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetExchangeRateResponse.AsObject>) {
    _value = _value || {};
    this.jpyPrice = _value.jpyPrice;
    this.vndPrice = _value.vndPrice;
    this.rateDate = _value.rateDate
      ? new googleProtobuf002.Timestamp(_value.rateDate)
      : undefined;
    this.usdPrice = _value.usdPrice;
    GetExchangeRateResponse.refineValues(this);
  }
  get jpyPrice(): string | undefined {
    return this._jpyPrice;
  }
  set jpyPrice(value: string | undefined) {
    this._jpyPrice = value;
  }
  get vndPrice(): string | undefined {
    return this._vndPrice;
  }
  set vndPrice(value: string | undefined) {
    this._vndPrice = value;
  }
  get rateDate(): googleProtobuf002.Timestamp | undefined {
    return this._rateDate;
  }
  set rateDate(value: googleProtobuf002.Timestamp | undefined) {
    this._rateDate = value;
  }
  get usdPrice(): string | undefined {
    return this._usdPrice;
  }
  set usdPrice(value: string | undefined) {
    this._usdPrice = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetExchangeRateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetExchangeRateResponse.AsObject {
    return {
      jpyPrice: this.jpyPrice,
      vndPrice: this.vndPrice,
      rateDate: this.rateDate ? this.rateDate.toObject() : undefined,
      usdPrice: this.usdPrice
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
  ): GetExchangeRateResponse.AsProtobufJSON {
    return {
      jpyPrice: this.jpyPrice,
      vndPrice: this.vndPrice,
      rateDate: this.rateDate ? this.rateDate.toProtobufJSON(options) : null,
      usdPrice: this.usdPrice
    };
  }
}
export module GetExchangeRateResponse {
  /**
   * Standard JavaScript object representation for GetExchangeRateResponse
   */
  export interface AsObject {
    jpyPrice?: string;
    vndPrice?: string;
    rateDate?: googleProtobuf002.Timestamp.AsObject;
    usdPrice?: string;
  }

  /**
   * Protobuf JSON representation for GetExchangeRateResponse
   */
  export interface AsProtobufJSON {
    jpyPrice?: string;
    vndPrice?: string;
    rateDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    usdPrice?: string;
  }
}

/**
 * Message implementation for shop.GetCopyProductIdRequest
 */
export class GetCopyProductIdRequest implements GrpcMessage {
  static id = 'shop.GetCopyProductIdRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCopyProductIdRequest();
    GetCopyProductIdRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCopyProductIdRequest) {
    _instance.sourceProductItemId = _instance.sourceProductItemId || '0';
    _instance.rakutenEventId = _instance.rakutenEventId || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCopyProductIdRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sourceProductItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.rakutenEventId = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.rakutenEventId,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCopyProductIdRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCopyProductIdRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.sourceProductItemId) {
      _writer.writeInt64String(1, _instance.sourceProductItemId);
    }
    if (_instance.rakutenEventId) {
      _writer.writeMessage(
        2,
        _instance.rakutenEventId as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
  }

  private _sourceProductItemId?: string;
  private _rakutenEventId?: googleProtobuf000.Int64Value;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCopyProductIdRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCopyProductIdRequest.AsObject>) {
    _value = _value || {};
    this.sourceProductItemId = _value.sourceProductItemId;
    this.rakutenEventId = _value.rakutenEventId
      ? new googleProtobuf000.Int64Value(_value.rakutenEventId)
      : undefined;
    GetCopyProductIdRequest.refineValues(this);
  }
  get sourceProductItemId(): string | undefined {
    return this._sourceProductItemId;
  }
  set sourceProductItemId(value: string | undefined) {
    this._sourceProductItemId = value;
  }
  get rakutenEventId(): googleProtobuf000.Int64Value | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: googleProtobuf000.Int64Value | undefined) {
    this._rakutenEventId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCopyProductIdRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCopyProductIdRequest.AsObject {
    return {
      sourceProductItemId: this.sourceProductItemId,
      rakutenEventId: this.rakutenEventId
        ? this.rakutenEventId.toObject()
        : undefined
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
  ): GetCopyProductIdRequest.AsProtobufJSON {
    return {
      sourceProductItemId: this.sourceProductItemId,
      rakutenEventId: this.rakutenEventId
        ? this.rakutenEventId.toProtobufJSON(options)
        : null
    };
  }
}
export module GetCopyProductIdRequest {
  /**
   * Standard JavaScript object representation for GetCopyProductIdRequest
   */
  export interface AsObject {
    sourceProductItemId?: string;
    rakutenEventId?: googleProtobuf000.Int64Value.AsObject;
  }

  /**
   * Protobuf JSON representation for GetCopyProductIdRequest
   */
  export interface AsProtobufJSON {
    sourceProductItemId?: string;
    rakutenEventId?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for shop.GetCopyProductIdResponse
 */
export class GetCopyProductIdResponse implements GrpcMessage {
  static id = 'shop.GetCopyProductIdResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetCopyProductIdResponse();
    GetCopyProductIdResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetCopyProductIdResponse) {
    _instance.sourceProductItemId = _instance.sourceProductItemId || '0';
    _instance.sourceProductId = _instance.sourceProductId || '';
    _instance.newProductId = _instance.newProductId || '';
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
    _instance.images = _instance.images || [];
    _instance.rakutenEventId = _instance.rakutenEventId || '0';
    _instance.rakutenEventName = _instance.rakutenEventName || '';
    _instance.imagesSource = _instance.imagesSource || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetCopyProductIdResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sourceProductItemId = _reader.readInt64String();
          break;
        case 2:
          _instance.sourceProductId = _reader.readString();
          break;
        case 3:
          _instance.newProductId = _reader.readString();
          break;
        case 4:
          _instance.productName = _reader.readString();
          break;
        case 5:
          _instance.categoryName = _reader.readString();
          break;
        case 6:
          _instance.categoryId = _reader.readInt64String();
          break;
        case 7:
          _instance.supplierName = _reader.readString();
          break;
        case 8:
          _instance.supplierId = _reader.readInt64String();
          break;
        case 9:
          _instance.supplierProductUrl = _reader.readString();
          break;
        case 10:
          _instance.productDetails = _reader.readString();
          break;
        case 11:
          _instance.sellingPrice = _reader.readString();
          break;
        case 12:
          _instance.purchaseUnitPrice = _reader.readString();
          break;
        case 13:
          _instance.currencyType = _reader.readInt64String();
          break;
        case 14:
          const messageInitializer14 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer14,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(
            messageInitializer14
          );
          break;
        case 15:
          _instance.rakutenEventId = _reader.readInt64String();
          break;
        case 16:
          _instance.rakutenEventName = _reader.readString();
          break;
        case 17:
          const messageInitializer17 = new ProductImageSourceInfo();
          _reader.readMessage(
            messageInitializer17,
            ProductImageSourceInfo.deserializeBinaryFromReader
          );
          (_instance.imagesSource = _instance.imagesSource || []).push(
            messageInitializer17
          );
          break;
        default:
          _reader.skipField();
      }
    }

    GetCopyProductIdResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetCopyProductIdResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sourceProductItemId) {
      _writer.writeInt64String(1, _instance.sourceProductItemId);
    }
    if (_instance.sourceProductId) {
      _writer.writeString(2, _instance.sourceProductId);
    }
    if (_instance.newProductId) {
      _writer.writeString(3, _instance.newProductId);
    }
    if (_instance.productName) {
      _writer.writeString(4, _instance.productName);
    }
    if (_instance.categoryName) {
      _writer.writeString(5, _instance.categoryName);
    }
    if (_instance.categoryId) {
      _writer.writeInt64String(6, _instance.categoryId);
    }
    if (_instance.supplierName) {
      _writer.writeString(7, _instance.supplierName);
    }
    if (_instance.supplierId) {
      _writer.writeInt64String(8, _instance.supplierId);
    }
    if (_instance.supplierProductUrl) {
      _writer.writeString(9, _instance.supplierProductUrl);
    }
    if (_instance.productDetails) {
      _writer.writeString(10, _instance.productDetails);
    }
    if (_instance.sellingPrice) {
      _writer.writeString(11, _instance.sellingPrice);
    }
    if (_instance.purchaseUnitPrice) {
      _writer.writeString(12, _instance.purchaseUnitPrice);
    }
    if (_instance.currencyType) {
      _writer.writeInt64String(13, _instance.currencyType);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        14,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.rakutenEventId) {
      _writer.writeInt64String(15, _instance.rakutenEventId);
    }
    if (_instance.rakutenEventName) {
      _writer.writeString(16, _instance.rakutenEventName);
    }
    if (_instance.imagesSource && _instance.imagesSource.length) {
      _writer.writeRepeatedMessage(
        17,
        _instance.imagesSource as any,
        ProductImageSourceInfo.serializeBinaryToWriter
      );
    }
  }

  private _sourceProductItemId?: string;
  private _sourceProductId?: string;
  private _newProductId?: string;
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
  private _images?: ProductImageInfo[];
  private _rakutenEventId?: string;
  private _rakutenEventName?: string;
  private _imagesSource?: ProductImageSourceInfo[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetCopyProductIdResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetCopyProductIdResponse.AsObject>) {
    _value = _value || {};
    this.sourceProductItemId = _value.sourceProductItemId;
    this.sourceProductId = _value.sourceProductId;
    this.newProductId = _value.newProductId;
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
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.rakutenEventId = _value.rakutenEventId;
    this.rakutenEventName = _value.rakutenEventName;
    this.imagesSource = (_value.imagesSource || []).map(
      m => new ProductImageSourceInfo(m)
    );
    GetCopyProductIdResponse.refineValues(this);
  }
  get sourceProductItemId(): string | undefined {
    return this._sourceProductItemId;
  }
  set sourceProductItemId(value: string | undefined) {
    this._sourceProductItemId = value;
  }
  get sourceProductId(): string | undefined {
    return this._sourceProductId;
  }
  set sourceProductId(value: string | undefined) {
    this._sourceProductId = value;
  }
  get newProductId(): string | undefined {
    return this._newProductId;
  }
  set newProductId(value: string | undefined) {
    this._newProductId = value;
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
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get rakutenEventId(): string | undefined {
    return this._rakutenEventId;
  }
  set rakutenEventId(value: string | undefined) {
    this._rakutenEventId = value;
  }
  get rakutenEventName(): string | undefined {
    return this._rakutenEventName;
  }
  set rakutenEventName(value: string | undefined) {
    this._rakutenEventName = value;
  }
  get imagesSource(): ProductImageSourceInfo[] | undefined {
    return this._imagesSource;
  }
  set imagesSource(value: ProductImageSourceInfo[] | undefined) {
    this._imagesSource = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetCopyProductIdResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetCopyProductIdResponse.AsObject {
    return {
      sourceProductItemId: this.sourceProductItemId,
      sourceProductId: this.sourceProductId,
      newProductId: this.newProductId,
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
      images: (this.images || []).map(m => m.toObject()),
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      imagesSource: (this.imagesSource || []).map(m => m.toObject())
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
  ): GetCopyProductIdResponse.AsProtobufJSON {
    return {
      sourceProductItemId: this.sourceProductItemId,
      sourceProductId: this.sourceProductId,
      newProductId: this.newProductId,
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
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      rakutenEventId: this.rakutenEventId,
      rakutenEventName: this.rakutenEventName,
      imagesSource: (this.imagesSource || []).map(m =>
        m.toProtobufJSON(options)
      )
    };
  }
}
export module GetCopyProductIdResponse {
  /**
   * Standard JavaScript object representation for GetCopyProductIdResponse
   */
  export interface AsObject {
    sourceProductItemId?: string;
    sourceProductId?: string;
    newProductId?: string;
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
    images?: ProductImageInfo.AsObject[];
    rakutenEventId?: string;
    rakutenEventName?: string;
    imagesSource?: ProductImageSourceInfo.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetCopyProductIdResponse
   */
  export interface AsProtobufJSON {
    sourceProductItemId?: string;
    sourceProductId?: string;
    newProductId?: string;
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
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    rakutenEventId?: string;
    rakutenEventName?: string;
    imagesSource?: ProductImageSourceInfo.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for shop.ProductItemYahooProductSpecValue
 */
export class ProductItemYahooProductSpecValue implements GrpcMessage {
  static id = 'shop.ProductItemYahooProductSpecValue';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ProductItemYahooProductSpecValue();
    ProductItemYahooProductSpecValue.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ProductItemYahooProductSpecValue) {
    _instance.specValueId = _instance.specValueId || '0';
    _instance.specValueName = _instance.specValueName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ProductItemYahooProductSpecValue,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.specValueId = _reader.readInt64String();
          break;
        case 2:
          _instance.specValueName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ProductItemYahooProductSpecValue.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ProductItemYahooProductSpecValue,
    _writer: BinaryWriter
  ) {
    if (_instance.specValueId) {
      _writer.writeInt64String(1, _instance.specValueId);
    }
    if (_instance.specValueName) {
      _writer.writeString(2, _instance.specValueName);
    }
  }

  private _specValueId?: string;
  private _specValueName?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductItemYahooProductSpecValue to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<ProductItemYahooProductSpecValue.AsObject>
  ) {
    _value = _value || {};
    this.specValueId = _value.specValueId;
    this.specValueName = _value.specValueName;
    ProductItemYahooProductSpecValue.refineValues(this);
  }
  get specValueId(): string | undefined {
    return this._specValueId;
  }
  set specValueId(value: string | undefined) {
    this._specValueId = value;
  }
  get specValueName(): string | undefined {
    return this._specValueName;
  }
  set specValueName(value: string | undefined) {
    this._specValueName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ProductItemYahooProductSpecValue.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ProductItemYahooProductSpecValue.AsObject {
    return {
      specValueId: this.specValueId,
      specValueName: this.specValueName
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
  ): ProductItemYahooProductSpecValue.AsProtobufJSON {
    return {
      specValueId: this.specValueId,
      specValueName: this.specValueName
    };
  }
}
export module ProductItemYahooProductSpecValue {
  /**
   * Standard JavaScript object representation for ProductItemYahooProductSpecValue
   */
  export interface AsObject {
    specValueId?: string;
    specValueName?: string;
  }

  /**
   * Protobuf JSON representation for ProductItemYahooProductSpecValue
   */
  export interface AsProtobufJSON {
    specValueId?: string;
    specValueName?: string;
  }
}
