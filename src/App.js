//import { Container } from 'react-bootstrap';
//import { Col, Row } from 'reactstrap';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';


function App() {
  let categoryInfo={title:"CategoryList", x:"y"}
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
            <CategoryList info={categoryInfo}/>
          </div>
          <div className='col-9'>
            <ProductList/>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
