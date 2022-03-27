import {MdEmail} from "react-icons/md";
import {BsMessenger, BsWhatsapp} from "react-icons/bs";


export const contact_data = [
  {
    id: 1,
    show: MdEmail,
    name: "Email",
    title: "dummydata@gmail.com",
    cta:"mailto:dummydata@gmail.com",
    tag: "Send Email"
  },
  {
    id: 2,
    show: BsMessenger,
    name: "Messenger",
    title: "dummydata",
    cta:"https://m.me/dummydata",
    tag: "Beep Me On Messenger"
  },
  {
    id: 3,
    show: BsWhatsapp,
    name: "Whatsapp",
    title: "+23412345678",
    cta:"https://api.whatsapp.com/send?phone+123456789",
    tag: "Chat Me Up"
  },
]
