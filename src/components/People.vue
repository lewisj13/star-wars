<template>
  <div class="people">
        <h1> People of Star Wars </h1>
   <p>
      <router-link v-bind:to="{name: 'HelloWorld'}">Home</router-link>
      &bull;
      <router-link v-bind:to="{name: 'StarShips'}">StarShips</router-link>
      &bull;
      <router-link v-bind:to="{name: 'Planets'}">Planets</router-link>
      </p>

      <form v-on:submit.prevent="getPeople">
        <p>Search for People <input type="text" v-model="name"><button type="submit">Search</button></p>
      </form>

      <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results">
//Fill out//
        <p><strong>{{}}</strong></p>
        <p>{{}}</p>
      </li>
    </ul>

      <div v-else-if="results && results.length==0" class="no-results">
    <h2>No People Found</h2>
    <p>Please adjust your search.</p>
     </div>

<!--Error Child Component-->
     <error-list v-bind:errorList="errors"></error-list>
  </div>
</template>

<script>
import axios from 'axios';
import ErrorList from '@/components/ErrorList';
import CubeSpinner from '@/components/CubeSpinner';


export default {
  name: 'People',
  components: {
    'load-spinner': CubeSpinner,
    'error-list' : ErrorList,
  },
  data () {
//Fill out//
  return {
    posts: [],
    errors: [],
    name: [],
  }
},
methods: {
    getPeople: function(){
      axios.get('people/?search=r2', {
//Fill out//
      params: {

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
.people {
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
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
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
