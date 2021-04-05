import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Add } from '../../assets/img/add.svg';
import { ReactComponent as Beneficiario } from '../../assets/img/beneficiario.svg';
import { ReactComponent as MiCuenta } from '../../assets/img/mi_cuenta.svg';
import { ReactComponent as Logout } from '../../assets/img/logout.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import { withRouter } from 'react-router-dom';
import './Sidebar.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        maxWidth: 360,
        color: theme.palette.common.white,
        marginTop: 44
    },
    list: {
        marginBottom: 18
    }
}));

const Sidebar = props => {
    const { history } = props;
    const defaultPath = '/home/';
    const classes = useStyles();
    const handleListItemClick = (url) => {
        history.push(`${defaultPath}${url}`);
    };

    const handleClose = () => {
        history.push(`/`);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="sidebar">
                <ListItem button className={classes.list} onClick={() => handleListItemClick('siniestros')}>
                    <ListItemIcon>
                        <SvgIcon component={Add} viewBox="0 0 30 30"/>
                    </ListItemIcon>
                    <ListItemText primary="Siniestros" />
                </ListItem>
                <ListItem button className={classes.list} onClick={() => handleListItemClick('historial')}>
                    <ListItemIcon>
                        <SvgIcon component={MiCuenta} viewBox="0 0 30 30"/>
                    </ListItemIcon>
                    <ListItemText primary="Historial de busqueda" />
                </ListItem>
                <ListItem button className={classes.list} onClick={() => handleListItemClick('nuevo_registro')}>
                    <ListItemIcon>
                        <SvgIcon component={Add} viewBox="0 0 30 30"/>
                    </ListItemIcon>
                    <ListItemText primary="Nuevo registro" />
                </ListItem>
                <ListItem button className={classes.list} onClick={() => handleListItemClick('usuarios')}>
                    <ListItemIcon>
                        <SvgIcon component={Beneficiario} viewBox="0 0 30 30"/>
                    </ListItemIcon>
                    <ListItemText primary="Usuarios" />
                </ListItem>
                <ListItem button onClick={() => handleClose()}>
                    <ListItemIcon>
                        <SvgIcon component={Logout} viewBox="0 0 30 30"/>
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
            </List>
        </div>
    );
}

export default withRouter(Sidebar);
