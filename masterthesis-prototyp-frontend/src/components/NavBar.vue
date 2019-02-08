<template>
    <div id="nav">
      <img alt="Vue logo" src="../assets/logo.png"/>
      <div id="userinfo" v-if="this.$store.state.userInfo !== ''">
          Herzlich Willkommen {{ this.$store.state.userInfo }} - Adminstatus: {{ this.$store.state.admin }} <br>
      </div>
      </br>
      <router-link to="/">| Home |</router-link>

      <router-link v-if="this.$store.state.token == ''" to="/login">| Login |</router-link>
      <router-link v-if="this.$store.state.token == ''" to="/register">| Registrierung |</router-link>
      <router-link v-if="this.$store.state.token !== ''" to="/upload">| Datei Upload |</router-link>
      <router-link v-if="this.$store.state.token !== ''" to="/files">| Meine Dateien |</router-link>
      <router-link v-if="this.$store.state.token !== ''" to="/logout">| Logout |</router-link>
      <router-link v-if="this.$store.state.admin == 'yes'" to="/admin/userlist">| Admin: Benutzerliste |</router-link>
      <router-link v-if="this.$store.state.admin == 'yes'" to="/admin/user/create">| Admin: Benutzer erstellen |</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class NavBar extends Vue {

  makeAdm() {
      console.log("Made you admin");
      if(this.$store.state.isAdmin == 'true') {
          store.commit('setAdmin', 'false');
          store.commit('foo', '');
      } else {
      store.commit('setAdmin', 'true');
      store.commit('foo', 'meintoken');
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
