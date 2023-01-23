import React from "react";

const ContentContext = React.createContext({
  content: {},
  setContent: () => {}
});

export default ContentContext;