import {useEffect, useId, useRef} from 'react';
import {useTheme} from '@emotion/react';
import {CloseIcon} from '../../assets/icons';
import {
  StyledPopup,
  StyledPopupBody,
  StyledPopupContent,
  StyledPopupFooter,
  StyledPopupHeader,
  StyledPopupOverlay,
  StyledPopupTitle,
} from './Popup.styled.tsx';
import Button from '../Button';
import {SizingType, SpacingType, ThemeColorType} from '../../global.types.ts';

export type PopupProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
} & Partial<{
  title: string;
  size: SizingType;
  gutter: SpacingType;
  iconFill: ThemeColorType;
  footer: React.ReactNode;
}> &
  React.HTMLAttributes<HTMLDivElement>;

const Popup: React.FC<PopupProps> = ({
  children,
  title,
  isOpen,
  onClose,
  iconFill,
  size,
  footer,
  ...props
}) => {
  const theme = useTheme();
  const titleId = useId();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    contentRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <StyledPopup {...props}>
      <StyledPopupOverlay onClick={() => onClose && onClose()} />
      <StyledPopupContent
        ref={contentRef}
        {...{size}}
        gutter={props.gutter}
        rounded='md'
        role='dialog'
        aria-modal='true'
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
      >
        <StyledPopupHeader isTitle={!!title}>
          <StyledPopupTitle id={titleId}>{title}</StyledPopupTitle>
          <Button
            onClick={onClose}
            icon={<CloseIcon fill={theme.colors[iconFill || 'black']} />}
            variant='text'
            size='medium'
            iconPosition='right'
            aria-label='Close'
          />
        </StyledPopupHeader>
        <StyledPopupBody {...{size}} isFooter={!!footer}>
          {children}
        </StyledPopupBody>
        <StyledPopupFooter isFooter={!!footer}>{footer}</StyledPopupFooter>
      </StyledPopupContent>
    </StyledPopup>
  );
};

export default Popup;
