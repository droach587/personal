import React from "react"
import BrandSvg from "BrandSvg";

const Header = () => (
  <header className="mainHeader">
    <div className="internal-wrapper-clone">
      <div className="row expanded align-middle align-justify">
        <div className="columns small-3 medium-expand">
          <BrandSvg/>
        </div>
        <nav className="columns small-9 medium-expand text-right">
          <ul className="mainNav">
            <li><a href="mail&#116;o&#58;dro&#37;&#54;1c&#104;&#37;358%37%&#52;0gmail&#46;com">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/david-roach-v-13ab4a10/" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="https://github.com/droach587" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
