import Dialog from '@mui/material/Dialog';

const ModalCart = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog onClose={handleClose} open={open}>
                {children}
            </Dialog>
        </>
    )
}
export default ModalCart