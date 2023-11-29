sap.ui.define(["sap/ui/model/json/JSONModel"
 
], function(JSONModel) {
   
   return{

   createJSONModel:function(){

  var oStudentDetails = {

      "Studentdetials" :{
         
         "StudentID" :"09A31A04B3",
         "StudentName" : "Phanikumar",
         "Branch"      : "ECE",
         "College"     : "Pragati Engineering college",
         "City"        :"Kakinada"
      }
}

     var oModel = new JSONModel();

     oModel.setData(oStudentDetails);

     return oModel;

   }


   }
    

});