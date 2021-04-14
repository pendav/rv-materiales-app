import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Graficas.scss';
import green from '../../assets/img/green_graph.png';
import gray from '../../assets/img/gray_graph.png';
import red from '../../assets/img/red_graph.png';
import yellow from '../../assets/img/yellow_graph.png';
import purple from '../../assets/img/purple_graph.png';
import blue from '../../assets/img/blue_graph.png';

const Graficas = () => {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
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
    return (
        <div className="graficas">
            <div className="doughnut">
                <Doughnut data={data} />
            </div>
            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <img src={green} alt="green" />
                        <div className="monto">
                            Monto aceptado
                        </div>
                    </div>
                    <div className="column">
                        <img src={blue} alt="blue" />
                        <div className="monto">
                            Monto reclamado
                        </div>
                    </div>
                    <div className="column">
                        <img src={yellow} alt="yellow" />
                        <div className="monto">
                            Monto en proceso
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <img src={gray} alt="gray" />
                        <div className="monto">
                            Monto cancelado
                        </div>
                    </div>
                    <div className="column">
                        <img src={purple} alt="purple" />
                        <div className="monto">
                            Monto recuperado
                        </div>
                    </div>
                    <div className="column">
                        <img src={red} alt="red" />
                        <div className="monto">
                            Monto rechazado
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graficas
