import React from "react";

import TabelBarang from "../../Table/TabelBarang";
import AddIcon from "@mui/icons-material/Add";
import SearchBarang from "../../Table/SearchBarang";
import { IconButton, Tooltip } from "@mui/material";

import AddBarangKeluar from "../../Dialog/AddBarangKeluar";

import RemoveIcon from '@mui/icons-material/Remove';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BarangKeluar(props) {
  const [searchValue, changeSearchValue] = React.useState("")

  const changeValue = (event) =>{
    changeSearchValue(event.target.value);
    // console.log('Div lost focus');
    
  }

  const [addItem, setAddItem] = React.useState(false);

  const openAddDialog = () =>{
    setAddItem(true)
  }

  const closeAddDialog = () =>{
    setAddItem(false)
  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Barang Keluar</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Logistik</a>
                </li>
                <li className="breadcrumb-item active">Barang Keluar</li>
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
                  alignItems:'center' 
                }}>
                  <div className="card-title">
                    <h3 className="card-title">List Barang Keluar</h3>
                  </div>
                  <div className="card-search" style={{marginLeft:'auto'}}>
                    <SearchBarang value={searchValue} changeValue={changeValue} />
                  </div>
                  <div className="add-item" style={{marginLeft: '5px'}}>
                    <IconButton onClick={openAddDialog}>
                      <Tooltip title="Remove">
                        <AddIcon />
                      </Tooltip>
                    </IconButton>
                    <AddBarangKeluar open={addItem} close={closeAddDialog} />
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <TabelBarang data={rows} />
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

export default BarangKeluar;
