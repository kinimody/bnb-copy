import { create } from "zustand";

interface  RegisterModalStore{
    isOpen: boolean,
    onOpen: VoidFunction,
    onClose:VoidFunction
}

const useRegisterModal = create<RegisterModalStore>((set)=>({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=>set({isOpen: false})
}))

export default useRegisterModal;