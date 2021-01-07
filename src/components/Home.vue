<template>
    <section class="hero">
    <div class="content">
      <h2>Invoice Manager</h2>
      <p>Create your invoice and save them to use later.</p>
      <v-btn
        dark
        class="green mybtn"
        @click="navigateTo({name:'createInvoice'})"
        >
       Create New Invoice
      </v-btn> 
      
      <v-btn
        dark
        class="cyan mybtn"
        @click="navigateTo({name:'viewInvoices'})"
        >
       View Invoices
      </v-btn> 
    </div>
    <div>
       
    </div>
  <div class="waves"></div>
</section>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mybtn {
  color: beige;
  z-index: 1;
  padding: 1rem;
  margin: 1rem;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', sans-sherif;
  margin: 0;
  padding: 0;
}

.content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  position: relative;
  background: #333333;
  color: white;
  height: 110vh;
  display: flex;
  padding: -6rem ;
  margin: -12rem -2rem 0 -2rem;
  align-items: center;
  overflow: hidden;
}

.hero h2 {
  position: relative;
  z-index: 1;
  font-size: 4.5rem;
  margin: 0 0 10px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
}

.hero p {
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

/* ========================= */

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-color: #4973ff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 500ms;
}

.waves::before,
.waves::after {
  content: '';
  position: absolute;
  width: 300vw;
  height: 300vw;
  top: -65vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

.waves::before {
  border-radius: 44%;
  background: rgba(51, 51, 51, 1);
  animation: waves 8s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: rgba(51, 51, 51, 0.5);
  animation: waves 15s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

</style>
