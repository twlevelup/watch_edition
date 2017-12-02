class App {
  constructor(routes, $watchFace) {
    this.routes = routes;
    this.$watchFace = $watchFace;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Location
  // Example:
  // {
  //    href: 'http://localhost:8080/#teamRocket',
  //    hash: '#teamRocket',
  // }
  navigateToLocation(location) {
    let path = location.hash.slice(1);
    if(path === '') {
      path = '/';
    }
    this.navigate(path, {});
  }

  navigate(path, props) {
    const Page = this.routes[path] || this.routes['404'];
    const page = new Page(props);
    this.$watchFace.html(page.createElement());
  }
}

module.exports = App;
