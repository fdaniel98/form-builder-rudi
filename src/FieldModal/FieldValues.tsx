import * as React from 'react'
import { Grid, Typography, TextField, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Zoom } from '@material-ui/core';
import { Add, ExpandMore } from '@material-ui/icons';

interface FieldValuesProps {
    handleValues: any,
    values: Array<any>
    label: string
}

export default class FieldValues extends React.PureComponent<FieldValuesProps> {

    constructor(props: any) {
        super(props)
    }

    state = {
        values: this.props.values
    }

    handleAdd = () => {

        const { values } = this.state
        const qty = values.length + 1

        const valueObj = {
            label: `opcion-${qty}`,
            value: `opcion-${qty}`,
            rule: '',
            father: ''
        }

        this.setState({
            ...this.state,
            values: [
                ...this.state.values,
                valueObj
            ]
        })


        this.props.handleValues([...this.state.values, valueObj])
    }

    handleModifyValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>, position: number) => {
        const { values } = this.state
        const name = e.target.name
        const value = e.target.value

        values[position][name] = value


        this.setState({
            ...this.state,
            values: [
                ...values
            ]
        })

        this.props.handleValues([...values])
    }

    render() {

        const { values } = this.state

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="overline" component="span">
                        {
                            this.props.label
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {
                            values.map((value: any, index: number) => (
                                <Grid item xs={4}>
                                    <Zoom in={true}>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={<ExpandMore />} aria-controls="panel" id={`panel-expansion-${index}`}>
                                                <Typography variant="overline" component="span">
                                                    {
                                                        `Opcion-${index + 1}`
                                                    }
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth name="label" value={value.label} variant="outlined" placeholder="Label..." onChange={(e) => this.handleModifyValue(e, index)} />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth name="value" value={value.value} variant="outlined" placeholder="Valor..." onChange={(e) => this.handleModifyValue(e, index)} />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth name="rule" value={value.rule} variant="outlined" placeholder="Regla..." onChange={(e) => this.handleModifyValue(e, index)} />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <TextField fullWidth name="father" value={value.father} variant="outlined" placeholder="ID del padre..." onChange={(e) => this.handleModifyValue(e, index)} />
                                                    </Grid>
                                                </Grid>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </Zoom>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid style={{ paddingTop: '10px' }} item xs={12}>
                    <Add className="icon-click" onClick={this.handleAdd} />
                </Grid>
            </Grid>
        )
    }
}
