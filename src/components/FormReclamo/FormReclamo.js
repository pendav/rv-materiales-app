import React from 'react';
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button
} from '@material-ui/core';
import './FormReclamo.scss';

function FormReclamo() {
    return (
        <form className="formReclamo" noValidate autoComplete="off">
            <div className="row">
                <div className="column">
                    <TextField id="CorreoElectronico" label="Correo electronico" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <TextField id="CCCorreoElectronico" label="CC Correo electrónico" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <TextField id="Asunto" label="Asunto" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                </div>
            </div>
            <div className="row">
                <TextField
                    id="mensaje"
                    label="Mensaje para el receptor"
                    className="textField"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </div>
            <div className="row">
                <div className="reclamo-label">Selecciona el botón de buscar archivo y elige el archivo que deseas enviar.</div>
            </div>
            <div className="upload-content">
                <TextField id="nombreArchivo" label="Nombre del archivo" variant="outlined" size="small" className="input" />
                <Button variant="contained" color="primary" className="button">
                    Buscar archivo
                </Button>
            </div>
            <div className="row">
                <Button variant="contained" color="secondary" className="button">
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default FormReclamo
