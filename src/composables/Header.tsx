const Header = () => {
  return (
    <header className="w-1080 mx-auto h-72 flex items-center justify-between sticky top-0 inset-x-0">
      <span className="navbar-brand">condult</span>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Sign in
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">
            Sign up
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
