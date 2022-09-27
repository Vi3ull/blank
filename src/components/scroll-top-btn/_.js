export default () => ({
  trigger: {
    ['@click.prevent']() {
      window.scrollTo({top: 0})
    },
  },
})