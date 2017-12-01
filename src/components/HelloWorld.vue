<template>
  <div class="home">

    <div v-show="showForm" class="form-container">
      <h1>Star Wars</h1>
      <h2 id="subtitle">Welcome a galaxy far far away...</h2>
      <p>
        <router-link v-bind:to="{name: 'People'}">People</router-link>
        &bull;
        <router-link v-bind:to="{name: 'StarShips'}">StarShips</router-link>
        &bull;
        <router-link v-bind:to="{name: 'Planets'}">Planets</router-link>
      </p>
      <p>  Start exploring the galaxy by clicking a link above to enter. </p>

    <h2>Sign up for the email list!</h2>

      <p v-show="showError" class="error"> There is an error within the form. Please check you information in each field. </p>

      <form v-on:submit.prevent="validateForm">

        <p><label for="email">
          <input type="email" id="email" v-model="email" placeholder="you@example.com">
        </label> </p>

        <p><input type="submit" value="Submit"></p>
      </form>

    </div>
    <div v-show="!showForm" class="success-message">
      <h3>Thank you for signing up!</h3>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function () {
        if ( (this.email != '')){
        console.log('Form is valid.');
        this.showForm = false;
        } else {
        console.log('Form is not valid.');
          this.showError = true;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: 1.4rem;
  background-color: #000000;
  text-align: center;
}
.error {
  border: solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: #000000;
  font-family: "Gothic", serif;
  font-size: 500%;
  text-shadow: -2px 0 #ffff00, 0 2px #ffff00, 2px 0 #ffff00, 0 -2px #ffff00;
}
h2 {
  color: #ffffff;
}
h3 {
  color: #ffff00;
  font-size: 250%;
}
a {
  color: #ffff00;
}
p {
color: #fff;
}
</style>
