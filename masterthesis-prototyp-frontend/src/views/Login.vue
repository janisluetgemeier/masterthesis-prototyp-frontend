<template>
  <div class="login">
    <NavBar/>
    <LoginComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    LoginComponent, NavBar
  },
})
export default class LoginView extends Vue {
    created() {
    if(this.$store.state.token !== '') { 
    this.$router.push("/");
    }
    }
    }
</script>
