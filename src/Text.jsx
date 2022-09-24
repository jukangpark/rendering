import React from "react";

const Text = ({ title, value }) => (
  <div>
    {title}:{value}
  </div>
);

export default React.memo(Text);
