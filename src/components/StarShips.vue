bby<template>
  <div class="starships" >
    <h1> Starships of Star Wars </h1>
   <p>

      <router-link v-bind:to="{name: 'HelloWorld'}">Home</router-link>
       &bull;
      <router-link v-bind:to="{name: 'People'}">People</router-link>
       &bull;
      <router-link v-bind:to="{name: 'Planets'}">Planets</router-link>
      </p>

    <form v-on:submit.prevent="getStarShips">
        <p>Search Starships <input type="text" v-model="name"><button type="submit">Search</button></p>
      </form>

      <ul v-if="results && results.count > 0" class="results">
      <li v-for="item of results.results">
        <p><strong>{{item.name}}</strong></p>
      </li>
    </ul>

      <div v-else-if="results && results.count==0" class="no-results">
    <h2>No Starship Found</h2>
    <p>Please adjust your search to find.</p>
     </div>

<!--Error Child Component-->
      <error-list v-bind:errorList="errors"></error-list>

    </div>
  </template>

  <script>
  import {API} from '@/common/api';
  import ErrorList from '@/components/ErrorList';
  import CubeSpinner from '@/components/CubeSpinner';


  export default {
    name: 'StarShips',
    components: {
      'load-spinner': CubeSpinner,
      'error-list' : ErrorList,
    },
    data () {
    return {
      results: [],
      errors: [],
      name: '',
    }
  },
  methods: {
      getStarShips: function(){
        API.get('starships/', {
        params: {
            search: this.name
          }
        })
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
      }
    }
  }
  </script>


      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      .starships {
        font-size: 1.4rem;
        background-color: #000000;
        text-align: center;
      }
      input[type="text"]{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #333;
        width: 300px;
        font-size: 1.4rem;
        color: ##ffffff;
        font-weight: 300;
        background: ##ffffff;
        padding: 0.5rem;
      }
      button{
        background: #333;
        padding: 0.5rem;
        font-weight: 300;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1.4rem;
      }
      ul.results {
        list-style-type: none;
        padding: 0;
      }
      .results li {
        display: inline-block;
        margin: 10px;
        padding: 0.5rem;
        width: 200px;
        min-height: 100px;
        color: #000000;
      }
      ul.errors {
        list-style-type: none;
      }
      .errors li {
        border: 1px solid red;
        color: red;
        padding: 0.5rem;
        margin: 10px 0;
      }
      h1 {
        color: #000000;
        font-family: "Gothic", serif;
        text-align: center;
        font-size: 450%;
        text-shadow: -2px 0 #ffff00, 0 2px #ffff00, 2px 0 #ffff00, 0 -2px #ffff00;
      }
      h2 {
        color: #ffffff;
      }
      a {
        color: #ffff00;
      }
      p {
      color: #fff;
      }
      </style>
