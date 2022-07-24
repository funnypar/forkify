import icons from "url:../../img/icons.svg";

export default class View {
  render(data) {
    this._data = data;
    const markup = this._genaratorHtml();
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  loadSpinner() {
    const markup = `
        <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
        `;
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentElement.innerHTML = "";
  }
  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
        `;
    this.clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
