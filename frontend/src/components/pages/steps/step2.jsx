import React from 'react'
import Timelock from '../../utils/timelock/Timelock'
import StepsCount from '../../utils/stepsCount/stepsCount';
import { useHistory, Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import './step2.css';


const step2 = () => {
  return (
    <div>
      <StepsCount />
      <Timelock />
      <div className="btn-div">
        <button className="custom-btn btn-atras">Atras</button>
        <Link to="/step3" className="links-footer">
          <button className="custom-btn btn-siguiente">
            Siguiente

          </button>
        </Link>
      </div>
    </div>
  )
}

export default step2