import { defineStore, storeToRefs } from 'pinia'
import { authStore } from './auth'
import { BASE_URL } from '../../variables';
import axios from 'axios';

export const organizationsStore = defineStore('organizations', {
  state: () => {
    let authStorage = storeToRefs(authStore());
    return {
      user: authStorage.user,
      sidebarCollapse: false,
      organizationsList: [],
      organizationData: []
    }
  },
  actions: {
    // =============== GET_REQUESTS START ===============
    async GET_ORGANIZATIONS(page){
      await axios({
        method: "GET",
        url: BASE_URL + 'organization',
        params: {page: page},
        headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
      })
      .then((e) => {
        this.organizationsList = e.data
        // router.push({path: '/home'});
        return e.data;
      })
      .catch((error) => {
        return error;
      })
    },
    async GET_ORGANIZATION_SHOW_BY_ID(page, id){
      await axios({
        method: "GET",
        url: BASE_URL + `organization/${id}`,
        params: {page: page},
        headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
      })
      .then((e) => {
        this.organizationData = e.data
        // router.push({path: '/home'});
        return e.data;
      })
      .catch((error) => {
        return error;
      })
    },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async GET_EMPLOYEES(){
    //   await axios({
    //     method: "GET",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // =============== GET_REQUESTS END ===============


































    // =============== POST_REQUESTS START ===============
    // async GET_ORGANIZATIONS(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'organization',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     this.organizations = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async POST_EMPLOYEES(){
    //   await axios({
    //     method: "POST",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // =============== POST_REQUESTS END ===============






































    // =============== PUT_REQUESTS START ===============
    // async GET_ORGANIZATIONS(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'organization',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     this.organizations = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async PUT_EMPLOYEES(){
    //   await axios({
    //     method: "PUT",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // =============== PUT_REQUESTS END ===============































    // =============== DELETE_REQUESTS START ===============
    // async GET_ORGANIZATIONS(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'organization',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     this.organizations = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // async DELETE_EMPLOYEES(){
    //   await axios({
    //     method: "DELETE",
    //     url: BASE_URL + 'employee',
    //     headers: { Authorization: this.user.token_type + ' ' + this.user.access_token },
    //   })
    //   .then((e) => {
    //     // this.user = e.data
    //     // router.push({path: '/home'});
    //     return e.data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   })
    // },
    // =============== DELETE_REQUESTS END ===============






  },
  getters: {

  }
}) 