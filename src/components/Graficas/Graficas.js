import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Graficas.scss';

const Graficas = () => {
    const data = {
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    const dataAceptado = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#4BC08D',
            ],
            hoverOffset: 4
        }]
    };
    const dataReclamado = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#4B87C0',
            ],
            hoverOffset: 4
        }]
    };
    const dataProceso = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#F5C816',
            ],
            hoverOffset: 4
        }]
    };
    const dataCancelado = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#555555',
            ],
            hoverOffset: 4
        }]
    };
    const dataRecuperado = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#804BC0',
            ],
            hoverOffset: 4
        }]
    };
    const dataRechazado = {
        datasets: [{
            label: 'My First Dataset',
            data: [100],
            backgroundColor: [
                '#D53535',
            ],
            hoverOffset: 4
        }]
    };
    return (
        <div className="graficas">
            <div className="doughnut">
                <Doughnut data={data} />
                <div className="cantidad">
                    1,420 Resultados
                </div>
            </div>
            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataAceptado} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto aceptado
                            </div>
                            <div className="cantidad">
                                $923,826.48
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataReclamado} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto reclamado
                            </div>
                            <div className="cantidad">
                                $245,174,557.26
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataProceso} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto en proceso
                            </div>
                            <div className="cantidad">
                                $5,184,978.54
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataCancelado} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto cancelado
                            </div>
                            <div className="cantidad">
                                $923,826.48
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataRecuperado} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto recuperado
                            </div>
                            <div className="cantidad">
                                $128,711,532.57
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="graph">
                            <Doughnut data={dataRechazado} />
                        </div>
                        <div>
                            <div className="monto">
                                Monto rechazado
                            </div>
                            <div className="cantidad">
                                $110,339,219.85
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graficas
