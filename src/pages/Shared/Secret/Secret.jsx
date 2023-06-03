import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";
const Secret = () => {
  return (
    <div className="pt-28">
      <h2>this is secret</h2>
      {/* <div className="flex justify-center items-center min-h-[calc(100vh-230px)]  ">
        <PuffLoader className="flex items-center mt-[64px]"
          color="#ff5154"
          // loading={loading}

          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div> */}
      <div className="navbar-center">
      <ul className="menu menu-horizontal"><li><Link >His </Link></li></ul>
      </div>

      
    </div>
  );
};

export default Secret;
