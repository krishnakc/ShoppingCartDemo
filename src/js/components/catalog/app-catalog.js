var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('./app-addtocart.js')
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var CatalogItem = require('../catalog/app-catalogitem');
var CCarousel = require('../Carousel/carousal');

function getCatalog(){
  return {items: AppStore.getCatalog()}
}

var Catalog = React.createClass({
  mixins:[StoreWatchMixin(getCatalog)],
  render:function(){

    var items = this.state.items.map(function(item){
      return <CatalogItem key={item.id} item={item} />

    })
    return (
        <div className="container">
          <CCarousel />
          <div className="row">
              <h1>Featured Products</h1>
            {items}
          </div>
        </div>

    )
  }
});

module.exports = Catalog;
