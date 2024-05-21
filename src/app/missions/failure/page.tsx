'use client';
import React from 'react';
import Header from '../../../../components/header/header';
import { punishments } from '../../../../components/TaskHandler/punishments';
import { useRouter } from 'next/navigation';
// import { useNavigate } from "react-router-dom";

const Failure: React.FC = () => {
    const navigate = useRouter();

    function handleClick() {   
        navigate.push("/missions");
        // console.log("Continue");
    }

    function generatePunishment() {
        const randomIndex = Math.floor(Math.random() * Object.keys(punishments).length);
        const punishmentKey = Object.keys(punishments)[randomIndex];
        const punishemnet = punishments[punishmentKey as unknown as keyof typeof punishments]; // Add index signature
        return punishemnet;
    }

    return (
        <main>
            <Header/>
            <pre style={{ textAlign: 'center', textWrap:'wrap' }}> 
                {"Congratulations, your father was right!\nYou were assigned a SIMPLE task and you failed.\nYou are a failure.\nYou have to keep working.\nTo keep you going we have given you a punishment. Accept it and move on to the next task. If you chose not to do the punishemnet, you must take a shot"}
                {"\n\nYour Punishment:\n"}
                {generatePunishment()}
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
export default Failure;

