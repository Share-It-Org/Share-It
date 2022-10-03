function MyThing({ consoleLogForTesting }){

    return <div id='MyThing' className='MyThing'>
        <h1>Put Thing information here</h1>
        <div>name
            requested?
            Status: 
            <div id='userThingsButtons'>
                <button>Delete a thing</button>
                <button>Lend a thing</button>
                <button>Don't lend a thing</button>
            </div>
        </div>
                    

        
    </div>
};

export default MyThing;