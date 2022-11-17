import {
  DialogAction,
  DialogActionType,
  DialogState,
} from "../../types/dialog";

export const initialDialogState: DialogState = {
  open: false,
};

export const dialogReducer = (
  state = initialDialogState,
  action: DialogAction
): DialogState => {
  switch (action.type) {
    case DialogActionType.Update:
      return {
        ...state,
        maxWidth: "md",
        ...action.payload,
      };

    default:
      return state;
  }
};
