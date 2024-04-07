import {CloseIcon} from "../../assets/icons";


export type PopupProps = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>


const Popup: React.FC<PopupProps> = ({ children, title, onClose, ...rest }) => {

  return (
    <div  {...rest}>
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button onClick={onClose} className="absolute top-2 right-2">
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
