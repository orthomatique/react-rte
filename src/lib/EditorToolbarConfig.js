/* @flow */
import type {EditorState} from 'draft-js';

export type StyleConfig = {
  label: string;
  style: string;
  className?: string;
};

type GetControlState = (key: string) => ?string;
type SetControlState = (key: string, value: string) => void;

export type CustomControl = ReactNode | (set: SetControlState, get: GetControlState, state: EditorState) => ReactNode;
export type CustomControlList = Array<CustomControl>;

export type StyleConfigList = Array<StyleConfig>;

export type GroupName = 'INLINE_STYLE_BUTTONS' | 'BLOCK_ALIGNMENT_BUTTONS' | 'BLOCK_TYPE_BUTTONS' | 'LINK_BUTTONS' | 'BLOCK_TYPE_DROPDOWN' | 'HISTORY_BUTTONS' | 'IMAGE_BUTTON' | 'COLOR_BUTTONS';

export type ToolbarConfig = {
  display: Array<GroupName>;
  extraProps?: Object;
  INLINE_STYLE_BUTTONS: StyleConfigList;
  BLOCK_ALIGNMENT_BUTTONS: StyleConfigList;
  BLOCK_TYPE_DROPDOWN: StyleConfigList;
  BLOCK_TYPE_BUTTONS: StyleConfigList;
  BLOCK_COLOR_BUTTONS: StyleConfigList;
};

export const INLINE_STYLE_BUTTONS: StyleConfigList = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'},
  {label: 'Monospace', style: 'CODE'},
  {label: 'Underline', style: 'UNDERLINE'},
];

export const BLOCK_ALIGNMENT_BUTTONS: StyleConfigList = [
  {label: 'Align Left', style: 'ALIGN_LEFT'},
  {label: 'Align Center', style: 'ALIGN_CENTER'},
  {label: 'Align Right', style: 'ALIGN_RIGHT'},
  {label: 'Align Justify', style: 'ALIGN_JUSTIFY'},
];

export const BLOCK_TYPE_DROPDOWN: StyleConfigList = [
  {label: 'Normal', style: 'unstyled'},
  {label: 'Heading Large', style: 'header-one'},
  {label: 'Heading Medium', style: 'header-two'},
  {label: 'Heading Small', style: 'header-three'},
  {label: 'Code Block', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS: StyleConfigList = [
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Blockquote', style: 'blockquote'},
];

export const BLOCK_COLOR_BUTTONS: StyleConfigList = [
  {label: 'Text color', style: 'TEXT_COLOR'},
  {label: 'Background color', style: 'BACKGROUND_COLOR'},
];

let EditorToolbarConfig: ToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'BLOCK_ALIGNMENT_BUTTONS', 'COLOR_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
  INLINE_STYLE_BUTTONS,
  BLOCK_ALIGNMENT_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
  BLOCK_COLOR_BUTTONS,
};

export default EditorToolbarConfig;
