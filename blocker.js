let elements = document.getElementsByClassName("SoAPf")

// console.log(elements[0])

for (var i = 0; i < elements.length; i++) {
  // console.log(elements[i])

  if (elements[i].innerText.includes("ringer Allgemeine")) {
    elements[i].innerText = "Der Eintrag wurde entfernt, Herr [name einfügen]." 
    elements[i].style.fontWeight = "bold";
    elements[i].style.color = "#822424";
    
  } else {
    console.log("Keine Werte vorhanden!")
  }
}