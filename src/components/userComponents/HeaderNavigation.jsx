import { Link } from "react-router-dom";

const HeaderNavigation = ({title}) => {
    return (
      <>
        <div className="fixed-top py-3 px-3 border-light z-50 bg-dark shadow-lg">
          <div className="d-flex align-items-center">
            <div className="cursor-pointer d-flex gap-2 bg-gray-200 hover-opacity-50">
               <Link to="/dashboard/app" aria-label="Go to Dashboard">
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L2 8.19333L11 16"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              </Link>
            </div>
            <span className="text-center text-light mb-0 m-auto">{title}</span>
          </div>
        </div>
      </>
    );
}
 
export default HeaderNavigation;