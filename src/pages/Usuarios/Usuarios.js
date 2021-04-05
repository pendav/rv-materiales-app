import React from 'react';
import FilterUsuarios from '../../components/FilterUsuarios/FilterUsuarios';
import HistorialUsuarios from '../../components/HistorialUsuarios/HistorialUsuarios';
import DialogProvider from '../../context/DialogProvider';
import './Usuario.scss';

function Usuarios() {
    return (
        <DialogProvider>
            <div className="usuario">
                <FilterUsuarios></FilterUsuarios>
                <HistorialUsuarios></HistorialUsuarios>
            </div>
        </DialogProvider>
    )
}

export default Usuarios
