import React from 'react'
import FilterSiniestros from '../../components/FilterSiniestros/FilterSiniestros'
import HistorialSiniestros from '../../components/HistorialSiniestros/HistorialSiniestros'
import './Historial.scss'

function Historial() {
    return (
        <div className="historial">
            <FilterSiniestros></FilterSiniestros>
            <HistorialSiniestros title="Listado de siniestros"></HistorialSiniestros>
        </div>
    )
}

export default Historial
