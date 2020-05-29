import axios from "axios";

//TODO: add try/catch to each asyn function
// when catch error make array of errors if not already

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem("_joblyToken");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  /**
   * NOTE: also made route requests for routes that require Admin authentication
   */


  /**
   * Companies Requests
   * static functions that can be called to send http requests to the companies routes
   */

  // sends request for a single company given the company handle (PK)
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // endpoint, paramsOrData = {}, verb = "get"
  // sends request for list of all companies
  static async getAllCompanies(searchTerm) {
    let res = !searchTerm ? await this.request(`companies`) : await this.request('companies', { search: searchTerm })
    return res.companies;
  }

  // sends POST request to create a new company
  static async postNewCompany(newCompanyData) {
    let res = await this.request(`companies`, newCompanyData, 'post');
    return res.company;
  }

  // sends PATCH request to update company information at the company handle
  static async updateCompany(companyUpdateData, handle) {
    let res = await this.request(`companies/${handle}`, companyUpdateData, 'patch');
    return res.company;
  }

  // sends DELETE request for the given company handle
  static async deleteCompany(handle) {
    let res = await this.request(`companies/${handle}`, 'delete');
    return res.message;
  }

  /**
* Jobs Requests
* static functions that can be called to send http requests to the Jobs routes
*/

  // sends request for a single job given the job id (PK)
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  // sends request for list of all jobs
  static async getAllJobs(searchTerm) {
    let res = !searchTerm ? await this.request(`jobs`) : await this.request('jobs', { search: searchTerm })
    return res.jobs
  }

  // sends POST request to create a new job
  static async postNewJob(newJobData) {
    let res = await this.request(`jobs`, newJobData, 'post');
    return res.job
  }

  // sends PATCH request to update job information at the job id
  static async updateJob(jobUpdateData, id) {
    let res = await this.request(`jobs/${id}`, jobUpdateData, 'patch');
    return res.job;
  }

  // sends DELETE request for the given job id
  static async deleteJob(id) {
    let res = await this.request(`jobs/${id}`, 'delete');
    return res.message;
  }

  // sends POST request to apply to a job
  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, 'post');
    return res.message;
  }

  /**
   * Users Routes
   * static functionfor making API requests to users routes
   */

  // get user data by username [get]
  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }


  // sends PATCH request to update user information at users/username
  static async updateUser(userData, username) {
    let formattedData = {
      password: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email
    }
    let res = await this.request(`users/${username}`, formattedData, 'patch');
    return res.user;
  }

  // format object keys to snake case for backend and register new user
  static async register(userData) {
    let formattedData = {
      username: userData.username,
      password: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email
    }

    let res = await this.request('users/', formattedData, 'post');

    return res;
  }

  /**
  * Auth Routes
  * static function for making API requests to auth routes
  */

  // login user
  static async logIn(username, password) {
    let res = await this.request(`login`, { username, password }, 'post');
    return res;
  }
}


export default JoblyApi;