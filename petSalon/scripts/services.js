
function Service(description, price) {
    this.description = description;
    this.price = price;
}

function isValid(service){
    let validation=true;

    if(service.description==""){
        validation=false;
        $("txtDescription").addClass("alert-error");
    }

    return validation;
}

function register(event) {
    console.log("Adding a new service");

    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

        let newService = new Service(inputDescription,inputPrice);

    console.log(newService);
    $("input").val("");
}
