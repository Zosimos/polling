import "./home.css";

function Home() {
    return (
        <div className="home">
            <br></br>
            <h1>The Polling Station</h1>
            <br />
            <h3>Post and vote on polls you create!</h3>

            <img src="./images/vote-voice.jpg" alt="vote your voice" />

            <h3>
                Please <a href="/login">Login</a> or{" "}
                <a href="/newuser">Create a New User Account</a>
            </h3>
        </div>
    );
}

export default Home;
