sap.ui.define(["sap/ui/core/UIComponent"],

    function (UIComponent) {
        return UIComponent.extend("pujyamv.Component", {
            metadata: {

                manifest: "json"

            },

            init: function () {

                UIComponent.prototype.init.apply(this);

            },

            createContent: function () {

                var oView = new sap.ui.view("idview", {
                    viewName: "pujyamv.view.App",
                    type: "XML"

                });

                var oView1 = new sap.ui.view("idview1", {
                    viewName: "pujyamv.view.screen1",
                    type: "XML"

                });


                var oView2 = new sap.ui.view("idview2", {
                    viewName: "pujyamv.view.screen2",
                    type: "XML"

                });

                var oAppCont = oView.byId("idAppcon");

                oAppCont.addPage(oView1);
                oAppCont.addPage(oView2);

                return oView;

            }


        });

    });