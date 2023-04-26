import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <br></br>
            <h1>The Polling Station</h1>

            <Footer></Footer>
        </div>
    );
}

export default App;
