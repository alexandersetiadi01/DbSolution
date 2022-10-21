import React, { Component } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import {
  Grid,
  InputLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default class AddBarangMasuk extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.closeDialog}
        maxWidth="lg"
      >
        <DialogTitle>Add Barang</DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                id="name"
                name="namaPenerima"
                value={this.props.detailValue.namaPenerima}
                onChange={this.props.changeDetailValue}
                label="Nama Penerima"
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                id="Lokasi"
                label="Lokasi"
                name="lokasi"
                value={this.props.detailValue.lokasi}
                onChange={this.props.changeDetailValue}
                type="text"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel autoFocus id="cekSuratJalan" sx={{ margin: "dense" }}>
                surat jalan
              </InputLabel>
              <Switch
                id="cekSuratJalan"
                labelId="cekSuratJalan"
                // inputRef={value => value && value.focus()}
                label="cekSuratJalan"
                inputProps={{ "aria-label": "controlled" }}
                // checked={checked}
                // onChange={handleChange}
                defaultChecked
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                autoFocus
                margin="dense"
                id=""
                label="Nomor Surat Jalan"
                name="noSuratJalan"
                value={this.props.detailValue.noSuratJalan}
                onChange={this.props.changeDetailValue}
                type="text"
                variant="standard"
              />
            </Grid>
          </Grid>

          <TableContainer component={Paper}>
            <Table sx={{ width: "100vw" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nama Barang</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Satuan</TableCell>
                  <TableCell>Keterangan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>
                  <input type="text"></input>
                </TableCell>
                <TableCell>
                  <input type="text"></input>
                </TableCell>
                <TableCell>
                  <input type="text"></input>
                </TableCell>
                <TableCell>
                  <input type="text"></input>
                </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={this.props.closeDialog}>
            Cancel
          </Button>
          <Button>Add</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
