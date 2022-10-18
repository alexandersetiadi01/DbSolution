import React, { Component } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


export default class TabelBarang extends Component {

    constructor(props){
        super(props)
        this.data = props
        this.state = {
          page : 0, 
          rowPage : 5 // Item per Page
        };
    }
    
    render() {
      const tableHeadStyle = {
        fontSize: '17px',
        fontWeight :'Bold'
      }   
  
      
      const handleChangePage =(event, newPage) =>{
        this.setState({page : newPage})
      }
      
      const handleChangeRowsPerPage = (event) => {
        this.setState({
          page : 0,
          rowPage : event.target.value,
        })
      }
      
      const emptyRows =
      this.state.page > 0 ? Math.max(0, (1 + this.state.page) * this.state.rowPage - this.props.data.length) : 0;

      console.log(this.state.page)

      return (
            <div>
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={tableHeadStyle}  >Rendering Engine</TableCell>
                        <TableCell style={tableHeadStyle} align="right">Browser</TableCell>
                        <TableCell style={tableHeadStyle} align="right">Platform(s)</TableCell>
                        <TableCell style={tableHeadStyle} align="right">Engine Version</TableCell>
                        <TableCell style={tableHeadStyle} align="right">CSS grade</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                      this.props.data
                      .slice(this.state.page * this.state.rowPage , this.state.page * this.state.rowPage + this.state.rowPage)
                      .map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                       {
                        emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: 53 * emptyRows,
                            }}
                          >
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                </TableContainer> 
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={this.props.data.length}
                  rowsPerPage={this.state.rowPage}
                  page={this.state.page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
             
            </div>
        )
    }
}
