<template>
    <div id="login">
    <div v-if="status === 'start'" id="form">
    <p> Hier können Sie einen User registrieren</p> 
    <table align="center">   
    <tr>
    <td><label for="uname"><b>Emailadresse</b></label></td>
    <td><input v-model="email" type="text" placeholder="Enter Username" name="email" required> </td>
    </tr>
      <tr>
    <td><label for="uname"><b>Name</b></label></td>
    <td><input v-model="name" type="text" placeholder="Enter Name" name="name" required></td>
      </tr>
      <tr>
   <td> <label for="psw"><b>Gewünschtes Passwort</b></label></td>
   <td> <input v-model="password" type="password" placeholder="Enter Password" name="password" required></td>
      </tr>
</table>

    <button type="submit" @click="create">Registrieren</button>
    </div>
    <div v-if="status === 'progessing'" id="progessing">
        Ihre Anfrage wird bearbeitet.
    </div>
     <div v-if="status === 'okay'" id="okay">
        Ihre Anfrage wurde bearbeitet, der Nutzer wurde erstellt.
    </div>
        <div v-if="status === 'failed'" id="failed">
        Es ist ein Fehler aufgetreten.
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { doRegister } from '@/services/auth.service';
import store from '@/store';

@Component
export default class UserCreateComponent extends Vue {

    status = "start";
    email = ""
    name = ""
    password = "";

    create() {
    this.status = "progessing";

    doRegister(this.email, this.name, this.password).then(resp => {
        this.status = "okay";
    }).catch(resp => {
        this.status = "failed";
    }
    );
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
