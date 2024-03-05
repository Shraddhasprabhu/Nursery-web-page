import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div style={{backgroundColor:'greenyellow', padding:10}}>
        <span>
         
          <Link to="/">Home</Link> /
        </span>
        <span>
          <Link to="/about">About</Link> /
        </span>
        <span>
          <Link to="/contact">Contact</Link>/
        </span>
        <span>
          <Link to="/search">Search Plant</Link>
        </span>
        <span></span>
      </div>

      <Outlet />
    </>
  );
};
export default Layout;
