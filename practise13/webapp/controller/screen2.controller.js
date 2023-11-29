sap.ui.define(["pujyamv/controller/BaseController",
               "pujyamv/util/formatter"

], function (Controller,Formatter) {
   
    return Controller.extend("pujyamv.controller.screen2", {
        oFormatter : Formatter,
        onBack: function () {

            //get the current view
            var oView = this.getView();

            //get the parent
            var oParent = oView.getParent();

            //navigate to the child

            oParent.to("idview1");

        }


    });

});