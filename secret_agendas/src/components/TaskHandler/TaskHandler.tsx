'use client';
import React, { useEffect } from 'react';
import { punishments } from './punishments';
import { rewards } from './rewards';
import { tasks } from './tasks';
import { generateUniqueId } from '../../pages/home/home';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TaskHandler: React.FC = () => {
    const navigate = useNavigate();

    function handleFailure() {        
        const tasks = Cookies.get("tasksFailed");
        const tasksFailed = parseInt(tasks || "0") + 1;
        
        Cookies.set("tasksFailed", tasksFailed.toString(), { expires: 1 });
        window.location.reload();
    }
    
    function handleSuccess() {        
        const tasks = Cookies.get("tasksFinished");
        const tasksFinished = parseInt(tasks || "0") + 1;

        Cookies.set("tasksFinished", tasksFinished.toString(), { expires: 1 });
        window.location.reload();
    }

    return (
        <header style={{ textAlign: 'center' }}>
            {/* Route to new failure and success p
            age to present the failure task or the success result */}
            <pre>{"Task Handler"}</pre>

            <button onClick={() => { handleFailure() }}> Task Failed </button>
            <button onClick={() => { handleSuccess() }}> Task Succeeded </button>
        </header>
    );
}

export default TaskHandler;
