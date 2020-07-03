import * as React from 'react'
import { Grid, TextField, Checkbox, Select, FormControlLabel, Button, Divider, Typography, OutlinedInput, FormControl, InputLabel, MenuItem, TextareaAutosize } from '@material-ui/core';
import FieldValues from './FieldValues';
import AcumulateToGrid from '../Fields/AcumulateToGrid';

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

interface FieldModalProps {
    field: any,
    inSlide: boolean,
    saveField: any,
    position: number,
    fieldsAddedToGrid?: any
    fathersFields?: Array<any>
}

export default class FieldEditForm extends React.PureComponent<FieldModalProps> {

    constructor(props: any) {
        super(props)

        this.handleValues = this.handleValues.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleSaveField = this.handleSaveField.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleAcumulate = this.handleAcumulate.bind(this)
        this.handleAddAcumulate = this.handleAddAcumulate.bind(this)
    }

    state = {
        futureField: {
            type: {
                label: 'Tipo de campo',
                name: 'type',
                type: 'select',
                required: true,
                values: [
                    {
                        label: 'Texto',
                        value: 'text'
                    },
                    {
                        label: 'Textarea',
                        value: 'textarea'
                    },
                    {
                        label: 'Fecha',
                        value: 'date'
                    },
                    {
                        label: 'Cabecera',
                        value: 'header'
                    },
                    {
                        label: 'Grid',
                        value: 'grid'
                    },
                    {
                        label: 'Select',
                        value: 'select'
                    },
                    {
                        label: 'Checkbox',
                        value: 'checkbox-group'
                    },
                    {
                        label: 'Radio button',
                        value: 'radio-group'
                    },
                    {
                        label: 'Time',
                        value: 'time'
                    },
                    {
                        label: 'File',
                        value: 'file'
                    }
                ]
            },
            label: {
                label: 'Label',
                name: 'label',
                type: 'textarea',
                required: true
            },
            Mask: {
                label: 'Mascara',
                name: 'Mask',
                type: 'select',
                notOn: [
                    grid,
                    radio,
                    checkbox,
                    file,
                    select,
                    date,
                    textArea,
                    header
                ],
                values: [
                    {
                        label: 'Sin mascara',
                        value: ''
                    },
                    {
                        label: 'Cedula',
                        value: '0'
                    },
                    {
                        label: 'RNC',
                        value: '1'
                    },
                    {
                        label: 'Telefono',
                        value: '2'
                    },
                    {
                        label: 'Celular',
                        value: '3',
                    },
                    {
                        label: 'Codia',
                        value: '4'
                    },
                    {
                        label: 'Email',
                        value: '5'
                    },
                    {
                        label: 'Solo numeros',
                        value: '6'
                    },
                    {
                        label: 'Solo letras',
                        value: '7'
                    },
                    {
                        label: 'Codigo de proceso',
                        value: '8'
                    },
                    {
                        label: 'Codigo de sistema',
                        value: '9'
                    },
                    {
                        label: 'Fecha',
                        value: '10'
                    },
                    {
                        label: 'Hora',
                        value: '11'
                    },
                    {
                        label: 'Decimal',
                        value: '12'
                    },
                    {
                        label: 'Expediente',
                        value: '13'
                    },
                    {
                        label: 'NSS',
                        value: '14'
                    },
                    {
                        label: 'Carga (EDESUR)',
                        value: '15'
                    },
                    {
                        label: 'Monto',
                        value: '16'
                    },
                    {
                        label: 'Latitud',
                        value: '17'
                    },
                    {
                        label: 'Longitud',
                        value: '18'
                    },
                    {
                        label: 'Mayusculas',
                        value: '19'
                    },
                    {
                        label: 'Cedula INABIMA',
                        value: '20'
                    },
                    {
                        label: 'CAID Expediente',
                        value: '21'
                    },
                    {
                        label: 'Fecha no mayor a fecha actual (hoy)',
                        value: '22'
                    },
                    {
                        label: 'Fecha no menor a fecha actual (hoy)',
                        value: '23'
                    },
                    {
                        label: 'Edad no mayor a...',
                        value: '24'
                    },
                    {
                        label: 'Fecha no menor a...',
                        value: '25'
                    },
                    {
                        label: 'Monto general',
                        value: '27'
                    },
                    {
                        label: 'Decimal no negativo',
                        value: '28'
                    },
                    {
                        label: 'Fecha (Vuelos)',
                        value: '29'
                    },
                    {
                        label: 'Horas (Vuelos)',
                        value: '30'
                    },
                    {
                        label: 'Fecha (Embarque)',
                        value: '31'
                    },
                    {
                        label: 'ID de maestro',
                        value: '32'
                    },
                    {
                        label: 'Decimal entre 0 - 100',
                        value: '33'
                    },
                    {
                        label: 'Codigo de inmueble',
                        value: '34'
                    },
                    {
                        label: 'Placa DGI',
                        value: '35'
                    }
                ]
            },
            group: {
                label: 'Grupo',
                name: 'group',
                type: 'text'
            },
            orden: {
                label: 'orden',
                name: 'orden',
                type: 'text'
            },
            hidden: {
                label: 'Oculto',
                name: 'hidden',
                type: 'checkbox',
                notWith: ['required']
            },
            required: {
                label: 'Requerido',
                name: 'required',
                type: 'checkbox',
                notWith: ['hidden'],
                notOn: [
                    grid,
                    header
                ]
            },
            enabled: {
                label: 'Habilitado',
                name: 'enabled',
                type: 'checkbox',
                notOn: [
                    grid,
                    header
                ]
            },
            name: {
                label: 'Nombre del campo',
                name: 'name',
                type: 'text',
                required: true
            },
            subtype: {
                label: 'Subtipo',
                name: 'subtype',
                type: 'select',
                notOn: [
                    grid,
                    text,
                    radio,
                    checkbox,
                    file,
                    select,
                    date,
                    textArea,
                    time
                ],
                values: [
                    {
                        label: 'Texto',
                        values: 'texto'
                    },
                    {
                        label: 'H1',
                        values: 'h1'
                    },
                    {
                        label: 'H2',
                        values: 'h2'
                    },
                    {
                        label: 'H3',
                        values: 'h3'
                    },
                    {
                        label: 'H4',
                        values: 'h4'
                    },
                    {
                        label: 'H5',
                        values: 'h5'
                    },
                    {
                        label: 'H6',
                        values: 'h6'
                    }
                ]
            },
            rows: {
                label: 'Filas',
                name: 'rows',
                type: 'number',
                notOn: [
                    text,
                    grid,
                    select,
                    radio,
                    checkbox,
                    time,
                    date,
                    header,
                    file
                ]
            },
            cols: {
                label: 'Columnas',
                name: 'cols',
                type: 'number',
                notOn: [
                    text,
                    grid,
                    select,
                    radio,
                    checkbox,
                    time,
                    date,
                    header,
                    file
                ]
            },
            isCityApi: {
                label: 'Peticion API',
                name: 'data_portal',
                type: 'checkbox',
                notOn: [
                    grid,
                    text,
                    radio,
                    checkbox,
                    file,
                    date,
                    textArea,
                    header,
                    textArea,
                    time
                ]
            },
            father: {
                label: 'Padre del campo',
                name: 'father_id',
                type: 'select',
                propsName: 'fathersFields',
                values: [],
                notOn: [
                    grid,
                    text,
                    radio,
                    checkbox,
                    file,
                    date,
                    textArea,
                    header,
                    textArea,
                    time
                ]
            },
            city_api: {
                label: 'Tipo de peticion',
                name: 'select_portal_type',
                type: 'select',
                notOn: [
                    grid,
                    text,
                    radio,
                    checkbox,
                    file,
                    date,
                    textArea,
                    header,
                    textArea,
                    time
                ],
                values: [
                    {
                        label: 'Municipios',
                        value: 'municipio'
                    },
                    {
                        label: 'Provincias',
                        value: 'provincia'
                    }
                ]
            },
            acumulateValue: {
                label: 'Acumular campo...',
                name: 'acumulates',
                type: 'add && select',
                notOn: [
                    select,
                    text,
                    header,
                    checkbox,
                    radio,
                    file,
                    date,
                    time,
                    textArea
                ]
            },
            values: {
                label: 'Valores',
                name: 'values',
                type: 'add',
                notOn: [
                    grid
                ]
            }
        },
        field: this.props.field,
        error: false
    }

