import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = "http://127.0.0.1:8000/api/v1"
// create-visitor/

export default new Vuex.Store({
  
  state: {
    isLoading : true,
    isError: false,
    isSuccess: false,
    errorMsg: null,
    allEntry : [],
    allVisitor : []
  },

  mutations: {
    SET_ENTRY (state, data) {
      state.allEntry = data
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
    },

    SET_VISITOR (state, data) {
      state.allVisitor = data
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
    },
    SET_ERRORMSG(state, data){
      console.log(data);
      state.errorMsg = data
    },
    SET_ERROR(state, data){
      state.isError = true
      state.isSuccess = false
    },

    SET_SUCCESS(state){
      state.isSuccess = true
      state.isError = false
    },

    SET_LOAD(state){
      state.isLoading = true
    }

  },

  actions: {
    // Getting all the entries 
    getEntries({commit}) { 
      commit("SET_LOAD");
      axios
        .get(`${BASE_URL}/all-entry/`)
        .then(r => {
          commit('SET_ENTRY', r.data.results)
        })
        .catch(err=>{
          commit('SET_ERROR')
        })
    },
    // getting all the visitors
    getVisitors({commit}) { 
      commit("SET_LOAD");
      axios
        .get(`${BASE_URL}/all-vistiors/`)
        .then(r => {
          commit('SET_VISITOR', r.data.results)
        })
        .catch(err=>{
          commit('SET_ERROR')
        })
    },
    // Adding an entry
    addEntry({commit}, payload){
        axios
        .post(`${BASE_URL}/create-visitor/`, {
          ...payload
        })
        .then(() => {
          commit('SET_SUCCESS')
        })
        .catch((error)=>{
          const msg = error.response.data.message
          console.log(msg);
          commit('SET_ERROR')
          commit("SET_ERRORMSG", msg)
        })
    },
    // Updating the entry checkout time
    updateEntry({commit, dispatch }, payload){
        axios
        .put(`${BASE_URL}/update-entry/`, {
          ...payload
        })
        .then(() => {
          dispatch('getEntries');
        })
        .catch(err=>{
          // console.log(err);
          commit('SET_ERROR')
        })
    },
    // Filtering the data
    filterData({commit}, payload){
        commit("SET_LOAD")
        axios
        .get(`${BASE_URL}/all-entry/?search=${payload}`)
        .then((r) => {
           commit('SET_ENTRY', r.data.results)
        })
        .catch(err=>{
          // console.log(err);
          commit('SET_ERROR')
        })
    },

  },
})
