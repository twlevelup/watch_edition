class TeamPage {
  template() {
    return `
      <h1>Made by:</h1>
      <ul>
          <!-- TODO: Add your name as a list element -->
          <li>Ray</li>
      </ul>
    `;
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.template();
    return element;
  }
}

module.exports = TeamPage;
