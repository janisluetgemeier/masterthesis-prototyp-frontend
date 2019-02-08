<template>
  <div class="userdel">
    <NavBar/>
    <UserCreateComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import UserCreateComponent from '@/components/admin/UserCreateComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    UserCreateComponent, NavBar
  },
})
export default class UserCreate extends Vue {
    }
</script>
