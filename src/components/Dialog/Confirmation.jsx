import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography  from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function OutConfirmation(props) {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.cancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Konfirmasi
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid 
                        container 
                        spacing={2}
                        sx= {{width: 500}}
                    >
                        <Grid item>
                            <Typography>
                                Tanggal : 
                            </Typography>
                            <Typography>
                                Nama Pengambil : 
                            </Typography>
                            <Typography>
                                Nama Barang : 
                            </Typography>  
                            <Typography>
                                Quantity : 
                            </Typography>  
                            <Typography>
                                Satuan : 
                            </Typography>  
                            
                            {props.data.tujuan === '' ? 
                                <></>
                                :
                                <Typography>
                                    Tujuan : 
                                </Typography>
                            }
                            <Typography>
                                Keterangan 
                            </Typography>
                        </Grid>

                        <Grid item xs container direction="column" spacing={2}>
                            <Grid
                                item
                            >
                              <Typography>
                                {props.data.tgl}
                              </Typography>
                              <Typography>
                                {props.data.namaPengambil}
                              </Typography>
                              <Typography>
                                {props.data.namaBarang}
                              </Typography>
                              <Typography>
                                {props.data.quantity}
                              </Typography>
                              <Typography>
                                {props.data.satuan}
                              </Typography>
                              
                                {props.data.tujuan === '' ? 
                                    <></>
                                    :
                                    <Typography>
                                        {props.data.tujuan} 
                                    </Typography>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    
                        
                    <TextField 
                        value={props.data.keterangan}
                        disabled
                        sx={{
                            marginTop: 1
                        }}
                        multiline
                        fullWidth
                        minRows={2}
                        maxRows={4}
                    />

                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.cancel} autoFocus>Cancel</Button>
                    <Button onClick={props.handleAdd} color="error">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function InConfirmation(props){
    // console.log(props.data)
    return(
        <div>
            <Dialog
                open={props.open}
                onClose={props.cancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Konfirmasi
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Grid 
                        container 
                        spacing={2}
                        sx= {{width: 500}}
                    >
                        <Grid item>
                            <Typography>
                                Tanggal : 
                            </Typography>
                            <Typography>
                                Nama Penerima : 
                            </Typography>
                            {
                                props.data.noSuratJalan !== '' ? 
                                <Typography>
                                    Nomor Surat jalan : 
                                </Typography>
                                : 
                                <Typography>
                                    Proyek Asal : 
                                </Typography>
                            } 
                            <Typography>
                                Lokasi : 
                            </Typography>  
                        </Grid>

                        <Grid item xs container direction="column" spacing={2}>
                            <Grid
                                item
                            >
                                <Typography>
                                    {props.data.tgl} 
                                </Typography>
                                {
                                props.data.noSuratJalan !== '' ? 
                                    <Typography>
                                        {props.data.noSuratJalan} 
                                    </Typography>
                                : 
                                    <Typography>
                                        {props.data.proyekAsal}
                                    </Typography>
                                } 
                                <Typography>
                                    {props.data.namaPenerima}
                                </Typography>
                                <Typography>
                                    {props.data.lokasi}
                                </Typography>   
                            </Grid>
                        </Grid>
                        <TableContainer
                                component={Paper}
                                sx={{
                                    marginTop:2, 
                                    marginLeft:2
                                }}
                            >
                                <Table
                                    sx={{ minWidth: 450 }} 
                                    size="small" 
                                    aria-label="a dense table"
                                >
                                     <TableHead>
                                        <TableRow>
                                            <TableCell>Nama Barang</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Satuan</TableCell>
                                            <TableCell>Keterangan</TableCell>
                                            
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            // props.data.barang.map((key, index) =>(
                                                props.detail.map((key, index) =>(
                                                <TableRow>
                                                    <TableCell>
                                                        {key.namaBarang}
                                                    </TableCell>
                                                    <TableCell>
                                                        {key.quantity}
                                                    </TableCell>
                                                    <TableCell>
                                                        {key.satuan}
                                                    </TableCell>
                                                    <TableCell>
                                                        {key.keterangan}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    </Grid>
                    
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.cancel} color="error" >Cancel</Button>
                    <Button onClick={props.handleAdd} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

function MasterConfirmation(props){
    return(
        <div>
            <Dialog
                open={props.open}
                onClose={props.cancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Konfirmasi
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid
                            container
                            sx= {{width: 500}}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >  
                            <Grid
                                container
                                item
                                spacing={2}
                            >
                                <Grid item xs={3}>
                                    Kode Barang :
                                </Grid>
                                <Grid item xs={6}>
                                    {props.data.kodeBarang}
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                spacing={2}
                            >
                                <Grid item xs={3}>
                                    Nama Barang :
                                </Grid>
                                <Grid item xs={6}>
                                    {props.data.namaBarang}
                                </Grid>
                            </Grid>
                            <TableContainer
                                component={Paper}
                                sx={{
                                    marginTop:3, 
                                    marginLeft:3
                                }}
                            >
                                <Table
                                    sx={{ minWidth: 450 }} 
                                    size="small" 
                                    aria-label="a dense table"
                                >
                                     <TableHead>
                                        <TableRow>
                                            <TableCell>Category</TableCell>
                                            <TableCell>SubCategory</TableCell>
                                            <TableCell>Tipe</TableCell>
                                            <TableCell>Merek</TableCell>
                                            <TableCell>Satuan</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell>
                                            {props.data.category}
                                        </TableCell>
                                        <TableCell>
                                            {props.data.subCategory}
                                        </TableCell>
                                        <TableCell>
                                            {props.data.type}
                                        </TableCell>
                                        <TableCell>
                                            {props.data.merk}
                                        </TableCell>
                                        <TableCell>
                                            {props.data.satuan}
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <Divider></Divider>
                <DialogActions>
                    <Button onClick={props.cancel} color="error" >Cancel</Button>
                    <Button onClick={props.handleAdd} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export {
    OutConfirmation,
    InConfirmation,
    MasterConfirmation
}