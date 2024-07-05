import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-cont">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="ul-items-cont">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1>content</h1>
              <p>
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-navbar">
              <h1 className="left-heading">Right Navbar Menu</h1>
              <ul className="ul-items-cont">
                <li className="right-items">Ad 1</li>
                <li className="right-items">Ad 2</li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
