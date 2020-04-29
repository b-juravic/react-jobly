Notes from demo:
Home page - not logged in
* Navbar with link to login
* login button link also in body
  * login link displays login form and button to signup

* sign up link displays sign up form

Login
NavBar
  * links to companies, jobs, profile, logout

Jobs List
* user successful login- jobs list is rendered along with search bar
  * else invalid credentials message displayed
* Each job has button
  * if already applied it says applied and is disabled
  * if not already applied, it says apply and can be clicked to toggle to apply/disabled

Companies List
* search bar
* list of companines with company description
* can click each company to navigate to companies detail page which loads jobs for this company
  * companies/:name
  * can apply to jobs from this page too?

Profile
  * displays user profile form
  * user can submit change to profile
  * changes not permitted should display error message?
  * invalid credentials should display error message?

Logout link
  * logs out user and redirects to home page

Component Design Notes:

App.js

Routes.js

NavBar.js

SearchBar.js
* form data state

<!-- ListContainer.js (filters if companies or jobs)
  * conatiner for rendering the companies or jobs
  * use useParams to determine if company or job path to send backend request
  * if job path
    * <Jobs/>
  * if company path
    * <Companies/> -->

Companies.js
  * if use params included company name... render Jobs and pass name as prop
  * companies state
  * <ul> comapnies.map...<Company/> <ul>

Company.js
  * renders single company/details <li>

Jobs.js (could have company prop)
 * all or filtered by company
 * make backend request for job list and update state
 * jobs state
 * <ul> jobs.map...<Job/> </ul>

Job.js
  * renders single job/details <li>

UserEditProfileForm.js
  * form data state

UserSignUpForm.js
  * form data state

UserLoginForm.js
  * form data state

NotFound.js
  * if user types in an invalid url path, render with a not found message or should we just use Redirect?





**TODO**
We'll need to think about OBJ format for API helpers that have an id/handle & data (updates) && _token

for JOBLY API
Company — auth on backend, do we need to do anything? send token?
	X getAllCompanies
	X postNewCompany - post
	X updateCompany - patch
	X deleteCompany - delete

Jobs
	getAllJobs
	getOneJob -
	postNewJob - post
	updateJob - patch
	deleteJob - delete
	applyToJob - post

Users
	updateUser - patch  (for updateUserForm)
	

TODO:
  maintain handle/id for accessing company/job info (as our key?)



  // Our component hierarchy, showing which component gets rendered by a parent
// component. There are some components (JobCard, Search, Alert) which appear
// several times --- they're the same component, but they are rendered by
// different parents.
// App                  : overall application
// ├── Navigation       : navigation bar on every page
// └─┬ Routes           : all <Route> components
//   ├─┬ Companies      : list of all companies
//   │ ├── CompanyCard  : a single company appearing on the list
//   │ └── Search       : the search widget (here, appearing on company list)
//   ├─┬ Company        : detail page for a company
//   │ └── JobCard      : info about job (here, rendered as part of company)
//   ├── Home           : homepage of site
//   ├─┬ Jobs           : list of all jobs
//   │ │ └── JobCard    : info about job (same component, now rendered in job list)
//   │ └── Search       : the search widget (here, appearing on job list)
//   ├─┬ Login          : login/signup route [see footnote]
//   │ └── Alert        : an "alert" component for showing up login success/failure
//   ├── PrivateRoute   : private routes (don't worry about this for now)
//   └─┬ Profile        : profile page
//     └── Alert        : same "alert", now used for success/failure of saving
// Footnote about "Login": this is the combined login/register form; we built
// this as one component, since they are similar and share some features. Another
// good option would be having separate components for login and register forms.