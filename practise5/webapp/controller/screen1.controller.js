sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/model/model"
], function(Controller,oModel) {
   return Controller.extend("home.controller.screen1",{

      onInit:function(){

      var oCModel = oModel.createJSONData();
      this.getView().setModel(oCModel);

      }

    
   });
    
});