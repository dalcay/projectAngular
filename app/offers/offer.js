System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Offer;
    return {
        setters:[],
        execute: function() {
            Offer = (function () {
                function Offer(id, description) {
                    this.id = id;
                    this.description = description;
                }
                return Offer;
            }());
            exports_1("Offer", Offer);
        }
    }
});

//# sourceMappingURL=offer.js.map
