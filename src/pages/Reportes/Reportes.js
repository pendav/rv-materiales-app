import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import FormNuevoReporte from '../../components/FormReportes/FormNuevoReporte';
import CargarExcel from '../../components/CargarExcel/CargarExcel';
import DialogProvider from '../../context/DialogProvider';
import './Reportes.scss';

function NuevoReporte() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <DialogProvider>
            <div className="nuevo_registro">
            <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Nuevo reporte"></Tab>
                    <Tab label="Reporte semanal"></Tab>
                </Tabs>
                {selectedTab === 0 && <FormNuevoReporte />}
                {selectedTab === 1 && <CargarExcel />}
            </div>
        </DialogProvider>
    )
}

export default NuevoReporte
