import React from 'react';
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './Reporte.scss';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Regresar } from '../../assets/img/back_button.svg';
import { ReactComponent as Edit } from '../../assets/img/edit.svg';

function Reporte(props) {
    const { history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };
    return (
        <div className="reporte">
            <div className="content-icon-header" onClick={() => handleListItemClick('historial')}>
                <SvgIcon component={Regresar} viewBox="0 0 30 30" />Regresar
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}><SvgIcon component={Edit} viewBox="0 0 25 25" /></div>
            </div>
            <div className="row border">
                <div className="column">
                    <div className="name">Ultima actualización:</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Nombre de contacto:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Correo de contacto:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Teléfono de contacto:</div>
                    <div className="miniValue">0121FR0 - 507</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Referencia compañía:</div>
                    <div className="miniValue">321420000029863</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Reporte);
