const createPortalNode = (tagName = 'div') => {
  const node = document.createElement(tagName);
  document.body.appendChild(node);
  return node;
};

export default createPortalNode;
