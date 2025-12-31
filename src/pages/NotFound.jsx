import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="text-center p-20 text-white">
      <h1 className="text-6xl font-bold mb-4 text-red-400">404</h1>
      <p className="mb-6 text-red-400">Oops! This page doesn't exist.</p>
      <Link to="/" className="text-indigo-400 font-bold">
        ← Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
