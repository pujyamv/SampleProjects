sap.ui.define(["pujyamv/controller/BaseController"
  
], function(BaseController) {
  
    return BaseController.extend("pujyamv.controller.view2",{

        onBack:function(){

         //get the current view
         var oView = this.getView();
         //get the parent
         var oParent = oView.getParent();
         //from parent navigate to child
         oParent.to("idview1");

        }
        
    })
    
});