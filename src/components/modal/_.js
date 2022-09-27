export default () => ({
  btnOpen: {
    ['@click.prevent']() {
      this.$refs.modal.showModal()
    },
  },

  btnClose: {
    ['@click.prevent']() {
      this.$refs.modal.close()
    },
  },

  modal: {
    ['x-ref']: 'modal',
  },

  modalWrapper: {
    ['x-ref']: 'modalWrapper',
    ['@mousedown.outside']() {
      this.$refs.modal.close()
    },  
  },
});