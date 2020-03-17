import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you1?', likesCount: 12},
    {id: 2, message: 'Hi, how are you?', likesCount: 11}

]

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





ReactDOM.render(<App  posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
