import React, { useState } from 'react';
import './FormSiniestros.scss';
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button
} from '@material-ui/core';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";

function FormSiniestros() {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <form className="formSiniestros" noValidate autoComplete="off">
            <div className="row">
                <div className="column">
                    <TextField id="Asegurado" label="Asegurado" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="Referencia-RV" label="Referencia RV" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-aseguradora">Aseguradora</InputLabel>
                            <Select
                                labelId="outlined-aseguradora"
                                id="aseguradora"
                                label="Aseguradora"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="NombreContacto" label="Nombre de contacto" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="CorreoContacto" label="Correo de contacto" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="TelefonoContacto" label="Teléfono de contacto" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="RefCompania" label="Ref compañia" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <TextField id="LugarSiniestro" label="Lugar de siniestro" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="Poliza" label="Poliza" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="Cobertura" label="Cobertura" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="Ramo" label="Ramo" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="TipoSiniestro" label="Tipo de siniestro" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="Analista" label="Analista" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="Reporte" label="Reporte" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="Agente" label="Agente" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="492" label="492" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="TomaReporte" label="Toma reporte" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="PersonaAsigna" label="Persona que asigna" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-ajustador">Ajustador</InputLabel>
                            <Select
                                labelId="outlined-ajustador"
                                id="ajustador"
                                label="Ajustador"
                            >
                                <MenuItem value={'Pedro'}>Pedro</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="column">
                        <TextField id="EstimacionReservada" label="Estimación reservada" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="Indemnización" label="Indemnización" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="Comentarios" label="Comentarios" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha de siniestro"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha de asignación"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha INSP"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha IP"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha CSD"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Entrega de documentos"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                                
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha DP"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha CON"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha IF"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha salvamento"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha Factura"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="No. de factura"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="ImporteFactura" label="Importe de factura" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="Relacion" label="Relación" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column-lg">
                    <TextField id="Observaciones" label="Observaciones" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column-sm">
                    <TextField id="PagoFactura" label="Pago de factura" className="textField" variant="outlined" size="small" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <TextField id="DocumentacionEntregada" label="Documentación Entregada" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <TextField id="DocumentacionFaltante" label="Documentación Faltante" className="textField" variant="outlined" size="small" />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <TextField id="Comentarios" label="Comentarios" className="textField" variant="outlined" size="small" />
                </div>
                <div className="column">
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-estatus">Estatus</InputLabel>
                            <Select
                                labelId="outlined-estatus"
                                id="estatus"
                                label="Estatus"
                            >
                                <MenuItem value={'Pagado'}>Pagado</MenuItem>
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
        </form>
    )
}

export default FormSiniestros
