<template>
  <v-toolbar fixed class="cyan tool" dark>
    <v-toolbar-title class="mr-4">
        <span
         class="home"
         @click="navigateTo({name:'root'})">
         <i class="fa fa-home" style="font-size:30px;"></i>
         INVOICE
        </span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
        <v-btn
         v-if="$store.state.isUserLoggedIn"
         class="cyan"
         dark>
         Hi, {{$store.state.user.name}}
        </v-btn>
        <v-btn
         v-if="!$store.state.isUserLoggedIn"
         class="cyan"
         dark
         @click="navigateTo({name:'login'})">
         Login / Sign Up
        </v-btn>
        
        <v-btn
         v-if="$store.state.isUserLoggedIn"
         class="cyan"
         dark
         @click="logout">
         Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
.home {
 cursor: pointer;
}
.dispName {
 text-align: center;
 align-items: center;
 font-size: 1.3rem;
 padding: 1rem;
}

.tool {
  margin-left: -1rem;
  padding-right: 8rem;
  min-width: 110%;
}


</style>
