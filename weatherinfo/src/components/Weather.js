import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="statpairbox">
        {this.props.temprature &&
          <div className="statpair">
            <div className="statname">Temprature</div>
            <div className="statvalue">{this.props.temprature + " K"}</div>
          </div>
        }
        {this.props.wind &&
          <div className="statpair">
            <div className="statname">Wind</div>
            <div className="statvalue">{this.props.wind + " Km/hr"}</div>
          </div>
        }
        {this.props.humidity &&
          <div className="statpair">
            <div className="statname">Humidity</div>
            <div className="statvalue">{this.props.humidity + "%"}</div>
          </div>
        }
        {this.props.pressure &&
          <div className="statpair">
            <div className="statname">Pressure</div>
            <div className="statvalue">{this.props.pressure + " mb"}</div>
          </div>
        }
        {this.props.description &&
          <div className="statpair">
            <div className="statname">Condition</div>
            <div className="statvalue">{this.props.description}</div>
          </div>
        }
        {this.props.error &&
          <div className="statpair">
            <div className="statvalue">{this.props.error}</div>
          </div>
        }
      </div>
    );
  }
}

export default Weather;





/*<div>
  // {this.props.city && this.props.country && <p>City: {this.props.city} Country: {this.props.country}</p>}
  {this.props.temprature && <p>Temprature: {this.props.temprature}</p>}
  {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
  {this.props.description && <p>Condition: {this.props.description}</p>}
  {this.props.error && <p>{this.props.error}</p>}
</div>*/

/*<div class="statpair">
  <div class="statname">Wind</div>
  <div class="statvalue">27km/hr</div>
</div>
<div class="statpair">
  <div class="statname">Humidity</div>
  <div class="statvalue">37%</div>
</div>
<div class="statpair">
  <div class="statname">Wind</div>
  <div class="statvalue">37%</div>
</div>*/