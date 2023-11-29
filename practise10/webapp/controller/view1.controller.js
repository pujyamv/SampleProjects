sap.ui.define(["pujyamv/controller/BaseController"
  
], function(BaseController) {
  
    return BaseController.extend("pujyamv.controller.view1",{

        onNext:function(){

         //get the current view
         var oView = this.getView();
         //get the parent
         var oParent = oView.getParent();
         //from parent navigate to child
         oParent.to("idview2");

        }
        
    })
    
});