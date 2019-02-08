<template>
<div>
<h3>Benutzer löschen Status:</h3>
<h3> {{ status }} </h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import router from '@/router';
import { deleteUser } from '@/services/user.service';

@Component
export default class UserDeleteComponent extends Vue {
    status = 'Das Löschen wird vorbereitet.';
    created() {
            this.status = 'Der Benutzer wird gerade gelöscht';
            let userId: number = +this.$route.params.id;
            deleteUser(userId).then(resp => {
                this.status = 'Der Benutzer wurde gerade gelöscht';
            }).catch(resp => {
                 this.status = 'Ein Fehler ist aufgetreten.';
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
