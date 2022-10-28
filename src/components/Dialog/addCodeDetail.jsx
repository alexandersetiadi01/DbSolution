import React, { Component, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import {
  Paper,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  InputLabel,
  IconButton,
  Switch,
  Autocomplete,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Notif } from "./notification";

const proyekAsal = [
  {
    label: "A",
  },
  {
    label: "B",
  },
];

const barang = [
  {
    kodeBarang: 1,
    namaBarang: "A",
  },
  {
    kodeBarang: 2,
    namaBarang: "B",
  },
];

const lokasi = [
  {
    kodeLokasi: 1,
    namaLokasi: "A",
  },
  {
    kodeLokasi: 2,
    namaLokasi: "B",
  },
];

export default function AddCodeDetail(props) {
  const [message, setMessage] = useState();
  const [alertType, setAlertType] = useState();
  const [alert, setAlert] = useState(false);

  const closeAlert = () => {
    setAlert(false);
  }

  const detail = {
    IDCodeMaster: "",
    IDCodeDetail: "",
    deskripsi: "",
    status: true,
  };
  const [inputs, setInputs] = useState(detail);
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    if (event.target.name === "status") {
      setInputs({ ...inputs, [event.target.name]: event.target.checked });
    }
  };

  const add = () => {
    setAlertType("success");
    setMessage("Berhasil");
    setAlert(true);
    setInputs("");
  };

  //   console.log(arrayBarang);

  return (
    <>
      <Dialog open={props.open} onClose={props.close} maxWidth="lg">
        <DialogTitle>Add Code Detail</DialogTitle>
        <ValidatorForm onSubmit={add}>
          <DialogContent>
            <TextValidator
              autoFocus
              autoComplete="off"
              fullWidth
              margin="dense"
              id="deskripsi"
              name="deskripsi"
              label="Deskripsi"
              type="text"
              variant="standard"
              value={inputs.deskripsi}
              onChange={handleInputChange}
              validators={["required"]}
              errorMessages={["required"]}
            />

            <InputLabel autoFocus id="Status" sx={{ margin: "dense" }}>
              Status
            </InputLabel>
            <Switch
              id="status"
              name="status"
              label="Status"
              checked={inputs.status}
              onChange={handleInputChange}
              inputProps={{ "aria-label": "controlled" }}
              //   defaultChecked
            />

            {inputs.status ? <p>Aktif</p> : <p>Non-Aktif</p>}
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={props.close}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <Notif open={alert} close={closeAlert} type={alertType} message={message}/>
    </>
  );
}
