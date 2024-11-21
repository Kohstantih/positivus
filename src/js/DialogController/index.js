export default class DialogController {
  constructor(buttonID, dialogId) {
    this.button = document.getElementById(buttonID);
    this.dialog = document.getElementById(dialogId);
  }

  init() {
    this.button.addEventListener('click', () => {
      this.dialog.showModal();
    });
  }
}
