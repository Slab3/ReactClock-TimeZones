import React from 'react';
import ReactDOM from 'react-dom';
import BtnsTimeZones from './BtnsTimeZones';

export default function tick() {
    const element = (
        <>
            <div>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
            <div className="buttons">
                <button className="btnTimeZones" id="Sydney" onClick={BtnsTimeZones}>Sydney</button>
                <button className="btnTimeZones" id="Tokyo">Tokyo</button>
                <button className="btnTimeZones" id="Dubai">Dubai</button>
                <button className="btnTimeZones" id="Kyiv">Kyiv</button>
                <button className="btnTimeZones" id="Moscow">Moscow</button>
                <button className="btnTimeZones" id="Berlin">Berlin</button>
                <button className="btnTimeZones" id="London">London</button>
                <button className="btnTimeZones" id="NewYork">New York</button>
                <button className="btnTimeZones" id="LosAngeles">Los Angeles</button>
            </div>
        </>
    );


    // highlight-next-line
    ReactDOM.render(element, document.getElementById('rootTest'));
}

setInterval(tick, 1000);
setTimeout(tick, 0); // calling when page loading, and after every 1 sec