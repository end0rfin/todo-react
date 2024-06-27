import { SVGIcon } from "../../components/svg-icon";
import { IconProps } from "./types";

export const Accept = ({
  size,
  className,
  dataTestId = "accept",
}: IconProps) => (
  <SVGIcon size={size} className={className} dataTestId={dataTestId}>
    <path d="M11.562 6.832a.667.667 0 1 0-.96-.927L7.043 9.59l-1.58-2.18a.667.667 0 0 0-1.08.782l2.046 2.824a.666.666 0 0 0 1.02.073l4.114-4.256Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.655 8A7.653 7.653 0 1 1 .35 8a7.653 7.653 0 0 1 15.306 0Zm-1.333 0a6.32 6.32 0 1 1-12.64 0 6.32 6.32 0 0 1 12.64 0Z"
    />
  </SVGIcon>
);
