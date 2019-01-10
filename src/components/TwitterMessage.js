import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: " "
    };
  }
  
  handlesTwitterMessage= (event) => {
    this.setState( {
      value: event.target.value
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
