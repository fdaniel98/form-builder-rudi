import * as React from 'react'
import { Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ExpandMore } from '@material-ui/icons';
import Fields from './FIelds';
import FieldModal from '../FieldModal/FieldModal';
import FieldEditForm from '../FieldModal/FieldEditForm';

interface GridFieldProps {
    field: any,
    handleSaveField: any,
    positionGrid: number,
    handleDelete: any
}

export default class GridField extends React.Component<GridFieldProps> {

    constructor(props: any) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
    }

    state = {
        field: this.props.field,
        isModalOpen: false,
        positionOnEdit: 0
    }

    onDragEnd = () => {

    }

    handleDelete = (_e: React.ChangeEvent<unknown>, position: number) => {

        const { positionGrid } = this.props

        this.props.handleDelete(positionGrid, true, position)
    }

    handleOpenModal = (_e: React.ChangeEvent<unknown>, positionSelected: number) => {
        this.setState({
            ...this.state,
            positionOnEdit: positionSelected,
            isModalOpen: true
        })
    }

    handleSaveField = (newField: any, positionField: number) => {

        const { positionGrid } = this.props

        this.setState({
            ...this.state,
            isModalOpen: false
        })

        this.props.handleSaveField(newField, positionGrid, true, positionField)
    }

    handleCloseModal = () => {
        this.setState({
            ...this.state,
            isModalOpen: false
        })
    }

    render() {

        const { field, isModalOpen, positionOnEdit } = this.state

        return (
            <Grid item xs={12}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography variant="overline" component="span">Grid</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable-2">
                                {(provided) => (
                                    <Grid innerRef={provided.innerRef}
                                        {...provided.droppableProps} container justify="flex-start" alignContent="center" alignItems="center">
                                        {
                                            field.fields.map((value: any, index: number) => (
                                                <Fields field={value}
                                                    positionField={index}
                                                    handleDelete={this.handleDelete}
                                                    openEditModal={this.handleOpenModal}
                                                    handleSaveField={this.handleSaveField}
                                                    addFieldGrid={undefined}
                                                />
                                            ))
                                        }
                                    </Grid>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <Grid item xs={12}>
                    <FieldModal content={
                        <FieldEditForm field={field.fields[positionOnEdit]}
                            fieldsAddedToGrid={field.fields}
                            inSlide={isModalOpen}
                            position={positionOnEdit}
                            saveField={this.handleSaveField} />
                    }
                        closeModal={this.handleCloseModal}
                        isModalOpen={isModalOpen}
                    />
                </Grid>
            </Grid>
        )
    }
}
