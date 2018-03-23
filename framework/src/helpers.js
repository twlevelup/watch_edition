
const escapeHTML = html => {
  const escape = document.createElement("textarea");
  escape.textContent = html;
  return escape.innerHTML;
};

module.exports = {
  escapeHTML,
}
