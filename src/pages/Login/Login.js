import React from 'react';
import './Login.scss';
import Logo from '../../components/Logo/Logo';
import { TextField, Button, CardContent, Card } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container">
            <Card className="card">
                <CardContent className="content">
                    <Logo className="logo"></Logo>
                    <span className="label">Materiales</span>
                    <form className="form-content" noValidate autoComplete="off">
                        <TextField type="email" id="outlined-required" label="Correo electrónico" variant="outlined"
                            className="email" size="small" />
                        <TextField type="password" id="outlined-required" label="Contraseña" variant="outlined"
                            className="password" size="small" />
                        <Link to="home">
                            <Button variant="contained" className="button" color="secondary">
                                Iniciar sesión
                          </Button>
                        </Link>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
