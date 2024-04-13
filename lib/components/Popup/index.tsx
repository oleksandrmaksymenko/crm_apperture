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
import {sizing} from '../../themes/sizing.ts';

export type PopupProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  footer: React.ReactNode;
} & Partial<{
  title: string;
  size: (typeof sizing)[keyof typeof sizing];
}> &
  React.HTMLAttributes<HTMLDivElement>;

const Popup: React.FC<PopupProps> = ({children, title, onClose, ...props}) => {
  return (
    <StyledPopup {...props}>
      <StyledPopupOverlay onClick={() => onClose && onClose()} />
      <StyledPopupContent size={props.size}>
        <StyledPopupHeader>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <Button
            onClick={onClose}
            icon={<CloseIcon />}
            variant='text'
            size='medium'
            iconPosition='right'
          />
        </StyledPopupHeader>
        <StyledPopupBody size={props.size}>{children}</StyledPopupBody>
        <StyledPopupFooter>{props.footer}</StyledPopupFooter>
      </StyledPopupContent>
    </StyledPopup>
  );
};

export default Popup;
