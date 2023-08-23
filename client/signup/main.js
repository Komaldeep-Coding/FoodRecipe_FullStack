document.getElementById("btn").addEventListener('click', (e) => {
    e.preventDefault();

    const user_name = document.getElementById('name').value;
    const user_email = document.getElementById('email').value;
    const user_password = document.getElementById('password').value;
    const user_dob = document.getElementById('dob').value;

    if (!user_name || !user_email || !user_password || !user_dob) {
        alert('Please fill in all required fields.');
        return;
    }

    const users = {
        name: user_name,
        email: user_email,
        password: user_password,
        dob: user_dob
    };

    const url = 'http://localhost:8080/users';
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
            window.location.href = "http://127.0.0.1:5500/client/APP/";
        }
    };

    xhr.send(JSON.stringify(users));
});
