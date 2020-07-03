import * as React from 'react'
import FieldGenerator from './FieldGenerator'
import { Divider, Button, CircularProgress, Grid } from '@material-ui/core';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface FieldSelectorProps {
    handleAddField: any,
    sendForm: any,
    fields: Array<any>,
    service: string,
    institution: string,
    name: string,
    description: string,
    version: number,
    handleSaveSuccess(): void,
    differentsFields: Array<any>
}

export default class FieldSelector extends React.Component<FieldSelectorProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        isLoading: false
    }

    handleSave = async (): Promise<void> => {
        const { fields, service, institution, name, description, version, differentsFields } = this.props

        this.setState({
            ...this.state,
            isLoading: true
        })

        await this.props.sendForm(fields, service, institution, name, description, version, differentsFields)
        this.props.handleSaveSuccess()

        this.setState({
            ...this.state,
            isLoading: false
        })

        alert('Formulario guardado exitosamente !!!')

    }

    isDisabled = (): boolean => {
        const { fields } = this.props
        let disabled = true

        fields.map((arrayFields: Array<any>, index: number) => {
            if (arrayFields.length > 0) {
                disabled = false
            }
        })

        return disabled
    }

    render() {

        const { handleAddField } = this.props
        const { isLoading } = this.state

        return (
            <div style={{ justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: '20%' }}>
                <Droppable droppableId="droppable-2">
                    {(provided) => (
                        <Grid container innerRef={provided.innerRef} {...provided.droppableProps} spacing={2}>
                            <FieldGenerator handleAddField={handleAddField} />
                        </Grid>
                    )}
                </Droppable>
                <Divider />
                <div style={{ paddingLeft: '10px', width: '90%' }}>
                    {
                        isLoading ? (
                            <CircularProgress color="primary" />
                        )
                            :
                            (
                                <Button className="btn"
                                    variant="contained"
                                    style={{ backgroundColor: '#0d38b1', color: 'white' }}
                                    fullWidth
                                    /* onClick={this.handleSave} */
                                    disabled={this.isDisabled()}
                                >
                                    Guardar formulario
                                </Button>
                            )
                    }
                </div>
            </div>
        )
    }
}
