import axios from "axios";

const BASE_URL = "https://jobly-backend.onrender.com/";

/**
 * Functions for backend enpoint requests.
 */
class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem("_joblyToken");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `${BASE_URL}${endpoint}`,
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
  * Companies Routes
  * static functions for making API requests to companies routes
  */

  // Request single company by company handle [GET]
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Request all companies or filtered companies by search term [GET]
  static async getAllCompanies(searchTerm) {
    let res = searchTerm
      ? await this.request('companies', { search: searchTerm })
      : await this.request(`companies`)

    return res.companies;
  }

  /**
  * Jobs Routes
  * static functions for making API requests to jobs routes
  */

  // Request single job by job id [GET]
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  // Request all jobs or filtered jobs by search term [GET]
  static async getAllJobs(searchTerm) {
    let res = searchTerm
      ? await this.request('jobs', { search: searchTerm })
      : await this.request(`jobs`)

    return res.jobs
  }

  // Request to apply to single job by id [POST]
  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, 'post');
    return res.message;
  }

  /**
  * Users Routes
  * static functions for making API requests to users routes
  */

  // Request single user by username [GET]
  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Request an update to a single user's information by username [PATCH]
  static async updateUser(userData, username) {
    // format keys for backend
    let formattedData = {
      password: userData.password,
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email
    }
    let res = await this.request(`users/${username}`, formattedData, 'patch');

    return res.user;
  }

  // Request to register a single user [POST]
  static async register(userData) {
    // format keys for backend
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
  * static functions for making API requests to auth routes
  */

  // Request to login a single user with username and password [POST]
  static async logIn(username, password) {
    let res = await this.request(`login`, { username, password }, 'post');
    return res;
  }
}

export default JoblyApi;