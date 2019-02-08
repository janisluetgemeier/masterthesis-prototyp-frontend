<template>
  <div class="userlist">
    <NavBar/>
    <UserListComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src
import UserListComponent from '@/components/admin/UserListComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    UserListComponent, NavBar
  },
})
export default class UserList extends Vue {
    }
</script>
