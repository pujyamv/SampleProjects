sap.ui.define(["sap/ui/core/mvc/Controller",
               "home/model/model"], 

function(Controller,oModel) {
 return Controller.extend("home.controller.screen1",{

    onInit:function(){

   

    },
   
    onClick:function(){
        var oCModel = oModel.createJSONModel();
        this.getView().setModel(oCModel);
         
        this.getView().byId("idsid").bindValue("/Studentdetials/StudentID");
        this.getView().byId("idsnm").bindValue("/Studentdetials/StudentName");
        this.getView().byId("idbrn").bindValue("/Studentdetials/Branch");
        this.getView().byId("idclg").bindValue("/Studentdetials/College");
        this.getView().byId("idcty").bindValue("/Studentdetials/City");


    },

    onClear:function(){

        this.getView().byId("idsid").setValue(" ");
        this.getView().byId("idsnm").setValue(" ");
        this.getView().byId("idbrn").setValue(" ");
        this.getView().byId("idclg").setValue(" ");
        this.getView().byId("idcty").setValue(" ");



    }





 });
    
});