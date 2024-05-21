'use client';
import React from 'react';
import { tasks } from './tasks';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const TaskHandler: React.FC = () => {
    const navigate = useRouter();

    function handleFailure() {        
        const tasks = Cookies.get("tasksFailed");
        const tasksFailed = parseInt(tasks || "0") + 1;
        
        Cookies.set("tasksFailed", tasksFailed.toString(), { expires: 1 });
        Cookies.set("curTask", generateTasks(), { expires: 1 })
        navigate.push("/missions/failure");
    }
    
    function handleSuccess() {        
        const tasks = Cookies.get("tasksFinished");
        const tasksFinished = parseInt(tasks || "0") + 1;

        Cookies.set("tasksFinished", tasksFinished.toString(), { expires: 1 });
        Cookies.set("curTask", generateTasks(), { expires: 1 })
        navigate.push("/missions/success");
    }
    const curTask = Cookies.get("curTask");

    return (
        <header style={{ textAlign: 'center', textWrap:'wrap' }}>
            {/* Route to new failure and success page to present the failure task or the success result */}
            <pre> {'\n\nYour Current Task:'} </pre>
            <pre>{curTask}</pre>

            <button onClick={() => { handleFailure() }}> Task Failed </button>
            <button onClick={() => { handleSuccess() }}> Task Succeeded </button>
        </header>
    );
}

export default TaskHandler;

export function generateTasks() {
    const randomIndex = Math.floor(Math.random() * Object.keys(tasks).length);
    const tasksKey = Object.keys(tasks)[randomIndex];
    const task = tasks[tasksKey as unknown as keyof typeof tasks];
    return task;
}