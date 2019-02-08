<template>
  <div class="login">
    <NavBar/>
    <LinkCreateComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import LinkCreateComponent from '@/components/LinkCreateComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    LinkCreateComponent, NavBar
  },
})
export default class LinkCreate extends Vue {
    created() {
    }
    }
</script>
