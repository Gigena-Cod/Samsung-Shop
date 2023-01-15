import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const onClickToggleHandler = () => setToggle(!toggle);

  return { toggle, onClickToggleHandler };
};

export default useToggle;
