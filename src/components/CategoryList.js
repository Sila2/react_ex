import React, { Component } from 'react'

export default class CategoryList extends Component {
  constructor(props){
    super(props);
    this.state={
      categories:[
      {categoryId:1, categoryName:"Beverages"},
      {categoryId:2, categoryName:"Condiments"}
    ]
  };
  }

  

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <ul className='list-group'>
          {
            this.state.categories.map(category=>(
              <li className='list-group-item' onClick={()=>this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</li>
            ))
          }
        </ul>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
