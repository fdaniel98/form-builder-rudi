import * as React from 'react'
import { Grid, Select, FormControl, InputLabel, OutlinedInput, MenuItem, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons';

const addition = {
    name: 'Sumar',
    value: 'addition'
}
const subtraction = {
    name: 'Restar',
    value: 'subtraction'
}
const multiplication = {
    name: 'Multiplicar',
    value: 'multiplication'
}
const division = {
    name: 'Dividir',
    value: 'division'
}

interface AcumulateToGridProps {
    items: any,
    addAcumulateField: any,
    handleAddAcumulate(acumulate: any, index: number): void
}

export default class AcumulateToGrid extends React.Component<AcumulateToGridProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        acumulatedFields: this.props.items,
        field: {},
        operations: [
            addition,
            subtraction,
            multiplication,
            division
        ]
    }

    handleSelect = (e: React.ChangeEvent<any>, index: number) => {
        const target = e.target
        const name = target.name
        const value = target.value

        const { handleAddAcumulate, items } = this.props

        items.acumulatedFields[index] = {
            ...items.acumulatedFields[index],
            [name]: value
        }

        const fieldsAcumulate = items.acumulatedFields[index]

        handleAddAcumulate(fieldsAcumulate, index)
    }

    render() {

        const { items, addAcumulateField } = this.props
        const { operations } = this.state

        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h6">
                        Campos para acumular
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" alignContent="center" alignItems="center">
                        <Grid item xs={2}>
                            <Add className="icon-click" style={{ color: 'rgb(13, 56, 177)' }} onClick={addAcumulateField} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" alignItems="center" alignContent="center" spacing={2}>
                        {
                            items.acumulatedFields.map((field: any, index: number) => (
                                <Grid key={`select-acumulate-${field.fieldName}-${index}`} item xs={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="field-select">
                                                    Campo
                                                </InputLabel>
                                                <Select id="field-select" name="fieldName"
                                                    fullWidth value={field.fieldName}
                                                    onChange={(e) => this.handleSelect(e, index)}
                                                    input={
                                                        <OutlinedInput fullWidth labelWidth={12} name={'fieldName'} id="field-acumulate" />
                                                    }>

                                                    {
                                                        items.fields.map((field: any, index: number) => (
                                                            <MenuItem key={`${field.orden}-${index}`} value={field.name}>
                                                                {
                                                                    field.label
                                                                }
                                                            </MenuItem>
                                                        ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="field-select">
                                                    Operacion
                                                </InputLabel>
                                                <Select id="field-select" name='operation'
                                                    fullWidth value={field.operation}
                                                    onChange={(e) => this.handleSelect(e, index)}
                                                    input={
                                                        <OutlinedInput fullWidth labelWidth={12} name='operation' id="field-acumulate" />
                                                    }>

                                                    {
                                                        operations.map((operation: any, index: number) => (
                                                            <MenuItem key={`${operation.value}-${index}`} value={operation.value}>
                                                                {
                                                                    operation.name
                                                                }
                                                            </MenuItem>
                                                        ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
