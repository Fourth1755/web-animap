"use client";
import Button from "../button/button";
import { Dialog,DialogHeader,DialogFooter,DialogBody,Typography } from "../mtailwind";
type PropsAlertModal = {
    open: boolean;
    handler: () => void;
    message: string
    handleNextAction?: () => void
    type?: string
};

export default function AlertModal(props:PropsAlertModal){
    const { open ,message,type } = props
    const handleOpen = props.handler;
    const handleNextAction = props.handleNextAction;
    const onSubmitButton = () => {
        handleOpen()
        if(handleNextAction){
            handleNextAction()
        }
        
    }
    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                size='xs'
                className="bg-black"
            >
                <DialogHeader className="grid place-items-center gap-4 ">
                    <h1 className="text-center text-white">{type?type:""}</h1>
                </DialogHeader>
                <DialogBody className="grid place-items-center gap-4">
                    <h2 className="text-center text-white font-medium text-xl">{message}</h2>
                </DialogBody>
                <DialogFooter className="flex justify-center">
                    <Button
                        color="pink"
                        onClick={onSubmitButton}
                        name="OK"
                    >
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
        )
}