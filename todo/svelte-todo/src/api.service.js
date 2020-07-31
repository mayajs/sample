const API_URL = "http://localhost:3333/todos";

export const getTodoList = async () => {
    return getTodo();
};

export const getTodo = async (id) => {
    const url = id ? `${API_URL}/${id}` : API_URL;
    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: {
            Accept: 'application/json',
        },
    });
    return await response.json();
};

export const addTodo = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};

export const removeTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
        },
    });

    return await response.json();
};