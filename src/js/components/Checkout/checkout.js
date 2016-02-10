var React = require('react');
var Link = require('react-router-component').Link;
var Checkout = React.createClass({
    render:function(){
        return (
            <div className="row">
                <div className="col-sm-10">
                    <h3>In Progress..</h3>
                </div>
                <div className="col-sm-10">
                    <Link href='/'>Back to home</Link>
                </div>
            </div>
        );
    }
});

module.exports = Checkout;
