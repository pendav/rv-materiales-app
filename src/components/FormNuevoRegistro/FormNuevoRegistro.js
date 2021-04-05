import React, { useState } from 'react';
import './FormNuevoRegistro.scss';
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
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-localidad">Localidad</InputLabel>
                            <Select
                                labelId="outlined-localidad"
                                id="localidad"
                                label="Localidad"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-planta">Planta</InputLabel>
                            <Select
                                labelId="outlined-planta"
                                id="planta"
                                label="Planta"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-tipo_evento">Tipo de Evento</InputLabel>
                            <Select
                                labelId="outlined-tipo_evento"
                                id="tipo_evento"
                                label="Tipo de Evento"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>             
                    <div className="column">
                        <TextField id="desc_evento" label="Descripci&oacute;n del evento" className="textField" variant="outlined" size="small" />
                    </div>
                  
                
            </div>
            <div className="row">
                <div className="column">
                <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-transportista">Transportista</InputLabel>
                            <Select
                                labelId="outlined-transportista"
                                id="transportista"
                                label="Transportista"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="column">
                        <TextField id="Referencia" label="Referenc&iacute;a" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="MontoReclamadoUSD" label="Monto reclamado USD" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="MontoReclamadoMXN" label="Monto reclamado MXN" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="column">
                    <div className="column">
                        <TextField id="MontoAceptado" label="Monto aceptado" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="MontoRecuperado" label="Monto recuperado" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="AjustesMGO" label="Aguestes MGO" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="ReclamoEnDoc" label="Reclamo en documentaci&oacute;n" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="ReclamoEnProceso" label="Reclamo en proceso" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="AjuesteReversion" label="Ajuste / Reversión de partidas" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="Cancelado" label="Cancelado" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="Flete" label="Flete del BI30 no incluido en reclamo" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="MenoresUSD" label="Menores de USD $500" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="ExcedenteContrato" label="Excedente de contrato" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="MontoRecuperar" label="Monto estimado a recuperar" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
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
                                label="Fecha del evento"
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
                                label="Fecha de documentación"
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
                                label="Fecha de emisión"
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
                                label="Fecha de respuesta"
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
                                label="Aviso de pago"
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
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha de aplicación"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-estatus">Estatus</InputLabel>
                            <Select
                                labelId="outlined-estatus"
                                id="estatus"
                                label="Estatus"                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
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
