import React, { Component } from 'react'

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default class AddItem extends Component {   

    constructor(props){
      
        super(props)
    }
    
    render() {
        return (
        
            <Dialog open={this.props.open} onClose={this.props.closeDialog}>
                <DialogTitle>Tambah Barang</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nama Barang"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={this.props.closeDialog}>Cancel</Button>
                    <Button >Tambah</Button>
                </DialogActions>
            </Dialog>
      
        )
  }
}