import {Navbar, NavbarBrand, NavbarContent, NavbarItem,NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";
import { Link } from "react-scroll"
import { useEffect, useRef, useState } from "react";

export const menuItems = [
  {
    name: "Accueil",
    to: "home"
  },
  {
    name: "A propos",
    to: "about"
  },
  {
    name: "Compétences",
    to: "skills"
  },
  {
    name: "Contact",
    to: "test1"
  },
  
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    menu.current.click()
  }
  const menu = useRef()
  useEffect(()=> {
    setIsMenuOpen(false)
  }, [isMenuOpen])

    return(
        <Navbar className="bg-[rgba(20,29,46,.8)] max-sm:flex max-sm:justify-around " >
      <NavbarBrand className="text-yellow" >
        <p className="font-bold text-inherit">NB</p>
      </NavbarBrand>
      <NavbarContent className="hidden  sm:flex gap-4" justify="center">
        <NavbarItem >
          <Link activeClass="active" activeStyle={{color:'red'}}  to="home" 
      spy={true} 
      smooth={true} 
      // offset={5} 
      duration={500}  href="#">
            Accueil
          </Link>
        </NavbarItem>
        <Spacer/>
        <NavbarItem >
          <Link  activeClass="active" activeStyle={{color:'red'}} to="about" 
      spy={true} 
      smooth={true} 
      offset={-70} 
      duration={500}  aria-current="page">
            <span className="text-white hover:cursor-pointer " >
                A propos
            </span>
          </Link>
        </NavbarItem>
        <Spacer/>
        <NavbarItem>
          <Link  activeClass="active" to="skills" 
      spy={true} 
      smooth={true} 
      offset={-70} 
      duration={500}  color="foreground" href="#">
            <span className="text-white" >
                Compétences
            </span>
          </Link>
        </NavbarItem>
        <Spacer/>
        <NavbarItem>
          <Link activeClass="active" to="test1" 
      spy={true} 
      smooth={true} 
      // offset={50} 
      duration={500}  className="text-red" href="#">
            <span className="text-white" >
                Contact
            </span>
          </Link>
        </NavbarItem>
      </NavbarContent>
        <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onChange={(isMenuOpen: boolean) =>console.log(isMenuOpen)}
            ref={menu}
            className="sm:hidden max-sm:flex max-sm:justify-end "
        />
      <NavbarMenu className=" bg-[#141D2E] bg-blur-sm  " >
        {menuItems.map((item, index) => (
          <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`}>
            <Link
              className="w-full hover:cursor-pointer "
              to={item.to}
              onClick={()=> toggle()}
              
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}