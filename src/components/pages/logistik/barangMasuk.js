import React from "react";

import TabelBarang from '../../Table/TabelBarang';
import SearchBarang from "../../Table/SearchBarang";
import AddItem from "../../Dialog/AddItem";

import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  
];


function BarangMasuk(props) {

/*
*
*
*    SEARCH
* 
*/
 
  const [searchValue, changeSearchValue] = React.useState("")

  const changeValue = (event) =>{
    changeSearchValue(event.target.value);
    // console.log('Div lost focus'); 
  }

  const filterSearch = (searchKey) =>{
    const filteredRows = rows.filter((row)=>
      row.name.toLowerCase().includes(searchKey.toLowerCase())
    )
    return filteredRows
  }

/*
*
*
*    DIALOG
* 
*/

  const [AddDialog, openAddDialog] = React.useState(false);

  const openDialog = () =>{
    openAddDialog(true)
  }

  const closeDialog = () =>{
    openAddDialog(false)
  }


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
                  alignItems:'center' 
                }}>
                  <div className="card-header-title">
                    <h3 className="card-title">List Barang Masuk</h3>
                  </div>
                  <div className="card-search" style={{marginLeft:'auto'}}>
                    <SearchBarang 
                      value={searchValue} 
                      changeValue={event => changeValue(event)} 
                      
                    />
                  </div>
                  <div className="add-item" style={{marginLeft: '5px'}}>
                    <Button variant="contained" onClick={openDialog}>Tambah Barang</Button>
                    <AddItem open={AddDialog} closeDialog={closeDialog} />
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <TabelBarang data={searchValue == "" ? rows : filterSearch(searchValue)} />
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
