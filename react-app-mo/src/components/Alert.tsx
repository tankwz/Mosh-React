import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-info alert-dismissible fade show">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      {children}
    </div>
  );
};

export default Alert;
