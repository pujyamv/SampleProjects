sap.ui.define(["sap/ui/core/UIComponent"], 
    function(UIComponent) {
  
     return  UIComponent.extend("pujyamv.Component",{
        //metadata
        metadata:{ 

            manifest : "json"
        },
        init:function(){

         // call the base component's init function and create the App view
         UIComponent.prototype.init.apply(this);

        },

        createContent: function(){

         var oView = new sap.ui.view("idApp",{
           viewName : "pujyamv.view.App",
           type : "XML"
                 
         });

         var oView1 = new sap.ui.view("idView1",{
            viewName : "pujyamv.view.view1",
            type : "XML"
                  
          });


          var oView2 = new sap.ui.view("idView2",{
            viewName : "pujyamv.view.view2",
            type : "XML"
                  
          });

          var oAppCon = oView.byId("idAppCon");

          oAppCon.addPage(oView1);
          oAppCon.addPage(oView2);

             return oView;
        },

        destroy:function(){



        }


     });  
    
});