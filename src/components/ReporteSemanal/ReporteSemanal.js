import React from 'react';
import './ReporteSemanal.scss';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Back } from '../../assets/img/back.svg';
import { ReactComponent as Checked } from '../../assets/img/checked.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Alert } from '../../assets/img/alert.svg';
import { ReactComponent as Rejected } from '../../assets/img/rejected.svg';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function ReporteSemanal(props) {
    const { title, history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };

    return (
        <div className="reporteSemanal">
             <div className="rowPrincipal">
                <div className="column">
                    <div className="title">{title}</div>
                    <div className="subtitle">2021</div>
                </div>
                <div className="column content-center">
                    <div className="divisor"></div>
                </div>
                <div className="column content-right">
                    <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}>
                        <SvgIcon component={Excel} />
                        <span className="space"></span>
                        Descargar Excel
                    </Button>
                </div>
            </div>
            <div className="rowHeader">
                <div className="column">REF. CLAIM</div>
                <div className="column">LOCALIDAD</div>
                <div className="column">TRANSPORTISTA</div>
                <div className="column">TIPO DE DAÑO</div>
                <div className="column">FECHA DE EVENTO</div>
                <div className="column">ESTATUS</div>
            </div>
            <div className="row" onClick={() => handleListItemClick('reporte')}>
                <div className="column">2N-2021-001</div>
                <div className="column">Ramos</div>
                <div className="column">DSV</div>
                <div className="column">Discrepancia</div>
                <div className="column">26/08/2020</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Checked} viewBox="0 0 22 22" />
                        Cancelado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
            <div className="row" onClick={() => handleListItemClick('reporte')}>
                <div className="column">2R-2020-074</div>
                <div className="column">Silao</div>
                <div className="column">Penske LLP</div>
                <div className="column">Robo</div>
                <div className="column">02/12/2020</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Close} viewBox="0 0 22 22" />
                        Pagado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
            <div className="row" onClick={() => handleListItemClick('reporte')}>
                <div className="column">2R-2020-070</div>
                <div className="column">Silao</div>
                <div className="column">DSV</div>
                <div className="column">Discrepancia</div>
                <div className="column">24/11/2020</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Alert} viewBox="0 0 22 22" />
                        En proceso
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
            <div className="row" onClick={() => handleListItemClick('reporte')}>
                <div className="column">6R-2020-MUL</div>
                <div className="column">Silao</div>
                <div className="column">Ryder Crossdock</div>
                <div className="column">-</div>
                <div className="column">03/03/2020</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Rejected} viewBox="0 0 22 22" />
                        Rechazado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(ReporteSemanal);
