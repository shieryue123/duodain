export default {
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const htmlHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      if (htmlHeight - scrollTop === windowHeight - 49) {
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
