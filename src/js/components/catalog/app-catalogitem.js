var React = require('react');
var Link = require('react-router-component').Link;
var AddToCart = require('./app-addtocart');

var CatalogItem = React.createClass({
  render:function(){
      return (
          <div className="col-sm-3">
            <h4>{this.props.item.title}</h4>
             <Link href={'/items/' + this.props.item.id}><img className="img-responsive" src={this.props.item.img} alt={this.props.item.title} /></Link>
              <p className="price">{this.props.item.currency} {this.props.item.cost} <span className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}</span></p>
              <p>{this.props.item.summary}</p>
            <div className="btn-group btn-group-md">
            <Link href={'/items/' + this.props.item.id} className="btn btn-info">Details</Link>
            <AddToCart item={this.props.item} />
            </div>
          </div>

        )
  }
});

module.exports = CatalogItem;
