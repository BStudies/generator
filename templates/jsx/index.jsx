var React = require('react');
 
class HelloMessage extends React.Component {
    constructor(){
        super();
        this.state = {
           
        }
    }
  
  
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
 
module.exports = HelloMessage;
