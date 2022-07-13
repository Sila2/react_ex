import React, { Component } from 'react'

export default class CartList extends Component {
  renderCart(){
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(cartItem=>(
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <button className='btn btn-outline-danger' onClick={()=>this.props.removeFromCart(cartItem.product)} type='button'>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
  render() {
    return (
      <div>
        CartList
        {this.renderCart()}
      </div>
    )
  }
}
