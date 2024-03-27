import { create } from "zustand";

interface  LoginModalStore{
    isOpen: boolean,
    onOpen: VoidFunction,
    onClose:VoidFunction
}

const useLoginModal = create<LoginModalStore>((set)=>({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=>set({isOpen: false})
}))

export default useLoginModal;