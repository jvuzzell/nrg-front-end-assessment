import React from "react";

const MarkupContext = React.createContext({
  markup: {},
  setMarkup: () => {}
});

export default MarkupContext;