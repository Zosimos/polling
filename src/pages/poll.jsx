import "./poll.css";

function Poll() {
    return (
        <div>
            <h2>Create a Poll</h2>
            <form>
                <label>Question:</label>
                <br />
                <input type="text" id="question" required />
                <br></br>
                <label>Option:</label>
                <br></br>
                <input type="text" id="option" required />
                <br></br>
                <input type="text" id="option" required />
                <br></br>
                <input type="text" id="option" />
                <br></br>
                <input type="text" id="option" />
                <br></br>
                <input type="text" id="option" />
                <br></br>
                <input type="text" id="option" />
                <br></br>
                <button type="button">Submit</button>
            </form>
        </div>
    );
}
export default Poll;
