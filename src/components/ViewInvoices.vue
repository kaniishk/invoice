<template>
 <v-layout fluid class="pt-6">
    <v-flex>
      <div class="white elevation-2">
       <v-toolbar fluid dense dark>
         <v-toolbar-title>All Invoices</v-toolbar-title>
       </v-toolbar>
       <div class="pl-4 pr-4 pt-2 pb-2">
         <v-data-table
          :headers="headers"
          :items="invoices"
          :items-per-page="5"
          :key="invoiceNo"
          class="elevation-2"
          style="text-align:left"
         >
         <template v-slot:item="row">
          <tr>
            <td>{{row.item.invoiceNo}}</td>
            <td>{{row.item.clientName}}</td>
            <td>{{row.item.grandTotal}}</td>
            <td>{{row.item.totalItems}}</td>
            <td>{{row.item.invoiceDate}}</td>
            <td class="px-2 full-width pt-2">
                
                <v-btn  dense small dark class="red" @click="deleteInvoice(row.item)">
                    Delete
                </v-btn>
            </td>
          </tr>
      </template>
      </v-data-table>
         
       </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      headers: [
        {
          text: 'Invoice No',
          align: 'start',
          value: 'invoiceNo'
        },
        { text: 'Client Name', value: 'clientName', sortable: false },
        { text: 'Grand Total', value: 'grandTotal' },
        { text: 'Total items', value: 'totalItems' },
        { text: 'Invoice Date', value: 'invoiceDate' },
        { text: 'Actions' }
      ],
      invoices: [ {invoiceNo: 101, clientName: 'Ramesh', grandTotal: 4300, totalItems: 5, invoiceDate: '2021-01-03'},
                {invoiceNo: 102, clientName: 'Suresh', grandTotal: 3500, totalItems: 4, invoiceDate: '2020-12-22'},
                {invoiceNo: 103, clientName: 'Karan', grandTotal: 800, totalItems: 5, invoiceDate: '2021-01-02'},
                {invoiceNo: 104, clientName: 'Palak', grandTotal: 750.66, totalItems: 3, invoiceDate: '2020-11-08'},
                {invoiceNo: 105, clientName: 'Varun', grandTotal: 90, totalItems: 1, invoiceDate: '2020-12-03'},
                {invoiceNo: 116, clientName: 'Lokesh', grandTotal: 430, totalItems: 5, invoiceDate: '2021-01-03'},
                {invoiceNo: 177, clientName: 'Yash', grandTotal: 600, totalItems: 8, invoiceDate: '2020-12-13'},
                {invoiceNo: 108, clientName: 'Kamal', grandTotal: 580, totalItems: 9, invoiceDate: '2020-12-23'} ]
    }
  },
  methods: {
   
    deleteInvoice (item) {
      this.invoices.map(i => {
         var k =0
          if(i.invoiceNo === item.invoiceNo) {
            this.invoices.splice(k,1)
          }
          k++
      }) 
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .full-width {
    display: inline-flex;
    width: 100%;
  }
</style>
