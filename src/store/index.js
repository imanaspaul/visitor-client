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
    SET_ERROR(state){
      state.isError = true
      state.isSuccess = false
    },
    SET_SUCCESS(state){
      state.isSuccess = true
      state.isError = false
    }
  },
  actions: {
    getEntries({commit}) { 
      axios
        .get(`${BASE_URL}/all-entry/`)
        .then(r => {
          commit('SET_ENTRY', r.data.results)
        })
        .catch(err=>{
          commit('SET_ERROR')
        })
    },

    addEntry({commit}, payload){
        axios
        .post(`${BASE_URL}/create-visitor/`, {
          ...payload
        })
        .then(() => {
          commit('SET_SUCCESS')
        })
        .catch(err=>{
          commit('SET_ERROR')
        })
    },
    updateEntry({commit, dispatch }, payload){
        axios
        .put(`${BASE_URL}/update-entry/`, {
          ...payload
        })
        .then(() => {
          dispatch('getEntries');
        })
        .catch(err=>{
          console.log(err);
          commit('SET_ERROR')
        })
    },

  },
})
