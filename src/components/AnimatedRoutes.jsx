import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Form } from "./Form";
import { Form2 } from './Form2';
import { Form3 } from './Form3';
import { Form4 } from './Form4';
import {AnimatePresence} from 'framer-motion'


export const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
                <Route  path="/" element={<Form />} />
                <Route  path="/form2" element={<Form2 />} />
                <Route  path="/form3" element={<Form3 />} />
                <Route  path="/form4" element={<Form4 />} />
        </Routes>
    </AnimatePresence>
  )
}
