import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export const Form4 = () => {

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/");
  };

  return (
    <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: "100%" }}
  >
    <div className="container">
      <div className='d-flex justify-content-center my-3'>
          <i className="fa-solid fa-circle-check fs-1 "></i>
      </div>
      <h3 className="text-center">Congratulations, Eren!</h3>
      <h6 className="text-secondary text-center my-1">
        You have completed onboarding, you can start using the Eden.
      </h6>
    </div>
    <div className="container d-flex justify-content-center my-3">
      <div className='divColumn'>
          <form onSubmit={onSubmit}>
            <button className="btn my-3 text-light w-100" type='submit'>Create Workspace</button>
          </form>
        </div>
      </div>
  </motion.div>
  )
}
