import React from 'react';
import { 
    Button,
    Row,
    Col,
 } from 'react-bootstrap';
//  import Spinner from 'react-bootstrap/Spinner'
 import List from '../core/list/List'

class Convert extends React.Component {

    render(){
        return(

            <Row>

                <Col xs={{ span: 12, order: 'first'}} className="mb-3">
                </Col>

                <Col xs={{ span: 12, order: 2 }} md={10} lg={6}>

                    <Row>

                    <Col xs={{ span: 12, order: 'first' }} sm={8} lg={12} xl={8}>
                    {/* <Col xs={{ span: 12, order: 'first' }} sm={12} lg={12}> */}
                        <List
                            default = 'bitcoin'
                            listOf = 'coins'
                            listContent = {this.props.coins}
                        />
                    </Col>

                    <Col xs={{ span: 12, order: 'last' }} sm={4} lg={12} xl={4}>
                        <List
                            default = 'eur'
                            listOf = 'fiats'
                            listContent = {this.props.fiats}
                        />
                    </Col>

                    </Row>

                </Col>

                <Col xs={{ span: 3, order: 3 }} md={{ span: 2, order: 3 }}  xl={1}>

                    <Button variant="secondary" disabled>
                        convertir
                    </Button>

                </Col>

                <Col xs={{ span: 6, order: 'last' }} md={{ span: 4, offset: 4 }} lg={{ span: 3, offset: 0, order: 1 }} xl={{ span: 3, offset: 0, order: 1 }}>
                
                    <div className="card">
                        <div className="card-body">
                            <h5>1 truc = 5 machins</h5>
                        </div>
                    </div>

                </Col>

            </Row>
        )
    }
}

export default Convert;