sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/model/model"
], function(Controller,oModel) {
   return Controller.extend("home.controller.screen1",{

      onInit:function(){

      var oCModel = oModel.createJSONData("./model/studentinfo.json");
      this.getView().setModel(oCModel);

      },

      onClick:function(oEvent){

     console.log(this.getView().getModel());


      }

    
   });
    
});