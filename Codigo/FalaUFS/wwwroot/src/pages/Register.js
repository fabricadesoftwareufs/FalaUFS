import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import Logo from '../assets/UFS.png'
import '../styles/Register.css'
import axios from "axios";

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component {

  state = {
    fullname: '',
    cpf: '',
    telephone: '',
    email: '',
    senha: '',
    mensageErro: null
  }

  entrar = () => {
    axios
        .post('http://localhost:8080/api/usuarios/autenticar', {
          fullname: this.state.fullname,
          cpf: this.state.cpf,
          telephone: this.state.telephone,
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
        <Container className="Register" component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <img style={{ maxWidth: 300}} className="Logo" src={Logo} alt="UFS" />
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      value={this.state.fullname}
                      onChange={e => this.setState({ fullname: e.target.value })}
                      autoComplete="fname"
                      name="fullname"
                      variant="outlined"
                      required
                      fullWidth
                      id="fullname"
                      label="Nome completo"
                      autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      value={this.state.cpf}
                      onChange={e => this.setState({ cpf: e.target.value })}
                      variant="outlined"
                      required
                      fullWidth
                      id="cpf"
                      label="CPF"
                      name="cpf"
                      autoComplete="cpf"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      value={this.state.telephone}
                      onChange={e => this.setState({ telephone: e.target.value })}
                      variant="outlined"
                      required
                      fullWidth
                      name="telephone"
                      label="Telefone"
                      type="telephone"
                      id="telephone"
                      autoComplete="telephone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="email"
                      label="Email"
                      type="email"
                      id="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                  onClick={this.entrar}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ color: "white", backgroundColor: "#004694"}}
              >
                CRIAR CONTA
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    JÁ TEM UMA CONTA? ENTRE AQUI!
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
    );
  }
}

export default withStyles(useStyles)(SignUp)