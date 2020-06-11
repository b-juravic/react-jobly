import React, { useContext } from "react"
import { Link } from "react-router-dom";
import UserDataContext from "./UserDataContext";
import "./Home.css";
import capitalize from "lodash.capitalize";

/** TODO: CREDIT PHOTOGRAPHER: Image by <a href="https://pixabay.com/users/GDJ-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3846597">Gordon Johnson</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3846597">Pixabay</a>  */

// TODO: Decided styling- background behind welsome message or not

/**
 * Renders home page with welcome message if user logged in or log in link if not.
 *
 * Connects to context to access userData to determine if user authenticated.
 * -- loggedInUserData.loggedOut: boolean
 *
 * App -> Routes -> Home
 */
function Home() {
  const { loggedInUserData } = useContext(UserDataContext);
  const firstName = capitalize(loggedInUserData.userInfo.first_name);

  return (
    <div className="Home">
      <h1 className="display-2">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {!loggedInUserData.loggedOut
        ? <h2>Welcome Back, {firstName}!</h2>
        : <Link
            className="btn btn-primary btn-md font-weight-bold"
            to="/login">
          Log In
          </Link>}
    </div>
  );
}

export default Home;

// styled with card
// return (
//   <div className="Home container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//     <div className="Home-content card">
//       <div className="intro card-body text-center">
//         <h1 className="display-2 card-title">Jobly</h1>
//         <p className="lead card-text">All the jobs in one, convenient place.</p>
//         {!loggedInUserData.loggedOut
//           ? <h2>Welcome Back, {firstName}!</h2>
//           : <Link
//               className="login-btn btn-primary btn btn-md font-weight-bold card-link"
//               to="/login">
//             Log In
//             </Link>}
//         </div>
//     </div>
//   </div>
// );
