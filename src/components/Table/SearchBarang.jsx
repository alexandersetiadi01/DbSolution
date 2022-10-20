import React, { Component } from 'react'

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export default class SearchBarang extends Component {

    render() {
        const Search = styled('div')(({ theme }) => ({
            position: 'relative',
            // borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            borderBottom: '1px solid black',
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        }));
        
        const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }));
        
        const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            width: '20ch',
            // '&:focus': {
            //     width: '30ch',
            // },
            },
        },
        }));

        return (
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    inputRef={value => value && value.focus()}
                    name='search'
                    type='text'
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={this.props.value}
                    onChange={
                      this.props.changeValue
                    }
                   
                />
             
            </Search>
        )
    }
}
