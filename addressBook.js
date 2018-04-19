//get elements from the Form
let surname = document.getElementById("surname");
let otherNames = document.getElementById("otherNames");
let homeAddress = document.getElementById("homeAddress");
let email = document.getElementById("email");
let mobileNumber = document.getElementById("mobileNumber");
let saveContact = document.getElementById("submit");
let contacts = document.getElementById("myContacts");

//create Show/Hide function
function Show(e){
    let element = e.target;
    let nextSibling = element.nextSibling;
    let classList = nextSibling.classList;
    if(classList.contains("hide")){
        nextSibling.classList.remove("hide");
    }
    else{
        nextSibling.classList.add("hide");
    }
}

//create array to store entries
let arrContacts = [];

//event handler
saveContact.addEventListener("click",saveToContactBook);

//create contact object
function Contacts(Surname,Othernames,homeAddress,email,mobileNumber){
    this.Surname= Surname;
    this.Othernames=Othernames;
    this.homeAdrdress =homeAddress;
    this.email = email;
    this.mobileNumber = mobileNumber;
}

function saveToContactBook(){
    if(surname.value !== "" && othernames.value!== ""&& homeAddress.value !== "" && email.value !== "" && mobileNumber.value !== ""){
        //Add contents to array & Local Storage
        let contacts = new Contact(surname.value,othernames.value,homeAddress.value,email.value,mobileNumber.value);
        
        //store in array
        arrContacts.push(contacts);

        //store in LocalStorage
        localStorage['contacts'] = JSON.stringify(arrContacts);

        //clear the Form
        clearForm();

        //Updating and Displaying all records
        showContactBook();
    }
}

function clearForm(){
    let formElements = document.querySelectorAll(".formElements");
    for(let i in formElements){
        formElements[i].value = "";
    }
}

function showContactBook(){
    //check if key contacts exist in local storage or else create it
    if(localStorage['contacts'] === undefined){
        localStorage['contacts'] = "[]";
    }
    else{
        arrContacts = JSON.parse(localStorage['contacts']);
        contacts.innerHTML = "";
        for(let i in arrContacts){
            let str = '<li><a href="#" onClick=Show(event)>'+ arrContacts[i].surname+'</a>';
                str += '<ul class="hide">';
                str += '<li>' + '<strong>othernames:</strong> ' + arrContacts[i]["otherNames"] + '</li>';
                str += '<li>' + '<strong>Homeaddress:</strong> ' + arrContacts[i]["homeAddress"] + '</li>';
                str += '<li>' + '<strong>Email:</strong> '+ arrContacts[i]["email"] + '</li>';                        
                str += '<li>' + '<strong>mobileNumber:</strong>'+ arrContactstacts[i]["mobileNumber"] + '</li>';                    
                str += '</ul>';    
                str += '</li>';
                contacts.innerHTML += str;
        }
    }
}
showContactBook();
