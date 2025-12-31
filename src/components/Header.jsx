import { Link } from 'react-router';

const Header = () => (
  <nav className="flex gap-4 p-4 bg-slate-800 text-indigo-400 font-bold border-b border-slate-700">
    <Link to="/" className="hover:text-white transition">
      Home
    </Link>
    <Link to="/about" className="hover:text-white transition">
      About
    </Link>
  </nav>
);

export default Header;
