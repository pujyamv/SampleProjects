sap.ui.define(["pujyamv/controller/BaseController"], 

     function(BaseController) {
  
        return BaseController.extend("pujyamv.controller.view2",{

            onBack:function(){

        // get the parent object
           
        var oView = this.getView();
        var oAppCon = oView.getParent();

        // navigate to child
        oAppCon.to("idView1");

            }
            
        });
    
});