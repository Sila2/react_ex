import React, { Component } from 'react'

export default class CartSummary extends Component {
  renderSummary(){
    return(
        <div>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Your Cart - {this.props.cart.length}</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.props.cart.map(cartItem=>(
                    <li><a className="dropdown-item" key={cartItem.product.id} >{cartItem.product.productName} <span className='badge bg-secondary bg-success'>{cartItem.quantity}</span> <span className='badge bg-secondary bg-danger' onClick={()=>this.props.removeFromCart(cartItem.product)}>-</span>
                    </a></li>
                ))}
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
      </div>
    );
  }
  renderEmptyCart(){
    return(
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Empty Cart</a>
        </li>
    );
  }  
  render() {
    return (
      <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
      </div>
    );
  }
}
