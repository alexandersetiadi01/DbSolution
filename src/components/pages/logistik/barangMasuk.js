import React, { useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { IconButton, Tooltip } from "@mui/material";
import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";

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

function BarangMasuk(props) {
  const detail = {
    namabarang: "",
    namaPenerima: "",
    quantity: "",
    noSuratJalan1: "",
    noSuratJalan2: "",
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
    console.log(inputs)
  };

  const [arrayBarang, setArrayBarang] = useState([]);
  let addArrayBarang = () => {
    setArrayBarang([
      ...arrayBarang,
      {
        namabarang: "",
        quantity: "",
        satuan: "",
        noSuratJalan: inputs.noSuratJalan1 + inputs.noSuratJalan2,
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
                      detailValue={inputs}
                      changeDetailValue={(event) => handleInputChange(event)}
                      barang={arrayBarang}
                      closeDialog={closeAddDialog}
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
    </div>
  );
}

export default BarangMasuk;
