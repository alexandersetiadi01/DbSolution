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

import { OutConfirmation } from './Confirmation';
import { Notif } from './notification';

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

const satuanList = [
    "Kg", "liter"
]


export default function AddBarangKeluar (props){

    const [message, setMessage] = useState();
    const [alertType, setAlertType] = useState();
    const [alert, setAlert] = useState(false);
    const closeAlert = () => {
        setAlert(false);
    }

    const detail = {
        namaBarang: "",
        kodeKeluar: "", 
        namaPengambil: "",
        quantity: 1,
        progress: "",  
        tgl: dayjs(Date.now()).format('DD/MM/YYYY'),
        proyek: '',
        username: '',
        keterangan: '',
        tujuan: '',
        satuan: ''
      };

      const [inputs, setInputs] = useState(detail);
      const handleInputChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
        // console.log(inputs)
      };
    
    //   const [arrayBarang, setArrayBarang] = useState([]);
    //   let addArrayBarang = () => {
    //     setArrayBarang([
    //       ...arrayBarang,
    //       {
    //         namaBarang: "",
    //         quantity: "",
    //         satuan: "",
    //         noSuratJalan: inputs.noSuratJalan,
    //         proyekAsal: inputs.proyekAsal,
    //         namaPenerima: inputs.namaPenerima,
    //         tgl: inputs.tgl,
    //         lokasi: inputs.lokasi,
    //         status: "",
    //         username: inputs.username,
    //         keterangan: "",
    //         proyek: inputs.proyek,
    //         supplier: inputs.supplier,
    //       },
    //     ]);
    // };

    const [pindahProyek, setPindahProyek] = useState(true);
    const handlePindahProyek = () => {
        // Clear the tujuan input
        if (pindahProyek === true){
            setInputs({ ...inputs, 'tujuan' : '' })
        }

        setPindahProyek(!pindahProyek);
    };


    const [confirm, openConfirm] = useState(false)

    const openConfirmDialog = () =>{
        openConfirm(true)
    }
    const closeConfirmDialog = () =>{
        openConfirm(false)
    }

    const add = () =>{
        // console.log(inputs)
        openConfirmDialog()
        // setAlert(true);
        // setMessage("berhasil");
        // setInputs("");
        // setArrayBarang([]);
        // setInputs(detail);
    }

    const [tanggal, setTanggal] = React.useState(dayjs(Date.now()));

    const handleTanggal = (newValue) => {
        setTanggal(newValue)
        setInputs({ ...inputs, 'tgl' : newValue.format('DD/MM/YYYY') });
    };

    const [namaBarang, setNamaBarang] = React.useState(null);
    const handleNamaBarang = (event, newValue) => {
        setNamaBarang(newValue)
        setInputs({ ...inputs, 'namaBarang' : newValue.namaBarang })
    }

    const [satuan, setSatuan] = React.useState();
    const handleSatuan = (event, newValue) =>{
        setInputs({...inputs, 'satuan' : newValue})
    }

  return (
    <>
        <Dialog open={props.open} onClose={props.close} maxWidth="lg">
            <DialogTitle>
                Barang Keluar
            </DialogTitle>
            <ValidatorForm onSubmit={add}>
            <DialogContent>
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
                                value={inputs.namaPengambil}
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
                                    name='namaBarang'
                                    value={namaBarang}
                                    onChange={handleNamaBarang}
                                    // autoHighlight
                                    fullWidth
                                    id="combo-box-demo"
                                    // isOptionEqualToValue={(option, value) => option.id === value.id}
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
                                        {...params} 
                                        variant='standard'
                                        fullWidth
                                        label="Nama Barang" 
                                    
                                    />}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                name='quantity'
                                sx={{
                                    marginTop: 1
                                }}
                                value={inputs.quantity}
                                onChange={handleInputChange}
                                type="number"
                                variant='standard'
                                label='Quantity'
                                InputProps={{
                                    inputProps: {
                                        min: 1
                                        // max : Number of Item in the Inventory
                                    }
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                        >
                            <Autocomplete
                                // disablePortal
                                value={satuan}
                                onChange={handleSatuan}
                                id="combo-box-demo"
                                options={satuanList}
                                sx={{ 
                                    marginTop: 1
                                }}
                                getOptionLabel = {
                                    (option) => option
                                }
                                renderOption={
                                    (props, option) =>(
                                        <Box 
                                        component='li'
                                        {...props}
                                        >
                                            {option}
                                        </Box>
                                    )
                                }
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
                                    id="tujuan"
                                    label="Proyek Tujuan "
                                    name="tujuan"
                                    value={inputs.tujuan}
                                    onChange={handleInputChange}
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
                            id='keterangan'
                            name='keterangan'
                            placeholder="Keterangan"
                            value={inputs.keterangan}
                            onChange={handleInputChange}
                            multiline
                            minRows={4}
                            maxRows={6}
                        />
                    </Grid>
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
            cancel={closeConfirmDialog}
            data={inputs}
        />

        {/* <Confirmation open={confirm} cancel={closeConfirmDialog} handleRemove={RemoveItem} /> */}
        {/* <Notif open={alert} close={closeAlert} type={alertType} message={message}/> */}
    </>
  )
}
