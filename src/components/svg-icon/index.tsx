import { SvgIconProps } from "./types";

export const SVGIcon = ({
  size = 24,
  children,
  className,
  viewBox = "0 0 16 16",
  dataTestId = "svg-icon",
}: SvgIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      focusable={false}
      className={className}
      data-test-id={dataTestId}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
