interface CloseProps {
    cssClass?: String;
    onHandlerCLick: () => void;
  }

const CloseIcon = ({cssClass,onHandlerCLick}:CloseProps) => (
  <svg
  onClick={onHandlerCLick}
      className={`${cssClass} CloseIcon`}
    width="24"
    height="24"
    id="delete-bold"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 96"
  >
    <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z"></path>
  </svg>
);

export default CloseIcon;
