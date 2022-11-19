import React, { useEffect, useState } from "react";
import TabelBarang from "../../Table/TabelBarang";
import { getInventory, getSelectedProyek } from "../../API/repository";
import { CircularProgress, IconButton, Tooltip } from "@mui/material";
import SearchBarang from "../../Table/SearchBarang";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";

const meta = ["ID", "Nama Barang", "Quantity", "Satuan"];

function Inventory(props) {

  const proyek = getSelectedProyek();
  const [rows, setRows] = useState([]);

  async function getinventoryAPI() {
    let rowsData = [];

    const data = await getInventory({proyek: proyek});
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

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(()=>
      getinventoryAPI()
      .then((data)=>{
        setRows(data)
      })
      .finally(()=>{
        setLoading(false)
      })
    ,
      2000
    )

  }, []);

  const refresh = () => {
    
  }
  
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Inventory</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Logistik</a>
                </li>
                <li className="breadcrumb-item active">Inventory</li>
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
                    <h3 className="card-title">Inventory</h3>
                  </div>
                  <div className="card-search" style={{ marginLeft: "auto" }}>
                    <SearchBarang
                      value={searchValue}
                      changeValue={(event) => changeValue(event)}
                    />
                  </div>
                  <div className="add-item" style={{ marginLeft: "5px" }}>
                    <IconButton onClick={refresh}>
                      <Tooltip title="refresh">
                        <RefreshIcon />
                      </Tooltip>
                    </IconButton>
                    
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body"
                
                >
                  {
                    loading ? 
                    <CircularProgress />
                    :
                    <TabelBarang data={rows} meta={meta} />
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

export default Inventory;
