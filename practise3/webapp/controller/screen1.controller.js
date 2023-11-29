sap.ui.define(["sap/ui/core/mvc/Controller",
               "home/model/model"
  
], function(Controller,oModel) {
   return Controller.extend("home.controller.screen1",{

   onInit:function(){

 var oCModel = new oModel.createJsonModel();

   this.getView().setModel(oCModel);

   },

   onClick:function(){

      this.getView( ).byId("idsid").bindValue("/StudentDetails/StudentID");

      this.getView( ).byId("idsnm").bindProperty("value","/StudentDetails/StudentName");
      this.getView( ).byId("idbrn").bindValue("/StudentDetails/Branch");
      this.getView( ).byId("idclg").bindValue("/StudentDetails/College");
      this.getView( ).byId("idcty").bindValue("/StudentDetails/City");
      

   }


   });
    
});