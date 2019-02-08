<template>
  <div class="login">
    <NavBar/>
    <MyFilesComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import MyFilesComponent from '@/components/MyFilesComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    MyFilesComponent, NavBar
  },
})
export default class MyFiles extends Vue {
    created() {
    if(this.$store.state.token == '') { 
    //this.$router.push("/");
    }
    }
    }
</script>
