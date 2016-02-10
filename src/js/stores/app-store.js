var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _mock = require('../../assets/products/mock.js')

var CHANGE_EVENT = 'change';

var _catalog = _mock.products;

var _cartItems = [];

function _removeItem(index){
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem(index){
  if(_cartItems[index].qty < _cartItems[index].available) {
    _cartItems[index].qty++;
  } else {
      alert("We regret :( Stock not available.., suggest to you come back after some time ");
  }

}

function _decreaseItem(index){
  if(_cartItems[index].qty>1){
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}

function _addItem(item){
  if(!item.inCart){
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
}

function _cartTotals(){
  var qty =0, total = 0;
  _cartItems.forEach(function(cartItem){
    qty+=cartItem.qty;
    total+=cartItem.qty*cartItem.cost;
  });
  return {'qty': qty, 'total': total};
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart: function(){
    return _cartItems
  },

  getCatalog: function(){
    return _catalog
  },

  getCartTotals: function(){
    return _cartTotals()
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;
    }

    AppStore.emitChange();

    return true;
  })

})

module.exports = AppStore;
