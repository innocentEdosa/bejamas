import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

const Divider = () => {
  const isLarge = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <div
      className={clsx({
        "layout__container--content": isLarge,
      })}
    >
      <hr className="divider"></hr>
    </div>
  );
};

export default Divider;
