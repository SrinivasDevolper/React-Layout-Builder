import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      console.log(showContent, showLeftNavbar, showRightNavbar)

      const checkContent = () => {
        onToggleShowContent()
      }

      const checkLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const checkRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="control-bg">
          <h1 className="control-heading">Layout</h1>
          <ul className="control-ul">
            <li className="input-list" onChange={checkContent}>
              <input
                type="checkbox"
                id="contentId"
                checked={showContent}
                value={showContent}
              />
              <label htmlFor="contentId">content</label>
            </li>
            <li className="input-list" onChange={checkLeftNavbar}>
              <input
                type="checkbox"
                id="leftNavbarId"
                checked={showLeftNavbar}
                value={showLeftNavbar}
              />
              <label htmlFor="leftNavbarId">Left Navbar</label>
            </li>
            <li className="input-list" onChange={checkRightNavbar}>
              <input
                type="checkbox"
                id="rightNavbarId"
                checked={showRightNavbar}
                value={showRightNavbar}
              />
              <label htmlFor="rightNavbarId">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
