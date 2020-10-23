import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import Logo from '../assets/UFS.png'
import '../styles/Login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="/">
        Universidade Federal de Sergipe.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {

  state = {
    email: '',
    senha: '',
    mensageErro: null
  }

  entrar = () => {
    axios
        .post('http://localhost:8080/api/usuarios/autenticar', {
          email: this.state.email,
          senha: this.state.senha
        }).then(response => {
      localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
      this.props.history.push('/eixos')
    }).catch(erro => {
      this.setState({ mensageErro: erro.response.data })
    })

  }

  render () {
    const { classes } = this.props;
    return (
        <Container className="Login" component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <img style={{ maxWidth: 300}} className="Logo" src={Logo} alt="UFS" />

            <form className={classes.form} noValidate>
              <TextField
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
              />
              <TextField
                  value={this.state.senha}
                  onChange={e => this.setState({ senha: e.target.value })}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
              />
              <Button
                  onClick={this.entrar}
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  style={{ color: "white", backgroundColor: "#004694"}}
              >
                FAZER LOGIN
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"NÃO TEM UMA CONTA? CADASTRE-SE AQUI!"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
    );

  }


}
export default withStyles(useStyles)(Login)