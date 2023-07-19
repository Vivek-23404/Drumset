


let numberOfdrum = document.querySelectorAll(".drum").length;


for(let i = 0 ; i<numberOfdrum ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
  
  let buttoninnerHTML = this.innerHTML;

  makeSound(buttoninnerHTML);
  }
  
  )}

 






document.addEventListener("keypress", function(event){


  makeSound(event.key);


});



function makeSound(key){


  
  switch (key) {
    case "w":
        let voiceW = new Audio("sounds/tom-1.mp3");
        voiceW.play();
    break;
  

    case "a":
      let voiceA = new Audio("sounds/tom-2.mp3");
      voiceA.play();
      break;
    

    case "s":
      let voiceS = new Audio("sounds/tom-3.mp3");
      voiceS.play();
      break;  

    case "d":
      let voiceD = new Audio("sounds/tom-4.mp3");
      voiceD.play();
      break;  


      case "j":
        let voiceJ = new Audio("sounds/crash.mp3");
        voiceJ.play();
        break; 

      case "k":
        let voiceK = new Audio("sounds/kick-bass.mp3");
        voiceK.play();
        break; 

      case "l":
        let voicel = new Audio("sounds/snare.mp3");
        voicel.play();
        break;  

    default:
    break;

}
}































// function GenerateStudents (name, age , standard, classs, gender ){
//   this.name = name;
//   this.age = age;
//   this.standard = standard;
//   this.classs = classs;
//   this.gender = gender;
// }

// let s1 = new GenerateStudents("vivek",20, 10, "A" , "Male");
// let s2 = new GenerateStudents("adi",20, 10, "A" , "Male");
// let s3 = new GenerateStudents("Darshil",20, 10, "A" , "Male");

// console.log(s1);
// console.log(s2);
// console.log(s3);

// console.log(s1.name);
// console.log(s2.name);
// console.log(s3.name);


// let voice = new Audio("sounds/tom-2.mp3");
//   voice.play();
