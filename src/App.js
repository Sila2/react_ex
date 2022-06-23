//import { Container } from 'react-bootstrap';
//import { Col, Row } from 'reactstrap';
import React, { Component } from 'react'
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';

export default class App extends Component {

  state={currentCategory:""}

  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
  };

  render() {
    let productInfo={title:"ProductList"}
    let categoryInfo={title:"CategoryList"}
    return (
      <div>
        {
        //with ReactStrap
        /* <Container>
          <Row>
            <Col>
              <Navi/>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <ProductList/>
            </Col>
            <Col xs="9">
            <CategoryList/></Col>
          </Row>
        </Container> */}
  
        <div className='container'>
          <div className='row'>
              <Navi/>
          </div>
          <div className='row'>
            <div className='col-3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
            </div>
            <div className='col-9'>
              <ProductList currentCategory={this.state.currentCategory} info={productInfo}/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

