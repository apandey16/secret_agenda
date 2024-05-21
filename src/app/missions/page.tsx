'use client'
import React from 'react';
import Cookies from "js-cookie";
import Header from '../../../components/header/header';
import TaskHandler from '../../../components/TaskHandler/TaskHandler';
import { useRouter } from 'next/navigation';
import './style.css';

const Missions: React.FC = () => {    
    const tasksFinished = Cookies.get("tasksFinished");
    const tasksFailed = Cookies.get("tasksFailed");
    const tasksUnderaken = parseInt(tasksFinished || '0') + parseInt(tasksFailed || '0');
    const navigate = useRouter();

    function resetGame() {
        Cookies.remove("userId");
        Cookies.remove("tasksFinished");
        Cookies.remove("tasksFailed");
        Cookies.remove("curTask");
        navigate.push('/')
    }

    return (
        <main>
           <Header />
           <pre style={{ textAlign: 'center' }}> Tasks Underaken: {tasksUnderaken} </pre>
           <pre style={{ textAlign: 'center' }}> Tasks Succeeded: {tasksFinished} </pre>
           <pre style={{ textAlign: 'center' }}> Tasks Failed: {tasksFailed} </pre>
            <TaskHandler />
            <div style={{ textAlign: 'center'}}>
                <pre style={{textWrap:'wrap'}}>{"\n\nIf you want to restart the game (reseting all of your stats) click the button below to move on."} </pre>
                <button className='resetButton' onClick={() => { resetGame() }}> Restart Game </button>
            </div>
        </main>
    );
}


export default Missions;
