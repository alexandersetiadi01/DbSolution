import React, { useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";

import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  Paper,
  IconButton,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
} from "@mui/material";

// import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";
import { Berhasil, Gagal } from "../../Dialog/notification";
import AddBarangMasuk from "../../Dialog/AddBarangMasuk";
import AddMasterBarang from "../../Dialog/AddMasterBarang";
import AddCodeDetail from "../../Dialog/addCodeDetail";

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

const codeMaster = [
  {
    IDCodeMaster: 1,
    deskripsi: "a",
  },
  {
    IDCodeMaster: 2,
    deskripsi: "b",
  },
  {
    IDCodeMaster: 3,
    deskripsi: "c",
  },
];

export default function CodeDetail(props) {
  const [message, setMessage] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const closeSuccess = () => {
    setBerhasil(false);
  };

  const [gagal, setGagal] = useState(false);
  const closeError = () => {
    setGagal(false);
  };

  const [groupBy, setGroupBy] = useState();
  const handleGroupBy = (event) => {
    setGroupBy(event.target.value);
  };

  const [suratJalan, setSuratJalan] = useState(true);
  const pakaiSuratJalan = () => {
    setSuratJalan(!suratJalan);
  };

  const detail = {
    IDCodeMaster: "",
    IDCodeDetail: "",
    deskripsi: "",
    status: "",
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
              <h1>Code Detail</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master</a>
                </li>
                <li className="breadcrumb-item active">Code Detail</li>
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
                    <h3 className="card-title">List Code Detail</h3>
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
                    <AddCodeDetail open={addItem} close={closeAddDialog} />
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <Grid container spacing={1}>
                    <Grid item xs={4} md={0}>
                      <FormControl
                        fullWidth
                        autoFocus
                        sx={{ margin: "dense", marginTop: 1 }}
                      >
                        <InputLabel id="deskripsi" sx={{ margin: "dense" }}>
                          Code Master
                        </InputLabel>
                        <Select
                          margin="dense"
                          id="deskripsi"
                          labelId="deskripsi"
                          placeholder="Code Master"
                          defaultValue={groupBy}
                          value={groupBy}
                          onChange={handleGroupBy}
                          validators={["required"]}
                          errorMessages={["required"]}
                        >
                          {codeMaster.map((item, index) => (
                            <MenuItem key={index} value={item.IDCodeMaster}>
                              {item.deskripsi}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
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
