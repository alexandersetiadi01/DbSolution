import React from "react";
import TabelBarang from '../../Table/TabelBarang';
import rows from '../../../assets/data/inventory.json';

const meta = [
  "ID" , "Nama Barang", "Quantity", "Satuan", "Proyek"
]

function Inventory(props) {
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
                  <TabelBarang 
                    data={rows}
                    meta={meta}
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

export default Inventory;
