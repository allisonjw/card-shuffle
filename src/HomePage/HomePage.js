import React, { useState } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import flyingCards from '../CardImages/playing-cards.png';

export const HomePage = () => {
    const [newPlayerName, setNewPlayerName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPlayer = { 
            player_name: newPlayerName,  
        };
        setNewPlayerName('')
    };

    return(
        <section className="section_form" style={{ backgroundImage:`url(${flyingCards})` }}>
            <h1>Welcome to Card Shuffle</h1>
            <form className="player_form" onSubmit={(e) => handleSubmit(e)}>
                <input 
                    id="input_player"
                    className="player_input"
                    placeholder="Enter Player Name"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}/>
                <Link to='/deck'>
                    <button 
                        className="player_btn"
                        type="submit"
                        name="deck"
                        >
                            Submit Name
                    </button>
                </Link>
            </form>
        </section>
    )
};

export default HomePage;
