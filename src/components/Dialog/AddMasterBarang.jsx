import React, { Fragment, useEffect, useState } from "react";

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
  TextField,
  InputLabel,
  IconButton,
  Switch,
  Autocomplete,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { MasterConfirmation } from "./Confirmation";
import { Berhasil, Gagal, Notif } from "./notification";
import { getAllSatuan } from "../API/repository";

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
    kodeBarang: "1",
    namaBarang: "A",
  },
  {
    kodeBarang: "2",
    namaBarang: "B",
  },
];

const satuan = ["Kg", "liter"];

export default function AddMasterBarang(props) {
  const [message, setMessage] = useState();
  const [alertType, setAlertType] = useState();
  const [alert, setAlert] = useState(false);

  const closeAlert = () => {
    setAlert(false);
  };

  const detail = {
    kodeBarang: "", //otomatis (idcategory + idsubcategory + idmerek + idtype)
    namaBarang: "",
    category: "",
    subCategory: "",
    type: "",
    merk: "",
    satuan: "",
    ukuran: "",
    proyek: "",
  };

  const [satuan, setSatuan] = useState([]);
  useEffect(() => {
    async function getSatuanAPI() {
      const data = await getAllSatuan();
      let rowsData = [];
      for (const barang of data) {
        const newBarang = {
          //kodebarang: barang.kodebarang,
          satuan: barang.satuan,
        };
        rowsData.push(newBarang);
      }
      setSatuan(rowsData);
    }
    getSatuanAPI();
  }, []);

  const [inputs, setInputs] = useState(detail);
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    // console.log(inputs)
  };

  const [pindahProyek, setPindahProyek] = useState(true);
  const handlePindahProyek = () => {
    setPindahProyek(!pindahProyek);
  };

  const [confirm, openConfirm] = useState(false);

  const openConfirmDialog = () => {
    openConfirm(true);
  };
  const closeConfirmDialog = () => {
    openConfirm(false);
  };

  const RemoveItem = () => {};

  const [tanggal, setTanggal] = React.useState(dayjs(Date.now()));

  const handleTanggal = (newValue) => {
    setTanggal(newValue);
  };

  const addMasterBarang = () => {
    openConfirmDialog();
    // setAlertType("success");
    // setMessage("Berhasil");
    // setAlert(true);
    // setInputs(detail);
  };

  return (
    <>
      <Dialog open={props.open} onClose={props.close} maxWidth="lg">
        <DialogTitle><b>Master Barang</b></DialogTitle>
        <ValidatorForm onSubmit={addMasterBarang}>
          <DialogContent dividers>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <TextValidator
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="name"
                  name="namabarang"
                  label="Nama Barang"
                  value={inputs.namabarang}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                <TextValidator
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="name"
                  name="category"
                  label="Category"
                  value={inputs.category}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                <TextValidator
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="name"
                  name="subCategory"
                  label="Sub Category"
                  value={inputs.subCategory}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                <TextValidator
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="name"
                  name="type"
                  label="Type"
                  value={inputs.type}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                <TextValidator
                  fullWidth
                  autoFocus
                  margin="dense"
                  id="name"
                  name="merk"
                  label="Merk"
                  value={inputs.merk}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={satuan}
                            sx={{
                                marginTop: 1,
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard" label="Satuan" />
                            )}
                            /> */}
                <FormControl fullWidth sx={{ margin: "dense", marginTop: 1 }}>
                  <InputLabel id="satuan" sx={{ margin: "dense" }}>
                    Satuan
                  </InputLabel>
                  <Select
                    // fullWidth
                    // autoFocus
                    margin="dense"
                    //labelid="satuan"
                    id="satuan"
                    name="satuan"
                    placeholder="satuan"
                    variant="standard"
                    type="text"
                    //   InputProps={{ inputProps: { maxLength: 6 } }}
                    // defaultValue={item.satuan}
                    value={inputs.satuan}
                    onChange={handleInputChange}
                    validators={["required"]}
                    errorMessages={["required"]}
                  >
                    {satuan.map((item, index) => (
                      <MenuItem key={item.satuan} value={item.satuan}>
                        {item.satuan}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={props.close}>
              Cancel
            </Button>
            <Button type="submit" color="success">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <MasterConfirmation
        open={confirm}
        cancel={closeConfirmDialog}
        // handleAdd={RemoveItem}
        data={inputs}
      />
      <Notif
        open={alert}
        close={closeAlert}
        type={alertType}
        message={message}
      />
    </>
  );
}
