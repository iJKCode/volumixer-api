// @generated by protoc-gen-es v2.2.5 with parameter "target=ts"
// @generated from file widget/v1/info.proto (package widget.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file widget/v1/info.proto.
 */
export const file_widget_v1_info: GenFile = /*@__PURE__*/
  fileDesc("ChR3aWRnZXQvdjEvaW5mby5wcm90bxIJd2lkZ2V0LnYxIh0KDUluZm9Db21wb25lbnQSDAoEbmFtZRgBIAEoCUI8WjpnaXRodWIuY29tL2lqa2NvZGUvdm9sdW1peGVyLWFwaS9nZW4vZ28vd2lkZ2V0L3YxO3dpZGdldHYxYgZwcm90bzM");

/**
 * @generated from message widget.v1.InfoComponent
 */
export type InfoComponent = Message<"widget.v1.InfoComponent"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message widget.v1.InfoComponent.
 * Use `create(InfoComponentSchema)` to create a new message.
 */
export const InfoComponentSchema: GenMessage<InfoComponent> = /*@__PURE__*/
  messageDesc(file_widget_v1_info, 0);

