import { Box } from "../../shared/ui/Box/index.jsx";
import "./index.scss";
import { Button } from "../../shared/ui/Button/index.jsx";
import logo from "../../shared/assets/logo.svg";
import { Link } from "react-router-dom";

const navigations = [
  { title: "Головна ", href: "/" },
  { title: "Що таке Trading", href: "/about" },
  { title: "Навчання", href: "/contact" },
  { title: "FAQs", href: "/faq" },
];
export const Header = () => {
  return (
    <Box role='banner' as="header">
      <Link to="/">
        <img className="header__title" src={logo} alt="logo" />
      </Link>
      <nav className="header__nav" role='navigation'>
        {navigations.map((nav) => (
          <Link key={nav.title} to={nav.href} className="header__nav-link">
            <span>{nav.title}</span>
          </Link>
        ))}
      </nav>
      <Button classname="header__button">
        <p className="paragraph-small semibold">Написати</p>
      </Button>
    </Box>
  );
};
