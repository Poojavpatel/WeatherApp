import React, { Component } from 'react';

class Titles extends Component {
  render() {
    return (
      	<div className="pic">
      		{this.props.temprature &&
		 	<h1> {(this.props.temprature-273.15)+"°"}</h1>
		 	}
		 	{this.props.maindescription &&
			<h2>{this.props.maindescription}</h2>
			}
		</div>
    );
  }
}

export default Titles;

/*<div class="pic">
  <h1>24°</h1>
  <h2>Rainy</h2>
</div>*/