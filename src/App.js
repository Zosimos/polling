import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Newuser from "./pages/newuser";
import Poll from "./pages/poll";
import Answerpoll from "./pages/answerpoll";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/newuser" element={<Newuser />}></Route>
                    <Route path="/poll" element={<Poll />}></Route>
                    <Route path="/answerpoll" element={<Answerpoll />}></Route>
                </Routes>

                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
