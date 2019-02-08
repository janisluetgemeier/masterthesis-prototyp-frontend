<template>
<div>
<h3>Der Dateilink zum teilen ist:</h3>
<h3> {{ link }} </h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import router from '@/router';
import { createFileLink } from '@/services/file.service';

@Component
export default class LinkCreateComponent extends Vue {
    tok = '';
    link = 'Loading.';
    created() {
            this.link = 'Der Link wird gerade abgerufen!!';
            let filenumber: number = +this.$route.params.id;
            createFileLink(filenumber).then(resp => {
                this.link = 'Der Link wurde gerade abgerufen!!';
                 this.link = 'http://localhost:8090/datei/download/v1/' + resp.data.hash;
            }).catch(resp => {
                 this.link = 'Fehler.';
        });

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
