import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Messages = (props) => {
    return <div className={s.dialogs}>{props.message}</div>

}
const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Oksana'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Lydmila'},
        {id: 6, name: 'Alex'},

}

return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="Victoria" id="1"/>
            <DialogItem name="Oksana" id="2"/>
            <DialogItem name="Sveta" id="3"/>
            <DialogItem name="Viktor" id="4"/>
            <DialogItem name="Lydmila" id="5"/>
            <DialogItem name="Alex" id="6"/>

        </div>
        <div className={s.messages}>
            <Messages message="Hello"/>
            <Messages message="How are you?"/>
            <Messages message="As you wish"/>
        </div>
    </div>
);
}

export default Dialogs;