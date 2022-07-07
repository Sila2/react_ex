import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     categories:[]
  // };
  // }

  state={
    categories:[]
  };

//component yerleşti, ve kategorileri doldurdu
  componentDidMount(){
    this.getCategories();
  }

  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(responsive=>responsive.json())
    .then(data=>this.setState({categories:data}));
  }
  

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>

        {/* bootstrap */}
        {/* <ul className='list-group'>
          {
            this.state.categories.map(category=>(
              <li className='list-group-item list-group-item-action'  aria-current={category.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</li>
            ))
          }
        </ul> */}

        <ListGroup>
          {this.state.categories.map(category=>(
            <ListGroupItem action active={category.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>

        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
