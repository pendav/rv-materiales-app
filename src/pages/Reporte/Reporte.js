import React from 'react';
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './Reporte.scss';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Regresar } from '../../assets/img/back_button.svg';
import { ReactComponent as Edit } from '../../assets/img/edit.svg';
import { ReactComponent as Calendario } from '../../assets/img/calendario.svg';

function Reporte(props) {
    const { history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };
    return (
        <div className="reporte">
            <div className="content-icon-header" onClick={() => handleListItemClick('reportes')}>
                <SvgIcon component={Regresar} viewBox="0 0 30 30" />Regresar
                <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: '#FFFFFF', marginRight: '5.625rem' }}>
                        <SvgIcon component={Excel} />
                        <span className="space"></span>
                        Descargar Excel
                    </Button>
                    <SvgIcon component={Edit} viewBox="0 0 25 25" />
                </div>
            </div>
            <div className="row border">
                <div className="column">
                    <div className="name">Ultima actualización:
                    <span className="date"> 20/01/2021</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Localidad:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Ref. Claim:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Transportista/Responsable:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Tipo de daño:</div>
                    <div className="miniValue">Ramos</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Monto reclamado USD:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto reclamado MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto excedente de contrato MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto estimado de recuperación MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Monto rechazado MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto aceptado MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto cancelado MXN:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Flete no incluido en reclamo:</div>
                    <div className="miniValue">Ramos</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Fecha del evento:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de emisión:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días del evento a la emisión:</div>
                    <div className="miniValue">145</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días de la emisión a la fecha:</div>
                    <div className="miniValue">51</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de 1er notificación a RM:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Fecha de 2da notificación a RM:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de 3ra notificación a RM:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de escalación:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Área de escalación/ Responsable:</div>
                    <div className="miniValue">Ramos</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de resolución:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Días desde la escalación a la resolución:</div>
                    <div className="miniValue">145</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Estatus:</div>
                    <div className="miniValue content-icon"><span>
                        <SvgIcon component={Close} viewBox="0 0 22 22" />
                        Cancelado
                        </span></div>
                </div>
                <div className="column direction">
                </div>
                <div className="column direction">
                </div>
                <div className="column direction">
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Observaciones y sugerencias para agilizar la recuperación</div>
                    <div className="miniValue">Test</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Reporte);
