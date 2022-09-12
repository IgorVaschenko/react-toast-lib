import App from "@/components/App/App";
import toast from "@/ToastCore";

export default {
  title: "Toast",
  component: toast,
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["error", "warning", "success", "info"],
      },
    },
    position: {
      control: {
        type: "inline-radio",
        options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      },
    },
    autoDelete: {
      control: {
        type: "boolean",
      },
    },
    autoDeleteTime: {
      control: {
        type: "number",
      },
    },
    animation: {
      control: {
        type: "inline-radio",
        options: ["toast_from_top", "toast_from_bottom", "toast-from-left", "toast-from-right"],
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    titleColor: {
      control: {
        type: "color",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    descriptionColor: {
      control: {
        type: "color",
      },
    },
    backgroundColor: {
      control: {
        type: "color",
      },
    },
    padding: {
      control: {
        type: "text",
      },
    },
  },
}



export const ToastExample = (args) => <App {...args} />

ToastExample.args = {
  type: 'info',
  autoDelete: '',
  autoDeleteTime: 3000,
  position: '',
  animation: '',
  padding: '',
  title: "",
  titleColor: "",
  description: "",
  descriptionColor: "",
  backgroundColor: "",
}