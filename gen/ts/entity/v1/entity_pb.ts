// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file entity/v1/entity.proto (package entity.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file entity/v1/entity.proto.
 */
export const file_entity_v1_entity: GenFile = /*@__PURE__*/
  fileDesc("ChZlbnRpdHkvdjEvZW50aXR5LnByb3RvEgllbnRpdHkudjEiEwoRRW50aXR5TGlzdFJlcXVlc3QiPQoSRW50aXR5TGlzdFJlc3BvbnNlEicKCGVudGl0aWVzGAEgAygLMhUuZW50aXR5LnYxLkVudGl0eUluZm8iJgoRRW50aXR5QnlJZFJlcXVlc3QSEQoJZW50aXR5X2lkGAEgASgJIjsKEkVudGl0eUJ5SWRSZXNwb25zZRIlCgZlbnRpdHkYASABKAsyFS5lbnRpdHkudjEuRW50aXR5SW5mbyJJCgpFbnRpdHlJbmZvEhEKCWVudGl0eV9pZBgBIAEoCRIoCgpjb21wb25lbnRzGAIgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueSIsChJFdmVudFN0cmVhbVJlcXVlc3QSFgoOc2ltdWxhdGVfc3RhdGUYASABKAgiigIKE0V2ZW50U3RyZWFtUmVzcG9uc2USMwoMZW50aXR5X2FkZGVkGAEgASgLMhsuZW50aXR5LnYxLkVudGl0eUFkZGVkRXZlbnRIABI3Cg5lbnRpdHlfcmVtb3ZlZBgCIAEoCzIdLmVudGl0eS52MS5FbnRpdHlSZW1vdmVkRXZlbnRIABI9ChFjb21wb25lbnRfdXBkYXRlZBgDIAEoCzIgLmVudGl0eS52MS5Db21wb25lbnRVcGRhdGVkRXZlbnRIABI9ChFjb21wb25lbnRfcmVtb3ZlZBgEIAEoCzIgLmVudGl0eS52MS5Db21wb25lbnRSZW1vdmVkRXZlbnRIAEIHCgVldmVudCJPChBFbnRpdHlBZGRlZEV2ZW50EhEKCWVudGl0eV9pZBgBIAEoCRIoCgpjb21wb25lbnRzGAIgAygLMhQuZ29vZ2xlLnByb3RvYnVmLkFueSInChJFbnRpdHlSZW1vdmVkRXZlbnQSEQoJZW50aXR5X2lkGAEgASgJIlMKFUNvbXBvbmVudFVwZGF0ZWRFdmVudBIRCgllbnRpdHlfaWQYASABKAkSJwoJY29tcG9uZW50GAIgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueSJTChVDb21wb25lbnRSZW1vdmVkRXZlbnQSEQoJZW50aXR5X2lkGAEgASgJEicKCWNvbXBvbmVudBgDIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5Bbnky+wEKDUVudGl0eVNlcnZpY2USSwoKRW50aXR5TGlzdBIcLmVudGl0eS52MS5FbnRpdHlMaXN0UmVxdWVzdBodLmVudGl0eS52MS5FbnRpdHlMaXN0UmVzcG9uc2UiABJLCgpFbnRpdHlCeUlkEhwuZW50aXR5LnYxLkVudGl0eUJ5SWRSZXF1ZXN0Gh0uZW50aXR5LnYxLkVudGl0eUJ5SWRSZXNwb25zZSIAElAKC0V2ZW50U3RyZWFtEh0uZW50aXR5LnYxLkV2ZW50U3RyZWFtUmVxdWVzdBoeLmVudGl0eS52MS5FdmVudFN0cmVhbVJlc3BvbnNlIgAwAUI8WjpnaXRodWIuY29tL2lqa2NvZGUvdm9sdW1peGVyLWFwaS9nZW4vZ28vZW50aXR5L3YxO2VudGl0eXYxYgZwcm90bzM", [file_google_protobuf_any]);

/**
 * @generated from message entity.v1.EntityListRequest
 */
export type EntityListRequest = Message<"entity.v1.EntityListRequest"> & {
};

/**
 * Describes the message entity.v1.EntityListRequest.
 * Use `create(EntityListRequestSchema)` to create a new message.
 */
export const EntityListRequestSchema: GenMessage<EntityListRequest> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 0);

/**
 * @generated from message entity.v1.EntityListResponse
 */
export type EntityListResponse = Message<"entity.v1.EntityListResponse"> & {
  /**
   * @generated from field: repeated entity.v1.EntityInfo entities = 1;
   */
  entities: EntityInfo[];
};

/**
 * Describes the message entity.v1.EntityListResponse.
 * Use `create(EntityListResponseSchema)` to create a new message.
 */
export const EntityListResponseSchema: GenMessage<EntityListResponse> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 1);

/**
 * @generated from message entity.v1.EntityByIdRequest
 */
export type EntityByIdRequest = Message<"entity.v1.EntityByIdRequest"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;
};

/**
 * Describes the message entity.v1.EntityByIdRequest.
 * Use `create(EntityByIdRequestSchema)` to create a new message.
 */
export const EntityByIdRequestSchema: GenMessage<EntityByIdRequest> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 2);

/**
 * @generated from message entity.v1.EntityByIdResponse
 */
