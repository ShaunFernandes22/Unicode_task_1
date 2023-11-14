import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Login= () => {

    const paperStyle = {padding :20, height:'70vh', width:280, margin:"20px auto"}
    const avatarStyle = {backgroundColor:'#1bbd7e'}
    const txtStyle = {margin:"10px auto"}
    const btnStyle = {margin:'10px auto'}
    const typeStyle = {margin: '15px auto'}

    return (
        <Grid>
            <Paper elevation={10} style ={paperStyle}>
        <Grid align = 'center'>
            <Avatar style={avatarStyle}><LockIcon/></Avatar>
            <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Please enter username' style={txtStyle} fullWidth required/>
        <TextField label='Password' placeholder='Please enter password' style={txtStyle} type='password' fullWidth required/>

        <Button type='submit' color='primary' variant='contained' style={btnStyle}>Sign In</Button>
        <Typography>
            <Link href='#'>
                Forgot password ?
            </Link>
        </Typography>
        <Typography style={typeStyle}> Do you have an account?
            <Link href='#'>
                Sign up
            </Link>
        </Typography>
            </Paper>
        </Grid>
    )
} 

export default Login