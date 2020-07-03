import * as React from 'react'
import { Grid, Select, OutlinedInput, MenuItem, Typography, FormControl, InputLabel, Zoom, Chip } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface SelectorProps {
    fields: Array<any>,
    differentsFields: Array<any>,
    handleMusBeDifferent(fieldsGroup: Array<any>): void
}

export default class FieldSelectorAcumulation extends React.Component<SelectorProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        acumulatedFields: this.props.differentsFields
    }

    componentWillReceiveProps = (nextProps: any) => {
        this.setState({
            ...this.state,
            acumulatedFields: [...nextProps.differentsFields]
        })
    }

    handleAddAcumulatedFields = (e: any, index: number) => {

        const { acumulatedFields } = this.state
        const { handleMusBeDifferent } = this.props
        const value = e.target.value

        acumulatedFields[index] = [...value]

        this.setState({
            ...this.state,
            acumulatedFields: [
                ...acumulatedFields
            ]
        })

        handleMusBeDifferent([...acumulatedFields])
    }

    handleFields = () => {

        const { acumulatedFields } = this.state
        const newAcumulation: Array<any> = []

        acumulatedFields.push(newAcumulation)

        this.setState({
            ...this.state,
            acumulatedFields: [
                ...acumulatedFields
            ]
        })
    }

    render() {

        const { differentsFields, fields } = this.props
        const { acumulatedFields } = this.state
        const HEADER = 'header'
        const GRID = 'grid'

        return (
            <Grid container style={{ paddingTop: '10px' }} spacing={4}>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" alignContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Typography align="left" variant="h5" component="h5" style={{ color: '#0d38b1', paddingLeft: '10px' }}>
                                Grupos de campos irrepetibles
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Add className="icon-click" onClick={this.handleFields} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid style={{ paddingLeft: '10px' }} container spacing={2}>
                        {
                            (acumulatedFields.length > 0) ? (
                                acumulatedFields.map((arrayFields: any, index: number) => (
                                    <Grid item xs={4} key={`fields-group-${index}`}>
                                        <Zoom in={true} style={{ transitionDelay: `${index}00ms` }}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel htmlFor={`select-${index}`}>
                                                    {
                                                        `Grupo - ${index + 1}`
                                                    }
                                                </InputLabel>
                                                <Select id={`select-${index}`}
                                                    name={`mustBeDifferent`}
                                                    multiple
                                                    fullWidth
                                                    placeholder="Seleccione campos"
                                                    value={arrayFields}
                                                    input={<OutlinedInput fullWidth labelWidth={12} name={`mustBeDifferent`} id={`mustBeDifferent-${index}-id`} />}
                                                    onChange={(e) => this.handleAddAcumulatedFields(e, index)}
                                                    MenuProps={MenuProps}
                                                    renderValue={(selected: Array<any>) => (
                                                        <div className="chips">
                                                            {
                                                                selected.map(value => (
                                                                    <Chip key={value} label={value} className="chip" />
                                                                ))
                                                            }
                                                        </div>
                                                    )
                                                    }
                                                >

                                                    <MenuItem disabled value="">
                                                        Seleccione el tipo...
                                                    </MenuItem>
                                                    {
                                                        fields.map((field: any, index: number) => (
                                                            (field.type !== HEADER && field.type !== GRID && field.label && field.label !== '') && (
                                                                <MenuItem key={`options-${index}`} value={field.name}>
                                                                    {
                                                                        field.label
                                                                    }
                                                                </MenuItem>
                                                            )
                                                        ))
                                                    }

                                                </Select>
                                            </FormControl>
                                        </Zoom>
                                    </Grid>
                                ))
                            )
                                :
                                (
                                    <Grid item xs={4}>
                                        <Typography variant="caption" component="span">
                                            Vacio
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
