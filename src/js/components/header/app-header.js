var React = require('react');
var CartSummary = require('./app-cartsummary.js');

var Header = React.createClass({
  render:function(){
    return (
        <div className="row">
          <div className="col-sm-6"><h1>Shopper's Stop</h1></div>
          <div className="col-sm-2 col-sm-push-3">
            <CartSummary />
          </div>
       </div>
    );
  }
});

module.exports = Header;
