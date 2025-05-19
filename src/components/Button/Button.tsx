import React from 'react';
import './Button.css';

export type ButtonProps = {
  /** The button label */
  label: string;
  /** The button variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Click handler */
  onClick?: () => void;
  /** Additional class names */
  className?: string;
};

/**
 * A reusable button component with various styles
 * 
 * This component was generated using the Windsurf custom workflow:
 * /generate-component name=Button description="A reusable button component with various styles" type=functional withTests=true withStories=true
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  onClick,
  className = '',
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const classes = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;

