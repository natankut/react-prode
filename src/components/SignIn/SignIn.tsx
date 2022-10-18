import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { logo, goalSide  } from '../../img';
import { useState } from 'react';
import axios from 'axios';
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        elProde.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const URL = 'http://localhost:3000/auth/login';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const store = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios.post(URL, {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Box sx={{display:'flex', minHeight:'100vh'}}>
      <Grid container>
        <Grid item lg={7}>
          <Box component='img' src={goalSide} alt="logo" sx={{width:'100%', objectFit:'cover', height:'100%', objectPosition:'10%' }} />
        </Grid>
        <Grid item lg={5} sx={{px:'20px', pt:'66px',pb:'16px',display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{marginBottom: '24px'}}>
              <Link href="/">
                <img src={logo} alt='logo del prode' />
              </Link>
            </Box>
            <Typography component="h1" variant="h5">
              Logueate amigo
            </Typography>
            <Box component="form" onSubmit={store} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    type="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Te olvidaste la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"No tenes cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </Box>
    
  );
}
