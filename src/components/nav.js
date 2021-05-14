import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  let title = state.frontity.title;

  return (
    <NavContainer>
      <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <Link className={"navbar-brand"} link="/">
            <strong>{title}</strong>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto d-flex align-items-center">
              {state.theme.menu.map(([name, link]) => {
                // Check if the link matched the current page url
                const isCurrentPage = state.router.link === link;
                return (
                  <NavItem className="nav-item" key={name}>
                    {/* If link url is the current page, add `aria-current` for a11y */}
                    <Link
                      className={"nav-link" + (isCurrentPage ? " active" : "")}
                      link={link}
                      aria-current={isCurrentPage ? "page" : undefined}
                    >
                      {name}
                      {isCurrentPage ? (
                        <span className="sr-only">(current)</span>
                      ) : (
                        ""
                      )}
                    </Link>
                  </NavItem>
                );
              })}
            </ul>

            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item highlight">
                <a
                  target="_blank"
                  className="nav-link"
                  href="https://github.com/Wiz-Amit/mundana-frontity-theme"
                >
                  Get this Theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav``;

const NavItem = styled.li``;
