import React from 'react'
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './Siniestro.scss'
import logoMapfre from '../../assets/img/mapfre.png';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Regresar } from '../../assets/img/back_button.svg';
import { ReactComponent as Edit } from '../../assets/img/edit.svg';

function Siniestro(props) {
    const { history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };
    return (
        <div className="siniestro">
            <div className="content-icon-header" onClick={() => handleListItemClick('historial')}>
                <SvgIcon component={Regresar} viewBox="0 0 30 30" />Regresar
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}><SvgIcon component={Edit} viewBox="0 0 25 25" /></div>
            </div>
            <div className="row border">
                <div className="column">
                    <div className="name">PREMIUM RESTAURANT BRANDS, S. DE R.L. DE C.V.</div>
                </div>
                <div className="column-sm">
                    <div className="number"><span className="numberLabel">RRV:</span> 0121FR0-507</div>
                </div>
                <div className="column-right">
                    <img src={logoMapfre} alt="logo" className="logoSiniestro" />
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
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Lugar de siniestro:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Poliza:</div>
                        <div className="miniValue">0121FR0 - 507</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Cobertura:</div>
                        <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Ramo:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Tipo de siniestro:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Analista:</div>
                    <div className="miniValue">0121FR0 - 507</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Reporte:</div>
                    <div className="miniValue">321420000029863</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Agente:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">492:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Toma reporte:</div>
                    <div className="miniValue">0121FR0 - 507</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Persona que asigna:</div>
                    <div className="miniValue">321420000029863</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Ajustador:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Estimación reservada:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Indemnización:</div>
                    <div className="miniValue">0121FR0 - 507</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Comentarios:</div>
                    <div className="miniValue">321420000029863</div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Fecha de siniestro:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha de asignación:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha INSP:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Fecha IP:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha CSD:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Entrega de documentos:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Fecha DP:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha CON:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha IF:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Fecha salvamento:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Fecha factura:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">No. de factura:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Importe de factura:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Relación:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
                <div className="column-lg direction">
                    <div className="miniTitle">Observaciones:</div>
                    <div className="miniValue">12/Enero/2021</div>
                </div>
                <div className="column-sm direction">
                    <div className="miniTitle">Pago de factura:</div>
                    <div className="miniValue">12/Enero/2021</div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="column direction">
                        <div className="miniTitle">Importe de factura:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                    <div className="column direction">
                        <div className="miniTitle">Relación:</div>
                        <div className="miniValue">12/Enero/2021</div>
                    </div>
                </div>
                <div className="column-lg direction">
                    <div className="miniTitle">Observaciones:</div>
                    <div className="miniValue">12/Enero/2021</div>
                </div>
                <div className="column-sm direction">
                    <div className="miniTitle">Pago de factura:</div>
                    <div className="miniValue">12/Enero/2021</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Documentación entregada:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Documentación faltante:</div>
                    <div className="miniValue">Av Prados #100 SN, Plaza Jardines</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Comentarios:</div>
                    <div className="miniValue">12/Enero/2021</div>
                </div>
                <div className="column">
                    <div className="column direction content-icon">
                        <div className="miniTitle">Estatus</div>
                        <span>
                            <SvgIcon component={Close} viewBox="0 0 22 22" />
                        Pagado
                    </span>
                    </div>
                    <div className="column content-right">
                        <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}>
                            <SvgIcon component={Excel} />
                            <span className="space"></span>
                            Descargar Excel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Siniestro);
