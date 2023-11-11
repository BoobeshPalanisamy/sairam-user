import { createContext, useContext, useState } from "react";

const initialDialogState = {
  open: false,
  handleClickOpen: () => {},
  handleClose: () => {},
};

const EnquiryDialogContext = createContext(initialDialogState);

function EnquiryDialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contextValue = {
    open,
    handleClickOpen,
    handleClose,
  };

  return (
    <EnquiryDialogContext.Provider value={contextValue}>
      {children}
    </EnquiryDialogContext.Provider>
  );
}

export function useEnquiryDialogContext() {
  return useContext(EnquiryDialogContext);
}

export default EnquiryDialogProvider;
