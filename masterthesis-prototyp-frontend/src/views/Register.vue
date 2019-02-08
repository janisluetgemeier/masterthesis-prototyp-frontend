<template>
  <div class="login">
    <NavBar/>
    <RegisterComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import RegisterComponent from '@/components/RegisterComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    RegisterComponent, NavBar
  },
})
export default class Register extends Vue {
    created() {
    if(this.$store.state.token !== '') { 
    this.$router.push("/");
    }
    }
    }
</script>
