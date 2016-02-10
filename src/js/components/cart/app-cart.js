var React = require('react');
var AppStore = require('../../stores/app-store.js');
var RemoveFromCart = require('./app-removefromcart.js');
var Increase = require('./app-decreaseitem')
var Decrease = require('./app-increaseitem')
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router-component').Link

function cartItems(){
  return {items: AppStore.getCart()}
}

var Cart = React.createClass({
  mixins:[StoreWatchMixin(cartItems)],
  render:function(){
    var total = 0;
    var items = this.state.items.map(function(item, i){
      var subtotal = item.cost * item.qty;
      total += subtotal;
      return (
          <tr key={i}>
            <td><RemoveFromCart index={i} /></td>
            <td><img className="img-responsive" src={item.img} /></td>
            <td><h4>{item.title}</h4></td>
            <td>{item.qty}</td>
            <td>
              <Decrease index={i} />
              <Increase index={i} />
            </td>
            <td><h5>GBP {subtotal}</h5></td>
          </tr>
      );
    })
    return (
      <div>
      <table className="table table-hover cart-table">
          <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-right"><h4>Total</h4></td>
                <td> <h4>GBP {total}</h4></td>
              </tr>
            </tfoot>
          </table>
          <Link href="/">Continue Shopping</Link>
          <div>
              {total > 0 ?<Link className="btn btn-primary btn-lg pull-right" href="/checkout">Checkout</Link> : ""}
          </div>
        </div>
    )
  }
});

module.exports = Cart
