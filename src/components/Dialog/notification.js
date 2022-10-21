import React, { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

export const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Berhasil(props) {
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.close}>
      <Alert onClose={props.close} severity="success" sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}

export function Gagal(props) {
    return (
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.close}>
        <Alert onClose={props.close} severity="error" sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
    );
}


