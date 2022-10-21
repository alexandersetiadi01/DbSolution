import React, { useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
// import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";
import Paper from "@mui/material/Paper";
import { Berhasil, Gagal } from "../../Dialog/notification";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
];

export default function BarangMasuk(props) {
  const [message, setMessage] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const closeSuccess = () => {
    setBerhasil(false);
  };

  const [gagal, setGagal] = useState(false);
  const closeError = () => {
    setGagal(false);
  };

  const [suratJalan, setSuratJalan] = useState(true);
  const pakaiSuratJalan = () => {
    setSuratJalan(!suratJalan);
  };

  const detail = {
    namabarang: "",
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
        namabarang: "",
        quantity: "",
        satuan: "",
        noSuratJalan: inputs.noSuratJalan,
        proyekAsal: inputs.proyekAsal,
        namaPenerima: inputs.namaPenerima,
        tgl: inputs.tgl,
        lokasi: inputs.lokasi,
        status: "masuk",
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

    //console.log(arrayBarang[i]);
  };

  const [searchValue, changeSearchValue] = React.useState("");

  const changeValue = (event) => {
    changeSearchValue(event.target.value);
    // console.log('Div lost focus');
  };

  const filterSearch = (searchKey) => {
    const filteredRows = rows.filter((row) =>
      row.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    return filteredRows;
  };

  const [addItem, setAddItem] = React.useState(false);

  const openAddDialog = () => {
    setAddItem(true);
  };

  const closeAddDialog = () => {
    setAddItem(false);
    setInputs("");
    setArrayBarang([]);
  };

  const addBarang = () => {
    setBerhasil(true);
    setMessage("berhasil menambahkan barang");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Barang Masuk</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Logistik</a>
                </li>
                <li className="breadcrumb-item active">Barang Masuk</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div
                  className="card-header"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="card-header-title">
                    <h3 className="card-title">List Barang Masuk</h3>
                  </div>
                  <div className="card-search" style={{ marginLeft: "auto" }}>
                    <SearchBarang
                      value={searchValue}
                      changeValue={(event) => changeValue(event)}
                    />
                  </div>
                  <div className="add-item" style={{ marginLeft: "5px" }}>
                    <IconButton onClick={openAddDialog}>
                      <Tooltip title="Add">
                        <AddIcon />
                      </Tooltip>
                    </IconButton>
                    {/* <AddBarangMasuk
                      open={addItem}
                      detailValue={inputs}
                      changeDetailValue={(event) => handleInputChange(event)}
                      barang={arrayBarang}
                      closeDialog={closeAddDialog}
                    /> */}
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <TabelBarang
                    data={searchValue === "" ? rows : filterSearch(searchValue)}
                  />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>

      {/* dialog tambah barang masuk */}
      <Dialog open={addItem} onClose={closeAddDialog} maxWidth="lg">
        <DialogTitle id="addBarang">Add Barang</DialogTitle>
        {/* <form onSubmit={addBarang}> */}
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                inputRef={(value) => value && value.focus()}
                key="namaPenerima"
                id="namaPenerima"
                name="namaPenerima"
                value={inputs.namaPenerima}
                //onChange={handleInputChange}
                label="Nama Penerima"
                type="text"
                variant="standard"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                inputRef={(value) => value && value.focus()}
                key="lokasi"
                id="lokasi"
                label="Lokasi"
                name="lokasi"
                value={inputs.lokasi}
                //onChange={handleInputChange}
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel autoFocus id="cekSuratJalan" sx={{ margin: "dense" }}>
                surat jalan
              </InputLabel>
              <Switch
                id="cekSuratJalan"
                // labelId="cekSuratJalan"
                // inputRef={value => value && value.focus()}
                label="Surat Jalan"
                inputProps={{ "aria-label": "controlled" }}
                checked={suratJalan}
                onChange={pakaiSuratJalan}
              />
            </Grid>
            <Grid item xs={6}>
              {suratJalan ? (
                <TextField
                  fullWidth
                  autoFocus
                  margin="dense"
                  inputRef={(value) => value && value.focus()}
                  key="noSuratJalan"
                  id="noSuratJalan"
                  label="Nomor Surat Jalan"
                  name="noSuratJalan"
                  value={inputs.noSuratJalan}
                  //onChange={handleInputChange}
                  type="text"
                  variant="standard"
                />
              ) : (
                <TextField
                  fullWidth
                  autoFocus
                  margin="dense"
                  inputRef={(value) => value && value.focus()}
                  key="proyekAsal"
                  id="proyekAsal"
                  label="Proyek Asal"
                  name="proyekAsal"
                  value={inputs.proyekAsal}
                  //onChange={handleInputChange}
                  type="text"
                  variant="standard"
                />
              )}
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <IconButton onClick={addArrayBarang}>
              <Tooltip title="Tambah Barang">
                <AddIcon />
              </Tooltip>
            </IconButton>
            <Table sx={{ width: "50vw" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nama Barang</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Satuan</TableCell>
                  <TableCell>Keterangan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arrayBarang.map((item, index) => (
                  <>
                    <TableRow key={index}>
                      <TableCell>
                        <input
                          type="text"
                          name="namabarang"
                          value={item.namabarang}
                          //onChange={handleArrayBarang}
                          required
                        ></input>
                      </TableCell>

                      <TableCell>
                        <input
                          type="number"
                          name="quantity"
                          value={item.quantity}
                          //onChange={handleArrayBarang}
                          required
                        ></input>
                      </TableCell>

                      <TableCell>
                        <input
                          type="text"
                          name="satuan"
                          value={item.satuan}
                          //onChange={handleArrayBarang}
                          required
                        ></input>
                      </TableCell>
                      <TableCell>
                        <input
                          type="text"
                          name="keterangan"
                          value={item.keterangan}
                          //onChange={handleArrayBarang}
                        ></input>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={closeAddDialog}>
            Cancel
          </Button>
          <Button onClick={addBarang}>Add</Button>
        </DialogActions>
        {/* </form> */}
      </Dialog>

      {/* notification utk success/error */}
      <Berhasil open={berhasil} close={closeSuccess} message={message} />
      <Gagal open={gagal} close={closeError} message={message} />
    </div>
  );
}
