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
      color: event.target.color.value,
      title: formData.title.value
    }
    formData.reset();
    _listService.newList(rawList)
    _drawLists();
  }
  
  deleteList(id){
    _listService.deleteList(id);
    _drawLists()
  }
  addItem(e, listId){
    e.preventDefault();
    let item = e.target.item.value
    try {
      _listService.addItem(item, listId)
    }
    catch (error){
      alert(error.message)
    }
    _drawLists();
  }

  deleteItem(listId, index){
    _listService.deleteItem(listId, index)
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
