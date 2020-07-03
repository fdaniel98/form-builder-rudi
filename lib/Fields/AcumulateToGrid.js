"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const addition = {
    name: 'Sumar',
    value: 'addition'
};
const subtraction = {
    name: 'Restar',
    value: 'subtraction'
};
const multiplication = {
    name: 'Multiplicar',
    value: 'multiplication'
};
const division = {
    name: 'Dividir',
    value: 'division'
};
class AcumulateToGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acumulatedFields: this.props.items,
            field: {},
            operations: [
                addition,
                subtraction,
                multiplication,
                division
            ]
        };
        this.handleSelect = (e, index) => {
            const target = e.target;
            const name = target.name;
            const value = target.value;
            const { handleAddAcumulate, items } = this.props;
            items.acumulatedFields[index] = Object.assign(Object.assign({}, items.acumulatedFields[index]), { [name]: value });
            const fieldsAcumulate = items.acumulatedFields[index];
            handleAddAcumulate(fieldsAcumulate, index);
        };
    }
    render() {
        const { items, addAcumulateField } = this.props;
        const { operations } = this.state;
        return (React.createElement(core_1.Grid, { container: true, spacing: 4 },
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Typography, { variant: "h6", component: "h6" }, "Campos para acumular")),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { container: true, justify: "flex-start", alignContent: "center", alignItems: "center" },
                    React.createElement(core_1.Grid, { item: true, xs: 2 },
                        React.createElement(icons_1.Add, { className: "icon-click", style: { color: 'rgb(13, 56, 177)' }, onClick: addAcumulateField })))),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { container: true, justify: "flex-start", alignItems: "center", alignContent: "center", spacing: 2 }, items.acumulatedFields.map((field, index) => (React.createElement(core_1.Grid, { key: `select-acumulate-${field.fieldName}-${index}`, item: true, xs: 3 },
                    React.createElement(core_1.Grid, { container: true, spacing: 2 },
                        React.createElement(core_1.Grid, { item: true, xs: 6 },
                            React.createElement(core_1.FormControl, { variant: "outlined", fullWidth: true },
                                React.createElement(core_1.InputLabel, { htmlFor: "field-select" }, "Campo"),
                                React.createElement(core_1.Select, { id: "field-select", name: "fieldName", fullWidth: true, value: field.fieldName, onChange: (e) => this.handleSelect(e, index), input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: 'fieldName', id: "field-acumulate" }) }, items.fields.map((field, index) => (React.createElement(core_1.MenuItem, { key: `${field.orden}-${index}`, value: field.name }, field.label)))))),
                        React.createElement(core_1.Grid, { item: true, xs: 6 },
                            React.createElement(core_1.FormControl, { variant: "outlined", fullWidth: true },
                                React.createElement(core_1.InputLabel, { htmlFor: "field-select" }, "Operacion"),
                                React.createElement(core_1.Select, { id: "field-select", name: 'operation', fullWidth: true, value: field.operation, onChange: (e) => this.handleSelect(e, index), input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: 'operation', id: "field-acumulate" }) }, operations.map((operation, index) => (React.createElement(core_1.MenuItem, { key: `${operation.value}-${index}`, value: operation.value }, operation.name))))))))))))));
    }
}
exports.default = AcumulateToGrid;
//# sourceMappingURL=AcumulateToGrid.js.map