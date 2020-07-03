import * as React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Slide, Grid, CardContent, Card, Divider } from '@material-ui/core';
import { Close } from '@material-ui/icons';

interface FieldEditFormProps {
    content: any,
    isModalOpen: boolean,
    closeModal: any
}

export default class FieldModal extends React.PureComponent<FieldEditFormProps> {

    constructor(props: any) {
        super(props)
    }

    state = {

    }

    render() {

        const { isModalOpen, content, closeModal } = this.props

        return (
            <>
                <Modal
                    aria-labelledby="modal-edit-field"
                    aria-describedby="modal-edit-field"
                    open={isModalOpen}
                    closeAfterTransition
                    onClose={closeModal}
                    BackdropComponent={Backdrop}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: '10%',
                        left: '5%',
                        height: '70%',
                        width: '90%'
                    }}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Slide direction="up" in={isModalOpen}>
                        <Card style={{ overflow: 'scroll', height: '100%' }}>
                            <CardContent>
                                <Grid container justify="center" alignContent="center" alignItems="center">
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <div>
                                            <Close style={{ cursor: 'pointer' }} onClick={closeModal} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12} style={{ overflowY: 'hidden', height: '100%' }}>
                                        {
                                            content
                                        }
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                    </Slide>
                </Modal>
            </>
        )
    }
}
