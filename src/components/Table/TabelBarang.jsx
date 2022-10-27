import React, { Component } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";
import { IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default class TabelBarang extends Component {
  constructor(props) {
    super(props);
    this.data = props;
    this.state = {
      page: 0,
      rowPage: 5, // Item per Page
    };
  }

  render() {
    const tableHeadStyle = {
      fontSize: "17px",
      fontWeight: "Bold",
    };

    const handleChangePage = (event, newPage) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (event) => {
      this.setState({
        page: 0,
        rowPage: event.target.value,
      });
    };

    const emptyRows =
      this.state.page > 0
        ? Math.max(
            0,
            (1 + this.state.page) * this.state.rowPage - this.props.data.length
          )
        : 0;

    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={tableHeadStyle}>Rendering Engine</TableCell>
                <TableCell style={tableHeadStyle} align="right">
                  Browser
                </TableCell>
                <TableCell style={tableHeadStyle} align="right">
                  Platform(s)
                </TableCell>
                <TableCell style={tableHeadStyle} align="right">
                  Engine Version
                </TableCell>
                <TableCell style={tableHeadStyle} align="right">
                  CSS grade
                </TableCell>
                <TableCell style={tableHeadStyle} align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.data
                .slice(
                  this.state.page * this.state.rowPage,
                  this.state.page * this.state.rowPage + this.state.rowPage
                )
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => window.alert("edit " + row.name) }color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="delete">
                        <IconButton onClick={() => window.alert("delete " + row.name) } color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="View">
                        <IconButton onClick={} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip> */}
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={this.props.data.length}
          rowsPerPage={this.state.rowPage}
          page={this.state.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
  }
}
