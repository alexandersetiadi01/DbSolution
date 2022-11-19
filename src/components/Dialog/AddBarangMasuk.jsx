import React, { Component, useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import dayjs from "dayjs";

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
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Notif } from "./notification";
import { InConfirmation } from "./Confirmation";

import {
  addBanyakBarangMasuk,
  getAllBarangMasuk,
  getAllSatuan,
  getNamaMasterBarang,
  getSelectedProyek,
  inventoryMasuk,
  seeAllProyek,
  setSelectedProyek,
  updateOutstanding,
} from "../API/repository";

import { 
  LocalizationProvider, 
  DesktopDatePicker,
} from '@mui/x-date-pickers';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'



const proyekAsal = [
  {
    label: "A",
  },
  {
    label: "B",
  },
];

export default function AddBarangMasuk(props) {
  const [message, setMessage] = useState();
  const [alertType, setAlertType] = useState();
  const [alert, setAlert] = useState(false);
  const proyek = getSelectedProyek();

  const [masterBarang, setMasterBarang] = useState([]);
  const getNamaBarang = async () => {
    const data = await getNamaMasterBarang();
    let rowsData = [];
    for (const barang of data) {
      const newBarang = {
        //kodebarang: barang.kodebarang,
        namabarang: barang.namabarang,
      };
      rowsData.push(newBarang);
    }
    setMasterBarang(rowsData);
  };

  useEffect(() => {
    getNamaBarang();
  }, []);

  const [lokasi, setLokasi] = useState([]);
  useEffect(() => {
    async function getProyekAPI() {
      const datas = await seeAllProyek();
      let rowsData = [];
      for (const data of datas) {
        const newData = {
          namaLokasi: data.namaProyek,
        };
        rowsData.push(newData);
      }
      setLokasi(rowsData);
    }
    getProyekAPI();
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

  const [confirm, setConfirm] = useState(false);
  const openConfirm = () => {
    setConfirm(true);
  };
  const closeConfirm = () => {
    setConfirm(false);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  const [tanggal, setTanggal] = React.useState(dayjs(Date.now()));
  const getDate = () => {
    var today = dayjs().format("DD/MM/YYYY");
    return today;
  };

  const detail = {
    // namaBarang: "",
    namaPenerima: "",
    // quantity: "",
    // noSuratJalan1: "",
    noSuratJalan: "",
    proyekAsal: "",
    // noSuratJalan2: "",
    tgl: '',
    lokasi: "",
    action: "",
    username: "",
    proyek: proyek,
    // keterangan: "",
    // satuan: "",
    supplier: "",
    barang: [],
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
        namabarang: "",
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
        kodePO: ''
      },
    ]);
  };

  let handleArrayBarang = (i, e) => {
    let newArrayBarang = [...arrayBarang];
    newArrayBarang[i][e.target.name] = e.target.value;
    setArrayBarang(newArrayBarang);
    setInputs({ ...inputs, barang: newArrayBarang });
  };

  let resetBarang = () => {
    setArrayBarang([]);
  };

  let deleteArrayBarang = (i, e) => {
    // arrayBarang.pop(i);
  };

  const handleTanggal = (newValue) => {
    setTanggal(newValue)
    setInputs({ ...inputs, 'tgl' : newValue.format('DD/MM/YYYY') });
  };


  const [suratJalan, setSuratJalan] = useState(true);
  const pakaiSuratJalan = () => {
    setSuratJalan(!suratJalan);
  };

  const addBarangMasuk = async() => {
    // setInputs({ ...inputs, 'tgl': getDate()});
    // openConfirm();

    try{
      for (let i = 0; i < arrayBarang.length; i++) {
        //nanti bikinnya di function konversi biar gk keliatan ribet
        if (arrayBarang[i].namabarang === "Papan 2/20. P 4mtr") {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 62;
          arrayBarang[i].satuan = "lbr";
        }
        if (arrayBarang[i].namabarang === "Kaso Borneo 4/6. P 4mtr") {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 104;
          arrayBarang[i].satuan = "btg";
        }
        if (arrayBarang[i].namabarang === "Kaso Borneo 5/7. P 4mtr") {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 71;
          arrayBarang[i].satuan = "btg";
        }
        if (arrayBarang[i].namabarang === "Karpet Talang; 0.9x60 m") {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 50;
          arrayBarang[i].satuan = "m1";
        }
        if (
          arrayBarang[i].namabarang === "Paku 7 (23kg)" ||
          arrayBarang[i].namabarang === "Paku 5 (23kg)" ||
          arrayBarang[i].namabarang === "Paku 10 (23kg)"
        ) {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 23;
          arrayBarang[i].satuan = "kg";
        }
        if (
          arrayBarang[i].namabarang === "Paku 7 (25kg)" ||
          arrayBarang[i].namabarang === "Paku 5 (25kg)" ||
          arrayBarang[i].namabarang === "Paku 10 (25kg)"
        ) {
          arrayBarang[i].quantity = arrayBarang[i].quantity * 25;
          arrayBarang[i].satuan = "kg";
        }
      }
      addBanyakBarangMasuk(arrayBarang);
      inventoryMasuk(arrayBarang);
      props.close();
      closeConfirm();
      setInputs(detail);
      setArrayBarang([]);
      getAllBarangMasuk();
      //notif berhasil add
      setAlertType("success");
      setMessage("Berhasil menyimpan barang masuk");
      setAlert(true);
    }catch(e){
      //notif gagal add
      setAlertType("error");
      setMessage(e);
      setAlert(true);
      
    }
    // await updateOutstanding(arrayBarang);

    
  };

  // console.log(inputs);

  return (
    <>
      <Dialog fullwidth open={props.open} onClose={props.close} maxWidth="lg">
        <DialogTitle><b>Barang Masuk</b></DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }} dividers>
          <ValidatorForm onSubmit={addArrayBarang}>
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
                  name="namaPenerima"
                  label="Nama Penerima"
                  value={inputs.namaPenerima}
                  onChange={handleInputChange}
                  type="text"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                {/* <LocalizationProvider 
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
                </LocalizationProvider> */}
                <TextValidator
                  fullWidth
                  focused
                  margin="dense"
                  id="tgl"
                  name="tgl"
                  label="tgl"
                  value={inputs.tgl}
                  onChange={handleInputChange}
                  type="date"
                  variant="standard"
                  validators={["required"]}
                  errorMessages={["required"]}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth sx={{ margin: "dense", marginTop: 1 }}>
                  <InputLabel id="Lokasi" sx={{ margin: "dense" }}>
                    Lokasi
                  </InputLabel>
                  <Select
                    // fullWidth
                    autoFocus
                    margin="dense"
                    id="Lokasi"
                    // //labelid="Lokasi"
                    label="Lokasi"
                    name="lokasi"
                    value={inputs.lokasi}
                    onChange={handleInputChange}
                    defaultValue={inputs.lokasi}
                    type="text"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["required"]}
                    //   InputProps={{ inputProps: { maxLength: 6 } }}
                  >
                    {lokasi.map((item, index) => (
                      <MenuItem key={index} value={item.namaLokasi}>
                        {item.namaLokasi}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel
                  autoFocus
                  id="cekSuratJalan"
                  sx={{ margin: "dense" }}
                >
                  Surat Jalan
                </InputLabel>
                <Switch
                  id="cekSuratJalan"
                  // //labelid="cekSuratJalan"
                  // inputRef={value => value && value.focus()}
                  label="cekSuratJalan"
                  inputProps={{ "aria-label": "controlled" }}
                  checked={suratJalan}
                  onChange={pakaiSuratJalan}
                  defaultChecked
                />
              </Grid>
              <Grid item xs={6}>
                {suratJalan ? (
                  <TextValidator
                    fullWidth
                    margin="dense"
                    id="noSuratJalan"
                    label="Nomor Surat Jalan"
                    name="noSuratJalan"
                    value={inputs.noSuratJalan}
                    onChange={handleInputChange}
                    type="text"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["required"]}
                    autoComplete="off"
                  />
                ) : (
                  <FormControl fullWidth sx={{ margin: "dense", marginTop: 1 }}>
                    <InputLabel id="Proyek Asal" sx={{ margin: "dense" }}>
                      Proyek Asal
                    </InputLabel>
                    <Select
                      // fullWidth
                      autoFocus
                      margin="dense"
                      //labelid="Proyek Asal"
                      id="proyekAsal"
                      name="proyekAsal"
                      label="Proyek Asal"
                      placeholder="proyekAsal"
                      variant="standard"
                      type="text"
                      //   InputProps={{ inputProps: { maxLength: 6 } }}
                      defaultValue={inputs.proyekAsal}
                      value={inputs.proyekAsal}
                      onChange={handleInputChange}
                      validators={["required"]}
                      errorMessages={["required"]}
                    >
                      {proyekAsal.map((item, index) => (
                        <MenuItem key={index} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </Grid>
              <Grid item>
                <Tooltip title="Tambah Barang">
                  <Button variant="contained" type="submit">
                    <AddIcon />
                    Barang
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Delete Barang">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={resetBarang}
                  >
                    <DeleteIcon />
                    Barang
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </ValidatorForm>
          <ValidatorForm onSubmit={openConfirm}>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100vw" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nama Barang</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Satuan</TableCell>
                    <TableCell>Keterangan</TableCell>
                    {/* <TableCell>Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {arrayBarang.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ width: "25vw" }}>
                        <FormControl
                          fullWidth
                          sx={{ margin: "dense", marginTop: 1 }}
                        >
                          <Select
                            // fullWidth
                            // autoFocus
                            margin="dense"
                            //labelid="Nama Barang"
                            id="namabarang"
                            name="namabarang"
                            placeholder="namabarang"
                            variant="standard"
                            type="text"
                            //   InputProps={{ inputProps: { maxLength: 6 } }}
                            // defaultValue={item.namaBarang}
                            value={item.namabarang}
                            onChange={(e) => handleArrayBarang(index, e)}
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
                      </TableCell>
                      <TableCell sx={{ width: "15vw" }}>
                        <TextValidator
                          type="number"
                          margin="dense"
                          variant="standard"
                          name="quantity"
                          inputProps={{
                            style: {
                              textAlign: "right",
                              // marginRight: '10px'
                            },
                            min: 0,
                          }}
                          value={item.quantity}
                          onChange={(e) => handleArrayBarang(index, e)}
                          validators={["required"]}
                          errorMessages={["required"]}
                        />
                      </TableCell>

                      <TableCell sx={{ width: "20vw" }}>
                        <FormControl
                          fullWidth
                          sx={{ margin: "dense", marginTop: 1 }}
                        >
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
                            value={item.satuan}
                            onChange={(e) => handleArrayBarang(index, e)}
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
                      </TableCell>

                      <TableCell sx={{ width: "25vw" }}>
                        <TextValidator
                          fullWidth
                          type="text"
                          margin="dense"
                          variant="standard"
                          name="keterangan"
                          value={item.keterangan}
                          onChange={(e) => handleArrayBarang(index, e)}
                          validators={["required"]}
                          errorMessages={["required"]}
                        />
                      </TableCell>
                      {/* <TableCell>
                        <IconButton>
                          <Tooltip title="Hapus Barang" onClick={deleteArrayBarang}>
                            <DeleteIcon />
                          </Tooltip>
                        </IconButton>
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <DialogActions>
              <Button color="error" onClick={props.close}>
                Cancel
              </Button>
              <Button color="success" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
        {/* <DialogActions>
          <Button color="error" onClick={props.close}>
            Cancel
          </Button>
          <Button onClick={addBarangMasuk}>Add</Button>
        </DialogActions> */}
      </Dialog>
      <InConfirmation
        open={confirm}
        cancel={closeConfirm}
        data={inputs}
        detail={arrayBarang}
        handleAdd={addBarangMasuk}
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

// export default class AddItem extends Component {

//     constructor(props){

//         super(props)
//         this.state = {
//             recipient : '',
//             location : '',
//             suratJalan : false,
//             no_suratJalan : '',
//             arrayBarang : [],

//         }

//         this.handleRecipientChange = this.handleRecipientChange.bind(this)
//         this.handleSuratJalan = this.handleSuratJalan.bind(this)
//         this.handleLocation = this.handleLocation.bind(this)
//         this.handleNoSuratJalan = this.handleNoSuratJalan.bind(this)
//         this.handleAddArrayBarang = this.handleAddArrayBarang.bind(this)

//     }

//     handleRecipientChange = (event) =>{
//         this.setState({
//             recipient : event.target.value
//         })
//     }

//     handleSuratJalan = () =>{
//         this.setState({
//             suratJalan : !this.state.suratJalan
//         })
//     }

//     handleLocation = (event) =>{
//         this.setState({
//             location : event.target.value
//         })

//     }

//     handleNoSuratJalan = (event) =>{
//         this.setState({
//             no_suratJalan : event.target.value
//         })

//     }

//     handleAddArrayBarang = (event) =>{
//         this.setState({
//             arrayBarang : [...this.state.arrayBarang,

//             ]
//         })
//     }

//     render() {
//         console.log(this.state.arrayBarang)
//         return (
//             <Dialog
//                 open={this.props.open}
//                 onClose={this.props.closeDialog}
//                 maxWidth="lg"
//             >
//                 <DialogTitle>Add Barang</DialogTitle>
//                 <DialogContent>
//                     <Grid
//                         container
//                         rowSpacing={1}
//                         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//                     >
//                     <Grid item xs={6}>
//                         <TextValidator
//                             fullWidth
//                             autoFocus
//                             margin="dense"
//                             id="name"
//                             name="namaPenerima"
//                             label="Nama Penerima"
//                             value = {this.state.recipient}
//                             onChange={this.handleRecipientChange}
//                             type="text"
//                             variant="standard"
//                         />
//                     </Grid>
//                     <Grid item xs={6}>
//                     <TextValidator
//                         fullWidth
//                         autoFocus
//                         margin="dense"
//                         id="Lokasi"
//                         label="Lokasi"
//                         name="lokasi"
//                         value={this.state.location}
//                         onChange={this.handleLocation}
//                         type="text"
//                         variant="standard"
//                     />
//                     </Grid>
//                     <Grid item xs={6}>
//                         <InputLabel autoFocus id="cekSuratJalan" sx={{ margin: "dense" }}>
//                             Surat Jalan
//                         </InputLabel>
//                         <Switch
//                             id="cekSuratJalan"
//                             //labelid="cekSuratJalan"
//                             // inputRef={value => value && value.focus()}
//                             label="cekSuratJalan"
//                             inputProps={{ "aria-label": "controlled" }}
//                             checked={this.state.suratJalan}
//                             onChange={this.handleSuratJalan}
//                             defaultChecked
//                         />
//                         </Grid>
//                         <Grid item xs={6}>
//                             {
//                                 this.state.suratJalan ?
//                                     <TextValidator
//                                         fullWidth
//                                         margin="dense"
//                                         id=""
//                                         label="Nomor Surat Jalan"
//                                         name="noSuratJalan"
//                                         value={this.state.no_suratJalan}
//                                         onChange={this.handleNoSuratJalan}
//                                         type="text"
//                                         variant="standard"
//                                     />
//                                 :
//                                    <Autocomplete
//                                         disablePortal
//                                         id="combo-box-demo"
//                                         options = {proyek()}
//                                         // fullWidth
//                                         renderInput={(params)=>
//                                             <TextValidator variant='standard' {...params} label="Proyek Asal" />
//                                         }
//                                    />
//                             }
//                         </Grid>
//                     </Grid>
//                     <TableContainer component={Paper}>
//                         <IconButton
//                         // onClick={this.handleAddArrayBarang}
//                         >
//                             <Tooltip title="Tambah Barang">
//                                 <AddIcon />
//                             </Tooltip>
//                         </IconButton>
//                         <Table sx={{ width: "100vw" }} aria-label="simple table">
//                             <TableHead>
//                                 <TableRow>
//                                 <TableCell>Nama Barang</TableCell>
//                                 <TableCell>Quantity</TableCell>
//                                 <TableCell>Satuan</TableCell>
//                                 <TableCell>Keterangan</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                             {
//                                 this.state.arrayBarang.map((item, index)=>{
//                                         <TableRow>
//                                             <TableCell>
//                                                 <input
//                                                     type="text"
//                                                     name="namaBarang"
//                                                     value={item.namaBarang}
//                                                     //onChange={handleArrayBarang}
//                                                     disabled
//                                                 ></input>
//                                             </TableCell>

//                                             <TableCell>
//                                                 <input
//                                                     type="number"
//                                                     name="quantity"
//                                                     value={item.quantity}
//                                                     //onChange={handleArrayBarang}
//                                                     disabled
//                                                 ></input>
//                                             </TableCell>

//                                             <TableCell>
//                                                 <input
//                                                     type="text"
//                                                     name="satuan"
//                                                     value={item.satuan}
//                                                     //onChange={handleArrayBarang}
//                                                     disabled
//                                                 ></input>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <input
//                                                     type="text"
//                                                     name="keterangan"
//                                                     value={item.keterangan}
//                                                     //onChange={handleArrayBarang}
//                                                     disabled
//                                                 ></input>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <IconButton
//                                                 // onClick={this.handleAddArrayBarang}
//                                                 >
//                                                     <Tooltip title="Tambah Barang">
//                                                         <EditIcon />
//                                                     </Tooltip>
//                                                 </IconButton>
//                                             </TableCell>
//                                         </TableRow>
//                                     })
//                                 }
//                                 <TableRow>
//                                     <TableCell>
//                                         <input
//                                             type="text"
//                                             name="namaBarang"
//                                             // value={item.namaBarang}
//                                             //onChange={handleArrayBarang}
//                                             required
//                                         ></input>
//                                     </TableCell>

//                                     <TableCell>
//                                         <input
//                                             type="number"
//                                             name="quantity"
//                                             // value={item.quantity}
//                                             //onChange={handleArrayBarang}
//                                             required
//                                         ></input>
//                                     </TableCell>

//                                     <TableCell>
//                                         <input
//                                             type="text"
//                                             name="satuan"
//                                             // value={item.satuan}
//                                             //onChange={handleArrayBarang}
//                                             required
//                                         ></input>
//                                     </TableCell>
//                                     <TableCell>
//                                         <input
//                                             type="text"
//                                             name="keterangan"
//                                             // value={item.keterangan}
//                                             //onChange={handleArrayBarang}
//                                         ></input>
//                                     </TableCell>
//                                 </TableRow>
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button color="error" onClick={this.props.closeDialog}>
//                         Cancel
//                     </Button>
//                     <Button>
//                         Add
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         )
//   }
// }
