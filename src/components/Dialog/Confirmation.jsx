import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Confirmation(props) {

    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.cancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmation"}
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
