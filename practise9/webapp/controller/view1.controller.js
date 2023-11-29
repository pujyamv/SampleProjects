sap.ui.define(["pujyamv/controller/BaseController"], 

     function(BaseController) {
  
        return BaseController.extend("pujyamv.controller.view1",{

            onNext:function(){

          //get the parent

          var oView = this.getView();
          var oAppCon = oView.getParent();

          //navigate to the child
          //get the child

          oAppCon.to("idView2");


            }
            
        });
    
});