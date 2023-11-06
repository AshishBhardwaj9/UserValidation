import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import sha from 'js-sha256';
import axios from 'axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {

    const [code, setCode]=React.useState("");
    const [copy, setCopy]=React.useState("| Copy");
  return (
    <div style={{display:'flex', justifyContent:"center", marginTop:"12.5%"}}>
        
    <div>
    <div style={{display:'flex', justifyContent:"center", marginTop:"12.5%"}}>
    <Card sx={{ width:375}} style={{display:'flex',justifyContent:"center"}}>
      {/* <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{}}
    >
      <TextField id="emailVal" label="Enter email" variant="outlined"/>
    </Box>
    <CardActions>
    <Button variant="outlined" onClick={async()=>{
        var email=document.getElementById('emailVal')?.value || "";
        console.log(email);
        const resp=await axios.post('http://localhost:3000/genCode',{
          'email':email,
      })
        if(!resp.data.exist){
          setCode("No profile matched");
        }
        else{
          console.log(resp.data);
          setCode(resp.data.enc);
          setCopy("| Copy")
        }
    }}>Generate</Button>
      </CardActions> <br></br>
    {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Code</Typography> */}
    </Card>
    </div>
    <div style={{flexBasis:"100"}}></div>
    <div style={{display:'flex', justifyContent:"center", marginTop:"2.5%"}}>
    <Card sx={{ width:625}} style={{border:'0', boxShadow:'none'}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{textAlign:'center'}}>
          {code?code:"Your code will be displayed here"} <Button id="copyBtn" variant="text" style={{marginRight:"0", height:"25px"}} onClick={async(e)=>{
            await navigator.clipboard.writeText(code)
            setCopy('| Copied')
          }}>{copy}</Button>
        </Typography>
      </CardContent>
      {/* <CardActions style={{marginRight:"-5%"}}>
        
      </CardActions> */}
    </Card>
    </div>
</div>
</div>
  );
}