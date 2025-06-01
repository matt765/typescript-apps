import {
  FunctionComponent, ReactElement, SVGProps
} from 'react';
import styles from './styles/TransparentButton.module.scss';

interface TransparentButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  leftIcon?: ReactElement; // This might need to be re-evaluated
  onClick?: () => void;
  isLoading?: boolean;
  h?: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const TransparentButton = ({
  text,
  type = 'button',
  leftIcon,
  onClick,
  isLoading,
  h = '3rem',
  icon: IconComponent
}: TransparentButtonProps) => {
  const buttonClasses = `
    ${styles.transparentButton}
    ${isLoading ? styles.disabled : ''}
  `;

  const buttonStyle = {
    height: h,
    minHeight: h,
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
      {IconComponent && !leftIcon && <IconComponent className={styles.buttonIcon} />}
      {!IconComponent && text}
      {IconComponent && text && <span className={styles.buttonTextWithIcon}>{text}</span>}    </button>
  );
};
