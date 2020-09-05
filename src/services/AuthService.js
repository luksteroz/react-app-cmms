class AuthService {

    async login(state) {
        await fetch('/api/v1/auth/signin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
        }).then(data => data.ok && data.json())
            .then(
                response => {
                    sessionStorage.setItem("user", JSON.stringify(response));
                    // this.history.push("/");
                    console.log(sessionStorage.getItem("user"));
                });
    }

    logout() {
        sessionStorage.removeItem("user");
        // window.location.reload();
    }

    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('user'))
    }

}

export default new AuthService();