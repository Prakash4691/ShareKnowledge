// EntityName changes as per the requirement for the entity
namespace EntityName {
  // On load method to register in onload event handler
  export function onLoad(executionContext: any): void {
    let formContext = executionContext.getFormContext();
    let accountName = formContext.getAttribute("name").getValue()
    console.log(`${accountName}`);
    alert(`${accountName}`);
  }

  // on change method to register on onchange of the field
  export function onChange(executionContext: any): void {
    console.log("OnChange");
  }

  // on save method to register on onsave of the form
  export function onSave(executionContext: any): void {
    console.log("OnSave");
  }
}
