import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      
    <div className="Navbar">
    <li><NavLink to="/" exact>Home</NavLink></li>
    <li><NavLink to="/movies" exact>Movies</NavLink></li>
    <li><NavLink to="/actors" exact>Actors</NavLink></li>
    <li><NavLink to="/directors" exact>Directors</NavLink></li>
    </div>
    </div>
  );
  };
export default NavBar