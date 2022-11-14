import React, { useEffect, useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";

import AddIcon from "@mui/icons-material/Add";

// import data from '../../../assets/data/masterbarang.json';

import {
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";

// import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";
import { Berhasil, Gagal } from "../../Dialog/notification";
import AddBarangMasuk from "../../Dialog/AddBarangMasuk";
import AddMasterBarang from "../../Dialog/AddMasterBarang";
import { getAllMasterBarang } from "../../API/repository";

const meta = [
  'Nama Barang' , 'Category' , 'Sub Category', 'Type', 'Merk', 'Satuan', 'Ukuran', 'Proyek', 'Action'
]

// const rows = data;

export default function MasterBarang(props) {
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
    kodeBarang: "",
    namaBarang: "",
    category: "", 
    subCategory: "",
    type: "",
    merk: "",  
    satuan: "",
    ukuran: "",
    proyek: ""
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

  const [rows, setRows] = useState([]);
  
  // data master barang dari DB
  useEffect(() => {
    async function getMasterBarangAPI(){
        const data = await getAllMasterBarang();
        let rowsData = []
        for (const barang of data){
            const newBarang = {
                //kodebarang: barang.kodebarang,
                namabarang: barang.namabarang,
                category: barang.category, 
                subCategory: barang.subCategory,
                type: barang.type,
                merk: barang.merk,  
                satuan: barang.satuan,
                ukuran: barang.ukuran,
            };
            rowsData.push(newBarang);
        }
        setRows(rowsData);
    }
    getMasterBarangAPI();
}, [])

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Master Barang</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master</a>
                </li>
                <li className="breadcrumb-item active">Master Barang</li>
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
                    <h3 className="card-title">List Master Barang</h3>
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
                    <AddMasterBarang
                      open={addItem} 
                      close={closeAddDialog} 
                    />
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <TabelBarang
                    meta={meta}
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
