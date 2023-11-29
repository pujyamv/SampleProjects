sap.ui.define(["pujyamv/controller/BaseController"

], function (Controller) {
    return Controller.extend("pujyamv.controller.screen1", {

        onNext: function () {
            //get the current view
            var oView = this.getView();

            //get the parent
            var oParent = oView.getParent();

            //navigate to the child

            oParent.to("idview2");

        }



    });

});