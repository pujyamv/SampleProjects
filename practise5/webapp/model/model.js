sap.ui.define(["sap/ui/model/json/JSONModel"], 

function(JSONModel) {
    
    return{

    createJSONData:function(){

    var oModel = new JSONModel();

    oModel.loadData("./model/studentinfo.json")

     return oModel;

    }
   


    }
    
});