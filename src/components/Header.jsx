import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  FireIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  TagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { token } = useAuthContext();

  return (
    <>
      {showNav && <div className="overlay"></div>}
      <header className="py-5 main-header">
        <div className="center flex items-center justify-between">
          {/* logo */}
          <Link
            to={token ? "/" : "/guest"}
            className="flex items-center gap-2 flex-item-1"
          >
            <MagnifyingGlassIcon width={30} color="#f56565" />
            <h1 className="font-bold text-2xl text-red-500">DiscussQuest</h1>
          </Link>

          <nav className="hidden md:block nav-header flex-item-3">
            <div className="flex items-center gap-2 text-gray-900">
              <NavLink
                to="/categories"
                className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
              >
                <TagIcon width={20} />
                <span>Categories</span>
              </NavLink>
              <NavLink
                to={token ? "/questions" : "/guest/questions"}
                className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
              >
                <QuestionMarkCircleIcon width={20} />
                <span>Questions</span>
              </NavLink>
              <NavLink
                to="/popular"
                className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
              >
                <FireIcon width={20} />
                <span>Popular</span>
              </NavLink>
              {token && (
                <NavLink
                  to="/profile"
                  className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
                >
                  <UserIcon width={20} />
                  <span>Profile</span>
                </NavLink>
              )}
            </div>
          </nav>

          <div className="hidden relative md:block flex-item-2">
            <input
              type="text"
              placeholder="Search a question..."
              className="block w-full py-2 ps-2 pr-7 bg-gray-50 appearance-none border-2 rounded border-gray-300 focus:outline-none focus:border-red-400 text-xs"
            />
            <MagnifyingGlassIcon
              width={20}
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
            />
          </div>

          <div className="hidden md:flex items-center gap-2">
            {!token && (
              <>
                <NavLink
                  to="/guest/login"
                  className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
                >
                  <CursorArrowRaysIcon width={20} />
                  <span>Login</span>
                </NavLink>
                <NavLink
                  to="/guest/signup"
                  className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
                >
                  <ArrowLeftOnRectangleIcon width={20} />
                  <span>Signup</span>
                </NavLink>
              </>
            )}
            {token && (
              <NavLink
                to="/logout"
                className="inline-flex text-gray-900 items-center gap-2 transition-all duration-150 ease-out hover:text-red-500"
              >
                <ArrowRightOnRectangleIcon width={20} />
                <span>Logout</span>
              </NavLink>
            )}
          </div>

          <div className="md:hidden">
            <div>
              <Bars3Icon
                width={30}
                className="cursor-pointer"
                onClick={() => setShowNav(true)}
              />
              <nav className={`navbar ${showNav ? "active" : ""}`}>
                <XMarkIcon
                  width={30}
                  color="#f56565"
                  className="close-btn"
                  onClick={() => setShowNav(false)}
                />

                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                      onClick={() => setShowNav(false)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/categories"
                      className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                      onClick={() => setShowNav(false)}
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={token ? "/questions" : "/guest/questions"}
                      className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                      onClick={() => setShowNav(false)}
                    >
                      Questions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/popular"
                      className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                      onClick={() => setShowNav(false)}
                    >
                      Popular
                    </NavLink>
                  </li>
                  {token && (
                    <>
                      <li>
                        <NavLink
                          to="/profile"
                          className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                          onClick={() => setShowNav(false)}
                        >
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/logout"
                          className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                          onClick={() => setShowNav(false)}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                  {!token && (
                    <>
                      {" "}
                      <li>
                        <NavLink
                          to="/guest/login"
                          className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                          onClick={() => setShowNav(false)}
                        >
                          Login
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/guest/signup"
                          className="text-gray-900 transition-all duration-150 ease-out hover:text-red-500"
                          onClick={() => setShowNav(false)}
                        >
                          Signup
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
