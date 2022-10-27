import React, { Fragment, useState } from "react";

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

import Confirmation from "./Confirmation";
import { Berhasil, Gagal, Notif } from "./notification";

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
    }

    const detail = {
        kodeBarang: "",
        namaBarang: "",
        category: "",
        subCategory: "",
        type: "",
        merk: "",
        satuan: "",
        ukuran: "",
        proyek: "",
    };

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
        setAlertType("success");
        setMessage("Berhasil");
        setAlert(true);
        setInputs("");
    };

    return (
        <>
        <Dialog open={props.open} onClose={props.close} maxWidth="lg">
            <DialogTitle>Master Barang</DialogTitle>
            <ValidatorForm onSubmit={addMasterBarang}>
            <DialogContent>
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
                    name="kodeBarang"
                    label="Kode Barang"
                    value={inputs.kodeBarang}
                    onChange={handleInputChange}
                    type="text"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["required"]}
                    autoComplete="off"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                    fullWidth
                    sx={{ margin: "dense", marginTop: 1, marginBottom: 1 }}
                    >
                    <Autocomplete
                        autoHighlight
                        fullWidth
                        id="combo-box-demo"
                        options={barang}
                        getOptionLabel={(option) => option.namaBarang}
                        renderOption={(props, option) => (
                        <Box component="li" {...props}>
                            {option.namaBarang}
                        </Box>
                        )}
                        renderInput={(params) => (
                        <TextField
                            variant="standard"
                            fullWidth
                            {...params}
                            label="Nama Barang"
                        />
                        )}
                    />
                    </FormControl>
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
                <Grid item xs={3}>
                    <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={satuan}
                    sx={{
                        marginTop: 1,
                    }}
                    renderInput={(params) => (
                        <TextField {...params} variant="standard" label="Satuan" />
                    )}
                    />
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
        <Confirmation
            open={confirm}
            cancel={closeConfirmDialog}
            data={inputs}
            handleRemove={RemoveItem}
        />
        <Notif open={alert} close={closeAlert} type={alertType} message={message}/>
        </>
    );
}
