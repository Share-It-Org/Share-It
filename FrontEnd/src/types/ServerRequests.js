const ServerRequests = {}

ServerRequests.CreateUser = (username, password, email) => {
    return fetch(...[
        '/api/user/create', 
        {
            method: 'POST',
            body: JSON.stringify({username: username , password: password, email: email}),
            headers:{
                'Content-Type': 'application/json'
            },
        }
    ]);
}

ServerRequests.LoginUser = (event, username, password) => {
    return fetch(...[
        '/api/user/login', 
        {
            method: 'POST',
            body: JSON.stringify({username: username , password: password}),
            headers:{
                'Content-Type': 'application/json'
            },
        }
    ])
}

ServerRequests.GetItems = (username) => {
    fetch(...[
        '/api/user/items',
        {
            method: 'POST',
            body: JSON.stringify({username: username}),
            headers:{
                'Content-Type': 'application/json'
            },
        }
    ])
};

export default ServerRequests;