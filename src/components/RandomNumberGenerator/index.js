import {component} from 'react'
import './index.css'

class RandomNumberGenerator extends component {
  state = {count: 0}

  onClickGenerateButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="whole-app-container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p className="detail">Generate a number in the range of 0 to 100</p>
          <div className="btn-container">
            <button
              className="gen-button"
              type="button"
              onClick={this.onClickGenerateButton}
            >
              Generate
            </button>
            <p>0</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
