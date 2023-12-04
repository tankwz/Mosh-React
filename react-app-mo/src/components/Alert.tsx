import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  handleClose: () => void;
}
const Alert = ({ children, handleClose }: Props) => {
  return (
    <div className="alert alert-info alert-dismissible fade show">
      <button
        type="button"
        className="btn-close"
        onClick={handleClose}
      ></button>
      {children}
    </div>
  );
};

export default Alert;
