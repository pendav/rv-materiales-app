import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import FormSiniestros from '../../components/FormSiniestros/FormSiniestros';
import HistorialSiniestros from '../../components/HistorialSiniestros/HistorialSiniestros';
import CargarExcel from '../../components/CargarExcel/CargarExcel';
import DialogProvider from '../../context/DialogProvider';
import './Siniestros.scss'

function Siniestros() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <DialogProvider>
            <div className="siniestros">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Nuevo siniestro"></Tab>
                    <Tab label="Historial"></Tab>
                    <Tab label="Cargar Excel"></Tab>
                </Tabs>
                {selectedTab === 0 && <FormSiniestros />}
                {selectedTab === 1 && <HistorialSiniestros title="Mi historial de siniestros" />}
                {selectedTab === 2 && <CargarExcel />}
            </div>
        </DialogProvider>
    )
}

export default Siniestros;
