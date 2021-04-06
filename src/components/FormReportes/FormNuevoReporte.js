import React, { useState } from 'react';
import './FormNuevoReporte.scss';
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
                    <TextField id="ref_claim" label="Ref. Claim" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <FormControl variant="outlined" className="textField" size="small">
                            <InputLabel htmlFor="outlined-tipo_evento">Transportista/Responsable</InputLabel>
                            <Select
                                labelId="outlined-tipo_evento"
                                id="transportista"
                                label="Transportista/Responsable"
                            >
                                <MenuItem value={'Mapfre'}>Mapfre</MenuItem>
                            </Select>
                        </FormControl>
                    </div>             
                    <div className="column">
                        <TextField id="tipo_dano" label="Tipo de daño" className="textField" variant="outlined" size="small" />
                    </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column">
                        <TextField id="MontoReclamadoUSD" label="Monto reclamado USD" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="MontoReclamadoMXN" label="Monto reclamado MXN" className="textField" variant="outlined" size="small" />
                    </div>
                </div>
                <div className="column">
                <div className="column">
                        <TextField id="MontoExcedente" label="Monto excedente de contrato MXN" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="MontoEstimadoRecuperado" label="Monto estimado de recuperación MXN" className="textField" variant="outlined" size="small" />
                    </div>
                   
                </div>
            </div>

            <div className="row">
            <div className="column">
            <div className="column">
                        <TextField id="MontoRechazado" label="Monto rechazado MXN" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="MontoAceptado" label="Monto aceptado MXN" className="textField" variant="outlined" size="small" />
                    </div>                  
                </div>
                <div className="column">
                    <div className="column">
                        <TextField id="MontoCancelado" label="Monto cancelado MXN" className="textField" variant="outlined" size="small" />
                    </div>
                    <div className="column">
                        <TextField id="FleteNoIncluido" label="Flete no incluido en reclamo" className="textField" variant="outlined" size="small" />
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
                                label="Fecha de evento"
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
                                label="Fecha 1er notificación a RM"
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
                                label="Fecha 2da notificación a RM"
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
                                label="Fecha 3ra notificación a RM"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
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
                                label="Fecha de escalación"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="column">
                    <TextField id="FleteNoIncluido" label="Área de escalación/Responsable" className="textField" variant="outlined" size="small" />
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
                                label="Fecha de escalación"
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
                    <div className="column">    
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline"
                                inputVariant="outlined"
                                size="small"
                                label="Fecha de última actualización"
                                InputAdornmentProps={{ position: "start" }}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </MuiPickersUtilsProvider>                    
                    </div>
                            
            </div>                      
            <div className="row">
                <div className="column-max">
                    <TextField id="Observaciones" label="Observaciones y sugerencias para agilizar la recuperación" className="textField" variant="outlined" size="small" multiline rows={4} />
                </div>
            </div>
            <div className="row">          
                    <div className="column-sm">
                    <Button variant="contained" color="secondary" className="button">
                        Guardar
                    </Button>
                    </div>       
            </div>

          
        </form>
    )
}

export default FormSiniestros
