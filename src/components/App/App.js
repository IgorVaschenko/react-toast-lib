import React from 'react';

import ToastContainer from '@/components/ToastContainer';
import toast from '@/ToastCore';

import { ButtonStory } from '@/components/App/components'

export function App(storyProps) {

  const getStoryToast = () => {
    toast.addToast({
      ...storyProps
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


