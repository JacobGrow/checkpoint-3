import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title
   /**
    *@type {String[]}
    */
    this.items = data.items || []
    this.color = data.color;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

 
  get Template() {
    return /*html*/ `
    <div class="col-md-2 card shadow mx-2 mb-2">
    <div class="row" style="background-color: ${this.color}">
    <div class="col">
        <div class="d-flex flex-column">
           <i class="fa fa-times text-danger align-self-end action pt-3" onclick="app.listController.deleteList('${this.id}')"></i>
            <h4 class="card-title text-center mt-0 pt-0">${this.title}</h4>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col">   
            <ul class="pl-3 list-height">
                ${this.ItemsTemplate}
            </ul>
            <form onsubmit="app.listController.addItem(event, '${this.id}')">
                <div class="form-group d-flex">
                    <input type="text" class="form-control" name="item" id="item"
                        aria-describedby="helpId" placeholder="Item..." required>
                    <button type="submit" class="btn btn-outline-success ml-1"><i
                            class="fa fa-plus "></i></button>
                      </input> 
                </div>
            </form>
        </div>
    </div>
</div>
    `
}
get ItemsTemplate() {
  let template = ""
  this.items.forEach((item, index) => {
      template += /*html*/`
      <div class="mt-1">
      <li>${item}
          <i class="fa fa-times text-danger action"
              onclick="app.listController.deleteItem('${this.id}', ${index})"></i>
      </li>
      </div>
      `
  })
  return template;
}
}
