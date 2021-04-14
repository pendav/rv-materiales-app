import React from 'react'
import FilterSiniestros from '../../components/FilterSiniestros/FilterSiniestros'
import Graficas from '../../components/Graficas/Graficas'
import HistorialRegistros from '../../components/HistorialRegistros/HistorialRegistros'
import './Historial.scss'

function Historial() {
    return (
        <div className="historial">
            <FilterSiniestros></FilterSiniestros>
            <Graficas></Graficas>
            <HistorialRegistros title="Resultados de busqueda"></HistorialRegistros>
        </div>
    )
}

export default Historial
