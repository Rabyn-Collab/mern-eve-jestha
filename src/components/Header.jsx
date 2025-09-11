import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button
} from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { removeUser } from "../features/user/userSlice";
import { base } from "../app/mainApi";


export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl">SHOPIFY</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="secondary" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {user ? <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={`${base}/${user.image}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem
              onClick={() => dispatch(removeUser())}
              key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent> : <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <NavLink to={'/login'}>Login</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={'/register'}>
            Sign Up
          </NavLink>

        </NavbarItem>
      </NavbarContent>}




    </Navbar>
  )
}
