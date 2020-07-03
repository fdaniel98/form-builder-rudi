import * as React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { genNameField } from '../Helper/Generator'
import { Add } from '@material-ui/icons'
import { Draggable } from 'react-beautiful-dnd';

interface FieldGeneratorProps {
    handleAddField: any
}

export default class FieldGenerator extends React.PureComponent<FieldGeneratorProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        fields: {
            select: {
                name: 'select',
                structure: {
                    id: genNameField('select') + '-id',
                    type: 'select',
                    father_id: null,
                    entity: '',
                    group: "grp01",
                    label_persist: '',
                    hidden: false,
                    required: true,
                    enabled: true,
                    label: 'Select',
                    orden: '01',
                    name: genNameField('select'),
                    values: []
                }
            },
            checkboxGroup: {
                name: 'checkbox-group',
                structure: {
                    id: genNameField('checkbox') + '-id',
                    type: "checkbox-group",
                    group: "grp01",
                    label: 'Checkbox',
                    name: genNameField('checkbox'),
                    hidden: false,
                    enabled: true,
                    required: true,
                    orden: "100303100029",
                    values: []
                }
            },
            radioGroup: {
                name: 'radio-group',
                structure: {
                    id: genNameField('radio') + '-id',
                    type: "radio-group",
                    group: "grp01",
                    label: 'Radio',
                    name: genNameField('radio'),
                    hidden: false,
                    enabled: true,
                    required: true,
                    orden: "100303100029",
                    values: []
                }
            },
            text: {
                name: 'text',
                structure: {
                    id: genNameField('texto') + '-id',
                    type: "text",
                    label: 'Text',
                    Mask: '',
                    MaskParam: false,
                    group: "grp01",
                    orden: "100303100192",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('texto'),
                    subtype: "text"
                }
            },
            date: {
                name: 'date',
                structure: {
                    id: genNameField('date') + '-id',
                    type: "date",
                    label: "Fecha ",
                    Mask: '',
                    MaskParam: '',
                    group: "grp01",
                    orden: "100713100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('date'),
                    subtype: "text"
                }
            },
            header: {
                name: 'header',
                structure: {
                    id: genNameField('header') + '-id',
                    type: "header",
                    subtype: "h1",
                    name: genNameField('header'),
                    label: 'Header',
                    enabled: true,
                    hidden: false,
                    orden: "100134100022"
                }
            },
            grid: {
                name: 'grid',
                structure: {
                    type: "grid",
                    enabled: true,
                    label: 'Grid',
                    group: "grp01",
                    orden: "100842100042",
                    name: genNameField('grid'),
                    relationship: '',
                    acumulatedFields: [],
                    fields: []
                }
            },
            time: {
                name: 'time',
                structure: {
                    id: genNameField('time') + '-id',
                    type: "time",
                    label: 'Time',
                    Mask: "30",
                    MaskParam: '',
                    group: "grp01",
                    orden: "100750100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('time'),
                    subtype: "text"
                }
            },
            textarea: {
                name: 'textarea',
                structure: {
                    id: genNameField('textarea') + '-id',
                    type: "textarea",
                    name: genNameField('textarea'),
                    label: 'Textarea',
                    rows: 10,
                    cols: 50,
                    Mask: '',
                    MaskParam: '',
                    group: 'grp01',
                    orden: "100750100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                }
            }
        }
    }

    handleAddField = (_e: React.ChangeEvent<unknown>, fieldComposition: any) => {

        this.setState({
            ...this.state,
            fields: {
                select: {
                    name: 'select',
                    structure: {
                        id: genNameField('select') + '-id',
                        type: 'select',
                        father_id: null,
                        entity: '',
                        group: "grp01",
                        label_persist: '',
                        hidden: false,
                        required: true,
                        enabled: true,
                        label: 'Select',
                        orden: '01',
                        name: genNameField('select'),
                        values: []
                    }
                },
                checkboxGroup: {
                    name: 'checkbox-group',
                    structure: {
                        id: genNameField('checkbox') + '-id',
                        type: "checkbox-group",
                        group: "grp01",
                        label: 'Checkbox',
                        name: genNameField('checkbox'),
                        hidden: false,
                        enabled: true,
                        required: true,
                        orden: "100303100029",
                        values: []
                    }
                },
                radioGroup: {
                    name: 'radio-group',
                    structure: {
                        id: genNameField('radio') + '-id',
                        type: "radio-group",
                        group: "grp01",
                        label: 'Radio',
                        name: genNameField('radio'),
                        hidden: false,
                        enabled: true,
                        required: true,
                        orden: "100303100029",
                        values: []
                    }
                },
                text: {
                    name: 'text',
                    structure: {
                        id: genNameField('texto') + '-id',
                        type: "text",
                        label: 'Text',
                        Mask: '',
                        MaskParam: false,
                        group: "grp01",
                        orden: "100303100192",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: genNameField('texto'),
                        subtype: "text"
                    }
                },
                date: {
                    name: 'date',
                    structure: {
                        id: genNameField('date') + '-id',
                        type: "date",
                        label: "Fecha ",
                        Mask: '',
                        MaskParam: '',
                        group: "grp01",
                        orden: "100713100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: genNameField('date'),
                        subtype: "text"
                    }
                },
                header: {
                    name: 'header',
                    structure: {
                        id: genNameField('header') + '-id',
                        type: "header",
                        subtype: "h1",
                        name: genNameField('header'),
                        label: 'Header',
                        enabled: true,
                        hidden: false,
                        orden: "100134100022"
                    }
                },
                grid: {
                    name: 'grid',
                    structure: {
                        type: "grid",
                        enabled: true,
                        label: 'Grid',
                        group: "grp01",
                        orden: "100842100042",
                        name: genNameField('grid'),
                        relationship: '',
                        acumulatedFields: [],
                        fields: []
                    }
                },
                time: {
                    name: 'time',
                    structure: {
                        id: genNameField('time') + '-id',
                        type: "time",
                        label: 'Time',
                        Mask: "30",
                        MaskParam: '',
                        group: "grp01",
                        orden: "100750100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: genNameField('time'),
                        subtype: "text"
                    }
                },
                textarea: {
                    name: 'textarea',
                    structure: {
                        id: genNameField('textarea') + '-id',
                        type: "textarea",
                        name: genNameField('textarea'),
                        label: 'Textarea',
                        rows: 10,
                        cols: 50,
                        Mask: '',
                        MaskParam: '',
                        group: 'grp01',
                        orden: "100750100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                    }
                }
            }
        })

        this.props.handleAddField(fieldComposition)
    }

    getInputRepresentation = (fieldName: string, fieldComposition: any, index: number) => {

        let name: string;

        switch (fieldName) {
            case 'select':
                name = 'Select'
                break;
            case 'checkbox-group':
                name = 'CheckBox'
                break;
            case 'text':
                name = 'TextField'
                break;
            case 'radio-group':
                name = 'Radio Button'
                break;
            case 'header':
                name = 'Header'
                break;
            case 'time':
                name = 'Time'
                break;
            case 'grid':
                name = 'Grid'
                break;
            case 'date':
                name = 'Date'
                break;
            case 'textarea':
                name = 'Textarea'
                break;
            default:
                name = 'Campo'
                break;
        }

        return (
            <Draggable draggableId={`${fieldName}`} index={index}>
                {(provided) => (
                    <Grid item xs={12} style={{ paddingBottom: '10px', paddingTop: '10px' }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Paper elevation={1}>
                                    <Typography variant="overline" component="span">
                                        {
                                            name
                                        }
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}>
                                <Add className="icon-click" onClick={(e) => this.handleAddField(e, fieldComposition)} />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Draggable>
        )
    }

    render() {

        const { fields } = this.state

        return (
            <Grid style={{ paddingLeft: '10px', paddingBottom: '10px', paddingTop: '10px' }} container>
                {
                    Object.keys(fields).map((value: string, index: number) => {

                        const fieldName = fields[value].name
                        const structure = fields[value].structure

                        return this.getInputRepresentation(fieldName, structure, index)
                    })
                }
            </Grid>
        )
    }
}
