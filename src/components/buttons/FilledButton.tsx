import { FunctionComponent, ReactElement, SVGProps } from "react";
import styles from "./styles/FilledButton.module.scss";

interface FilledButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  leftIcon?: ReactElement;
  onClick?: () => void;
  isLoading?: boolean;
  h?: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const FilledButton = ({
  text,
  type = "button",
  leftIcon,
  onClick,
  isLoading,
  h = "3rem", // Default height
  icon: IconComponent, // Renamed to avoid conflict if we use a variable named 'icon'
}: FilledButtonProps) => {
  // Construct class names
  const buttonClasses = `
    ${styles.filledButton}
    ${isLoading ? styles.disabled : ""}
  `;

  // Style for height if provided
  const buttonStyle = {
    height: h,
    minHeight: h, // Ensure minHeight is also set
  };

  return (
    <button
      className={buttonClasses.trim()}
      style={buttonStyle}
      type={type}
      onClick={isLoading ? undefined : onClick}
      disabled={isLoading}
    >
      {leftIcon && <span className={styles.buttonIcon}>{leftIcon}</span>}
      {IconComponent && !leftIcon && (
        <IconComponent className={styles.buttonIcon} />
      )}
      {!IconComponent && text}
      {IconComponent && text && (
        <span className={styles.buttonTextWithIcon}>{text}</span>
      )}
    </button>
  );
};
