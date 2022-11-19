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

import { OutConfirmation } from "./Confirmation";
import { Notif } from "./notification";
import {
  addActivityKeluar,  
  getAllBarangKeluar,
  getAllBarangMasuk,
  getAllSatuan,
  getNamaBarangMasuk,
  getNamaMasterBarang,
  getSelectedProyek,
  inventoryKeluar,
} from "../API/repository";

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

const satuanList = ["Kg", "liter"];

export default function AddMasterRAP(props) {
  const [message, setMessage] = useState();
  const [alertType, setAlertType] = useState();
  const [alert, setAlert] = useState(false);
  const closeAlert = () => {
    setAlert(false);
  };

  const proyek = getSelectedProyek();

  const detail = {
    jenisBahan: '',
    satuan: "",
    RAP: '',
  };

  const [confirm, setConfirm] = useState(false);
  const openConfirm = () => {
    setConfirm(true);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };

  const [inputs, setInputs] = useState(detail);
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    // console.log(inputs)
  };

  const [masterBarang, setMasterBarang] = useState([]);
  const getNamaBarang = async() => {
    // const data = await getNamaBarangMasuk(detail);
    const data = await getAllBarangMasuk(detail);
    let rowsData = []
    for (const barang of data){
      if(barang.proyek === proyek){
        const newBarang = {
          //kodebarang: barang.kodebarang,
          namabarang: barang.namabarang,
        }
        rowsData.push(newBarang);
      }
    }
    setMasterBarang(rowsData);
  }

  useEffect(() => {
    getNamaBarang();
  }, []);

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

  const [pindahProyek, setPindahProyek] = useState(false);
  const handlePindahProyek = () => {
    // Clear the tujuan input
    if (pindahProyek === true) {
      setInputs({ ...inputs, tujuan: "" });
    }

    setPindahProyek(!pindahProyek);
  };

  const add = async () => {
    try {
    //   AddMasterRAP(inputs);
      
      setInputs(detail);
    //   getAllBarangKeluar();
      //notif berhasil add
      setAlertType("success");
      setMessage("Berhasil menyimpan barang masuk");
      setAlert(true);
      //addHistory(inputs);
      // inventoryKeluar(inputs);
      // addActivityKeluar(inputs)
    } catch (e) {
      //notif gagal add
      setAlertType("error");
      setMessage(e);
      setAlert(true);
    } finally{
        props.close();
        closeConfirm();
    }
  };

  const [namaBarang, setNamaBarang] = React.useState(null);
  const handleNamaBarang = (event, newValue) => {
    setNamaBarang(newValue);
    setInputs({ ...inputs, namaBarang: newValue.namaBarang });
  };

  return (
    <>
      <Dialog fullwidth open={props.open} onClose={props.close} maxWidth="lg">
        <DialogTitle><b>Master RAP</b></DialogTitle>
        <ValidatorForm onSubmit={openConfirm}>
          <DialogContent dividers>
                <FormControl fullWidth sx={{ margin: "dense", marginTop: 1 }}>
                  <InputLabel id="namaBarang" sx={{ margin: "dense" }}>
                    Jenis Bahan
                  </InputLabel>
                  <Select
                    // fullWidth
                    // autoFocus
                    margin="dense"
                    //labelid="Nama Barang"
                    id="namaBarang"
                    name="namaBarang"
                    placeholder="namaBarang"
                    variant="standard"
                    type="text"
                    //   InputProps={{ inputProps: { maxLength: 6 } }}
                    // defaultValue={item.namaBarang}
                    value={inputs.namaBarang}
                    onChange={handleInputChange}
                    validators={["required"]}
                    errorMessages={["required"]}
                  >
                    {masterBarang.map((item, index) => (
                      <MenuItem key={index} value={item.namabarang}>
                        {item.namabarang}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <FormControl
                  fullWidth
                  sx={{ margin: "dense", marginTop: 1, marginBottom: 1 }}
                >
                  <Autocomplete
                    name="namaBarang"
                    value={namaBarang}
                    onChange={handleNamaBarang}
                    // autoHighlight
                    fullWidth
                    id="combo-box-demo"
                    // isOptionEqualToValue={(option, value) => option.id === value.id}
                    options={barang}
                    getOptionLabel={(option) => option.namaBarang}
                    renderOption={(props, option) => (
                      <Box component="li" {...props}>
                        {option.namaBarang}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        fullWidth
                        label="Nama Barang"
                      />
                    )}
                  />
                </FormControl> */}
                <TextField
                  name="RAP"
                  sx={{
                    marginTop: 1,
                  }}
                  value={inputs.RAP}
                  onChange={handleInputChange}
                  type="number"
                  variant="standard"
                  label="RAP"
                  InputProps={{
                    inputProps: {
                      min: 1,
                      // max : Number of Item in the Inventory
                    },
                  }}
                />
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
                {/* <Autocomplete
                  // disablePortal
                  value={satuan}
                  onChange={handleSatuan}
                  id="combo-box-demo"
                  options={satuanList}
                  sx={{
                    marginTop: 1,
                  }}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => (
                    <Box component="li" {...props}>
                      {option}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" label="Satuan" />
                  )}
                /> */}
              <TextField
                fullWidth
                id="keterangan"
                name="keterangan"
                placeholder="Keterangan"
                value={inputs.keterangan}
                onChange={handleInputChange}
                multiline
                minRows={4}
                maxRows={6}
              />
           
          </DialogContent>
          <DialogActions>
            <Button color="error" onClick={props.close}>
              Cancel
            </Button>
            <Button
              // onClick={openConfirmDialog}
              type="submit"
              color="success"
            >
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <OutConfirmation
        open={confirm}
        cancel={closeConfirm}
        data={inputs}
        handleAdd={add}
      />

      {/* <Confirmation open={confirm} cancel={closeConfirmDialog} handleRemove={RemoveItem} /> */}
      {/* <Notif open={alert} close={closeAlert} type={alertType} message={message}/> */}
    </>
  );
}
