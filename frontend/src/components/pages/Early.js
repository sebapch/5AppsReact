import React from 'react'
import { Row, Col } from 'antd';


const Early = () => {
    return (
        <>
        <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >col-6</div>
      </Col>
    </Row>
    </>
    )
}

export default Early