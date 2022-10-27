import React, {Fragment, useState} from 'react'

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

import { 
    LocalizationProvider, 
    DesktopDatePicker,
} from '@mui/x-date-pickers';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

import dayjs from 'dayjs'

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Confirmation from './Confirmation';

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
        kodeBarang: '1',
        namaBarang: 'A',
    },
    {
        kodeBarang: '2',
        namaBarang: 'B',
    },
];

const satuan = [
    "Kg", "liter"
]


export default function AddBarangKeluar (props){

    const detail = {
        namaBarang: "",
        namaPenerima: "",
        quantity: "",
        // noSuratJalan1: "",
        noSuratJalan: "",
        proyekAsal: "",
        // noSuratJalan2: "",
        tgl: "",
        lokasi: "",
        action: "",
        username: "",
        proyek: "",
        keterangan: "",
        satuan: "",
        supplier: "",
      };

      const [inputs, setInputs] = useState(detail);
      const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
        // console.log(inputs)
      };
    
      const [arrayBarang, setArrayBarang] = useState([]);
      let addArrayBarang = () => {
        setArrayBarang([
          ...arrayBarang,
          {
            namaBarang: "",
            quantity: "",
            satuan: "",
            noSuratJalan: inputs.noSuratJalan,
            proyekAsal: inputs.proyekAsal,
            namaPenerima: inputs.namaPenerima,
            tgl: inputs.tgl,
            lokasi: inputs.lokasi,
            status: "",
            username: inputs.username,
            keterangan: "",
            proyek: inputs.proyek,
            supplier: inputs.supplier,
          },
        ]);
    };

    const [pindahProyek, setPindahProyek] = useState(true);
    const handlePindahProyek = () => {
    setPindahProyek(!pindahProyek);
    };


    const [confirm, openConfirm] = useState(false)

    const openConfirmDialog = () =>{
        openConfirm(true)
    }
    const closeConfirmDialog = () =>{
        openConfirm(false)
    }

    const RemoveItem = () =>{

    }

    const [tanggal, setTanggal] = React.useState(dayjs(Date.now()));

    const handleTanggal = (newValue) => {
        setTanggal(newValue);
    };

  return (
    <>
        <Dialog open={props.open} onClose={props.close} maxWidth="lg">
            <DialogTitle>
                Barang Keluar
            </DialogTitle>
            <DialogContent>
                <ValidatorForm>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <LocalizationProvider 
                                dateAdapter={AdapterDayjs}
                            >
                            <DesktopDatePicker
                                label='Tanggal'
                                value={tanggal}
                                onChange={handleTanggal}
                                inputFormat='DD/MM/YYYY'
                                renderInput={(params)=>
                                    <TextField 
                                        fullWidth
                                        variant='standard'
                                        sx={{
                                            marginTop:1
                                        }}
                                        {...params}  
                                    />
                                }
                            />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                fullWidth
                                autoFocus
                                margin="dense"
                                id="name"
                                name="namaPengambil"
                                label="Nama Pengambil"
                                value={inputs.namaPenerima}
                                onChange={handleInputChange}
                                type="text"
                                variant="standard"
                                validators={["required"]}
                                errorMessages={["required"]}
                                autoComplete="off"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={6}>
                            <FormControl fullWidth sx={{ margin: "dense", marginTop: 1, marginBottom: 1 }}>
                                <Autocomplete 
                                    autoHighlight
                                    fullWidth
                                    
                                    id="combo-box-demo"
                                    options={barang}
                                    getOptionLabel = {
                                        (option) => option.namaBarang
                                    }
                                    renderOption={
                                        (props, option) =>(
                                            <Box 
                                            component='li'
                                            {...props}
                                            >
                                                {option.namaBarang}
                                            </Box>
                                        )
                                    }
                                    renderInput={params => 
                                    <TextField 
                                        variant='standard'
                                        fullWidth
                                        {...params} 
                                        label="Nama Barang" />}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                sx={{
                                    marginTop: 1
                                }}
                                type="number"
                                variant='standard'
                                label='Quantity'
                                InputProps={{
                                    inputProps: {
                                        min: 0
                                    }
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                        >
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={satuan}
                                sx={{ 
                                    marginTop: 1
                                }}
                                renderInput={(params) => 
                                <TextField {...params} 
                                variant='standard'
                                label="Satuan" 
                                />}
                            />   
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                        <Grid item xs={6}>
                            <InputLabel
                                autoFocus
                                id="cekPindahProyek"
                                sx={{ margin: "dense" }}
                                >
                                    Pindah Proyek
                            </InputLabel>
                            <Switch
                                id="cekPindahProyek"
                                labelId="cekPindahProyek"
                                // inputRef={value => value && value.focus()}
                                label="cekPindahProyek"
                                inputProps={{ "aria-label": "controlled" }}
                                checked={pindahProyek}
                                onChange={handlePindahProyek}
                                defaultChecked
                            />
                        </Grid>
                        {
                        pindahProyek ? 
                        (
                            <Grid
                                item
                                sx={6}
                            >
                                <TextValidator
                                    fullWidth
                                    margin="dense"
                                    id="namaProyek"
                                    label="Nama Proyek"
                                    name="Nama Proyek"
                                    // value={inputs.noSuratJalan}
                                    // onChange={handleInputChange}
                                    type="text"
                                    variant="standard"
                                    validators={["required"]}
                                    errorMessages={["required"]}
                                    autoComplete="off"
                                />
                            </Grid>
                        ) : (
                            <>
                            </>
                        )}

                    </Grid>
                    <Grid
                        container
                    >
                        <TextField
                            fullWidth
                            placeholder="Keterangan"
                            multiline
                            rows={4}
                            maxRows={6}
                        />
                    </Grid>
                </ValidatorForm>
              
            </DialogContent>
            <DialogActions>
            <Button color="error" onClick={props.close}>
                Cancel
            </Button>
            <Button 
                onClick={openConfirmDialog}
                color="success"
            >
                Save
            </Button>
            </DialogActions>
        </Dialog>
        <Confirmation open={confirm} cancel={closeConfirmDialog} handleRemove={RemoveItem} />
    </>
  )
}
