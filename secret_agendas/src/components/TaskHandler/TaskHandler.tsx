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
        const tasks = Cookies.get("tasksFinished");
        if (parseInt(tasks || '0') === 0) {
            navigate("/");
            Cookies.set("userId", generateUniqueId(), { expires: 1 });
            Cookies.set("tasksFinished", '0', { expires: 1 });
            alert("You have failed your last task and your mission is over.\nYou MUST take a shot before moving on.\nPlease click continue to start a new mission.");
            return;
        }
        const tasksFinished = parseInt(tasks || "0") - 1;

        Cookies.set("tasksFinished", tasksFinished.toString(), { expires: 1 });
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
            {/* Route to new failure and success page to present the failure task or the success result */}
            <pre>{"Task Handler"}</pre>

            <button onClick={() => { handleFailure() }}>Task Failed</button>
            <button onClick={() => { handleSuccess() }}>Task Succeeded</button>
        </header>
    );
}

export default TaskHandler;
