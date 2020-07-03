"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
class FieldValues extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values
        };
        this.handleAdd = () => {
            const { values } = this.state;
            const qty = values.length + 1;
            const valueObj = {
                label: `opcion-${qty}`,
                value: `opcion-${qty}`,
                rule: '',
                father: ''
            };
            this.setState(Object.assign(Object.assign({}, this.state), { values: [
                    ...this.state.values,
                    valueObj
                ] }));
            this.props.handleValues([...this.state.values, valueObj]);
        };
        this.handleModifyValue = (e, position) => {
            const { values } = this.state;
            const name = e.target.name;
            const value = e.target.value;
            values[position][name] = value;
            this.setState(Object.assign(Object.assign({}, this.state), { values: [
                    ...values
                ] }));
            this.props.handleValues([...values]);
        };
    }
    render() {
        const { values } = this.state;
        return (React.createElement(core_1.Grid, { container: true },
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Typography, { variant: "overline", component: "span" }, this.props.label)),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { container: true, spacing: 2 }, values.map((value, index) => (React.createElement(core_1.Grid, { item: true, xs: 4 },
                    React.createElement(core_1.Zoom, { in: true },
                        React.createElement(core_1.ExpansionPanel, null,
                            React.createElement(core_1.ExpansionPanelSummary, { expandIcon: React.createElement(icons_1.ExpandMore, null), "aria-controls": "panel", id: `panel-expansion-${index}` },
                                React.createElement(core_1.Typography, { variant: "overline", component: "span" }, `Opcion-${index + 1}`)),
                            React.createElement(core_1.ExpansionPanelDetails, null,
                                React.createElement(core_1.Grid, { container: true, spacing: 2 },
                                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                                        React.createElement(core_1.TextField, { fullWidth: true, name: "label", value: value.label, variant: "outlined", placeholder: "Label...", onChange: (e) => this.handleModifyValue(e, index) })),
                                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                                        React.createElement(core_1.TextField, { fullWidth: true, name: "value", value: value.value, variant: "outlined", placeholder: "Valor...", onChange: (e) => this.handleModifyValue(e, index) })),
                                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                                        React.createElement(core_1.TextField, { fullWidth: true, name: "rule", value: value.rule, variant: "outlined", placeholder: "Regla...", onChange: (e) => this.handleModifyValue(e, index) })),
                                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                                        React.createElement(core_1.TextField, { fullWidth: true, name: "father", value: value.father, variant: "outlined", placeholder: "ID del padre...", onChange: (e) => this.handleModifyValue(e, index) }))))))))))),
            React.createElement(core_1.Grid, { style: { paddingTop: '10px' }, item: true, xs: 12 },
                React.createElement(icons_1.Add, { className: "icon-click", onClick: this.handleAdd }))));
    }
}
exports.default = FieldValues;
//# sourceMappingURL=FieldValues.js.map