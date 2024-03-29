import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { NavLink } from 'react-router-dom';
import { Paper } from '@mui/material';
//import img from './images/Chinnu.jpg';
//import Slider from '@mui/material/Slider';
import Drawer from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
   
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      backgroundColor: '#ff1744'
    });
  };
 

  return (
    //<div style={{ backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',
        //width:'120%', height:"1000px"  }}>
                
        
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={6} maxWidth>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: 700,
                height: 700,
                marginTop:0,
              },
            }}
          >
            <Paper elevation={0}>
              <Box
                sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Confirm-password"
                        label="Confirm-Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                
                    sx={{ mt: 3, mb: 2 }}
                    onClick={'/Sign'}
                  >
                    <NavLink to='/Login'>
                    Sign Up
                    </NavLink>
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <NavLink to='/sign-in'>
                        Already have an account? Sign in
                      </NavLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              </Paper>
              </Box>
              </Paper>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
         // </div>
          );
}