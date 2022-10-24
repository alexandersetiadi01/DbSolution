import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    TextField,
    IconButton,
    InputAdornment,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import construction from '../../../assets/construction.jpg';

function Login(props) {

    const [showPassword, changeShowPassword] = useState(false)

    const tooglePassword = () =>{
        changeShowPassword(!showPassword)
    }

    return (
        <div className="login-container" 
            style={{
                paddingTop : '30px', 
                height:'100vh',
                width:'100%',
                overflow:'hidden',
                backgroundImage:`url(${construction})`,
                backgroundSize:'cover',
                backgroundRepeat:'none',
                backgroundPosition:'center center'
            }}
        >
            <div className="login-fluid-container"
            >
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                    {/* <h2 className="heading-section">Login #05</h2> */}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="wrap">
                            {/* <div className="img" style={{ backgroundImage:`url("images/xbg-1.jpg.pagespeed.ic.EtoN2PmO7Y.webp")`}}>

                            </div> */}
                            <div className="login-wrap p-4 p-md-5" 
                                style={{
                                    border: '1px solid black',
                                    borderRadius : '10px',
                                    backgroundColor:'rgba(255,255,255, 0.7)'
                                }}
                            >
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4" style={{textAlign:'center'}}>Sign In</h3>
                                    </div>
                                </div>

                                <form action="#" className="signin-form">
                                    <div className="form-group mt-3">
                                        <TextField 
                                            required
                                            fullWidth
                                            label='Username'
                                            type='text'
                                            variant = 'outlined'
                                        />
                                    </div>
                                    <div className="form-group">
                                    <TextField
                                            required
                                            fullWidth
                                            label='Password'
                                            variant='outlined'
                                            type={showPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment : (
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={tooglePassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>

                                                )
                                            }}
                                    />
                                    </div>
                                    <div className="form-group">
                                        <Link to='/proyek'>
                                            <button type="button" className="form-control btn btn-primary rounded submit px-3">
                                                Sign In
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label className="checkbox-wrap checkbox-primary mb-0">
                                                Remember Me &nbsp;
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div> 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;