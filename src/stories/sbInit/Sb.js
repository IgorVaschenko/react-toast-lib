import React from 'react';

import ToastContainer from '@/components/Toast/ToastContainer';
import toast from '@/containers/ToastCore/ToastClass';

export function StorybookInit(args) {
  toast.addToast({
    ...args
  })
  return <ToastContainer
    position={args.position}
    PortalInsertionPointId={args.PortalInsertionPointId}
  />
}

export default App;

const custom = {
  backgroundColor: "black",
  customDescription: "description text custom",
  customTitle: "custom",
  descriptionColor: "red",
  titleColor: "white",
  type: "success",
  animation: "toast-from-left",
  autoDelete: false,
  autoDeleteTime: 3000,
  padding: "20",
  position: "bottom-left",
  PortalInsertionPointId: 'root'
};