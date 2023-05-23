const Polls = [
    {
        id: 1,
        question: "What's your preferred food?",
        options: [
            {
                text: "Fish",
                votes: 2,
            },
            {
                text: "Chicken",
                votes: 21,
            },
            {
                text: "Vegetables",
                votes: 8,
            },
            {
                text: "Beef",
                votes: 32,
            },
            {
                text: "Plain Water",
                votes: 0,
            },
        ],
    },
    {
        id: 2,
        question: "What's your preferred color?",
        options: [
            {
                text: "Red",
                votes: 21,
            },
            {
                text: "Blue",
                votes: 29,
            },
            {
                text: "Gray",
                votes: 8,
            },
            {
                text: "Black",
                votes: 12,
            },
            {
                text: "White",
                votes: 10,
            },
        ],
    },
];

class DataService {
    getPoll(id) {
        const polls = Polls.filter((p) => p.id === id);
        if (polls.length > 0) return polls[0];

        return { id: 0, question: "Invalid Poll Id", options: [] };
    }

    getAllPolls() {
        return Polls;
    }
}

export default DataService;
