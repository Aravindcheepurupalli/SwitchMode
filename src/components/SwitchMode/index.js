import {Component} from 'react'
import './index.css'

class SwitchMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const headingText = isDarkMode ? 'Light' : 'Dark'

    return (
      <div className={`app-container ${modeClassName}`}>
        <div className="container">
          <h1 className="heading">
            Click To Change <span>{headingText}</span> mode
          </h1>
          <label className="switch" htmlFor="mode-switch">
            <input
              id="mode-switch"
              type="checkbox"
              checked={!isDarkMode}
              onChange={this.onClickButton}
            />
            <span className="slider round" />
          </label>
        </div>
      </div>
    )
  }
}

export default SwitchMode
