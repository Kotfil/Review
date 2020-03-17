import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Messages = (props) => {
    return <div className={s.dialogs}>{props.message}</div>

}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Oksana'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Lydmila'},
        {id: 6, name: 'Alex'}
    ]


    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'As you wish'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'How are you?'},
        {id: 6, message: 'Hello'}
    ]




    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messegeElements = messages.map(message => <Messages message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegeElements}
            </div>
        </div>
    );
}


export default Dialogs;