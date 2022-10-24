import React from 'react'

import { Link } from 'react-router-dom'

import projectBg from '../../../assets/project.jpg'

import {
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'

const ProyekList = ['A', 'B', 'C']

export const Proyek = () => {

  return (
    <div className="proyek-container"
        style={{
            height:'100vh',
            overflow:'hidden',
            backgroundImage:`url(${projectBg})`,
            backgroundSize:'cover',
            backgroundRepeat:'none',
            backgroundPosition:'center center'
        }}
    >

        <div className='proyek-wrapper'
            style={{
                marginTop:'15%',
                width: '100%',
                display : "flex",
                justifyContent:'center',
            }}
            >
            <div className="proyek-container"
                style={{
                    border: '1px solid black',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '50%',
                    backgroundColor:'rgba(255,255,255, 0.7)'
                }}
            >
                <div className="proyek-title">
                    <h3 style={{
                        textAlign:'center',
                        marginBottom: '20px'
                    }}>
                        Pilih Proyek
                    </h3>
                </div>
                <div className="proyek-selector"
                    style={{

                        marginBottom:'10px',
                    }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Proyek</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Proyek"
                                // onChange={handleChange}
                            >
                                {
                                    ProyekList.map( value =>
                                        <MenuItem value={value}>{value}</MenuItem>
                                    )
                                }
                            
                            </Select>
                    </FormControl>
                </div>
                <div className="proyek-submit">
                    <Link to='/dashboard'> 
                        <Button
                            fullWidth
                            variant='contained'
                        >
                            Select
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
