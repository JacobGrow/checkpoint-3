import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = _store.State.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}






//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  newList(event){
    event.preventDefault();
    let formData = event.target
    let rawList = {
      title: formData.title.value
    }
    formData.reset();
    _listService.newList(rawList)
    _drawLists();
  }
  
  deleteList(id){
    _listService.deleteList(id);
  }
  newItem(event, listId){
    event.preventDefault();
    let formData = event.target
    let rawItem = {
      item: formData.item.value
    }
    formData.reset();
    _listService.addItem(rawItem)
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
