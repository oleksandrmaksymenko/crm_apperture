import {CloseIcon} from '../../assets/icons';
import {
  StyledPopup,
  StyledPopupBody,
  StyledPopupContent,
  StyledPopupFooter,
  StyledPopupHeader,
  StyledPopupOverlay,
} from './Popup.styled.tsx';
import Button from '../Button';
import {SizingType, SpacingType, ThemeColorType} from '../../global.types.ts';

export type PopupProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  footer: React.ReactNode;
} & Partial<{
  title: string;
  size: SizingType;
  gutter: SpacingType;
  iconFill: ThemeColorType;
}> &
  React.HTMLAttributes<HTMLDivElement>;

const Popup: React.FC<PopupProps> = ({
  children,
  title,
  onClose,
  iconFill,
  size,
  footer,
  ...props
}) => {
  return (
    <StyledPopup {...props}>
      <StyledPopupOverlay onClick={() => onClose && onClose()} />
      <StyledPopupContent {...{size}} gutter={props.gutter} rounded='md'>
        <StyledPopupHeader isTitle={title}>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <Button
            onClick={onClose}
            icon={<CloseIcon fill={iconFill || 'black'} />}
            variant='text'
            size='medium'
            iconPosition='right'
          />
        </StyledPopupHeader>
        <StyledPopupBody {...{size}} isFooter={!!footer}>
          {children}
        </StyledPopupBody>
        <StyledPopupFooter>{footer}</StyledPopupFooter>
      </StyledPopupContent>
    </StyledPopup>
  );
};

export default Popup;
