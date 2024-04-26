import { Menu, Container, Icon, Label, MenuItem } from "semantic-ui-react";

import Link from "next/link"

export const Header = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          bird.said
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Label>
            <Icon name="shopping cart" /> 0
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => {
        <Menu.Item key={index}>
          <Link href={navItem.href ?? "#"}>{navItem.label}</Link>
        </Menu.Item>
      })}
    </>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Catalog",
    href: "/catalog",
  },
  {
    label: "Checkout",
    href: "/checkout",
  },
];

export default Header;
