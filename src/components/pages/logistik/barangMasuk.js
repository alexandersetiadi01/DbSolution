import React from "react";

function BarangMasuk(props) {
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
                <div className="card-header">
                  <h3 className="card-title">List Barang Masuk</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Misc</td>
                        <td>NetFront 3.4</td>
                        <td>Embedded devices</td>
                        <td>-</td>
                        <td>A</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Misc</td>
                        <td>Dillo 0.8</td>
                        <td>Embedded devices</td>
                        <td>-</td>
                        <td>X</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Misc</td>
                        <td>Links</td>
                        <td>Text only</td>
                        <td>-</td>
                        <td>X</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Misc</td>
                        <td>Lynx</td>
                        <td>Text only</td>
                        <td>-</td>
                        <td>X</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Misc</td>
                        <td>IE Mobile</td>
                        <td>Windows Mobile 6</td>
                        <td>-</td>
                        <td>C</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Misc</td>
                        <td>PSP browser</td>
                        <td>PSP</td>
                        <td>-</td>
                        <td>C</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Other browsers</td>
                        <td>All others</td>
                        <td>-</td>
                        <td>-</td>
                        <td>U</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-block btn-primary"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-danger"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-block btn-success"
                          >
                            <i class="fas fa-eye"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                  </table>
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
