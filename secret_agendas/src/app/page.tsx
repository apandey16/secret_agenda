'use client';
import React from 'react';
import Home from '../pages/home/home';
import Missions from '../pages/missions/missions';
import { HashRouter, Route, Routes } from "react-router-dom";

export default function main() {
  return (
    // Might need to change this to BrowserRouter
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/missions" element={<Missions />}/>
      </Routes>
    </HashRouter>
  );
}
