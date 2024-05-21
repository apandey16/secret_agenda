'use client';
import React from 'react';
import Header from '../../components/header/header';
import GameRules from '../../components/game_rules/game_rules';
import { generateUniqueId } from '../../components/utlis';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import { generateTasks } from '../../components/TaskHandler/TaskHandler';
import './style.css';


const Home: React.FC = () => {
    const navigate = useRouter();

    if (Cookies.get('UserId') === undefined) {
        const userId = generateUniqueId();
        Cookies.set("userId", userId, { expires: 1 });
    } 
    if (Cookies.get("tasksFinished") === undefined) {
        Cookies.set("tasksFinished", '0' , {expires: 1});
    }
    if (Cookies.get('tasksFailed') === undefined) {
        Cookies.set("tasksFailed", '0', { expires: 1 });
    }
    if (Cookies.get('curTask') === undefined) {
        Cookies.set("CurTask", '0', { expires: 1 });
    } else {
      navigate.push("/missions");
  }

    function handleClickNormal() {       
        Cookies.set("curTask", generateTasks(), { expires: 1 }); 
        navigate.push("/missions");
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

