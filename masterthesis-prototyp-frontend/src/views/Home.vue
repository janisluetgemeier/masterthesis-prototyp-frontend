<template>
  <div class="home">
    <NavBar/>
    <HelloWorld msg="Willkommen im System für das Hochladen und Teilen von Dateien!"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld, NavBar
  },
})
export default class Home extends Vue {}
</script>
