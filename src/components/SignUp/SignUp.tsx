import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { logo, goalSide } from "../../img";
import axios from "axios";
import { useState } from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        elProde.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const URL = "http://localhost:3000/auth/register";

export default function SignUp(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");

  const store = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios
      .post(URL, {
        email: email,
        password: password,
        fullname: fullname,
        username: username,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Grid container>
        <Grid item lg={7}>
          <Box
            component="img"
            src={goalSide}
            alt="logo"
            sx={{
              width: "100%",
              objectFit: "cover",
              height: "100%",
              objectPosition: "10%",
            }}
          />
        </Grid>
        <Grid
          item
          lg={5}
          sx={{
            px: "58px",
            pt: "66px",
            pb: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginBottom: "24px" }}>
              <Link href="/">
                <img src={logo} alt="logo del prode" />
              </Link>
            </Box>
            <Typography
              sx={{ fontFamily: "Roboto, sans-serif", mb: "6px" }}
              component="h1"
              variant="h5"
            >
              Registrate amigo
            </Typography>
            <Box component="form" noValidate onSubmit={store} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre completo"
                    autoFocus
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Nick Name"
                    name="nickName"
                    autoComplete="family-name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2">
                    Ya tenes una cuenta amiga? Logueate noma’
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
