<template>
  <v-layout fluid >
    <v-flex xs10 offset-xs1 sm10 offset-md1 md10 class="create-box">
      <div class="white elevation-4 align-left">
       <v-toolbar fluid dense dark class="elevation-4">
         <v-toolbar-title >Create Invoice</v-toolbar-title>
       </v-toolbar>
       <div class="pl-4 pr-4 pt-2 pb-2 elevation-2">
         <br>
         <h4 style="color:blue">Invoice Details</h4>
        <div class="full-width">
         <v-text-field
            dense
            class='pr-2'
            label="Client Name"
            type="text"
            v-model="clientName"
            required
            outlined
            :rules='[rules]'
          ></v-text-field> 
          <v-text-field
            dense
            class='pr-2'
            label="Invoice No."
            type="number"
            v-model="invoiceNo"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
           <v-textarea
            dense
            class='pr-2'
            label="Client Address"
            type="text"
            v-model="address"
            outlined
          ></v-textarea>
       </div>
       
            
       <div>
         <h4 style="color:blue">Item Details</h4>
          
          <div class="full-width align-left pr-5">
           <h6 class="stretch">Product Name</h6>
           <v-spacer/>
           <h6>Unit Price</h6>
           <v-spacer/>
           <v-spacer/>
           <h6>Qty</h6>
           <v-spacer/>
           <v-spacer/>
           <h6>Total</h6>
           <v-spacer/>
           <v-spacer/>
           <h6>Remove</h6>
          </div>
       <div 
          class="full-width stick"
          v-for="item in items"
          :key="item.val">
          
          <v-text-field
            dense
            class='stretch sq'
            type="text"
            v-model="productName[item.val]"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
          <v-text-field
            dense
            class="sq"
            type="number"
            v-model="price[item.val]"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
          <v-text-field
            dense
            class="sq"
            type="number"
            v-model="qty[item.val]"
            required
            outlined
            :min=1
            :rules='[rules]'
          ></v-text-field>
          <v-text-field
            dense
            :readonly='true'
            class="sq dispOnly"
            type="number"
            v-model="total[item.val]"
            outlined
            :rules='[rules]'
          ></v-text-field>
          <div class="remove">
           <button
              dark 
              class="pl-5 pr-3"
              @click="removeItem(item.val)"
              >
              <i class="fa fa-close" style="font-size:25px;color:darkred"></i>
         </button>
          </div>
       </div>
       <div class="display">
       <div class="full-width stick pr-8">
         <button
              dark 
              class="stretch"
              @click="addItem()"
              >
              <i class="fa fa-plus" aria-hidden="true"></i> Add Item
         </button>
          <v-spacer />
          <v-text-field
            dense
            :readonly="true"
            class="sq shrink dispOnly "
            type="number"
            label="Discount"
            outlined
          ></v-text-field>
          <v-text-field
            dense
            :readonly="true"
            class="sq shrink dispOnly pr-5"
            type="number"
            v-model="discount"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
         
       </div>
       <div class="full-width stick sticky pr-8">
         
          <v-spacer />
          <v-text-field
            dense
            :readonly="true"
            class="sq shrink dispOnly"
            type="number"
            label="Tax"
            
            outlined
          ></v-text-field>
          <v-text-field
            dense
            :readonly="true"
            class="sq shrink dispOnly pr-5"
            type="number"
            v-model="tax"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
       </div>
       <div class="full-width stick sticky pr-8 " style="margin-top:-3.1%">
          <v-spacer />
          <v-text-field
            
            :readonly="true"
            class="sq shrink dispOnly"
            type="number"
            label="Grand Total"
            
            outlined
          ></v-text-field>
          <v-text-field
            :readonly="true"
            class="sq shrink dispOnly pr-5"
            type="number"
            v-model="grandTotal"
            required
            outlined
            :rules='[rules]'
          ></v-text-field>
       </div>
       </div>
       </div>
       <div class="full-width pl-8 pr-8 pb-6">
        <v-btn
              dark
              class="black pl-4 pt-3 pb-3 pr-2"
              @click="navigateTo({name:'root'})"
              >
              Cancel
          </v-btn>
          <v-spacer />
        <v-btn
              dark
              class="green pl-4 pt-3 pb-3 pr-2"
              @click="navigateTo({name:'viewInvoices'})"
              >
              Create  
          </v-btn>
       </div>
       </div>
        
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      
      error: null,
      items: [{val:0}],
      clientName: '',
      invoiceNo: '',
      address: '',
      productName: [],
      price: [],
      qty: [],
      total: [],
      discount: '',
      tax: '',
      grandTotal: '',
      rules: (value) => !!value || 'Required'
    }
  },
    methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    addItem(){
      this.items.push({ val: ++this.counter })
      console.log(this.items)
    },
    removeItem(index){
      if(this.items.length > 1) 
        this.items.splice(index,1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: white;
  }

  .disabled {
    pointer-events:none;
    cursor: not-allowed;
    background-image: none;
    border-color: #d1dbe5;
  }
  .full-width {
    display: inline-flex;
    width: 100%;
  }
  
  .align-left {
    text-align: left;
  }
  .stretch {
    width: 55%;
  }
  
  .sq {
    border-radius: 0;
  }
  .shrink {
    width: 12.5%;
  }
  .stick {
    margin-bottom: -1.7rem;
  }
  .sticky {
    margin-top: -.3rem;
  }
  .dispOnly {
    pointer-events: none;
  }
  .display {
    padding: 0;
    margin: 0;
  }
  button {
    outline: none !important;
    color: green;
  }

  .remove {
    color: red;

  }
</style>
