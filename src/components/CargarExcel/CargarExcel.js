import React from 'react';
import { TextField, Button, DialogTitle, DialogContent } from '@material-ui/core';
import SvgIcon from "@material-ui/core/SvgIcon";
import './CargarExcel.scss';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Close } from '../../assets/img/close_circle.svg';
import { ReactComponent as Checked } from '../../assets/img/checked_bg.svg';
import { useDialog } from "../../context/DialogProvider";

function CargarExcel() {
    const [openDialog] = useDialog();

    const onOpenDialog = (action) => {
        const label = action === 'correct' ? 'Archivo cargado correctamente' : 'Upss al parecer algo salió mal.'
        openDialog({
            children: (
                <div className={action === 'correct' ? 'dialogExcel bt-green' : 'dialogExcel bt-red'}>
                    <DialogTitle className="titleDialog">{label}</DialogTitle>
                    <DialogContent className="contentDialog">
                        <div className="content-icon">
                            <SvgIcon component={action === 'correct' ? Checked : Close} viewBox="0 0 109 109" />
                        </div>
                    </DialogContent>
                </div>
            )
        });
    };
    return (
        <div className="cargarExcel">
            <div className="label">
                Selecciona el botón de buscar archivo y elige el archivo excel que deseas subir, a continuación da clic en el botón "Subir excel" para cargar el archivo a la base de datos.
            </div>
            <div className="upload-content">
                <TextField id="nombreArchivo" label="Nombre del archivo" variant="outlined" size="small" className="input" />
                <Button variant="contained" color="primary" className="button" onClick={() => { onOpenDialog('correct') }}>
                    Buscar archivo
                </Button>
                <span className="space-buttons"></span>
                <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }} onClick={() => { onOpenDialog('error') }}>
                    <SvgIcon component={Excel} />
                    <span className="space"></span>
                    Cargar Excel
                </Button>
            </div>
        </div>
    )
}

export default CargarExcel
