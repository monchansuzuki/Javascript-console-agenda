/* 
Activité : gestion des contacts
*/
function contact(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

let contact1=new contact("Caroline","Lévisse");
let contact2 = new contact("Mélodie","Nelsonne");
let Agenda = [contact1,contact2];


console.log('Welcolm to myAgenda !!!!');

/*List all contact*/
Agenda.forEach(function (film) {
    console.log(film.firstName+" "+film.lastName);
})

/*Add contact function*/
function addContact() {
    let firstName = prompt("first name :");
    let lastName = prompt("last name :");
    let contactT = new contact(firstName,lastName);
    Agenda.push(contactT);
    console.log("Contact Add !!!!!!!!!!!!!!!!!!!!!!!!!");
}

/*Menu*/
let menu = ["1-See Contacts","2-Add Contact","3-Quit"]

/*Agenda*/
let quit=false;
while (quit == false) {
    menu.forEach(function (x) {
        console.log(x);
    })
    let answer = Number(prompt(" Choice between 1-3"));

    if ( answer=== 1){
        console.log("------------Agenda-----------")
        Agenda.forEach(function (film) {
            console.log(film.firstName+" "+film.lastName);
        })
    } else if (answer === 2){
        addContact();
    } else if (answer ===3){
        console.log("Thank YOUU")
        quit = true;
    } else {
        console.log("this is not a answer")
    }
}


