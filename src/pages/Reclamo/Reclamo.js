import React from 'react'
import './Reclamo.scss'
import FormReclamo from '../../components/FormReclamo/FormReclamo';

function Reclamo() {
    return (
        <div className="reclamo">
            <div className="reclamo-label">
                Envía un nuevo reclamo desde la plataforma, ingresa el correo electrónico a la persona que recibirá el correo.
            </div>
            <FormReclamo/>
        </div>
    )
}

export default Reclamo
