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

export default function AddItem(props) {
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

  let handleArrayBarang = (i, e) => {
    let newArrayBarang = [...arrayBarang];
    newArrayBarang[i][e.target.name] = e.target.value;
    setArrayBarang(newArrayBarang);
  };

  let resetBarang = () => {
    setArrayBarang([]);
  };
  let deleteArrayBarang = (i, e) => {
    // arrayBarang.pop(i);
  };

  const [suratJalan, setSuratJalan] = useState(true);
  const pakaiSuratJalan = () => {
    setSuratJalan(!suratJalan);
  };

  const addBarangMasuk = () => {
    window.alert("berhasil");
    setInputs("");
    setArrayBarang([]);
  };

  //   console.log(arrayBarang);

  return (
    <>
      <Dialog open={props.open} onClose={props.close} maxWidth="lg">
        <DialogTitle>Add Barang</DialogTitle>
        <DialogContent>
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
                <FormControl fullWidth sx={{ margin: "dense", marginTop: 1 }}>
                  <InputLabel id="Lokasi" sx={{ margin: "dense" }}>
                    Lokasi
                  </InputLabel>
                  <Select
                    // fullWidth
                    autoFocus
                    margin="dense"
                    id="Lokasi"
                    labelId="Lokasi"
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
                      <MenuItem key={index} value={item.kodeLokasi}>
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
                  labelId="cekSuratJalan"
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
                      labelId="Proyek Asal"
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
              <Grid item xs={2}>
                <Tooltip title="Tambah Barang">
                  <Button variant="contained" type="submit">
                    <AddIcon />
                    Barang
                  </Button>
                </Tooltip>
                </Grid>
                <Grid item xs={2}>
                <Tooltip title="Delete Barang">
                  <Button variant="contained" color="error" onClick={resetBarang}>
                    <DeleteIcon />
                    Barang
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </ValidatorForm>
          <ValidatorForm onSubmit={addBarangMasuk}>
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
                      <TableCell>
                        <FormControl
                          fullWidth
                          sx={{ margin: "dense", marginTop: 1 }}
                        >
                          <Select
                            // fullWidth
                            // autoFocus
                            margin="dense"
                            labelId="Nama Barang"
                            id="namaBarang"
                            name="namaBarang"
                            placeholder="namaBarang"
                            variant="standard"
                            type="text"
                            //   InputProps={{ inputProps: { maxLength: 6 } }}
                            defaultValue={inputs.namaBarang}
                            value={inputs.namaBarang}
                            onChange={handleInputChange}
                            validators={["required"]}
                            errorMessages={["required"]}
                          >
                            {barang.map((item, index) => (
                              <MenuItem key={index} value={item.kodeBarang}>
                                {item.namaBarang}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          type="number"
                          margin="dense"
                          variant="standard"
                          name="quantity"
                          value={item.quantity}
                          onChange={handleArrayBarang}
                          validators={["required"]}
                          errorMessages={["required"]}
                        />
                      </TableCell>

                      <TableCell>
                        <TextValidator
                          type="text"
                          margin="dense"
                          variant="standard"
                          name="satuan"
                          value={item.satuan}
                          onChange={handleArrayBarang}
                          validators={["required"]}
                          errorMessages={["required"]}
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          type="text"
                          margin="dense"
                          variant="standard"
                          name="keterangan"
                          value={item.keterangan}
                          onChange={handleArrayBarang}
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
            <Button color="error" onClick={props.close}>
              Cancel
            </Button>
            <Button color="success" type="submit">Add</Button>
          </ValidatorForm>
        </DialogContent>
        {/* <DialogActions>
          <Button color="error" onClick={props.close}>
            Cancel
          </Button>
          <Button onClick={addBarangMasuk}>Add</Button>
        </DialogActions> */}
      </Dialog>
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
//                             labelId="cekSuratJalan"
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
