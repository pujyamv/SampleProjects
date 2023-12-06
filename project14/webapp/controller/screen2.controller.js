sap.ui.define([
    "pujyamv/controller/BaseController"
 ], function(BaseController) {
     
     return BaseController.extend("pujyamv.controller.screen2",{
 
        onBack:function(){


            var oParent = this.getView().getParent();
     
            oParent.to("idview1");
     
     
             }
     
 
 
         
     });
     
 });