<template>
<div>
<h3>Meine Dateien</h3>
<h4 v-if="this.$store.state.token">Achtung: Sie sind Administrator und sehen alle Dateien!</h4>
<table align="center">
    <tr>
        <td>ID</td><td>Dateiname</td><td>Besitzer (UserId)</td><td>Download</td><td>Link erstellen</td>
        </tr>
  <tr v-for="file in files">
    <td>{{ file.id }}</td><td>{{ file.originalfilename }}</td><td>{{ file.userid }}</td><td><a :href="getLink(file)">Download</a></td><td><a @click="goToLinkCreation(file)">Dateilink</a></td><td><a @click="goToDelete(file)"> Datei löschen</a></td>
  </tr>
</table>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { getFileList } from '@/services/file.service';

@Component
export default class MyFilesComponent extends Vue {
    files = '';
    tok = '';

    created() {
        this.tok = store.state.token;
        getFileList().then(resp => {
            this.files = resp.data;
        })
    }
    
    getLink(file:any) {
        return "http://localhost:8090/datei/download/byId/v1/"+file.id+"?token="+this.tok;
    }

    goToLinkCreation(file:any) {
        this.$router.push("/link/"+file.id);
    }

    goToDelete(file:any) {
        this.$router.push("/delete/"+file.id);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
