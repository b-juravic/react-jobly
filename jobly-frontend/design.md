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







for JOBLY API
Company — auth on backend, do we need to do anything? send token?
	X getAllCompanies
	X postNewCompany - post
	updateCompany - patchiest
	deleteCompany - delete

Jobs
	getAllJobs
	getOneJob -
	postNewJob - post
	updateJob - patch
	deleteJob - delete
	applyToJob - post

Users
	updateUser - patch  (for updateUserForm)
	