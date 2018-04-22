import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
      	<input type="text" name="city" placeholder="City" />
      	<input type="text" name="country" placeholder="Country" />
      	<button className="btn">Get Weather</button>
      </form>
    );
  }
}

export default Form;


/*<form action="#">
   <input type="text" name="City"  placeholder="City" />
   <input type="text" name="Country"  placeholder="Country" />
   <button class="btn">Get Weather</button>
</form>*/


/*<form onSubmit={this.props.getWeather}>
	<input type="text" name="city" placeholder="City" />
	<input type="text" name="country" placeholder="Country" />
	<button>Get Weather</button>
</form>*/