<template>
  <div class="planets">
        <h1> Planets of Star Wars </h1>
   <p>
      <router-link v-bind:to="{name: 'HelloWorld'}">Home</router-link>
      &bull;
      <router-link v-bind:to="{name: 'People'}">People</router-link>
      &bull;
      <router-link v-bind:to="{name: 'StarShips'}">StarShips</router-link>

      </p>
      <form v-on:submit.prevent="getPlanets">
          <p>Search Planets <input type="text" v-model="name"><button type="submit">Search</button></p>
        </form>

        <ul v-if="results && results.length > 0" class="results">
        <li v-for="item of results">
          <p><strong>{{item.word}}</strong></p>
          <p>{{item.score}}</p>
        </li>
      </ul>

        <div v-else-if="results && results.length==0" class="no-results">
      <h2>No Starship Found</h2>
      <p>Please adjust your search to find.</p>
       </div>

        <ul v-if="errors.length > 0" class="errors">
           <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
      </div>
      </template>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Planets',
    data: () => ({
        profiles: [],
        last_name_v: '',
        movies_urls: [],
        movies: [],
        movie_s: [],
        relateds: [],
        errors: [],
        datas: []
    }),
    created() {
            axios.get('https://swapi.co/api/planets/')
                .then(response => {
                    this.profiles = response.data.results.slice(0, 2);
                    for (var i = 0; i < this.profiles.length; i++) {
                        var profile_val = this.profiles[i];
                        var full_name_o = profile_val.name;
                        var full_name_s = full_name_o.split(' ');
                        var last_name = full_name_s[full_name_s.length - 1];
                        profile_val['last_name'] = last_name;

                        var movie_urls = profile_val.films.slice(0, 4);
                        console.log(profile_val.films.slice(0, 4));
                        profile_val['movie_details'] = [];
                        for (var j = 0; j < movie_urls.length; j++) {
                            axios.get(movie_urls[j])
                                .then(response => {
                                    profile_val.movie_details.push(response.data);
                                })
                                .catch(e => {
                                    this.errors.push(e);
                                });
                        }
                        this.datas.push(profile_val);
                    }
                })
                .catch(e => {
                    this.errors.push(e);
                });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.planets {
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
a {
  color: #ffff00;
}
p {
color: #fff;
}
</style>
