 class animal {
    constructor(type, nom, sexe, rv) {
      this.type = type;
      this.nom = nom;
      this.sexe = sexe;
      this.rv = rv;
    }
 }//exo2
let rongeur1 = new animal ( "rongeur",  "ratatouillette", "female", true);
let chat1    = new animal ( "chat", "Samba" , "female", false);
let chat2    = new animal ( "chat",  "Gribouille", "male", true);
let chien1   = new animal ( "chien",  "Linux", "male", false);
let chien2   = new animal ( "chien",  "Hathena", "female", true);
let chien3   = new animal ( "chien",   "Holiwood", "male", true);


let patients  =[ rongeur1, chat1, chat2, chien1, chien2, chien3 ];//exo3
for (let i = 0; i < patients.length; i++) {
    console.log(patients[i]);    
}//exo4

let dernierAnimal = patients[patients.length-1]
console.log(dernierAnimal); //exo5   
    
patients.pop()
console.log(patients);//exo6
    
let rongeur2   = new animal ("rongeur","Hamtaro","male", true);
patients.push(rongeur2)    
console.log(patients);//exo7  



console.log(patients[animal.rv])
;

