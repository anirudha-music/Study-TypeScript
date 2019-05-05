System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function calculateCircumference(diameter) {
        return PI * diameter;
    }
    exports_1("calculateCircumference", calculateCircumference);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
