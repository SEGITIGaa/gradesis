import { Link } from "../pages/exporter";

const RightBar = () => {
  return (
    <div className="h-screen w-20 bg-gray column gap-5 items-center justify-center">
    
      <Link to={'/list'}>
      <img src="./svg/list.svg" alt="" className="h-6 w-6 cursor-pointer" />
      </Link>
      <Link to={'/login'}>
        <img src="./svg/logout.svg" alt="" className="h-6 w-6 cursor-pointer" />
      </Link>
    </div>
  );
};

export default RightBar;
