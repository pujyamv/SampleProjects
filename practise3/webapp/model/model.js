sap.ui.define(["sap/ui/model/json/JSONModel"
 
], function(oJSONModel) {

return{

createJsonModel:function(){

    var oStudentdetails = {

        "StudentDetails":{
         "StudentID" : "09A31A04B3",
         "StudentName" : "Phanikumar",
         "Branch"      : "ECE",
         "College"     : "Pragati Engineering College",
         "City"        : "Kakinada"
        }
}


var oModel = new oJSONModel();

oModel.setData(oStudentdetails);

return oModel;

}




}

    
});