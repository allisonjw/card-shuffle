import React, { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

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
        <section className="section_form">
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
