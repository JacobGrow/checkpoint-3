import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  newList(rawList){
    let list = new List(rawList)
    _store.State.lists.push(list)
    _store.saveState()
  }

  deleteList(id){
    _store.State.lists = _store.State.lists.filter(l => l.id != id)
    _store.saveState();
  }
  addItem(item, listId){
    let list =  _store.State.lists.find(l => l.id == listId)
    if (list.items.length > 5){
      throw new Error("too many items");
    }
    list.items.push(item)
    _store.saveState();
  }

  deleteItem(listId, index){
    let list = _store.State.lists.find(l => l.id == list.id)
    list.items.splice(index, 1)
    _store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
