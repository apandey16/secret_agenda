import React from 'react';
import { useHistory } from 'react-router-dom';

interface ButtonProps {
    text: string;
    route?: string;
    fetchData?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, route, fetchData }) => {
    const history = useHistory();

    const handleClick = () => {
        if (route) {
            history.push(route);
        }

        if (fetchData) {
            fetchData();
        }
    };

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
};

export default Button;