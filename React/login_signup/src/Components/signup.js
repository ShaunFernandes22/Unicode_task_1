import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const SignUp = () => {

    const paperStyle = { padding: '30px 20px', width: '300px', height: '75vh', margin: '20px auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { textAlign: 'center', margin: '10px auto' }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>Fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' variant='standard' />
                    <TextField fullWidth label='Email' placeholder='Enter your email' variant='standard' />
                
                        <FormControl>
                            <FormLabel component='legend' id="demo-radio-buttons-group-label" >Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                style={{ display: 'initial' }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />

                            </RadioGroup>
                        </FormControl>
                
                    <TextField fullWidth label='Mobile Number' placeholder='Enter your phone number' variant='standard' />
                    <TextField fullWidth label='Password' placeholder='Enter password' variant='standard' />
                    <TextField fullWidth label='Confirm Password' placeholder='Confirm password' variant='standard' />
                    <Button type='submit' variant='contained' color='primary' style={btnStyle}>Sign Up</Button>
                </form>
            </Paper>
        </Grid>

    )
}

export default SignUp;