    handleInput = (e: React.ChangeEvent<unknown>) => {
        const target = e.target as HTMLInputElement
        const name = target.name
        const value = target.value

        this.setState({
            ...this.state,
            field: {
                ...this.state.field,
                [name]: value
            }
        })
    }

    handleAcumulate = (acumulate: any, index: number) => {

        const { field } = this.state
        field.acumulatedFields[index] = acumulate

        this.setState({
            ...this.state,
            field: {
                ...this.state.field,
                acumulatedFields: [
                    ...field.acumulatedFields
                ]
            }
        })
    }

    handleAddAcumulate = () => {
        this.setState({
            ...this.state,
            field: {
                ...this.state.field,
                acumulatedFields: [
                    ...this.state.field.acumulatedFields,
                    {
                        fieldName: '',
                        operation: ''
                    }
                ]
            }
        })
    }

    handleCheckbox = (e: React.ChangeEvent<unknown>, value: boolean, fieldIncoming: any) => {

        const target = e.target as HTMLInputElement
        const { field } = this.state

        if (fieldIncoming.notWith) {
            fieldIncoming.notWith.map((nameField: string) => {
                if (field[nameField]) {
                    field[nameField] = false
                }
            })
        }

        field[target.name] = value

        this.setState({
            ...this.state,
            field: {
                ...this.state.field,
                ...field
            }
        })
    }

