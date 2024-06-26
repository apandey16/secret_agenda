import React from 'react';
import './style.css'

const GameRules: React.FC = () => {
    return (
            <pre  style={{ textAlign: 'center', textWrap:'wrap' }}>
                {
                "Greetings agent.\nYou will be assigned a mission that you must complete through the course of the night.\nIf you fail to complete the mission, there will be consquences.\nIf you complete the mission, you will be rewarded and will be assigned a new task.\nGood luck.\n\nPlease click continue when you are ready to begin."
                }
            </pre>
    );
};


export default GameRules;