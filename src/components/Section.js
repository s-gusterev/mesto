export default class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderItems() {
    this._initialArray.forEach((element) => {
      this._renderer(element, this._container)
    });
  }
}
