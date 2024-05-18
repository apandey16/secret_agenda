import React from 'react';
import Cookies from "js-cookie";
import Header from '../../components/header/header';
import TaskHandler from '../../components/TaskHandler/TaskHandler';

const Missions: React.FC = () => {    
    const tasksFinished = Cookies.get("tasksFinished");

    return (
        <main>
           <Header />
           <pre style={{ textAlign: 'center' }}> Total Tasks Finished: {tasksFinished} </pre>
            <TaskHandler />
        </main>
    );
}


export default Missions;
