import React, { Component } from "react";

import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
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

// <Dialog open={addItem} onClose={closeAddDialog} maxWidth="lg">
//         <DialogTitle id="addBarang">Add Barang</DialogTitle>
//         {/* <form onSubmit={addBarang}> */}
//         <DialogContent>
//           <Grid
//             container
//             rowSpacing={1}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           >
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 autoFocus
//                 margin="dense"
//                 inputRef={(value) => value && value.focus()}
//                 key="namaPenerima"
//                 id="namaPenerima"
//                 name="namaPenerima"
//                 value={inputs.namaPenerima}
//                 //onChange={handleInputChange}
//                 label="Nama Penerima"
//                 type="text"
//                 variant="standard"
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 autoFocus
//                 margin="dense"
//                 inputRef={(value) => value && value.focus()}
//                 key="lokasi"
//                 id="lokasi"
//                 label="Lokasi"
//                 name="lokasi"
//                 value={inputs.lokasi}
//                 //onChange={handleInputChange}
//                 type="text"
//                 variant="standard"
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <InputLabel autoFocus id="cekSuratJalan" sx={{ margin: "dense" }}>
//                 surat jalan
//               </InputLabel>
//               <Switch
//                 id="cekSuratJalan"
//                 // labelId="cekSuratJalan"
//                 // inputRef={value => value && value.focus()}
//                 label="Surat Jalan"
//                 inputProps={{ "aria-label": "controlled" }}
//                 checked={suratJalan}
//                 onChange={pakaiSuratJalan}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               {suratJalan ? (
//                 <TextField
//                   fullWidth
//                   autoFocus
//                   margin="dense"
//                   inputRef={(value) => value && value.focus()}
//                   key="noSuratJalan"
//                   id="noSuratJalan"
//                   label="Nomor Surat Jalan"
//                   name="noSuratJalan"
//                   value={inputs.noSuratJalan}
//                   //onChange={handleInputChange}
//                   type="text"
//                   variant="standard"
//                 />
//               ) : (
//                 <TextField
//                   fullWidth
//                   autoFocus
//                   margin="dense"
//                   inputRef={(value) => value && value.focus()}
//                   key="proyekAsal"
//                   id="proyekAsal"
//                   label="Proyek Asal"
//                   name="proyekAsal"
//                   value={inputs.proyekAsal}
//                   //onChange={handleInputChange}
//                   type="text"
//                   variant="standard"
//                 />
//               )}
//             </Grid>
//           </Grid>
//           <TableContainer component={Paper}>
//             <IconButton onClick={addArrayBarang}>
//               <Tooltip title="Tambah Barang">
//                 <AddIcon />
//               </Tooltip>
//             </IconButton>
//             <Table sx={{ width: "50vw" }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Nama Barang</TableCell>
//                   <TableCell>Quantity</TableCell>
//                   <TableCell>Satuan</TableCell>
//                   <TableCell>Keterangan</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {arrayBarang.map((item, index) => (
//                   <>
//                     <TableRow key={index}>
//                       <TableCell>
//                         <input
//                           type="text"
//                           name="namabarang"
//                           value={item.namabarang}
//                           //onChange={handleArrayBarang}
//                           required
//                         ></input>
//                       </TableCell>

//                       <TableCell>
//                         <input
//                           type="number"
//                           name="quantity"
//                           value={item.quantity}
//                           //onChange={handleArrayBarang}
//                           required
//                         ></input>
//                       </TableCell>

//                       <TableCell>
//                         <input
//                           type="text"
//                           name="satuan"
//                           value={item.satuan}
//                           //onChange={handleArrayBarang}
//                           required
//                         ></input>
//                       </TableCell>
//                       <TableCell>
//                         <input
//                           type="text"
//                           name="keterangan"
//                           value={item.keterangan}
//                           //onChange={handleArrayBarang}
//                         ></input>
//                       </TableCell>
//                     </TableRow>
//                   </>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </DialogContent>
//         <DialogActions>
//           <Button color="error" onClick={closeAddDialog}>
//             Cancel
//           </Button>
//           <Button onClick={addBarang}>Add</Button>
//         </DialogActions>
//         {/* </form> */}
//       </Dialog>