export type EntityByIdResponse = Message<"entity.v1.EntityByIdResponse"> & {
  /**
   * @generated from field: entity.v1.EntityInfo entity = 1;
   */
  entity?: EntityInfo;
};

/**
 * Describes the message entity.v1.EntityByIdResponse.
 * Use `create(EntityByIdResponseSchema)` to create a new message.
 */
export const EntityByIdResponseSchema: GenMessage<EntityByIdResponse> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 3);

/**
 * @generated from message entity.v1.EntityInfo
 */
export type EntityInfo = Message<"entity.v1.EntityInfo"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: repeated google.protobuf.Any components = 2;
   */
  components: Any[];
};

/**
 * Describes the message entity.v1.EntityInfo.
 * Use `create(EntityInfoSchema)` to create a new message.
 */
export const EntityInfoSchema: GenMessage<EntityInfo> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 4);

/**
 * @generated from message entity.v1.EventStreamRequest
 */
export type EventStreamRequest = Message<"entity.v1.EventStreamRequest"> & {
  /**
   * @generated from field: bool simulate_state = 1;
   */
  simulateState: boolean;
};

/**
 * Describes the message entity.v1.EventStreamRequest.
 * Use `create(EventStreamRequestSchema)` to create a new message.
 */
export const EventStreamRequestSchema: GenMessage<EventStreamRequest> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 5);

/**
 * @generated from message entity.v1.EventStreamResponse
 */
export type EventStreamResponse = Message<"entity.v1.EventStreamResponse"> & {
  /**
   * @generated from oneof entity.v1.EventStreamResponse.event
   */
  event: {
    /**
     * @generated from field: entity.v1.EntityAddedEvent entity_added = 1;
     */
    value: EntityAddedEvent;
    case: "entityAdded";
  } | {
    /**
     * @generated from field: entity.v1.EntityRemovedEvent entity_removed = 2;
     */
    value: EntityRemovedEvent;
    case: "entityRemoved";
  } | {
    /**
     * @generated from field: entity.v1.ComponentUpdatedEvent component_updated = 3;
     */
    value: ComponentUpdatedEvent;
    case: "componentUpdated";
  } | {
    /**
     * @generated from field: entity.v1.ComponentRemovedEvent component_removed = 4;
     */
    value: ComponentRemovedEvent;
    case: "componentRemoved";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message entity.v1.EventStreamResponse.
 * Use `create(EventStreamResponseSchema)` to create a new message.
 */
export const EventStreamResponseSchema: GenMessage<EventStreamResponse> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 6);

/**
 * @generated from message entity.v1.EntityAddedEvent
 */
export type EntityAddedEvent = Message<"entity.v1.EntityAddedEvent"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: repeated google.protobuf.Any components = 2;
   */
  components: Any[];
};

/**
 * Describes the message entity.v1.EntityAddedEvent.
 * Use `create(EntityAddedEventSchema)` to create a new message.
 */
export const EntityAddedEventSchema: GenMessage<EntityAddedEvent> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 7);

/**
 * @generated from message entity.v1.EntityRemovedEvent
 */
export type EntityRemovedEvent = Message<"entity.v1.EntityRemovedEvent"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;
};

/**
 * Describes the message entity.v1.EntityRemovedEvent.
 * Use `create(EntityRemovedEventSchema)` to create a new message.
 */
export const EntityRemovedEventSchema: GenMessage<EntityRemovedEvent> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 8);

/**
 * @generated from message entity.v1.ComponentUpdatedEvent
 */
export type ComponentUpdatedEvent = Message<"entity.v1.ComponentUpdatedEvent"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: google.protobuf.Any component = 2;
   */
  component?: Any;
};

/**
 * Describes the message entity.v1.ComponentUpdatedEvent.
 * Use `create(ComponentUpdatedEventSchema)` to create a new message.
 */
export const ComponentUpdatedEventSchema: GenMessage<ComponentUpdatedEvent> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 9);

/**
 * @generated from message entity.v1.ComponentRemovedEvent
 */
export type ComponentRemovedEvent = Message<"entity.v1.ComponentRemovedEvent"> & {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: google.protobuf.Any component = 3;
   */
  component?: Any;
};

/**
 * Describes the message entity.v1.ComponentRemovedEvent.
 * Use `create(ComponentRemovedEventSchema)` to create a new message.
 */
export const ComponentRemovedEventSchema: GenMessage<ComponentRemovedEvent> = /*@__PURE__*/
  messageDesc(file_entity_v1_entity, 10);

/**
 * @generated from service entity.v1.EntityService
 */
export const EntityService: GenService<{
  /**
   * @generated from rpc entity.v1.EntityService.EntityList
   */
  entityList: {
    methodKind: "unary";
    input: typeof EntityListRequestSchema;
    output: typeof EntityListResponseSchema;
  },
  /**
   * @generated from rpc entity.v1.EntityService.EntityById
   */
  entityById: {
    methodKind: "unary";
    input: typeof EntityByIdRequestSchema;
    output: typeof EntityByIdResponseSchema;
  },
  /**
   * @generated from rpc entity.v1.EntityService.EventStream
   */
  eventStream: {
    methodKind: "server_streaming";
    input: typeof EventStreamRequestSchema;
    output: typeof EventStreamResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_entity_v1_entity, 0);

