import React from 'react'
import Timelock from '../../utils/timelock/Timelock'
import DrawerLayout from '../../layout/Drawer/DrawerLayout'
import { useHistory, Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import './step2.css';


const step2 = () => {
  return (
    <div>
        <DrawerLayout>
        <Row className="row-pasos">
            <Col xs={12} className="col-pasos">
              <div className="icons-pasos">
                <CheckIcon />
                <div className='border'>
                  <label className="paso paso1">1</label>
                </div>
              </div>
              <div className="icons-pasos-middle">
                <CheckIcon />
                <label className="paso paso2">2</label>
              </div>
              <div className="icons-pasos">
                <CheckIcon />
                <label className="paso paso3">3</label>
              </div>
            </Col>
          </Row>
        <Timelock/>
        <div className="btn-div">
                  <button className="custom-btn btn-atras">Atras</button>
                    <Link to="/step3" className="links-footer">
                  <button className="custom-btn btn-siguiente">
                      Siguiente
                    
                  </button>
                  </Link>
                </div>
        </DrawerLayout>
    </div>
  )
}

export default step2