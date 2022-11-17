import React, { useMemo } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export interface ConfirmRemoveProps {
  open: boolean;
  title?: string;
  message: string;
  loading?: boolean;
  confirmButtonLabel: string;
  cancelButtonLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmRemove(props: ConfirmRemoveProps) {
  const {
    open,
    title,
    message,
    loading,
    confirmButtonLabel,
    cancelButtonLabel,
    onCancel,
    onConfirm,
  } = props;

  const titleDialog = useMemo(() => {
    if (title) {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "50px",
              backgroundColor: "#f44336",
            }}
          >
            <Typography
              variant="h6"
              style={{
                height: "100%",
                lineHeight: "50px",
                marginLeft: "12px",
                fontWeight: 600,
                color: "yellow",
                fontFamily: "fantasy",
              }}
            >
              {title}
            </Typography>
            <IconButton onClick={onCancel}>
              <CloseIcon />
            </IconButton>
          </div>
        </>
      );
    }
  }, [title, onCancel]);

  const load = useMemo(() => {
    if (loading) {
      return (
        <>
          <CircularProgress data-testid="loadingCircular" size={12} />
        </>
      );
    }
  }, [loading]);

  return (
    <Dialog open={open}>
      {titleDialog}
      <DialogContent
        style={{
          height: "50px",
          lineHeight: "50px",
          fontWeight: 500,
          fontFamily: "fantasy",
        }}
      >
        {message}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onConfirm}
          variant="contained"
          disableRipple
          style={{
            backgroundColor: "#f44336",
            color: "yellow",
            fontWeight: 600,
            fontFamily: "fantasy",
          }}
        >
          {confirmButtonLabel}
          {load}
        </Button>
        <Button
          onClick={onCancel}
          variant="contained"
          disableRipple
          disabled={loading}
          style={{ fontWeight: 600, fontFamily: "fantasy" }}
        >
          {cancelButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
