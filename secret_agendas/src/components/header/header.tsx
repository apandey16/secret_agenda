import React from 'react';


const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <h1>Secret Agenda!</h1>
            <pre>
                {
                "Hello agent. You will be assigned a mission that you must complete through the course of the night.\nIf you fail to complete the mission, there will be consquences.\nIf you complete the mission, you will be rewarded and will be assigned a new task.\nGood luck.\n\nPlease click continue when you are ready to begin."
                }
            </pre>
        </header>
    );
};


export default Header;