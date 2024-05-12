import { Bounce, toast } from 'react-toastify'

export const notify = (type, message) => {
  return toast[type](message, {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    transition: Bounce,
  })
}