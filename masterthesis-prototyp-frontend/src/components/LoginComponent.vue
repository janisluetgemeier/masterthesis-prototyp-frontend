<template>
    <div id="login">
  <div v-if="status === 'start'" id="form">
    <label for="uname"><b>E-Mail</b></label>
    <input v-model="email" type="text" placeholder="Enter Username" name="uname" required> <br>

    <label for="psw"><b>Password</b></label>
    <input v-model="password" type="password" placeholder="Enter Password" name="psw" required><br>

    <button type="submit" @click="login ()">Login</button>
  </div>
    <div v-if="status === 'progessing'" id="progessing">
        Ihre Anfrage wird bearbeitet.
    </div>
      <div v-if="status === 'failed'" id="failed">
        Bei Ihrer Anfrage hab es ein Problem. Versuchen Sie es später erneut.
    </div>
      <div v-if="status === 'okay'" id="okay">
        Sie wurden eingeloggt.
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doLogin } from '@/services/auth.service';
import store from '@/store';

@Component
export default class LoginComponent extends Vue {
    status = "start";
    email = "";
    password = "";

    login() {
    this.status = "progessing";

   doLogin(this.email, this.password).then(resp => {
        let tok = resp.data.token;
        let name = resp.data.name;
        let email = resp.data.email;
        let adminstatus = "no";
        if(resp.data.isadmin == true) {
          adminstatus = "yes";
        }
        console.log("Adminstatus from backend is: " + resp.data.isadmin);
        console.log(adminstatus);
        store.commit('setToken', tok);
        store.commit('setuserInfo', name + ' (' + email + ')');
        store.commit('setAdmin', adminstatus);
        this.status = "okay";
    }).catch(err => {
      this.status = "failed";
    });
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
