import React from "react";

import { Context } from "../Context/BurgerContext";

const useBurger = (setterOnly = false) => {
  const ctx = React.useContext(Context);

  return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
};

export default useBurger;
