import headerStyles from "./Header.module.scss"
import {Link} from 'gatsby'
import Logo from "./../../images/logo.svg"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Icon,
} from "reactstrap"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar expand="md" className={headerStyles.headermain} fixed='top' >
        <NavbarBrand>
          <img src={Logo} className={headerStyles.image} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={headerStyles.toogle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <Nav className="mr-right" navbar>
            <NavItem>

              <NavLink className={headerStyles.links} id={headerStyles.how_works}>
                <Link to="./howitworks" className={headerStyles.pages}  >
                How it works
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={headerStyles.links}>
              <Link to="./login" className={headerStyles.pages}>
              Apply
                </Link>  
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                Available programs
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}> <Link to="./artificial-inteligence" className={headerStyles.pages}>Artificial inteligence</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./cloud-native" className={headerStyles.pages}>Cloud Native and Mobile Web</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./block-chain" className={headerStyles.pages}>Blockchain</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./iot" className={headerStyles.pages}>Internet Of Things</Link> </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                Student center
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}><Link to="./entrytestkarachi" className={headerStyles.pages}>Karachi Entry Test Announcement</Link></DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./scheduleofclasses" className={headerStyles.pages}>Commencement of Classes</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                About
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}><Link to="./about" className={headerStyles.pages}>The President</Link></DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./managementcommittee" className={headerStyles.pages}>Management Committie</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className={headerStyles.links}>
                <Link to="./WIT" className={headerStyles.pages}>WIT</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header