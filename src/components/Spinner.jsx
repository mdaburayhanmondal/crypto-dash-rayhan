import { BarLoader } from 'react-spinners';

const Spinner = ({ color = 'blue' }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <BarLoader
        color={color}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
