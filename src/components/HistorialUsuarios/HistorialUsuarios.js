import React from 'react';
import {
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField, Select, InputLabel,
    FormControl, MenuItem
} from "@material-ui/core";
import './HistorialUsuarios.scss';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Delete } from '../../assets/img/delete.svg';
import { ReactComponent as Edit } from '../../assets/img/edit.svg';
import { ReactComponent as TitleDelete } from '../../assets/img/delete_2.svg';
import { ReactComponent as TitleEdit } from '../../assets/img/edit_2.svg';
import { useDialog } from "../../context/DialogProvider";


function HistorialUsuarios() {
    const [openDialog, closeDialog] = useDialog();

    const onOpenDialog = (action, name) => {
        const label = action === 'delete'
            ? 'Confirma que deseas eliminar este usuario:'
            : 'Edita los datos de usuario:';
        const labelBtn = action === 'delete'
            ? 'Eliminar'
            : 'Guardar';
        openDialog({
            children: (
                <div className="dialog">
                    <div className="dot"><SvgIcon component={action === 'delete' ? TitleDelete : TitleEdit} viewBox="0 0 41 47"/></div>
                    <DialogTitle className="titleDialog">{label}</DialogTitle>
                    <DialogContent className="contentDialog">
                        {action === 'delete' ? name : null}
                        <div className={action === 'delete' ? 'formContent' : ''}>
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
                            </div>
                            <div className="row">
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
                    </DialogContent>
                    <DialogActions className={action === 'delete' ? '' : 'actions'}>
                        <Button variant="contained" style={{ backgroundColor: '#FF2626', color: '#ffffff', width: '270px' }} onClick={() => closeDialog()}>
                            {labelBtn}
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: '#192E47', color: '#ffffff', width: '270px' }} onClick={() => closeDialog()}>
                            Cancelar
                        </Button>
                    </DialogActions>
                </div>
            )
        });
    };
    return (
        <div className="historialUsuarios">
            <div className="rowPrincipal">
                <div className="column">
                    <div className="title">Usuarios Ramirez Valle</div>
                </div>
            </div>
            <div className="rowHeader">
                <div className="column">USUARIO</div>
                <div className="column">CORREO ELECTRÓNICO</div>
                <div className="column">CONTRASEÑA</div>
                <div className="column">SUCURSAL</div>
                <div className="column">TIPO DE ADMIN</div>
                <div className="column cl-50">EDITAR</div>
                <div className="column cl-50">ELIMINAR</div>
            </div>
            <div className="row">
                <div className="column">Felipe Ramírez</div>
                <div className="column">hsdfgvfsdh@hotmail.com</div>
                <div className="column">ajsvfsdklnklded45</div>
                <div className="column">CDMX MATRIZ</div>
                <div className="column">Administrador General</div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Edit} onClick={() => { onOpenDialog('edit', 'Felipe Ramírez') }} />
                </div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Delete} onClick={() => { onOpenDialog('delete', 'Felipe Ramírez') }} />
                </div>
            </div>
            <div className="row">
                <div className="column">Felipe Ramírez</div>
                <div className="column">hsdfgvfsdh@hotmail.com</div>
                <div className="column">ajsvfsdklnklded45</div>
                <div className="column">CDMX MATRIZ</div>
                <div className="column">Administrador General</div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Edit} onClick={() => { onOpenDialog('edit', 'Felipe Ramírez') }} />
                </div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Delete} onClick={() => { onOpenDialog('delete', 'Felipe Ramírez') }} />
                </div>
            </div>
            <div className="row">
                <div className="column">Felipe Ramírez</div>
                <div className="column">hsdfgvfsdh@hotmail.com</div>
                <div className="column">ajsvfsdklnklded45</div>
                <div className="column">CDMX MATRIZ</div>
                <div className="column">Administrador General</div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Edit} onClick={() => { onOpenDialog('edit', 'Felipe Ramírez') }} />
                </div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Delete} onClick={() => { onOpenDialog('delete', 'Felipe Ramírez') }} />
                </div>
            </div>
            <div className="row">
                <div className="column">Felipe Ramírez</div>
                <div className="column">hsdfgvfsdh@hotmail.com</div>
                <div className="column">ajsvfsdklnklded45</div>
                <div className="column">CDMX MATRIZ</div>
                <div className="column">Administrador General</div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Edit} onClick={() => { onOpenDialog('edit', 'Felipe Ramírez') }} />
                </div>
                <div className="column cl-50 content-icon">
                    <SvgIcon component={Delete} onClick={() => { onOpenDialog('delete', 'Felipe Ramírez') }} />
                </div>
            </div>
        </div>
    );
}

export default HistorialUsuarios
