<template>
  <div class="userdel">
    <NavBar/>
    <UserDeleteComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import UserDeleteComponent from '@/components/admin/UserDeleteComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    UserDeleteComponent, NavBar
  },
})
export default class UserDelete extends Vue {
    }
</script>
