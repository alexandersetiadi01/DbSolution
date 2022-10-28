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
                        {/* {props.data.map((item, index) => {

                        })} */}
                        This item will be removed permanently. <br/>
                        Are You Sure want to remove this Item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.cancel} autoFocus>Cancel</Button>
                    <Button onClick={props.handleRemove} color="error">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function InConfirmation(props){

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
                            <Grid item xs={4}>
                                Tanggal :
                            </Grid>
                            <Grid item xs={6}>
                                {props.data.tanggal}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={2}
                        >
                            <Grid item xs={5}>
                                Nomor Surat Jalan :
                            </Grid>
                            <Grid item xs={7}>
                                {props.data.noSuratJalan}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={2}
                        >
                            <Grid item xs={4}>
                                Nama Penerima:
                            </Grid>
                            <Grid item xs={7}>
                                {props.data.namaPenerima}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            item
                            spacing={2}
                        >
                            <Grid item xs={3}>
                                Lokasi:
                            </Grid>
                            <Grid item xs={6}>
                                {props.data.lokasi}
                            </Grid>
                        </Grid>
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