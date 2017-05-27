var style = require('./style/globalStyle.css');

import $ from 'jquery';

/*var messages = require('./messages');*/

/*import Button from './button';
import Tigo from './image';
import Photo from './photo';*/

/*var newMessage = () => `
        <p>
            ${ messages.hi } ${ messages.event }
            ${ Tigo }
            ${ Photo }
        </p>
`;*/

//var newMessage = () => (Button.button);

/*import {
    multiply
} from './mathStuff';

//const newMessage = () => multiply(5, 7);

const newMessage = () => `
    <div class="${ style.box }">
    DEV: ${ DEVELOPMENT.toString()} <br>
    PROD: ${ PRODUCTION.toString()} <br>
    </div>
`;*/

var app = document.getElementById('app');

//app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';
//app.innerHTML = newMessage();
app.innerHTML = `
    <div id="menu">
        <button id="loadPage1">Page 1</button>
        <button id="loadPage2">Page 2</button>
    </div>
    <div id="content">
        <h1>Home</h1>
    </div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
});

document.getElementById('loadPage2').addEventListener('click', () => {
    System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
});
//Button.attachEl('clicked');

$('#app').css('background-color','yellow');

if (DEVELOPMENT) {
    if (module.hot) {
        module.hot.accept();
    }
}