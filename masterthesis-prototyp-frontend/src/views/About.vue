<template>
  <div class="about">
    <NavBar/>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

@Component({
  components: {
    NavBar
  },
})
export default class Home extends Vue {}
</script>
