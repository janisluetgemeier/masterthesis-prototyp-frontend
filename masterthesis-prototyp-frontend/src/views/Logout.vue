<template>
  <div class="logout">
    <NavBar/>
    {{ status }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import { doLogOut } from '@/services/auth.service';
import store from '@/store';

@Component({
  components: {
    NavBar
  },
})
export default class LoginView extends Vue {

    status = "Sie werden ausgeloggt"
        created() {
            doLogOut(store.state.token).then(resp => {
            store.commit('logOut', "");
            this.status = "Sie wurden ausgeloggt";              
            }).catch(resp => {
                this.status = "failed";
            })
         }
 }
</script>
