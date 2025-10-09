import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type msgFunc = (msg: string) => void;

export const toastWarnNotify: msgFunc = (msg) => {
  toast.warn(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    position: "top-center",
    draggablePercent: 60,
    theme: "colored",
  });
};

export const toastSuccessNotify: msgFunc = (msg) => {
  toast(msg, { // artık toast.success yerine genel toast
    icon: <span>🛍️</span>,
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    position: "top-center",
    draggablePercent: 60,
    className: "bg-purple-500 text-pink-100 font-semibold", // mor arka plan, pembe yazı
    progressClassName: "bg-pink-300 h-1",
  });
};
