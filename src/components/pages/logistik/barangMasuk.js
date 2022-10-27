import React, { useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";

import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";

// import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";
import { Berhasil, Gagal } from "../../Dialog/notification";
import AddBarangMasuk from "../../Dialog/AddBarangMasuk";

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


  /*Add Item Inputs*/
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

  /* Search */
  const [searchValue, changeSearchValue] = useState("");

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

  /* Add Item */

  const [addItem, setAddItem] = useState(false);

  const openAddDialog = () => {
    setAddItem(true);
  };

  const closeAddDialog = () => {
    setAddItem(false);
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
                    <AddBarangMasuk
                      open={addItem} 
                      close={closeAddDialog} 
                    />
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

      {/* notification utk success/error */}
      <Berhasil open={berhasil} close={closeSuccess} message={message} />
      <Gagal open={gagal} close={closeError} message={message} />
    </div>
  );
}
