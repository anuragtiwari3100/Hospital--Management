import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doctors } from './../assets/assets';
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { specialty } = useParams(); 
  const {doctors}  = useContext(AppContext);
  return (
    <div>
      <p>General physician</p>
      <p>Gynecologist</p>
      <p>Dermatologist</p>
      <p>Pediatricians</p>
      <p>Neurologist</p>
      <p>Gastroenterologist</p>
     <p>Browse through the doctors speciality</p>
    </div>
  

  );
};

export default Doctor;
