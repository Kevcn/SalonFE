import React from 'react';

export default class Login extends React.Component {
        
    userName = React.createRef();
    password = React.createRef();

    componentDidMount(){
        // this.logout();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var username = this.userName.current.value;       
        var password = this.password.current.value;
        
        this.login(username, password)
            .then(
                user => {
                    // const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push({
                        pathname: "/viewbookings"
                    });
                }
            );
    }

    login = (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
    
        return fetch(`https://localhost:5001/Identity/authenticate`, requestOptions)
            .then(this.handleResponse)
            .then(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    user.authdata = window.btoa(username + ':' + password);
                    localStorage.setItem('user', JSON.stringify(user));
                }
    
                return user;
            });
    }

    logout = () => {
        localStorage.removeItem('user');
    }

    handleResponse = (response) => {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    this.logout();
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }

    render() {
        return (
            <div className="LoginPageContainer">
                <div className="flexbox HeaderContainer">
                    <h2>Login</h2> 
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form__group field">
                        <input type="text" className="form__field" placeholder="Username" name="username" id='username' ref={this.userName} required />
                        <label htmlFor="username" className="form__label">Username</label>
                    </div>

                    <div className="form__group field">
                        <input type="password" className="form__field" placeholder="Password" name="password" id='password' ref={this.password} required />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>

                    <button className="button">Login</button>
                </form>
            </div>
        );
    }
}
