import React, { useEffect, useState } from "react";

import TabelBarang from "../../Table/TabelBarang";
import SearchBarang from "../../Table/SearchBarang";

import AddIcon from "@mui/icons-material/Add";

import {
  Button,
  Paper,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";

// import AddBarangMasuk from "../../Dialog/barangMasuk.js/AddBarangMasuk";
import { Berhasil, Gagal } from "../../Dialog/notification";
import AddBarangMasuk from "../../Dialog/AddBarangMasuk";
import { getAllBarangMasuk, getInventory, getSelectedProyek } from "../../API/repository";
import AddMasterRAP from "../../Dialog/AddMasterRAP";

const meta = ["No", "Jenis Bahan", "Satuan", "RAP"];

function MasterRAP(props) {
  const proyek = getSelectedProyek();
  const [rows, setRows] = useState([]);

  async function getinventoryAPI() {
    let rowsData = [];

    const data = await getInventory({ proyek: proyek });
    for (const barang of data) {
      const newBarang = {
        namabarang: barang.namabarang,
        quantity: barang.quantity,
        // proyek: barang.proyek,
        satuan: barang.satuan,
      };

      rowsData.push(newBarang);
    }
    return rowsData;
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(
      () =>
        getinventoryAPI()
          .then((data) => {
            setRows(data);
          })
          .finally(() => {
            setLoading(false);
          }),
      2000
    );
  }, []);

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
  const [addItem, setAddItem] = useState(false);

  const openAddDialog = () => {
    setAddItem(true);
  };

  const closeAddDialog = () => {
    setAddItem(false);
  };

  const refresh = () => {

  }
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Master RAP</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">RAP</a>
                </li>
                <li className="breadcrumb-item active">Detail RAP</li>
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
                    <h3 className="card-title">Master RAP</h3>
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
                    <IconButton onClick={refresh}>
                      <Tooltip title="refresh">
                        <RefreshIcon />
                      </Tooltip>
                    </IconButton>
                    <AddMasterRAP open={addItem} close={closeAddDialog} />
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body"
                  
                >
                  {
                    loading ? 
                    <CircularProgress />
                    :
                    <TabelBarang
                      meta={meta}
                      data={searchValue === "" ? rows : filterSearch(searchValue)}
                    />
                  }
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

export default MasterRAP;
