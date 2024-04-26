class Label {
  constructor({ ID, title, srcIcon, titleColor}) {
    this._divWrapper = document.getElementById(ID);
    this._empty = "";

    this._title = title;
    if (this._divWrapper.getAttribute("data-title") !== "") {
      this._title = this._divWrapper.getAttribute("data-title");  
    }
    
    this._srcIcon = srcIcon;
    if (this._divWrapper.getAttribute("data-icon") !== "") {
      this._srcIcon = "/images/" + this._divWrapper.getAttribute("data-icon");  
    }

    this._titleColor = titleColor;
    if (this._divWrapper.getAttribute("data-title-color") !== "") {
      this._titleColor = this._divWrapper.getAttribute("data-title-color");  
    }
   
    this._template = `
      <span class="title ${this._titleColor ? this._titleColor : this._empty}">${this._title ? this._title : this._empty}</span>
      <img class="icon" src="${this._srcIcon ? this._srcIcon : this._empty}"/>
    `;
  }

  init() {
    this._divWrapper.innerHTML = this._template;
  }
}

window.onload = function() {
  for (let index = 1; index < 10; index++) {
    new Label({
      ID: `labelIcon${index}`,
      title: "TITLE",
      srcIcon: "/images/add.png",
      titleColor: "black"
    }).init();
  }
};