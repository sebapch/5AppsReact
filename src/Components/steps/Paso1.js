import React from "react";
import Dashboard from "../../Dashboard";
import './steps.css';
import { Row, Col, Checkbox } from "antd";

const Paso1 = () => {
    return (
        <>
        
            <Row justify="center" className="steps" gutter={16}>
                <Col span={1} className="gutter-row">
                    <Checkbox defaultChecked disabled />
                    <h4 className="box box-active">
                        1
                    </h4>
                </Col>
                <Col span={1} className="gutter-row">
                    <Checkbox defaultChecked disabled />
                    <h4 className="box box-active">
                        2
                    </h4>
                </Col>
                <Col span={1} className="gutter-row">
                    <Checkbox defaultChecked disabled size="small"/>
                    <h4 className="box box-active">
                        3
                    </h4>
                </Col>
            </Row>
        
          
        </>
    );
};

export default Paso1