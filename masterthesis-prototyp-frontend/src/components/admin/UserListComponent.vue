<template>
<div>
<h3>Benutzerliste des Systems</h3>
<table align="center">
    <tr>
        <td>ID</td><td>Email</td><td>Name</td><td>Adminstatus</td><td>Aktion</td>
</tr>
  <tr v-for="user in users">
    <td>{{ user.id }} </td><td>{{ user.email }}</td><td>{{ user.name }}</td><td>Ist Admin:  {{ user.isadmin }}</td><td><a @click="deleteUser(user)"> Benutzer löschen</a></td>
  </tr>
</table>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { getAllUser } from '@/services/user.service';

@Component
export default class UserListComponent extends Vue {

    users = '';

    created() {
        getAllUser().then(resp => {
            this.users = resp.data;
        })
    }
    deleteUser(user:any) {
        this.$router.push("/admin/user/delete/"+user.id);
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
