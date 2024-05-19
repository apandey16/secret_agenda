'use client';
import React from 'react';
import Header from '../components/header/header';
import { rewards } from '../components/TaskHandler/rewards';
import { useNavigate } from "react-router-dom";


const Success: React.FC = () => {
    const navigate = useNavigate();

    function handleClick() {   
        navigate("/missions");
    }

    function generateReward() {
        const randomIndex = Math.floor(Math.random() * Object.keys(rewards).length);
        const rewardKey = Object.keys(rewards)[randomIndex];
        const reward = rewards[rewardKey as unknown as keyof typeof rewards]; // Add index signature
        return reward;
    }

    return (
        <main>
            <Header/>
            <pre style={{ textAlign: 'center' }}> 
                {"Congratulations!\nYou were assigned a task and you completed it.\nWhat do you want? A cookie? You can't have one.\nYou have to keep working.\nTo keep you going we have given you a reward. Collect it and move on to the next task."}
                {"\n\nYour Reward:\n"}
                {generateReward()}
                {"\n\nOnce you are ready to continue, click the button below and you will get a new task."}
            </pre>
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

export default Success;

