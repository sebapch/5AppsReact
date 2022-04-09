import React from 'react'
import CheckIcon from "@mui/icons-material/Check";

import { Container, Row, Col } from "react-bootstrap";

const StepsCount = () => {
  return (
    <>
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
         
    </>
  )
}

export default StepsCount