export interface DialogState {
  open: boolean;
  Component?: JSX.Element;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export enum DialogActionType {
  Update = "Update",
}

export interface DialogUpdateAction {
  type: DialogActionType;
  payload: DialogState;
}

export type DialogAction = DialogUpdateAction;
