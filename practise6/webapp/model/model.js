sap.ui.define(["sap/ui/model/json/JSONModel"], 

function(JSONModel) {
    
    return{

    createJSONData:function(sPath){

    var oModel = new JSONModel();

    oModel.loadData(sPath);

     return oModel;

    }
   


    }
    
});