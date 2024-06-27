import { ReactNode } from "react";
import { IconProps } from "../../assets/icons/types";

export type SvgIconProps = {
  viewBox?: string;
  children: ReactNode;
} & IconProps;
