import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
            </div>
            <div className="info">
              <a href="#" className="d-block">
                User
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                {/* <a href="#" className="nav-link active"> */}
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Master
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard/Master/MasterBarang" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Master Barang</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/Master/codeMaster" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Code Master</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/Master/codeDetail" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Code Detail</p>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item menu-open"> */}
              <li className="nav-item menu-open">
                {/* <a href="#" className="nav-link active"> */}
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Logistik
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard/Logistik/barangMasuk" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Barang Masuk</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/Logistik/barangKeluar" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Barang Keluar</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/Logistik/Inventory" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inventory</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu">
                {/* <a href="#" className="nav-link active"> */}
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    RAP
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/dashboard/RAP/detailRAP" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Detail RAP</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard/RAP/Progress" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Progress</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
