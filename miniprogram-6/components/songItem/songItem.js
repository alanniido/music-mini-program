Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  methods: {
    onMouseOver() {
      this.setData({
        isHovered: true,
      });
    },

    onMouseOut() {
      this.setData({
        isHovered: false,
      });
    }
  }
});