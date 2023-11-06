import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import sha from 'js-sha256';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function createData(
    colname: string,
    colval:string
  ) {
    return { colname,colval };
  }
  

export default function BasicCard() {

    const [code, setCode]=React.useState("");
    const [exist,setExist]=React.useState(0);
    const [rows,setRows] = React.useState([
        createData('Email', ""),
        createData('Firstname', ""),
        createData('Lastname', "")
      ]);
    

  return (
    <div style={{display:'flex', justifyContent:"center", marginTop:"12.5%"}}>
        
    <div>
    <div style={{display:'flex', justifyContent:"center", marginTop:"12.5%"}}>
    <Card sx={{ width:375}} style={{display:'flex',justifyContent:"center"}}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{}}
    >
      <TextField id="codeVal" label="Enter the code" variant="outlined"/>
    </Box>
    <CardActions>
    <Button variant="outlined" onClick={async ()=>{
        var code=document.getElementById('codeVal')?.value || "";
        console.log(code);
        const resp=await axios.post('http://localhost:3000/retUser',{
          'code':code,
      })
      if(resp.data.message=="User not found"){
        setExist(2)
      }
      else{
        setExist(1)
        setRows([createData('Email', resp.data.details.email),
        createData('Firstname', resp.data.details.firstname),
        createData('Lastname', resp.data.details.lastname)])
      }
    }}>Get Details</Button>
      </CardActions> <br></br>
    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Code</Typography> */}
    </Card>
    </div>
    <div style={{flexBasis:"100"}}></div>
    <div style={{display:'flex', justifyContent:"center", marginTop:"12.5%"}}>
    <Card sx={{ width:400}} style={{border:'0', boxShadow:'none'}}>
      <CardContent>
      {exist==2 &&<div>
       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{textAlign:'center'}}>
            No profile matched
        </Typography>
      </div>}
       {exist==1 && <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
            //   key={row.colname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.colname}
              </TableCell>
              <TableCell>{row.colval}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
      </CardContent>
      {/* <CardActions style={{marginRight:"-5%"}}>
        
      </CardActions> */}
    </Card>
    </div>
</div>
</div>
  );
}