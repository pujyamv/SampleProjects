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
//sap.m.list class
     var oItemData = this.getView().byId("idListData");

     var oBinding = oItemData.getBinding("items");

     // get the query

     var oSearchInput = oEvent.getParameter("query");

//create filter
     var oFilterName = new Filter("name",FilterOperator.Contains,oSearchInput );
     var oFilterType = new Filter("type",FilterOperator.Contains,oSearchInput );
     var oFilterColor = new Filter("color",FilterOperator.Contains,oSearchInput );

     var oFilter = new Filter({
        filters: [ oFilterName,oFilterType,oFilterColor],
        and :false
     });

     //apply filter
 
     oBinding.filter([oFilter]);



        },

        onDelete:function(oEvent){

             var oSelectedItem = oEvent.getParameter("listItem");

            var oList = oEvent.getSource();

            oList.removeItem(oSelectedItem);

        },

        onselectionChange:function(oEvent){

            //get the list item
debugger;
          var oSelectedItem = oEvent.getParameter("listItem");

              var oPath = oSelectedItem.getBindingContext().getPath();
 
        var oView2 = this.getView().getParent().getPages()[1];

        oView2.bindElement(oPath);

           this.onNext();


        }



    });

});