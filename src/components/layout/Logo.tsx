import { ILogoProps } from '../types/Logo';
import Logo_full from '../icons/Logo_full';
import Logo_Compact from '../icons/Logo_Compact';

type LogoVariant = 'full' | 'compact';

interface LogoComponentProps extends ILogoProps {
  variant?: LogoVariant;
  theme?: 'light' | 'dark';
}

function Logo({
  variant = 'full',
  theme = 'light',
  width,
  height,
  className = '',
}: LogoComponentProps) {
  const baseClassName = `transition-all duration-300 ${className}`;

  // Default dimensions based on variant
  const defaultWidth = variant === 'full' ? 1920 : 601;
  const defaultHeight = variant === 'full' ? 613 : 601;

  // Calculate dimensions maintaining aspect ratio
  const aspectRatio = defaultWidth / defaultHeight;
  const calculatedWidth =
    width || (height ? height * aspectRatio : defaultWidth);
  const calculatedHeight =
    height || (width ? width / aspectRatio : defaultHeight);

  const logoProps = {
    width: calculatedWidth,
    height: calculatedHeight,
    className: `${baseClassName} ${theme === 'dark' ? 'text-white' : 'text-black'}`,
  };

  return variant === 'full' ? (
    <Logo_full {...logoProps} />
  ) : (
    <Logo_Compact {...logoProps} />
  );
}

export default Logo;
