function submitForm(e) {
    e.preventDefault(); 
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // fetch from json
    fetch('/json/users.json')
        .then(response => response.json())
        .then(usersData => {
            const user = usersData.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("username", user.username);
                localStorage.setItem("email", user.email);
                window.location.href = 'mainpage.html'; 
            } else {
                alert("Invalid credentials. Please try again.");
            }
        })
        .catch(error => console.error('Error:', error));
}
