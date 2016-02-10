var React = require('react');
var AppActions = require('../../actions/app-actions');

var IncreaseItem = React.createClass({
  handler: function(){
    AppActions.increaseItem(this.props.index)
  },
  render:function(){
    return <button onClick={this.handler}><img className="inc-dec" src="../../assets/products/plus.png" /></button>
  }
});

module.exports = IncreaseItem;
