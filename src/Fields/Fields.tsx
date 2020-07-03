import * as React from 'react'
import { TextField, Grid, Card, CardContent, TextareaAutosize, Typography, Zoom, Select, MenuItem, OutlinedInput, InputLabel, FormControl, Button, FormControlLabel, Checkbox, Radio } from '@material-ui/core';
import GridField from './GridField'
import { Edit, Delete, Search, Add } from '@material-ui/icons';
import { Draggable } from 'react-beautiful-dnd';

interface Field {
    type: string,
    name: string,
    subtype: any,
    label: string,
    Mask: string,
    group: string,
    orden: string,
    hidden: boolean,
    required: boolean,
    enabled: boolean,
    helperText: string,
    onErrorText: string,
    placeHolder: string,
    values?: Array<any>,
    rows?: number,
    cols?: number
}

interface FieldsProps {
    field: Field
    positionField: number,
    openEditModal: any,
    handleDelete: any,
    handleSaveField: any,
    addFieldGrid: any
}

export default class Fields extends React.Component<FieldsProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        isModalOpen: false
    }

    handleDelete = (_e: React.ChangeEvent<unknown>, positionField: number) => {
        this.props.handleDelete(positionField)
    }

    getTextInput = (field: Field, provided: any, isDragging: boolean) => {

        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <TextField
                                                id={id}
                                                label={field.label}
                                                margin="normal"
                                                helperText={field.helperText}
                                                placeholder={field.placeHolder}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getHeader = (field: Field, provided: any, isDragging: boolean) => {

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', paddingBottom: '10px', paddingTop: '10px', backgroundColor: isDragging ? '#f2f6ff' : '' }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} item xs={12}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container>
                        <Grid item style={{ display: 'flex', alignContent: 'center', alignItems: 'center', backgroundColor: '#f2f6ff' }} xs={10}>
                            <Typography align="left" variant="h5" component="h5" style={{ color: '#0d38b1', paddingLeft: '10px' }}>
                                {
                                    field.label
                                }
                            </Typography>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getSelect = (field: Field, provided: any, isDragging: boolean) => {

        const { openEditModal, positionField } = this.props
        const id = field.name + '-id'
        const key = field.name + '-key'


        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor={`${field.name}-id`}>
                                                    {
                                                        field.label
                                                    }
                                                </InputLabel>
                                                <Select fullWidth value="" input={<OutlinedInput fullWidth labelWidth={12} name={field.name} id={`${field.name}-id`} />}>
                                                    {
                                                        field.values && field.values.map((value: any, index: number) => (
                                                            <MenuItem key={`options-${index}`} value={value.value}>
                                                                {
                                                                    value.label
                                                                }
                                                            </MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>

        )
    }

    getFileField = (field: Field, provided: any, isDragging: boolean) => {
        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="flex-start" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Typography variant="overline" component="span">
                                                {
                                                    field.label
                                                }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="outlined" fullWidth style={{ padding: '10px' }}>
                                                <Typography variant="caption" component="span" style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
                                                    <Search /> Seleccionar de mis documentos
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )

    }

    getDateField = (field: Field, provided: any, isDragging: boolean) => {
        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <TextField
                                                id={id}
                                                margin="normal"
                                                helperText={field.helperText}
                                                variant="outlined"
                                                type="date"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getTimeField = (field: Field, provided: any, isDragging: boolean) => {

        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <TextField
                                                id={id}
                                                label={field.label}
                                                margin="normal"
                                                helperText={field.helperText}
                                                variant="outlined"
                                                type="time"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getCheckboxField = (field: Field, provided: any, isDragging: boolean) => {

        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle2" component="span">
                                                        {
                                                            field.label
                                                        }
                                                    </Typography>
                                                </Grid>
                                                {
                                                    (field.values && field.values.length > 0) ? field.values.map((value: any, index: number) => (
                                                        <Grid item xs="auto">
                                                            <FormControlLabel
                                                                key={`form-control-checkbox-${index}`}
                                                                control={
                                                                    <Checkbox
                                                                        id={id}
                                                                        checked={true}
                                                                        value={value.value}
                                                                        color="primary"
                                                                    />
                                                                }
                                                                label={value.label}
                                                            />
                                                        </Grid>
                                                    ))

                                                        :
                                                        (
                                                            <Grid item xs={12}>
                                                                <Typography variant="caption" component="span">
                                                                    *Vacio*
                                                                </Typography>
                                                            </Grid>
                                                        )
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getRadioField = (field: Field, provided: any, isDragging: boolean) => {
        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle2" component="span">
                                                        {
                                                            field.label
                                                        }
                                                    </Typography>
                                                </Grid>
                                                {
                                                    (field.values && field.values.length > 0) ? field.values.map((value: any, index: number) => (
                                                        <Grid item xs="auto">
                                                            <FormControlLabel
                                                                key={`form-control-checkbox-${index}`}
                                                                control={
                                                                    <Radio
                                                                        id={id}
                                                                        checked={true}
                                                                        value={value.value}
                                                                        color="primary"
                                                                    />
                                                                }
                                                                label={value.label}
                                                            />
                                                        </Grid>
                                                    ))

                                                        :
                                                        (
                                                            <Grid item xs={12}>
                                                                <Typography variant="caption" component="span">
                                                                    *Vacio*
                                                                </Typography>
                                                            </Grid>
                                                        )
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getGridField = (field: Field, provided: any, isDragging: boolean) => {

        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField, handleSaveField, addFieldGrid, handleDelete } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={12} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <GridField positionGrid={positionField}
                                                    field={field}
                                                    handleSaveField={handleSaveField}
                                                    handleDelete={handleDelete}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Add className="icon-click" onClick={(e) => addFieldGrid(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )
    }

    getTextArea = (field: Field, provided: any, isDragging: boolean) => {
        const id = field.name + '-id'
        const key = field.name + '-key'

        const { openEditModal, positionField } = this.props

        return (
            <Grid className="field" style={{ display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }} item xs={6} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Zoom in={true} style={{ transitionDelay: `${positionField}00ms` }}>
                    <Grid container justify="center" alignContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Grid container justify="center" alignContent="center" alignItems="center">
                                        <Grid item xs={12} style={{ display: 'flex' }}>
                                            <TextareaAutosize
                                                cols={field.cols ? field.cols : 50}
                                                id={id}
                                                aria-label="Text Area"
                                                rows={field.rows ? field.rows : 10}
                                                placeholder={field.label}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid className="options-field" item xs={2}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Edit className="icon-click" onClick={(e) => openEditModal(e, positionField)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Delete className="icon-click" style={{ paddingBottom: '5px' }} onClick={(e) => this.handleDelete(e, positionField)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Zoom>
            </Grid>
        )

    }

    getField = (field: Field, provided: any, isDragging: boolean) => {

        const text = 'text'
        const header = 'header'
        const select = 'select'
        const radio = 'radio-group'
        const checkbox = 'checkbox-group'
        const date = 'date'
        const grid = 'grid'
        const time = 'time'
        const file = 'file'
        const textArea = 'textarea'

        if (field.type == text) {
            return this.getTextInput(field, provided, isDragging)
        }
        else if (field.type == header) {
            return this.getHeader(field, provided, isDragging)
        }
        else if (field.type == select) {
            return this.getSelect(field, provided, isDragging)
        }
        else if (field.type == file) {
            return this.getFileField(field, provided, isDragging)
        }
        else if (field.type == date) {
            return this.getDateField(field, provided, isDragging)
        }
        else if (field.type == time) {
            return this.getTimeField(field, provided, isDragging)
        }
        else if (field.type == checkbox) {
            return this.getCheckboxField(field, provided, isDragging)
        }
        else if (field.type == radio) {
            return this.getRadioField(field, provided, isDragging)
        }
        else if (field.type == grid) {
            return this.getGridField(field, provided, isDragging)
        }
        else if (field.type == textArea) {
            return this.getTextArea(field, provided, isDragging)
        }

        return (<div ref={provided.innerRef} {...provided.draggableProps}
            {...provided.dragHandleProps}></div>)
    }

    handleCloseModal = (value: boolean) => {
        this.setState({
            ...this.state,
            isModalOpen: value
        })
    }

    render() {

        const { field, positionField } = this.props

        return (
            <Draggable draggableId={`${positionField}`} index={positionField}>
                {(provided, snapshot) => (
                    this.getField(field, provided, snapshot.isDragging)
                )}
            </Draggable>
        )
    }
}
