import React from 'react';

const GameRules: React.FC = () => {
    return (
            <pre  style={{ textAlign: 'center' }}>
                {
                "Hello agent. You will be assigned a mission that you must complete through the course of the night.\nIf you fail to complete the mission, there will be consquences.\nIf you complete the mission, you will be rewarded and will be assigned a new task.\nGood luck.\n\nPlease click continue when you are ready to begin."
                }
            </pre>
    );
};


export default GameRules;