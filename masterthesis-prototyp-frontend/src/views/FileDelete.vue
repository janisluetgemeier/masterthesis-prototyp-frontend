<template>
  <div class="login">
    <NavBar/>
    <FileDeleteComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import LinkCreateComponent from '@/components/LinkCreateComponent.vue'; // @ is an alias to /src
import FileDeleteComponent from '@/components/FileDeleteComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    NavBar, FileDeleteComponent
  },
})
export default class FileDelete extends Vue {
    }
</script>
