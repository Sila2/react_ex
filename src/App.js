//import { Container } from 'react-bootstrap';
//import { Col, Row } from 'reactstrap';
import React, { Component } from 'react'
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';
import {Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import CartList from './components/CartList';

export default class App extends Component {

  state={currentCategory:"", products:[], cart:[]};

  componentDidMount(){
    this.getProducts();
  }

  changeCategory=category=>{
    this.setState({currentCategory:category.categoryName});
    this.getProducts(category.id);
  };

  getProducts=categoryId=>{
    let url="http://localhost:3000/products";
    if(categoryId){
      url += "?categoryId" + categoryId;
    }
    fetch(url)
    .then(responsive=>responsive.json())
    .then(data=>this.setState({products:data}));
  }

  addToCart=(product)=>{
    let newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product, quantity:1});
    }
    this.setState({cart:newCart});
  }

  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id)
    this.setState({cart:newCart})
  }

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
              <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
          </div>
          <br />
          <div className='row'>
            <div className='col-3'>
              <CategoryList 
              currentCategory={this.state.currentCategory} 
              changeCategory={this.changeCategory} 
              info={categoryInfo}
              />
            </div>
            <div className='col-9'>
              <Switch>
                <Route exact path='/' render={props=>(
                  <ProductList 
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory} 
                  info={productInfo}
                  />
                )}
                />
                <Route component={NotFound} />
                <Route exact path='/cart' component={CartList} />
              </Switch>             
            </div>
          </div>
        </div>       
      </div>
    )
  }
}

