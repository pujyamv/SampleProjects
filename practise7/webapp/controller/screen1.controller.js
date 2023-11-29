sap.ui.define(["sap/ui/core/mvc/Controller",
               "home/model/model"], 
 function(Controller,oModel) {
    return Controller.extend("home.controller.screen1",{


    onInit:function(){ 

      //  var oCModel =   oModel.createJSONModel();
      var oCModel =   oModel.createJSONModel("./model/studentdetails.json");

        this.getView( ).setModel(oCModel);
 
      
    
    },

    onDisplay:function(){

        var oCModel =   oModel.createJSONModel("./model/studentdetails.json");
        var oCModel2 =   oModel.createJSONModel("./model/studentdetails1.json");


        this.getView( ).setModel(oCModel);   //default model

        this.getView( ).setModel(oCModel2,"pujyam"); //named model


        this.getView().byId("idsid").bindValue("/Studentdetails/StudentID");
        this.getView().byId("idsnm").bindValue("pujyam>/Studentdetails/StudentName");
        this.getView().byId("idsbrn").bindValue("/Studentdetails/Branch");  
        this.getView().byId("idsclg").bindValue("/Studentdetails/College");
        this.getView().byId("idscty").bindValue("pujyam>/Studentdetails/City");
        this.getView().byId("idmrks").bindValue("/Studentdetails/Marks");
    },

    onClear:function(oEvent){
debugger;
        this.getView().byId("idsid").setValue(" ");
        this.getView().byId("idsnm").setValue(" ");
        this.getView().byId("idsbrn").setValue(" ");  
        this.getView().byId("idsclg").setValue("");
        this.getView().byId("idscty").setValue(" ");
        this.getView().byId("idmrks").setValue(" ");
        this.getView().byId("idrst").setValue(" ");
       
       var oForm =  this.getView().byId("idform1");

       oForm.setValue(" ");

     //  var oPath = oEvent.getSource( ).getParent( );

    },



    onSelectionchange:function(oTableEvent){

       // debugger;

       var oPath = oTableEvent.getParameter("rowContext").getPath( );

       // get the form reference idform1

       var oForm = this.getView().byId("idform1");

     // from the reference fill the data to the form
    
     oForm.bindElement(oPath);
    } 



    })
    
});