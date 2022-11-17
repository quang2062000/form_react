import {
  DialogAction,
  DialogActionType,
  DialogState,
} from "../../types/dialog";

export const updateDialogState = (payload: DialogState): DialogAction => ({
  type: DialogActionType.Update,
  payload,
});
