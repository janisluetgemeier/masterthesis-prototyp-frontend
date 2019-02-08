<template>
<div>
<h3>Datei löschen Status:</h3>
<h3> {{ status }} </h3>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import router from '@/router';
import { deletefile } from '@/services/file.service';

@Component
export default class FileDeleteComponent extends Vue {
    status = 'Das Löschen wird vorbereitet.';
    created() {
            this.status = 'Die Datei wird gerade gelöscht';
            let filenumber: number = +this.$route.params.id;
            deletefile(filenumber).then(resp => {
                this.status = 'Die Datei wurde gerade gelöscht';
            }).catch(resp => {
                 this.status = 'Ein Fehler ist aufgetreten.';
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
