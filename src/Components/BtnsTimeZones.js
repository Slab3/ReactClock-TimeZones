import React from 'react';
import ReactDOM from 'react-dom';

document.getElementById('clockBlock')

export default function ChangeTimeZone() {

    console.log('Sydney')

    function usZone() {
        const testZone = (
            <>
                <div id={"clockBlock"}>
                    <h2>It is {new Date().toLocaleTimeString('en-US')}.</h2>
                </div>
            </>
        )
    }


}