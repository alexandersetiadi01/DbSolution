import React, { Component } from 'react'

import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

import { 
    TextField,
    Paper,
    Grid,
    Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableHead, 
    TableRow, 
    TableContainer, 
    InputLabel, 
    IconButton,
    Switch, 
    Autocomplete,
    Tooltip
} from '@mui/material';

const proyek = () => [
    {
        label : "A"
    },
    {
        label : "B"
    }
]

export default class AddItem extends Component {   


    constructor(props){
      
        super(props)
        this.state = {
            recipient : '',
            location : '',
            suratJalan : false, 
            no_suratJalan : '',
            arrayBarang : [],

        }   
        
        this.handleRecipientChange = this.handleRecipientChange.bind(this)
        this.handleSuratJalan = this.handleSuratJalan.bind(this)
        this.handleLocation = this.handleLocation.bind(this)
        this.handleNoSuratJalan = this.handleNoSuratJalan.bind(this)
        this.handleAddArrayBarang = this.handleAddArrayBarang.bind(this)
      

    }

    handleRecipientChange = (event) =>{
        this.setState({
            recipient : event.target.value
        })
    }
     
    handleSuratJalan = () =>{
        this.setState({
            suratJalan : !this.state.suratJalan
        })
    }
 
    
    handleLocation = (event) =>{
        this.setState({
            location : event.target.value
        })
       
    }
     
    handleNoSuratJalan = (event) =>{
        this.setState({
            no_suratJalan : event.target.value
        })
  
    }

    handleAddArrayBarang = (event) =>{
        this.setState({
            arrayBarang : [...this.state.arrayBarang, 
              
            ]
        })
    }
    
   
    
    render() {
        console.log(this.state.arrayBarang)
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
                            label="Nama Penerima"
                            value = {this.state.recipient}
                            onChange={this.handleRecipientChange}
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
                        value={this.state.location}
                        onChange={this.handleLocation}
                        type="text"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel autoFocus id="cekSuratJalan" sx={{ margin: "dense" }}>
                            Surat Jalan
                        </InputLabel>
                        <Switch
                            id="cekSuratJalan"
                            labelId="cekSuratJalan"
                            // inputRef={value => value && value.focus()}
                            label="cekSuratJalan"
                            inputProps={{ "aria-label": "controlled" }}
                            checked={this.state.suratJalan}
                            onChange={this.handleSuratJalan}
                            defaultChecked
                        />
                        </Grid>
                        <Grid item xs={6}>
                            {
                                this.state.suratJalan ? 
                                    <TextField
                                        fullWidth
                                        margin="dense"
                                        id=""
                                        label="Nomor Surat Jalan"
                                        name="noSuratJalan"
                                        value={this.state.no_suratJalan}
                                        onChange={this.handleNoSuratJalan}
                                        type="text"
                                        variant="standard"
                                    />
                                :
                                   <Autocomplete 
                                        disablePortal
                                        id="combo-box-demo"
                                        options = {proyek()}
                                        // fullWidth
                                        renderInput={(params)=>
                                            <TextField variant='standard' {...params} label="Proyek Asal" />
                                        }
                                   />
                            }
                        </Grid>
                    </Grid>   
                    <TableContainer component={Paper}>
                        <IconButton 
                        // onClick={this.handleAddArrayBarang}
                        >
                            <Tooltip title="Tambah Barang">
                                <AddIcon />
                            </Tooltip>
                        </IconButton>
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
                            {
                                this.state.arrayBarang.map((item, index)=>{
                                        <TableRow>
                                            <TableCell>
                                                <input
                                                    type="text"
                                                    name="namabarang"
                                                    value={item.namaBarang}
                                                    //onChange={handleArrayBarang}
                                                    disabled
                                                ></input>
                                            </TableCell>

                                            <TableCell>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={item.quantity}
                                                    //onChange={handleArrayBarang}
                                                    disabled
                                                ></input>
                                            </TableCell>

                                            <TableCell>
                                                <input
                                                    type="text"
                                                    name="satuan"
                                                    value={item.satuan}
                                                    //onChange={handleArrayBarang}
                                                    disabled
                                                ></input>
                                            </TableCell>
                                            <TableCell>
                                                <input
                                                    type="text"
                                                    name="keterangan"
                                                    value={item.keterangan}
                                                    //onChange={handleArrayBarang}
                                                    disabled
                                                ></input>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton 
                                                // onClick={this.handleAddArrayBarang}
                                                >
                                                    <Tooltip title="Tambah Barang">
                                                        <EditIcon />
                                                    </Tooltip>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>    
                                    })
                                }
                                <TableRow>
                                    <TableCell>
                                        <input
                                            type="text"
                                            name="namabarang"
                                            // value={item.namabarang}
                                            //onChange={handleArrayBarang}
                                            required
                                        ></input>
                                    </TableCell>

                                    <TableCell>
                                        <input
                                            type="number"
                                            name="quantity"
                                            // value={item.quantity}
                                            //onChange={handleArrayBarang}
                                            required
                                        ></input>
                                    </TableCell>

                                    <TableCell>
                                        <input
                                            type="text"
                                            name="satuan"
                                            // value={item.satuan}
                                            //onChange={handleArrayBarang}
                                            required
                                        ></input>
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="text"
                                            name="keterangan"
                                            // value={item.keterangan}
                                            //onChange={handleArrayBarang}
                                        ></input>
                                    </TableCell>
                                </TableRow>           
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={this.props.closeDialog}>
                        Cancel
                    </Button>
                    <Button>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        )
  }
}