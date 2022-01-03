"use strict";
// EntityName changes as per the requirement for the entity
var EntityName;
(function (EntityName) {
    // On load method to register in onload event handler
    function onLoad(executionContext) {
        var formContext = executionContext.getFormContext();
        var accountName = formContext.getAttribute("name").getValue();
        console.log("".concat(accountName));
        alert("".concat(accountName));
    }
    EntityName.onLoad = onLoad;
    // on change method to register on onchange of the field
    function onChange(executionContext) {
        console.log("OnChange");
    }
    EntityName.onChange = onChange;
    // on save method to register on onsave of the form
    function onSave(executionContext) {
        console.log("OnSave");
    }
    EntityName.onSave = onSave;
})(EntityName || (EntityName = {}));
