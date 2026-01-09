var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
//console.log(names.length);
for (var i=0; i < names.length ; i++) {
	//console.log(names[i]);
	//console.log(names[i].indexOf("J"));
  if ((names[i].indexOf("J")) || (names[i].indexOf("j")) == 0) {
    console.log("Hello "+ names[i]);
  } else {
    console.log("Good Bye "+ names[i]);
  }
}