class App {
  constructor(routes, $watchFace) {
    this.routes = routes;
    this.$watchFace = $watchFace;
  }

  navigate(path, props) {
    const Page = this.routes[path] || this.routes['404'];
    const page = new Page(props);
    this.$watchFace.html(page.createElement());
  }
}

module.exports = App;
