import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './HistorialSiniestros.scss';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Back } from '../../assets/img/back.svg';
import { ReactComponent as Checked } from '../../assets/img/checked.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Alert } from '../../assets/img/alert.svg';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function HistorialSiniestros(props) {
    const { title, history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };
    return (
        <div className="historialSiniestros">
            <div className="rowPrincipal">
                <div className="column">
                    <div className="title">{title}</div>
                    <div className="subtitle">1 - 50 de 1,420 RESULTADOS</div>
                </div>
                <div className="column content-center">
                    <Pagination count={10} color="primary" />
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
                <div className="column cl-350">ASEGURADO</div>
                <div className="column cl-250">COMPAÑIA DE SEGUROS</div>
                <div className="column cl-250">POLIZA</div>
                <div className="column">FECHA</div>
                <div className="column">AJUSTADOR</div>
                <div className="column">ESTATUS</div>
            </div>
            <div className="row" onClick={() => handleListItemClick('siniestro')}>
                <div className="column cl-350">Premium Restaurant Brands, S. de R.L. de C.V.</div>
                <div className="column cl-250">MAPFRE</div>
                <div className="column cl-250">3932000000032</div>
                <div className="column">10/12/2020</div>
                <div className="column">Jaime Flores</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Checked} viewBox="0 0 22 22" />
                            Pagado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
            <div className="row" onClick={() => handleListItemClick('siniestro')}>
                <div className="column cl-350">Serafina Villanueva Sauri</div>
                <div className="column cl-250">MAPFRE</div>
                <div className="column cl-250">3100500002526</div>
                <div className="column">08/12/2020</div>
                <div className="column">Mariela Cruz</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Close} viewBox="0 0 22 22" />
                            Pagado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
            <div className="row" onClick={() => handleListItemClick('siniestro')}>
                <div className="column cl-350">Anareli Melo Vidal</div>
                <div className="column cl-250">BANORTE</div>
                <div className="column cl-250">CAHA1001825</div>
                <div className="column">07/12/2020</div>
                <div className="column">Radames Rivera</div>
                <div className="column content-icon">
                    <span>
                        <SvgIcon component={Alert} viewBox="0 0 22 22" />
                            Pagado
                        </span>
                    <SvgIcon component={Back} viewBox="0 0 16 16" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(HistorialSiniestros);
