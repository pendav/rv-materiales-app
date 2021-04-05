import React from 'react'
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button
} from '@material-ui/core';
import './FilterUsuarios.scss';

function FilterUsuarios() {
    return (
        <div className="filterUsuarios">
            <div className="title">Agregar usuarios</div>
            <div className="row">
                <div className="column">
                    <TextField id="NombreUsuario" label="Nombre de usuario" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <TextField id="CorreoElectronico" label="Correo electrónico" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <TextField id="Contrasena" label="Contraseña" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-sucursal">Sucursal</InputLabel>
                        <Select
                            labelId="outlined-sucursal"
                            id="sucursal"
                            label="sucursal"
                        >
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-tipoAdmin">Tipo de admin</InputLabel>
                        <Select
                            labelId="outlined-tipoAdmin"
                            id="tipoAdmin"
                            label="tipoAdmin"
                        >
                            <MenuItem value={'Test'}>Test</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <Button variant="contained" color="secondary" className="button">
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FilterUsuarios;
