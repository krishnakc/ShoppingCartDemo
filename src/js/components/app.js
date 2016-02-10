var React = require('react');
var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail');
var Template = require('./app-template.js');
var Locations = Router.Locations;
var Location  = Router.Location;
var CCarousel = require('./Carousel/carousal');
var Checkout = require('./checkout/checkout');

var App = React.createClass({
  render:function(){
    return (
        <div className="cotainer">
          <Template>
            <Locations>
              <Location path="/" handler={Catalog} />
              <Location path="/cart" handler={Cart} />
              <Location path="/items/:item" handler={CatalogDetail} />
              <Location path="/checkout" handler={Checkout} />
            </Locations>
          </Template>
        </div>
    );
  }
});

module.exports = App;
