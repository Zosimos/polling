import { useEffect, useState } from "react";
import "./answerpoll.css";
import DataService from "../services/dataService";

function Answerpoll() {
    const [pollId, setPollId] = useState(1);
    const [poll, setPoll] = useState({});

    // when the component loads, retrieve the poll by pollId
    useEffect(() => {
        const service = new DataService();
        const pollById = service.getPoll(pollId);
        setPoll(pollById);
    });

    return (
        <div>
            <form id="pollForm">
                <h2>Poll Question</h2>
                <p>{poll.question}</p>

                <h3>Options:</h3>
                {poll.options?.map((opt) => (
                    <h5>
                        {opt.text} - #{opt.votes}
                    </h5>
                ))}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Answerpoll;
