sap.ui.define(["sap/ui/core/mvc/Controller",
               "home/model/model"
 
], function(Controller,oModel) {
 
   return Controller.extend("home.controller.screen1",{

         nit:onIfunction(){

            var oCModel = oModel.createJSONModel("./model/studentdetails.json");
            this.getView().setModel(oCModel);

         },

         onSelectionChange:function(oEvent){

         var oPath = oEvent.getParameter("rowContext").getPath( );

         var oForm = this.getView().byId("idform1");
         
         oForm.bindElement(oPath);

         }

   })
    
});