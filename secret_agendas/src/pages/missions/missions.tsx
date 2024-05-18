import React from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/header';


const Missions: React.FC = () => {    
    const userId = Cookies.get("userId");

    return (
        <main>
           <Header />
        </main>
    );
}

export default Missions;
