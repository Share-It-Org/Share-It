//setup stuff
import React from 'react';



function Thing({ }){

    return <div id='Thing' className='Thing'>
        <div>name, description, status(string), photo, owner, holder
            <div id='userThingsButtons'>
                <button>Delete a thing</button>
                <button>Lend a thing</button>
                <button>Don't lend a thing</button>
            </div>
        </div>
    </div>
};

export default Thing;