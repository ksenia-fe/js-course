const baseUrl = 'https://5ffacff987478d0017d9a8a0.mockapi.io/tasks/grom/users'

export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
}

export const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`)
    .then(response => response.json());
}

export const createUser = (obj) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(obj),
    })
}

export const updateUser = (userId, obj) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(obj),
    })

}

export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    });
}

// getUsersList().then(data => console.log(data));
// getUserById('3').then(data => console.log(data));
// createUser({firstName: 'John'});
// getUsersList().then(data => console.log(data));
// updateUser('4', {firstName: 'Pako', lastName: 'sd', email: 'cxdvf@gmail.com', age: 22});
// getUsersList().then(data => console.log(data));
// deleteUser('6');
// getUsersList().then(data => console.log(data));