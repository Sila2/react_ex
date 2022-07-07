import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.info.title} - {this.props.currentCategory}</h4>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity Per Unit</th>
              <th scope="col">Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map(product=>(
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><button onClick={()=>this.props.addToCart(product)} className='btn btn-info'>add to cart</button></td>
              </tr> 
              ))
            } 
          </tbody>
        </table>
      </div>
    )
  }
}
