import React from 'react'
import FilterHistorial from '../../components/FilterHistorial/FilterHistorial'
import Graficas from '../../components/Graficas/Graficas'
import HistorialRegistros from '../../components/HistorialRegistros/HistorialRegistros'
import './Historial.scss'

function Historial() {
    return (
        <div className="historial">
            <FilterHistorial></FilterHistorial>
            <Graficas></Graficas>
            <HistorialRegistros title="Resultados de busqueda"></HistorialRegistros>
        </div>
    )
}

export default Historial
