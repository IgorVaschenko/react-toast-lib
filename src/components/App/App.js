import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ToastContainer from '@/components/ToastContainer';
import toast from '@/ToastCore';
import { ANIMATIONS, BUTTON_PROPS, POSITIONS } from '@/constants';
import {
  Application,
  Select,
  Input,
  SelectItem,
  SelectOption,
  ToastButtons,
  InputColor,
  WrapperForColor,
  Label,
  ButtonCustom,
  CheckInput,
  ButtonGetToast,
  Icons,
  RadioWrapper,
  SingleIcon,
  LabelIco,
  TitleIco,
  AutoLabel,
  OptionsLabel,
  ButtonStory
} from '@/components/App/components'
import GlobalStyles from '@/theme/globalStyles';

export function App(storyProps) {

  const getStoryToast = () => {
    toast.addToast({
      ...storyProps
    })
  }

  const [toastProps, setToastProps] = useState({
    type: '',
    autoDelete: '',
    autoDeleteTime: '',
    title: '',
    description: '',
    padding: '',
    PortalInsertionPointId: '',
    position: POSITIONS[0].title,
    animation: '',
    titleColor: '',
    descriptionColor: '',
    backgroundColor: '',
  });

  const showToast = (type) => {
    toast.addToast({
      type,
      position: toastProps.position,
    })

    setToastProps({
      type: toast.getLatestToast().type,
      autoDelete: toast.getLatestToast().autoDelete,
      autoDeleteTime: toast.getLatestToast().autoDeleteTime,
      title: toast.getLatestToast().title,
      description: toast.getLatestToast().description,
      padding: toast.getLatestToast().padding,
      PortalInsertionPointId: toast.getLatestToast().PortalInsertionPointId,
      position: toast.getLatestToast().position,
      animation: toast.getLatestToast().animation,
      titleColor: toast.getLatestToast().titleColor,
      descriptionColor: toast.getLatestToast().descriptionColor,
      backgroundColor: toast.getLatestToast().backgroundColor,
    })
  }

  const handleChange = () => {
    event.target.name === 'type' && setToastProps({ ...toastProps, type: event.target.value })
    event.target.name === 'autoDelete' && setToastProps({ ...toastProps, autoDelete: !toastProps.autoDelete })
    event.target.name === 'autoDelete' && toast.toasts.map(toast => ({ ...toast, autoDelete: toastProps.autoDelete }))
    event.target.name === 'autoDeleteTime' && setToastProps({ ...toastProps, autoDeleteTime: event.target.value })
    event.target.name === 'title' && setToastProps({ ...toastProps, title: event.target.value })
    event.target.name === 'description' && setToastProps({ ...toastProps, description: event.target.value })
    event.target.name === 'padding' && setToastProps({ ...toastProps, padding: event.target.value })
    event.target.name === 'PortalInsertionPointId' && setToastProps({ ...toastProps, PortalInsertionPointId: event.target.value })
    event.target.name === 'position' && setToastProps({ ...toastProps, position: event.target.value })
    event.target.name === 'position' && toast.toasts.map(toast => ({ ...toast, position: toastProps.position }))
    event.target.name === 'animation' && setToastProps({ ...toastProps, animation: event.target.value })
    event.target.name === 'titleColor' && setToastProps({ ...toastProps, titleColor: event.target.value })
    event.target.name === 'descriptionColor' && setToastProps({ ...toastProps, descriptionColor: event.target.value })
    event.target.name === 'backgroundColor' && setToastProps({ ...toastProps, backgroundColor: event.target.value })
  }

  const GetToast = () => {
    toast.addToast({
      ...toastProps
    })
  }

  return (
    <>
      <ButtonStory onClick={getStoryToast}>Get Toast</ButtonStory>
      <ToastContainer
        position={storyProps.position}
        PortalInsertionPointId={storyProps.PortalInsertionPointId}
      />
    </>
  )
}

export default App;


