import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import FormNuevoRegistro from '../../components/FormNuevoRegistro/FormNuevoRegistro';
import CargarExcel from '../../components/CargarExcel/CargarExcel';
import DialogProvider from '../../context/DialogProvider';
import './NuevoRegistro.scss';

function NuevoRegistro() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <DialogProvider>
            <div className="nuevo_registro">
            <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Nuevo siniestro"></Tab>
                    <Tab label="Cargar Excel"></Tab>
                </Tabs>
                {selectedTab === 0 && <FormNuevoRegistro />}
                {selectedTab === 1 && <CargarExcel />}
            </div>
        </DialogProvider>
    )
}

export default NuevoRegistro
