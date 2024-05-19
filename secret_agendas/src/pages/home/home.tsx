'use client';
import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import GameRules from '../../components/game_rules/game_rules';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { generateTasks } from '../../components/TaskHandler/TaskHandler';


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
    if (Cookies.get('tasksFailed') === undefined) {
        useEffect(() => {
            Cookies.set("tasksFailed", '0', { expires: 1 });
          }, []);
    }
    if (Cookies.get('curTask') === undefined) {
        useEffect(() => {
            Cookies.set("CurTask", '0', { expires: 1 });
          }, []);
    } 

    function handleClickNormal() {       
        Cookies.set("curTask", generateTasks(), { expires: 1 }); 
        navigate("/missions");
      }

    return (
        <main>
            <Header/>
            <GameRules />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={() => {
                        handleClickNormal();
                    }
                }>
                    Continue
                </button>
            </div>
        </main>
    );
}

export default Home;

export function generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
