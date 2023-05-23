import "./newuser.css";

function Newuser() {
    return (
        <div className="newuser">
            <br></br>
            <h1>Create New User</h1>
            <form>
                <label>Email Address</label>
                <br />
                <input type="text" />
                <br />
                <label>Password</label>
                <br />
                <input type="text" />
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="text" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Newuser;
