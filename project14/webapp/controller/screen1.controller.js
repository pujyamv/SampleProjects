sap.ui.define([
   "pujyamv/controller/BaseController"
], function(BaseController) {
    
    return BaseController.extend("pujyamv.controller.screen1",{

        onNext:function(){


       var oParent = this.getView().getParent();

       oParent.to("idview2");


        }


        
    });
    
});