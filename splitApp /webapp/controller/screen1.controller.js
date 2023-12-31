sap.ui.define(["pujyamv/controller/BaseController",
               "sap/ui/model/Filter",
               "sap/ui/model/FilterOperator"

], function (Controller,Filter,FilterOperator) {
    return Controller.extend("pujyamv.controller.screen1", {

        onNext: function () {
            //get the current view
            var oView = this.getView();

            //get the parent
            var oParent = oView.getParent();

            //navigate to the child

            oParent.to("idview2");

        },

        onSearch:function(oEvent){
            debugger;

     // get the item data 

     var oItemData = this.getView().byId("idListData");

     var oBinding = oItemData.getBinding("items");

     // get the query

     var oSearchInput = oEvent.getParameter("query");

//create filter
     var oFilterName = new Filter("name",FilterOperator.Contains,oSearchInput );
     var oFilterType = new Filter("type",FilterOperator.Contains,oSearchInput );
     //var oFilterNum = new Filter("price",FilterOperator.Contains,oSearchInput );

     var oFilter = new Filter({
        filters: [ oFilterName,oFilterType],
        and :false
     });

     //apply filter
 
     oBinding.filter([oFilter]);



        },

        onselectionChange:function(oEvent){
    
         //get the list item
         var oSelectedItem = oEvent.getParameter("listItem");
         var oPath = oSelectedItem.getBindingContext().getPath();
         var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
         oView2.bindElement(oPath);
         this.onNext();

        }







    });

});