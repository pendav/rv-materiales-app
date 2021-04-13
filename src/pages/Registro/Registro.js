import React from 'react'
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import './Registro.scss'
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { ReactComponent as Excel } from '../../assets/img/excel.svg';
import { ReactComponent as Regresar } from '../../assets/img/back_button.svg';
import { ReactComponent as Edit } from '../../assets/img/edit.svg';
import { ReactComponent as Calendario } from '../../assets/img/calendario.svg';

function Registro(props) {
    const { history } = props;
    const defaultPath = '/home/';
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };
    return (
        <div className="registro">
            <div className="content-icon-header" onClick={() => handleListItemClick('historial')}>
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
                    <div className="miniTitle">Planta:</div>
                    <div className="miniValue">2N</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Tipo de evento:</div>
                    <div className="miniValue">Faltantes</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Descripción del evento:</div>
                    <div className="miniValue">Discrepancia</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Transportista:</div>
                    <div className="miniValue">DSV</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Referencía:</div>
                    <div className="miniValue">2N-2021-001</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto reclamado USD:</div>
                    <div className="miniValue">$13,022.9</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto reclamado MXN:</div>
                    <div className="miniValue">$253,946.55</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Monto aceptado:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto recuperado:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Ajustes MGO:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Reclamo en documentación:</div>
                    <div className="miniValue">-</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Reclamo en proceso:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Ajuste / Reversión de partidas:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Cancelado:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Flete del BI30 no incluido en reclamo:</div>
                    <div className="miniValue">-</div>
                </div>
            </div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Menores de USD $500:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Excedente de contrato:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Monto estimado a recuperar:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                </div>
            </div>
            <div className="row"></div>
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
                    <div className="miniTitle">Fecha de asignación:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días de evento a notificación:</div>
                    <div className="miniValue">145</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de documentación:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días de notificación a doc...:</div>
                    <div className="miniValue">51</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de emisión RV:</div>
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
                    <div className="miniTitle">Días de documentación a emisión:</div>
                    <div className="miniValue">51</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de respuesta carrier:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días de emisión a respuesta:</div>
                    <div className="miniValue">51</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha aviso de pago:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Fecha de aplicación contable:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Días de atraso desde emisión:</div>
                    <div className="miniValue">51</div>
                </div>
            </div>
            <div className="row">
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
                <div className="column direction">
                </div>
                <div className="column direction">
                </div>
            </div>
            <div className="row"></div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Tipo de material:</div>
                    <div className="miniValue">$300.00</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Escalado:</div>
                    <div className="miniValue">
                        -
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Área:</div>
                    <div className="miniValue">
                        $300.00
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
                    <div className="miniTitle">Proveedor:</div>
                    <div className="miniValue">-</div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Ruta:</div>
                    <div className="miniValue">
                        $300.00
                    </div>
                </div>
                <div className="column direction">
                    <div className="miniTitle">Caja:</div>
                    <div className="miniValue">
                        $300.00
                    </div>
                </div>
                <div className="column direction">
                </div>
                <div className="column direction">
                </div>
            </div>
            <div className="row">
                <div className="column-lg direction">
                    <div className="miniTitle">Comentarios</div>
                    <div className="miniValue">DSV comenta que el material fue transportado por FCL, por lo que la carga del material es responsabilidad del proveedor 20/1/21</div>
                </div>
            </div>
            <div className="row">
                <div className="column-lg direction">
                    <div className="miniTitle">Observaciones por diferencias y cancelaciones</div>
                    <div className="miniValue">-</div>
                </div>
            </div>
            <div className="row"></div>
            <div className="row">
                <div className="column direction">
                    <div className="miniTitle">Fecha de 1er notificación a RM:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                            26/08/2020
                        </span>
                    </div>
                </div>
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
                    <div className="miniTitle">Fecha de emisión de cheque:</div>
                    <div className="miniValue content-icon">
                        <span>
                            <SvgIcon component={Calendario} viewBox="0 0 22 22" />
                        26/08/2020
                    </span>
                    </div>
                </div>
                <div className="column direction">
                </div>
                <div className="column direction">
                </div>
            </div>
        </div>
    )
}

export default withRouter(Registro);
