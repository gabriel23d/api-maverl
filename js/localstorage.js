
function guardar_localstorage(username, password) {
    localStorage.setItem('login_username', username);
    localStorage.setItem('login_password', password);
}

function obtener_localstorage() {
    const storedUsername = localStorage.getItem('login_username');
    const storedPassword = localStorage.getItem('login_password');
    
    return { username: storedUsername, password: storedPassword };
}


guardar_localstorage("usuario123", "contraseña123");


const { username, password } = obtener_localstorage();


const persona = { nombre: "John", edad: 30 };
localStorage.setItem("persona", JSON.stringify(persona));


