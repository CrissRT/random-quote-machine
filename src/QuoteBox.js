import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const quotes = [
    {
        author: "Steve Ballmer",
        text: "The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential."
    },

    {
        author: "Ray Kurzweil",
        text: "Our intuition about the future is linear. But the reality of information technology is exponential, and that makes a profound difference. If I take 30 steps linearly, I get to 30. If I take 30 steps exponentially, I get to a billion.",
    },

    {
        author: "Marilyn Monroe",
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },

    {
        author: "Albert Einstein",
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },

    {
        author: "Frank Zappa",
        text: "So many books, so little time."
    },

    {
        author: "Marcus Tullius Cicero",
        text: "A room without books is like a body without a soul."
    },

    {
        author: "Oscar Wilde",
        text: "Be yourself; everyone else is already taken."
    },

    {
        author: "Tom Wolfe",
        text: "There was a time in the 1930s when magazine writers could actually make a good living. 'The Saturday Evening Post' and 'Collier's' both had three stories in each issue. These were usually entertaining, and people really went for them. But then television came along, and now of course, information technology... the new way of killing time."
    },

    {
        author: "Toomas Hendrik Ilves",
        text: "The E-government cabinet, E-health services, online voting, online pre-filled tax returns, e-mobile parking, are all examples of Estonian innovation, but far more importantly, they are examples of the transformative power of intensive and extensive use of Information Technology in the public sector."
    },

    {
        author: "Satya Nadella",
        text: "Information technology is at the core of how you do your business and how your business model itself evolves."
    }
];



export default class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
    
        this.quotes = this.quotes.bind(this);
    
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const initialQuote = quotes[randomIndex];

        this.state = {
            text: initialQuote.text,
            author: initialQuote.author,
            count: randomIndex,
        };
    }
    

    quotes() {
        const { count } = this.state;
        const { length } = quotes;
    
        let iteration;
    
        if (count < length - 1) {
            iteration = count + 1;
        } else {
            iteration = 0;
        }
    
        const { author, text } = quotes[iteration];
    
        this.setState({
            count: iteration,
            author,
            text
        });
    }
    

    render() {
        const { text, author } = this.state;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${text}" - ${author}`
        )}`;
    
        return (
            <div id="quote-box" className="container mt-4 p-5 bg-white rounded text-dark">
                <h2 id="text" className="mt-3">
                    <i className="bi bi-chat-right-quote-fill" /> {text}
                </h2>
    
                <p id="author" className="text-right">
                    - {author}
                </p>
    
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={tweetUrl}
                    >
                        <i className="bi bi-twitter" style={{ color: this.props.backgroundColor }} />
                    </a>
                    <button
                        id="new-quote"
                        onClick={() => {
                            this.quotes();
                            this.props.changeColor();
                        }}
                        style={{ backgroundColor: this.props.backgroundColor }}
                        className="btn float-right text-white"
                    >
                        Next quote
                    </button>
                </div>
            </div>
        );
    }
    
}
