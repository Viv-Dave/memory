import './style/Card.css';
import { useState } from 'react';

export default function DisplayScore({ count }) {
    const [showRules, setShowRules] = useState(false);

    const toggleRules = () => {
        setShowRules(!showRules);
    };

    return (
        <>
            <div className='header'>
                <h1>Berserk</h1>
                <h6>Test Your Memory with Iconic Characters from Berserk!</h6>
            </div>
            <div className="ScoreBoard">
                <p>Current Score: {count}</p>
                <p>Highest Possible Score: 10</p>
                <button onClick={toggleRules}>Show Rules</button>
            </div>
            {showRules && (
                <div className="rulesDropdown">
                    <h4>Game Rules:</h4>
                    <p>1. Click on a card and try to remember it.</p>
                    <p>2. Don't click on the same card more than once.</p>
                    <p>3. The game shuffles the cards after each click.</p>
                    <p>4. The game resets if you click on any card more than once.</p>
                    <p>5. Aim for the highest score by remembering the cards!</p>
                </div>
            )}
        </>
    );
}
