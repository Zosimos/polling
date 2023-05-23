import "./login.css";

function Login() {
    return (
        <div className="login">
            <br></br>
            <h1>Please Log In</h1>
            <form>
                <label>Email:</label>
                <br />
                <input type="text" id="email" />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="text" id="password" />
            </form>
            <p>
                <a href="/newuser">Create New User Account</a>
            </p>
        </div>
    );
}

export default Login;
