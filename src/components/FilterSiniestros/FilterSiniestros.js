import React from 'react';
import {
    TextField, Select, InputLabel,
    FormControl, MenuItem, Button,
    InputAdornment 
} from '@material-ui/core';
import './FilterSiniestros.scss'
import RangePicker from 'react-range-picker';
import { ReactComponent as Lupa } from '../../assets/img/lupa.svg';

function FilterSiniestros() {
    const onDateChanges = (date, date2) => console.log(" date is ", date, date2);
    return (
        <div className="filterSiniestros">
            <div className="title">Filtros de busqueda</div>
            <div className="row">
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-estatus">Estatus</InputLabel>
                        <Select
                            labelId="outlined-estatus"
                            id="estatus"
                            label="estatus"
                        >
                            <MenuItem value={'Pagado'}>Pagado</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-aseguradora">Aseguradora</InputLabel>
                        <Select
                            labelId="outlined-aseguradora"
                            id="aseguradora"
                            label="aseguradora"
                        >
                            <MenuItem value={'MAPFRE'}>MAPFRE</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column">
                    <FormControl variant="outlined" className="textField" size="small">
                        <InputLabel htmlFor="outlined-ajustador">Ajustador</InputLabel>
                        <Select
                            labelId="outlined-ajustador"
                            id="ajustador"
                            label="ajustador"
                        >
                            <MenuItem value={'Jaime Flores'}>Jaime Flores</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="column-sm">
                    <RangePicker onDateSelected={onDateChanges} placeholderText="Fecha" />
                </div>
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
    )
}

export default FilterSiniestros
