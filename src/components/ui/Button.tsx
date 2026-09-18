// ============================================================
// components/ui/Button.tsx
// ============================================================
// Primary, secondary, and ghost button variants.
// Renders as <a> when href is provided, <button> otherwise.
// ============================================================

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

// When href is provided, render as anchor
interface AnchorProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
}

// Otherwise render as button
interface ButtonElementProps extends BaseProps {
  href?: never;
  external?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type ButtonProps = AnchorProps | ButtonElementProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-brand-500 text-white border border-brand-500',
    'hover:bg-brand-600 hover:border-brand-600',
    'focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950',
    'active:bg-brand-700',
  ].join(' '),

  secondary: [
    'bg-transparent text-slate-200 border border-white/10',
    'hover:border-white/20 hover:bg-white/5 hover:text-white',
    'focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950',
  ].join(' '),

  ghost: [
    'bg-transparent text-slate-400 border border-transparent',
    'hover:text-slate-100 hover:bg-white/5',
  ].join(' '),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8  px-3.5 text-xs  gap-1.5 rounded-md',
  md: 'h-10 px-5   text-sm  gap-2   rounded-lg',
  lg: 'h-12 px-7   text-base gap-2.5 rounded-lg',
};

const baseStyles = [
  'inline-flex items-center justify-center',
  'font-medium whitespace-nowrap',
  'transition-all duration-150 ease-out',
  'outline-none',
  'disabled:opacity-50 disabled:pointer-events-none',
].join(' ');

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, external } = rest as AnchorProps;
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    );
  }

  const { onClick, type = 'button', disabled } = rest as ButtonElementProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
