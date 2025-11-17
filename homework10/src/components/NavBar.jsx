import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setSearch } from '../redux/actions/searchAction';

export default function NavBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
          Characters
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "active-link" : ""}>
          Favorites
        </NavLink>

        <input type="text" placeholder='Search Character' onChange={handleSearch} />
      </nav>
    </>
  );
}
