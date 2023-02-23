function submit() {

    if (reg_pass.value === conf_pass.value) {
        var username = reg_uname.value;
        var password = reg_pass.value;
        if (username in localStorage) {
            alert("This username already exists.")
        }
        else {
            localStorage.setItem(username, password)
        }
    }
    else {
        alert("Password does not match!")
    }
    window.location = "index.html"
}
var uname1
function login() {
    var username = uname.value;
    var password = pass.value;
    if (username in localStorage) {
        var pass1 = localStorage.getItem(username)
        if (password === pass1) {
            // uname1=localStorage.getItem(uname.value)


            window.location = "home.html";

        }
        else {
            alert("Invalid password.")
        }
    } else {
        alert("Entered usename is invalid.");
    }
}
function add() {
    if (pid.value !== "") {
        if (pid.value in localStorage) {
            alert("Product ID alredy exists!")
        }
        else {
            products = {
                pname: pname.value,
                pid: pid.value,
                pprice: pprice.value,
                pquantity: pquantity.value
            }
            localStorage.setItem(products.pid, JSON.stringify(products))
            pid.value = "";
            pname.value = "";
            pprice.value = "";
            pquantity.value = "";
            alert("Product added.")

        }
    }
    else {
        alert("Enter a Product ID.")
    }
}
function view() {
    window.location = "search.html";
}
function search() {
    if (searchproduct.value == "") {
        item_result.innerHTML = ""

        alert("Enter a valid product ID !");
    }
    else {
        if (searchproduct.value in localStorage) {
            item = JSON.parse(localStorage.getItem(searchproduct.value));
            item_result.innerHTML = `
 <div class="card bg-dark card_login">
 
 <h3 class="text-primary" >Employee Name: ${item.pname}</h3>
 <h3 class="text-primary" >Employee ID: ${item.pid}</h3>
 <h3 class="text-primary" >Employee Quantity: ${item.pquantity}</h3>
 <h3 class="text-primary" >Employee Price: ${item.pprice}</h3>


 </div>
 `
        }
        else {
            item_result.innerHTML = ""

            alert("Enter a valid product ID");
        }
    }
}