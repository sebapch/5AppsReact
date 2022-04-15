import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import Timelock from '../../utils/timelock/Timelock'
import StepsCount from '../../utils/stepsCount/stepsCount';
import { Container, Row, Col } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import './step2.css';


const Step2 = () => {
  const history = useHistory();

  return (
    <div>
      <StepsCount />
      <Timelock />
      <div className="btn-div">
        <button className="custom-btn btn-atras" onClick={() => history.goBack()}>Atras</button>
        <Link to="/step3" className="links-footer">
          <button className="custom-btn btn-siguiente">
            Siguiente

          </button>
        </Link>
      </div>
    </div>
  )
}

export default Step2