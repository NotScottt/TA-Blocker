let elements = document.getElementsByClassName("SoAPf");
const final_items = []

for (var i = 0; i < elements.length; i++) {
  let currentParent = elements[i].parentNode;

  let string_from_item = currentParent.childNodes[1];
  // let img_from_item = currentParent.childNodes[0]

  try {
    if (string_from_item.innerText.includes("ringer Allgemeine")) {

      // console.log(string_from_item.parentNode.parentNode)
      final_items.push(string_from_item.parentNode.parentNode)
    }
    
  } catch (err) {
    console.log("Es gab folgenden Fehler bei den Elementen: " + err)
  }

  //   final_items.push(string_from_item.parentNode.parentNode)
  // }
  // string_from_item.parentNode.remove()
  // string_from_item.parentNode.parentNode.remove()
}

console.log(final_items)

for (var i = 0; i < final_items.length; i++) {
  final_items[i].remove()
}