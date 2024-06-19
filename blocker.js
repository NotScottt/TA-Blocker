let elements = document.getElementsByClassName("SoAPf");
let highlighted_items = document.getElementsByClassName("kMGqad");

const highlighted_items_arr = []
const final_items = []

// Schleife für die normalen Items
for (var i = 0; i < elements.length; i++) {
  let currentParent = elements[i].parentNode;
  let string_from_item = currentParent.childNodes[1];
  try {
    if (string_from_item.innerText.includes("ringer Allgemeine")) {
      final_items.push(string_from_item.parentNode.parentNode)
    }
  } catch (err) {
    console.log("Es gab folgenden Fehler bei den Elementen: " + err)
  }
}

// Schleife für die Highlight Items
for (var i = 0; i < highlighted_items.length; i++) {
  let currentParent = highlighted_items[i].childNodes;
  let string_for_highlight = currentParent[1]
  try {
    if (string_for_highlight.innerText.includes("ringer Allgemeine")) {
      highlighted_items_arr.push(string_for_highlight.parentNode) 
    }
    
  } catch (err) {
    console.log("Es gab folgenden Fehler bei den Elementen: " + err)
  }
}

// console.log(final_items)
// console.log(highlighted_items_arr)

// Schleife um die normalen Items zu entfernen 
for (var i = 0; i < final_items.length; i++) {
  final_items[i].remove()
}


// Schleife um die highlight Items zu entfernen 
for (var i = 0; i < highlighted_items_arr.length; i++) {
  highlighted_items_arr[i].remove() 
}