const Modal = {
    open() {
      // Abrir modal
      // Adiconar a  class active ao modal
      document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
      //fechar o Modal
      // remover a class active do modal
      document.querySelector('.modal-overlay').classList.remove('active');
    }
  }