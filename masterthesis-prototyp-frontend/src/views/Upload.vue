<template>
  <div class="login">
    <NavBar/>
    <FileUploadComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import FileUploadComponent from '@/components/FileUploadComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    FileUploadComponent, NavBar
  },
})
export default class Register extends Vue {
    created() {
    if(this.$store.state.token == '') { 
    //this.$router.push("/");
    }
    }
    }
</script>
