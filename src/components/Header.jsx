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
import { NavLink, useNavigate } from "react-router";
import { removeUser } from "../features/user/userSlice";
import { base } from "../app/mainApi";


export default function Header() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();
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
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>

            {user.role === 'Admin' ? <>
              <DropdownItem key="profile">Profile</DropdownItem>
              <DropdownItem
                onClick={() => nav('/admin-panel')}
                key="admin_panel">Admin Panel</DropdownItem>

            </> : <>
              <DropdownItem key="profile">Profile</DropdownItem>
              <DropdownItem key="carts">Carts</DropdownItem>
            </>}

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
