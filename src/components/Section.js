export class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.append(element)
  }

  renderItems() {
    this._initialArray.forEach((element) => {
      this._renderer(element)
    });
  }
}
