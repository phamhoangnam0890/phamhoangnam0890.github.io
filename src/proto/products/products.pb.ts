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
 * Message implementation for products.ProductItemSortModel
 */
export class ProductItemSortModel implements GrpcMessage {
  static id = 'products.ProductItemSortModel';

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
 * Message implementation for products.GetProductItemsImageRequest
 */
export class GetProductItemsImageRequest implements GrpcMessage {
  static id = 'products.GetProductItemsImageRequest';

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
 * Message implementation for products.GetProductItemsImageResponse
 */
export class GetProductItemsImageResponse implements GrpcMessage {
  static id = 'products.GetProductItemsImageResponse';

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
 * Message implementation for products.UploadProductItemsImageRequest
 */
export class UploadProductItemsImageRequest implements GrpcMessage {
  static id = 'products.UploadProductItemsImageRequest';

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
 * Message implementation for products.UploadProductItemsImageResponse
 */
export class UploadProductItemsImageResponse implements GrpcMessage {
  static id = 'products.UploadProductItemsImageResponse';

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
 * Message implementation for products.ProductImageInfo
 */
export class ProductImageInfo implements GrpcMessage {
  static id = 'products.ProductImageInfo';

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
 * Message implementation for products.ListProductItemRequest
 */
export class ListProductItemRequest implements GrpcMessage {
  static id = 'products.ListProductItemRequest';

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
    _instance.keyWord = _instance.keyWord || undefined;
    _instance.category = _instance.category || undefined;
    _instance.status = _instance.status || undefined;
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
          _instance.keyWord = new googleProtobuf000.StringValue();
          _reader.readMessage(
            _instance.keyWord,
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
          _instance.status = new googleProtobuf000.Int64Value();
          _reader.readMessage(
            _instance.status,
            googleProtobuf000.Int64Value.deserializeBinaryFromReader
          );
          break;
        case 5:
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
    if (_instance.keyWord) {
      _writer.writeMessage(
        2,
        _instance.keyWord as any,
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
    if (_instance.status) {
      _writer.writeMessage(
        4,
        _instance.status as any,
        googleProtobuf000.Int64Value.serializeBinaryToWriter
      );
    }
    if (_instance.sorting) {
      _writer.writeMessage(
        5,
        _instance.sorting as any,
        ProductItemSortModel.serializeBinaryToWriter
      );
    }
  }

  private _offset?: googleProtobuf000.Int64Value;
  private _keyWord?: googleProtobuf000.StringValue;
  private _category?: googleProtobuf000.Int64Value;
  private _status?: googleProtobuf000.Int64Value;
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
    this.keyWord = _value.keyWord
      ? new googleProtobuf000.StringValue(_value.keyWord)
      : undefined;
    this.category = _value.category
      ? new googleProtobuf000.Int64Value(_value.category)
      : undefined;
    this.status = _value.status
      ? new googleProtobuf000.Int64Value(_value.status)
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
  get keyWord(): googleProtobuf000.StringValue | undefined {
    return this._keyWord;
  }
  set keyWord(value: googleProtobuf000.StringValue | undefined) {
    this._keyWord = value;
  }
  get category(): googleProtobuf000.Int64Value | undefined {
    return this._category;
  }
  set category(value: googleProtobuf000.Int64Value | undefined) {
    this._category = value;
  }
  get status(): googleProtobuf000.Int64Value | undefined {
    return this._status;
  }
  set status(value: googleProtobuf000.Int64Value | undefined) {
    this._status = value;
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
      keyWord: this.keyWord ? this.keyWord.toObject() : undefined,
      category: this.category ? this.category.toObject() : undefined,
      status: this.status ? this.status.toObject() : undefined,
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
      keyWord: this.keyWord ? this.keyWord.toProtobufJSON(options) : null,
      category: this.category ? this.category.toProtobufJSON(options) : null,
      status: this.status ? this.status.toProtobufJSON(options) : null,
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
    keyWord?: googleProtobuf000.StringValue.AsObject;
    category?: googleProtobuf000.Int64Value.AsObject;
    status?: googleProtobuf000.Int64Value.AsObject;
    sorting?: ProductItemSortModel.AsObject;
  }

  /**
   * Protobuf JSON representation for ListProductItemRequest
   */
  export interface AsProtobufJSON {
    offset?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    keyWord?: googleProtobuf000.StringValue.AsProtobufJSON | null;
    category?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    status?: googleProtobuf000.Int64Value.AsProtobufJSON | null;
    sorting?: ProductItemSortModel.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for products.ListProductItemsResponse
 */
export class ListProductItemsResponse implements GrpcMessage {
  static id = 'products.ListProductItemsResponse';

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
 * Message implementation for products.ProductItemsListData
 */
export class ProductItemsListData implements GrpcMessage {
  static id = 'products.ProductItemsListData';

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
    _instance.inputPrice = _instance.inputPrice || '';
    _instance.price = _instance.price || '';
    _instance.quantity = _instance.quantity || '';
    _instance.updatedAt = _instance.updatedAt || undefined;
    _instance.status = _instance.status || '';
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
          _instance.inputPrice = _reader.readString();
          break;
        case 5:
          _instance.price = _reader.readString();
          break;
        case 6:
          _instance.quantity = _reader.readString();
          break;
        case 7:
          _instance.updatedAt = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.updatedAt,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 8:
          _instance.status = _reader.readString();
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
    if (_instance.inputPrice) {
      _writer.writeString(4, _instance.inputPrice);
    }
    if (_instance.price) {
      _writer.writeString(5, _instance.price);
    }
    if (_instance.quantity) {
      _writer.writeString(6, _instance.quantity);
    }
    if (_instance.updatedAt) {
      _writer.writeMessage(
        7,
        _instance.updatedAt as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.status) {
      _writer.writeString(8, _instance.status);
    }
  }

  private _productItemId?: string;
  private _productId?: string;
  private _productName?: string;
  private _inputPrice?: string;
  private _price?: string;
  private _quantity?: string;
  private _updatedAt?: googleProtobuf002.Timestamp;
  private _status?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ProductItemsListData to deeply clone from
   */
  constructor(_value?: RecursivePartial<ProductItemsListData.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.productId = _value.productId;
    this.productName = _value.productName;
    this.inputPrice = _value.inputPrice;
    this.price = _value.price;
    this.quantity = _value.quantity;
    this.updatedAt = _value.updatedAt
      ? new googleProtobuf002.Timestamp(_value.updatedAt)
      : undefined;
    this.status = _value.status;
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
  get inputPrice(): string | undefined {
    return this._inputPrice;
  }
  set inputPrice(value: string | undefined) {
    this._inputPrice = value;
  }
  get price(): string | undefined {
    return this._price;
  }
  set price(value: string | undefined) {
    this._price = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
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
      inputPrice: this.inputPrice,
      price: this.price,
      quantity: this.quantity,
      updatedAt: this.updatedAt ? this.updatedAt.toObject() : undefined,
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
  ): ProductItemsListData.AsProtobufJSON {
    return {
      productItemId: this.productItemId,
      productId: this.productId,
      productName: this.productName,
      inputPrice: this.inputPrice,
      price: this.price,
      quantity: this.quantity,
      updatedAt: this.updatedAt ? this.updatedAt.toProtobufJSON(options) : null,
      status: this.status
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
    inputPrice?: string;
    price?: string;
    quantity?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsObject;
    status?: string;
  }

  /**
   * Protobuf JSON representation for ProductItemsListData
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    productId?: string;
    productName?: string;
    inputPrice?: string;
    price?: string;
    quantity?: string;
    updatedAt?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    status?: string;
  }
}

/**
 * Message implementation for products.GetProductItemInfoRequest
 */
export class GetProductItemInfoRequest implements GrpcMessage {
  static id = 'products.GetProductItemInfoRequest';

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
 * Message implementation for products.GetProductItemsInfoResponse
 */
export class GetProductItemsInfoResponse implements GrpcMessage {
  static id = 'products.GetProductItemsInfoResponse';

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
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
    _instance.inputPrice = _instance.inputPrice || '';
    _instance.url = _instance.url || '';
    _instance.images = _instance.images || [];
    _instance.description = _instance.description || '';
    _instance.priceTax = _instance.priceTax || '';
    _instance.quantity = _instance.quantity || '';
    _instance.inputDate = _instance.inputDate || undefined;
    _instance.productStatus = _instance.productStatus || '';
    _instance.categoryName = _instance.categoryName || '';
    _instance.categoryId = _instance.categoryId || '0';
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
          _instance.productId = _reader.readString();
          break;
        case 2:
          _instance.productItemName = _reader.readString();
          break;
        case 3:
          _instance.inputPrice = _reader.readString();
          break;
        case 4:
          _instance.url = _reader.readString();
          break;
        case 5:
          const messageInitializer5 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer5,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(messageInitializer5);
          break;
        case 6:
          _instance.description = _reader.readString();
          break;
        case 7:
          _instance.priceTax = _reader.readString();
          break;
        case 8:
          _instance.quantity = _reader.readString();
          break;
        case 9:
          _instance.inputDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.inputDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 10:
          _instance.productStatus = _reader.readString();
          break;
        case 11:
          _instance.categoryName = _reader.readString();
          break;
        case 12:
          _instance.categoryId = _reader.readInt64String();
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
    if (_instance.productId) {
      _writer.writeString(1, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(2, _instance.productItemName);
    }
    if (_instance.inputPrice) {
      _writer.writeString(3, _instance.inputPrice);
    }
    if (_instance.url) {
      _writer.writeString(4, _instance.url);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        5,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.description) {
      _writer.writeString(6, _instance.description);
    }
    if (_instance.priceTax) {
      _writer.writeString(7, _instance.priceTax);
    }
    if (_instance.quantity) {
      _writer.writeString(8, _instance.quantity);
    }
    if (_instance.inputDate) {
      _writer.writeMessage(
        9,
        _instance.inputDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.productStatus) {
      _writer.writeString(10, _instance.productStatus);
    }
    if (_instance.categoryName) {
      _writer.writeString(11, _instance.categoryName);
    }
    if (_instance.categoryId) {
      _writer.writeInt64String(12, _instance.categoryId);
    }
  }

  private _productId?: string;
  private _productItemName?: string;
  private _inputPrice?: string;
  private _url?: string;
  private _images?: ProductImageInfo[];
  private _description?: string;
  private _priceTax?: string;
  private _quantity?: string;
  private _inputDate?: googleProtobuf002.Timestamp;
  private _productStatus?: string;
  private _categoryName?: string;
  private _categoryId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetProductItemsInfoResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetProductItemsInfoResponse.AsObject>) {
    _value = _value || {};
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    this.inputPrice = _value.inputPrice;
    this.url = _value.url;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.description = _value.description;
    this.priceTax = _value.priceTax;
    this.quantity = _value.quantity;
    this.inputDate = _value.inputDate
      ? new googleProtobuf002.Timestamp(_value.inputDate)
      : undefined;
    this.productStatus = _value.productStatus;
    this.categoryName = _value.categoryName;
    this.categoryId = _value.categoryId;
    GetProductItemsInfoResponse.refineValues(this);
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
  get inputPrice(): string | undefined {
    return this._inputPrice;
  }
  set inputPrice(value: string | undefined) {
    this._inputPrice = value;
  }
  get url(): string | undefined {
    return this._url;
  }
  set url(value: string | undefined) {
    this._url = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get priceTax(): string | undefined {
    return this._priceTax;
  }
  set priceTax(value: string | undefined) {
    this._priceTax = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get inputDate(): googleProtobuf002.Timestamp | undefined {
    return this._inputDate;
  }
  set inputDate(value: googleProtobuf002.Timestamp | undefined) {
    this._inputDate = value;
  }
  get productStatus(): string | undefined {
    return this._productStatus;
  }
  set productStatus(value: string | undefined) {
    this._productStatus = value;
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
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toObject()),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toObject() : undefined,
      productStatus: this.productStatus,
      categoryName: this.categoryName,
      categoryId: this.categoryId
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
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toProtobufJSON(options) : null,
      productStatus: this.productStatus,
      categoryName: this.categoryName,
      categoryId: this.categoryId
    };
  }
}
export module GetProductItemsInfoResponse {
  /**
   * Standard JavaScript object representation for GetProductItemsInfoResponse
   */
  export interface AsObject {
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsObject[];
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsObject;
    productStatus?: string;
    categoryName?: string;
    categoryId?: string;
  }

  /**
   * Protobuf JSON representation for GetProductItemsInfoResponse
   */
  export interface AsProtobufJSON {
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
    productStatus?: string;
    categoryName?: string;
    categoryId?: string;
  }
}

/**
 * Message implementation for products.CreateProductItemRequest
 */
export class CreateProductItemRequest implements GrpcMessage {
  static id = 'products.CreateProductItemRequest';

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
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
    _instance.inputPrice = _instance.inputPrice || '';
    _instance.url = _instance.url || '';
    _instance.images = _instance.images || [];
    _instance.description = _instance.description || '';
    _instance.priceTax = _instance.priceTax || '';
    _instance.quantity = _instance.quantity || '';
    _instance.inputDate = _instance.inputDate || undefined;
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
          _instance.productId = _reader.readString();
          break;
        case 3:
          _instance.productItemName = _reader.readString();
          break;
        case 4:
          _instance.inputPrice = _reader.readString();
          break;
        case 5:
          _instance.url = _reader.readString();
          break;
        case 6:
          const messageInitializer6 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer6,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(messageInitializer6);
          break;
        case 7:
          _instance.description = _reader.readString();
          break;
        case 8:
          _instance.priceTax = _reader.readString();
          break;
        case 9:
          _instance.quantity = _reader.readString();
          break;
        case 10:
          _instance.inputDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.inputDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
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
    if (_instance.productId) {
      _writer.writeString(2, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(3, _instance.productItemName);
    }
    if (_instance.inputPrice) {
      _writer.writeString(4, _instance.inputPrice);
    }
    if (_instance.url) {
      _writer.writeString(5, _instance.url);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        6,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.description) {
      _writer.writeString(7, _instance.description);
    }
    if (_instance.priceTax) {
      _writer.writeString(8, _instance.priceTax);
    }
    if (_instance.quantity) {
      _writer.writeString(9, _instance.quantity);
    }
    if (_instance.inputDate) {
      _writer.writeMessage(
        10,
        _instance.inputDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _categoryId?: string;
  private _productId?: string;
  private _productItemName?: string;
  private _inputPrice?: string;
  private _url?: string;
  private _images?: ProductImageInfo[];
  private _description?: string;
  private _priceTax?: string;
  private _quantity?: string;
  private _inputDate?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateProductItemRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateProductItemRequest.AsObject>) {
    _value = _value || {};
    this.categoryId = _value.categoryId;
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    this.inputPrice = _value.inputPrice;
    this.url = _value.url;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.description = _value.description;
    this.priceTax = _value.priceTax;
    this.quantity = _value.quantity;
    this.inputDate = _value.inputDate
      ? new googleProtobuf002.Timestamp(_value.inputDate)
      : undefined;
    CreateProductItemRequest.refineValues(this);
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
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
  get inputPrice(): string | undefined {
    return this._inputPrice;
  }
  set inputPrice(value: string | undefined) {
    this._inputPrice = value;
  }
  get url(): string | undefined {
    return this._url;
  }
  set url(value: string | undefined) {
    this._url = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get priceTax(): string | undefined {
    return this._priceTax;
  }
  set priceTax(value: string | undefined) {
    this._priceTax = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get inputDate(): googleProtobuf002.Timestamp | undefined {
    return this._inputDate;
  }
  set inputDate(value: googleProtobuf002.Timestamp | undefined) {
    this._inputDate = value;
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
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toObject()),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toObject() : undefined
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
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toProtobufJSON(options) : null
    };
  }
}
export module CreateProductItemRequest {
  /**
   * Standard JavaScript object representation for CreateProductItemRequest
   */
  export interface AsObject {
    categoryId?: string;
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsObject[];
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateProductItemRequest
   */
  export interface AsProtobufJSON {
    categoryId?: string;
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for products.CreateProductItemResponse
 */
export class CreateProductItemResponse implements GrpcMessage {
  static id = 'products.CreateProductItemResponse';

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
 * Message implementation for products.UpdateProductItemsRequest
 */
export class UpdateProductItemsRequest implements GrpcMessage {
  static id = 'products.UpdateProductItemsRequest';

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
    _instance.categoryId = _instance.categoryId || '0';
    _instance.productId = _instance.productId || '';
    _instance.productItemName = _instance.productItemName || '';
    _instance.inputPrice = _instance.inputPrice || '';
    _instance.url = _instance.url || '';
    _instance.images = _instance.images || [];
    _instance.description = _instance.description || '';
    _instance.priceTax = _instance.priceTax || '';
    _instance.quantity = _instance.quantity || '';
    _instance.inputDate = _instance.inputDate || undefined;
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
          _instance.categoryId = _reader.readInt64String();
          break;
        case 3:
          _instance.productId = _reader.readString();
          break;
        case 4:
          _instance.productItemName = _reader.readString();
          break;
        case 5:
          _instance.inputPrice = _reader.readString();
          break;
        case 6:
          _instance.url = _reader.readString();
          break;
        case 7:
          const messageInitializer7 = new ProductImageInfo();
          _reader.readMessage(
            messageInitializer7,
            ProductImageInfo.deserializeBinaryFromReader
          );
          (_instance.images = _instance.images || []).push(messageInitializer7);
          break;
        case 8:
          _instance.description = _reader.readString();
          break;
        case 9:
          _instance.priceTax = _reader.readString();
          break;
        case 10:
          _instance.quantity = _reader.readString();
          break;
        case 11:
          _instance.inputDate = new googleProtobuf002.Timestamp();
          _reader.readMessage(
            _instance.inputDate,
            googleProtobuf002.Timestamp.deserializeBinaryFromReader
          );
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
    if (_instance.categoryId) {
      _writer.writeInt64String(2, _instance.categoryId);
    }
    if (_instance.productId) {
      _writer.writeString(3, _instance.productId);
    }
    if (_instance.productItemName) {
      _writer.writeString(4, _instance.productItemName);
    }
    if (_instance.inputPrice) {
      _writer.writeString(5, _instance.inputPrice);
    }
    if (_instance.url) {
      _writer.writeString(6, _instance.url);
    }
    if (_instance.images && _instance.images.length) {
      _writer.writeRepeatedMessage(
        7,
        _instance.images as any,
        ProductImageInfo.serializeBinaryToWriter
      );
    }
    if (_instance.description) {
      _writer.writeString(8, _instance.description);
    }
    if (_instance.priceTax) {
      _writer.writeString(9, _instance.priceTax);
    }
    if (_instance.quantity) {
      _writer.writeString(10, _instance.quantity);
    }
    if (_instance.inputDate) {
      _writer.writeMessage(
        11,
        _instance.inputDate as any,
        googleProtobuf002.Timestamp.serializeBinaryToWriter
      );
    }
  }

  private _productItemId?: string;
  private _categoryId?: string;
  private _productId?: string;
  private _productItemName?: string;
  private _inputPrice?: string;
  private _url?: string;
  private _images?: ProductImageInfo[];
  private _description?: string;
  private _priceTax?: string;
  private _quantity?: string;
  private _inputDate?: googleProtobuf002.Timestamp;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateProductItemsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateProductItemsRequest.AsObject>) {
    _value = _value || {};
    this.productItemId = _value.productItemId;
    this.categoryId = _value.categoryId;
    this.productId = _value.productId;
    this.productItemName = _value.productItemName;
    this.inputPrice = _value.inputPrice;
    this.url = _value.url;
    this.images = (_value.images || []).map(m => new ProductImageInfo(m));
    this.description = _value.description;
    this.priceTax = _value.priceTax;
    this.quantity = _value.quantity;
    this.inputDate = _value.inputDate
      ? new googleProtobuf002.Timestamp(_value.inputDate)
      : undefined;
    UpdateProductItemsRequest.refineValues(this);
  }
  get productItemId(): string | undefined {
    return this._productItemId;
  }
  set productItemId(value: string | undefined) {
    this._productItemId = value;
  }
  get categoryId(): string | undefined {
    return this._categoryId;
  }
  set categoryId(value: string | undefined) {
    this._categoryId = value;
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
  get inputPrice(): string | undefined {
    return this._inputPrice;
  }
  set inputPrice(value: string | undefined) {
    this._inputPrice = value;
  }
  get url(): string | undefined {
    return this._url;
  }
  set url(value: string | undefined) {
    this._url = value;
  }
  get images(): ProductImageInfo[] | undefined {
    return this._images;
  }
  set images(value: ProductImageInfo[] | undefined) {
    this._images = value;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }
  get priceTax(): string | undefined {
    return this._priceTax;
  }
  set priceTax(value: string | undefined) {
    this._priceTax = value;
  }
  get quantity(): string | undefined {
    return this._quantity;
  }
  set quantity(value: string | undefined) {
    this._quantity = value;
  }
  get inputDate(): googleProtobuf002.Timestamp | undefined {
    return this._inputDate;
  }
  set inputDate(value: googleProtobuf002.Timestamp | undefined) {
    this._inputDate = value;
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
      categoryId: this.categoryId,
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toObject()),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toObject() : undefined
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
      categoryId: this.categoryId,
      productId: this.productId,
      productItemName: this.productItemName,
      inputPrice: this.inputPrice,
      url: this.url,
      images: (this.images || []).map(m => m.toProtobufJSON(options)),
      description: this.description,
      priceTax: this.priceTax,
      quantity: this.quantity,
      inputDate: this.inputDate ? this.inputDate.toProtobufJSON(options) : null
    };
  }
}
export module UpdateProductItemsRequest {
  /**
   * Standard JavaScript object representation for UpdateProductItemsRequest
   */
  export interface AsObject {
    productItemId?: string;
    categoryId?: string;
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsObject[];
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateProductItemsRequest
   */
  export interface AsProtobufJSON {
    productItemId?: string;
    categoryId?: string;
    productId?: string;
    productItemName?: string;
    inputPrice?: string;
    url?: string;
    images?: ProductImageInfo.AsProtobufJSON[] | null;
    description?: string;
    priceTax?: string;
    quantity?: string;
    inputDate?: googleProtobuf002.Timestamp.AsProtobufJSON | null;
  }
}