    handleValues = (valueArray: any) => {

        this.setState({
            ...this.state,
            field: {
                ...this.state.field,
                values: valueArray
            }
        })
    }

    fieldValue = (name: string, isString: boolean = true) => {
        const { field } = this.state

        return field[name] ? field[name] : this.parseToBool("", isString)
    }

    parseToBool = (string: string, isString: boolean) => {
        return isString ? string : false
    }

    getInput = (fieldIncoming: any) => {

        let input: any

        const { field } = this.state
        const id = fieldIncoming.name + '-id'

        switch (fieldIncoming.type) {
            case 'text':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <TextField
                            id={id}
                            key={`${fieldIncoming.name}-key`}
                            name={fieldIncoming.name}
                            variant="outlined"
                            onChange={this.handleInput}
                            label={fieldIncoming.label}
                            autoComplete="off"
                            defaultValue={field[fieldIncoming.name]}
                            required={fieldIncoming.required}
                            fullWidth
                        />
                    )
                }
                break;
            case 'checkbox':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value={field.name}
                                    id={id}
                                    key={`${fieldIncoming.name}-key`}
                                    checked={this.fieldValue(fieldIncoming.name, false)}
                                    name={fieldIncoming.name}
                                    onChange={(e: React.ChangeEvent<{}>, checked: boolean) => this.handleCheckbox(e, checked, fieldIncoming)}
                                    color="primary"
                                />
                            }
                            label={fieldIncoming.label}
                        />

                    )
                }
                break;

            case 'select':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor={`${field.name}-id`}>
                                {
                                    fieldIncoming.label
                                }
                            </InputLabel>
                            <Select
                                id={id}
                                key={`${fieldIncoming.name}-key`}
                                value={this.fieldValue(fieldIncoming.name)}
                                name={fieldIncoming.name}
                                onChange={this.handleInput}
                                required={fieldIncoming.required}
                                input={<OutlinedInput fullWidth labelWidth={12} name={fieldIncoming.name} id={`${fieldIncoming.name}-id`} />}
                            >
                                <MenuItem disabled value="">
                                    Seleccione el tipo...
                                    </MenuItem>
                                {
                                    (fieldIncoming.values.length > 0) ? (
                                        fieldIncoming.values.map((option: any, index: number) => (
                                            <MenuItem key={`options-${index}`} value={option.value}>
                                                {
                                                    option.label
                                                }
                                            </MenuItem>
                                        ))
                                    )
                                        :
                                        (
                                            this.props[fieldIncoming.propsName].map((field: any, index: number) => (
                                                <MenuItem key={`options-${index}`} value={field.name}>
                                                    {
                                                        field.label
                                                    }
                                                </MenuItem>
                                            ))
                                        )

                                }
                            </Select>
                        </FormControl>
                    )
                }
                break;
            case 'add':
                if (field.type === 'select' || field.type === 'checkbox-group' || field.type === 'radio-group') {
                    const values = field.values ? field.values : []
                    input = (
                        <FieldValues handleValues={this.handleValues} values={values} label={fieldIncoming.label} />
                    )
                }
                break;
            case 'number':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <TextField
                            id={id}
                            key={`${fieldIncoming.name}-key`}
                            name={fieldIncoming.name}
                            variant="outlined"
                            onChange={this.handleInput}
                            label={fieldIncoming.label}
                            type="number"
                            autoComplete="off"
                            defaultValue={field[fieldIncoming.name] ? field[fieldIncoming.name] : 0}
                            fullWidth
                        />
                    )
                }
                break;
            case 'textarea':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <TextareaAutosize
                            cols={40}
                            id={id}
                            name={fieldIncoming.name}
                            aria-label="Text Area"
                            onChange={this.handleInput}
                            value={this.fieldValue(fieldIncoming.name)}
                            rows={4}
                            placeholder={'label...'}
                            style={{ width: '100%' }}
                        />
                    )
                }
                break;
            case 'add && select':
                if ((fieldIncoming.notOn && !fieldIncoming.notOn.includes(field.type)) || !fieldIncoming.notOn) {
                    input = (
                        <AcumulateToGrid
                            items={field}
                            addAcumulateField={this.handleAddAcumulate}
                            handleAddAcumulate={this.handleAcumulate}
                        />
                    )
                }
                break;
            default:
                break;
        }

        return input
    }

    handleSaveField = () => {
        const { field } = this.state
        const { position } = this.props

        const isValid = this.handleValidateForm()

        if (isValid) {

            this.setState({
                ...this.state,
                error: false
            })

            this.props.saveField(field, position)
        }
        else {

            this.setState({
                ...this.state,
                error: true
            })

        }
    }

    getSizeGrid = (type: string) => {
        if ((type === 'add') || (type === 'add && select')) {
            return 12
        }

        return 2
    }

    handleValidateForm = () => {

        const { field, futureField } = this.state
        let isValid = 0

        Object.keys(futureField).map(key => {

            const fieldEdit = futureField[key]
            const name = fieldEdit.name

            if (fieldEdit.required) {

                const valid = field[name].length > 0

                if (!valid) {
                    isValid += 1
                }

            }

        })

        return (isValid === 0)
    }

    render() {

        const { futureField, error } = this.state
        const fields = Object.values(futureField)

        return (
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Propiedades del campo
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                {
                    fields.map((value: any, index: number) => {

                        const element = this.getInput(value)

                        if (element) {
                            return (
                                <Grid key={`grid-input-container-${index}`} item xs={this.getSizeGrid(value.type)}>
                                    {
                                        element
                                    }
                                </Grid>
                            )
                        }
                    })
                }
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button variant="text" onClick={this.handleSaveField}>
                                Guardar
                            </Button>
                        </Grid>
                        {
                            error && (
                                <Grid item xs={12}>
                                    <Typography variant="caption" component="span" color="error">
                                        Favor completar campos
                                    </Typography>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
