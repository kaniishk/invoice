<template>
 
  <div id="app">
    <v-app>
     <v-app-bar app>
    <PageHeader />
   </v-app-bar>
   <v-main>
     <v-container fluid>
      <router-view/>
     </v-container>
   </v-main>
   </v-app>
  </div>
 
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Calibri', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(rgb(4, 17, 32), rgb(188, 233, 233));
}


</style>
