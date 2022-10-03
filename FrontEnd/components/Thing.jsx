//setup stuff
import React from 'react';

function Thing({ name, description, status, holder }){

    return <div id='Thing' className='Thing'>
        <div>{name}, {description}, {status}, {holder}
            <div id='userThingsButtons'>
                <button>Delete a thing</button>
                <button>Lend a thing</button>
                <button>Don't lend a thing</button>
            </div>
        </div>
    </div>
};

export default Thing;