<template>
<div>
    <div v-if="status === 'start'"  class="large-12 medium-12 small-12 cell">
      <label>Datei
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <button v-on:click="submitFile()">Submit</button>
    </div>
    <div id="uploading" v-if="status === 'progressing'">
        Datei wird hochgeladen!
    </div>
        <div id="uploaded" v-if="status === 'okay'">
        Datei wurde hochgeladen!
    </div>
            <div id="fail" v-if="status === 'failed'">
                Ein Fehler ist aufgetreten.
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';
import { doFileUpload } from '@/services/file.service';

@Component
export default class FileUploadComponent extends Vue {
    status = "start";
    file: any = '';
    handleFileUpload(){
        let tmp:any = this.$refs.file
           this.file = tmp.files![0]; 
         }
    submitFile() {
        this.status = 'progressing';
            let formData = new FormData();
            formData.append('file', this.file);
            doFileUpload(formData).then(resp => {
                this.status = 'okay';
            }).catch(resp => {
                this.status = 'failed';
            })
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
