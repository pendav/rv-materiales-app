import React, { useState } from 'react';
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button,
    InputAdornment 
} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import './FilterSiniestros.scss'
import { ReactComponent as Lupa } from '../../assets/img/lupa.svg';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from "date-fns/locale/es";


function FilterSiniestros() {
    const onDateChanges = (date, date2) => console.log(" date is ", date, date2);
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div className="filterSiniestros">
            <div className="row-space">                
                    <div className="title">Filtros de busqueda</div>                                
                    <div className="column">
                    <div className="column-lg">
                    <TextField id="Busqueda" label="Busqueda" className="textField" variant="outlined" size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lupa />
                                </InputAdornment>
                            ),
                        }} />
                </div>
                <div className="column-sm">
                    <Button variant="contained" color="secondary" className="button">
                        Buscar
                        </Button>
                </div>
                </div>                
            </div>            
            <div className="row">
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-localidad">Localidad</InputLabel>
                        <Select
                            labelId="outlined-localidad"
                            id="localidad"
                            label="Localidad"
                        >
                            <MenuItem value={'Pagado'}>Pagado</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-tipo-evento">Tipo de evento</InputLabel>
                        <Select
                            labelId="outlined-tipo-evento"
                            id="tipoEvento"
                            label="Tipo de evento"
                        >
                            <MenuItem value={'MAPFRE'}>MAPFRE</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-desc-evento">Descripción del evento</InputLabel>
                        <Select
                            labelId="outlined-desc-evento"
                            id="descEvento"
                            label="Descripción del evento"
                        >
                            <MenuItem value={'MAPFRE'}>MAPFRE</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-transportista">Transportista</InputLabel>
                        <Select
                            labelId="outlined-transportista"
                            id="transportista"
                            label="Transportista"
                        >
                            <MenuItem value={'Jaime Flores'}>Jaime Flores</MenuItem>
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
                                label="Fecha de emisión"
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
                                label="Fecha de pago"
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
                            label="Estatus"
                        >
                            <MenuItem value={'estatus'}>estatus</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-escalado">Escalado</InputLabel>
                        <Select
                            labelId="outlined-escalado"
                            id="escalado"
                            label="Escalado"
                        >
                            <MenuItem value={'ESCALADO'}>ESCALADO</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-desc-ruta">Ruta</InputLabel>
                        <Select
                            labelId="outlined-ruta"
                            id="ruta"
                            label="Ruta"
                        >
                            <MenuItem value={'Ruta'}>Ruta</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                </div>            
            </div>

        </div>
    )
}

export default FilterSiniestros
