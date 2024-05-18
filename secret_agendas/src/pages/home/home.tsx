'use client';
import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import GameRules from '../../components/game_rules/game_rules';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
    const navigate = useNavigate();

    if (Cookies.get('UserId') === undefined) {
        useEffect(() => {
            const userId = generateUniqueId();
            Cookies.set("userId", userId, { expires: 1 });
          }, []);
    } 
    if (Cookies.get("tasksFinished") === undefined) {
        useEffect(() => {
            Cookies.set("tasksFinished", '0' , {expires: 1});
          }, []);
    }

    function handleClick() {        
        navigate("/missions");
      }

    return (
        <main>
            <Header/>
            <GameRules />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => {
                        handleClick();
                    }
                }>
                    Continue
                </button>
            </div>
        </main>
    );
}

export default Home;

function generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
