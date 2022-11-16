import React, { useEffect, useState } from "react";
import TabelBarang from "../../Table/TabelBarang";
import { getInventory, getSelectedProyek } from "../../API/repository";

const meta = ["ID", "Nama Barang", "Quantity", "Satuan"];

function Inventory(props) {
  const proyek = getSelectedProyek();
  const [rows, setRows] = useState([]);

  useEffect(() => {
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
      setRows(rowsData);
    }
    getinventoryAPI();
  }, []);

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
                <div className="card-header">
                  <h3 className="card-title">List Inventory</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <TabelBarang data={rows} meta={meta} />
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
