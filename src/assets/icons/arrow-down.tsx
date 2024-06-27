import { SVGIcon } from "../../components/svg-icon";
import { IconProps } from "./types";

export const ArrowDown = ({
  size,
  className,
  dataTestId = "arrow-down-icon",
}: IconProps) => (
  <SVGIcon className={className} size={size} dataTestId={dataTestId}>
    <path d="M4.20985 8.5935C3.9495 8.33315 3.52739 8.33315 3.26704 8.5935C3.00669 8.85385 3.00669 9.27596 3.26704 9.53631L7.52899 13.7983C7.78934 14.0586 8.21145 14.0586 8.4718 13.7983L12.7337 9.53631C12.9941 9.27596 12.9941 8.85385 12.7337 8.5935C12.4734 8.33315 12.0513 8.33315 11.7909 8.5935L8.66683 11.7176V2.67167C8.66683 2.30348 8.36835 2.005 8.00016 2.005C7.63197 2.005 7.3335 2.30348 7.3335 2.67167V11.7171L4.20985 8.5935Z" />
  </SVGIcon>
);
