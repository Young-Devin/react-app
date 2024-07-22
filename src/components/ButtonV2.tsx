import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  showButton?: "show";
  text: string;
  onClick: () => void;
}

const ButtonV2 = ({
  children,
  color = "primary",
  showButton = "show",
  text,
  onClick,
}: Props) => {
  const [buttonClicked, setButtonClicked] = useState(-1);
  return (
    <>
      <div>
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};

export default ButtonV2;
