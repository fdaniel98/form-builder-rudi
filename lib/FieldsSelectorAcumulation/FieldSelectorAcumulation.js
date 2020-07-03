"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
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
class FieldSelectorAcumulation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acumulatedFields: this.props.differentsFields
        };
        this.componentWillReceiveProps = (nextProps) => {
            this.setState(Object.assign(Object.assign({}, this.state), { acumulatedFields: [...nextProps.differentsFields] }));
        };
        this.handleAddAcumulatedFields = (e, index) => {
            const { acumulatedFields } = this.state;
            const { handleMusBeDifferent } = this.props;
            const value = e.target.value;
            acumulatedFields[index] = [...value];
            this.setState(Object.assign(Object.assign({}, this.state), { acumulatedFields: [
                    ...acumulatedFields
                ] }));
            handleMusBeDifferent([...acumulatedFields]);
        };
        this.handleFields = () => {
            const { acumulatedFields } = this.state;
            const newAcumulation = [];
            acumulatedFields.push(newAcumulation);
            this.setState(Object.assign(Object.assign({}, this.state), { acumulatedFields: [
                    ...acumulatedFields
                ] }));
        };
    }
    render() {
        const { differentsFields, fields } = this.props;
        const { acumulatedFields } = this.state;
        const HEADER = 'header';
        const GRID = 'grid';
        return (React.createElement(core_1.Grid, { container: true, style: { paddingTop: '10px' }, spacing: 4 },
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement("hr", null)),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { container: true, justify: "flex-start", alignContent: "center", alignItems: "center" },
                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                        React.createElement(core_1.Typography, { align: "left", variant: "h5", component: "h5", style: { color: '#0d38b1', paddingLeft: '10px' } }, "Grupos de campos irrepetibles")),
                    React.createElement(core_1.Grid, { item: true, xs: 6 },
                        React.createElement(icons_1.Add, { className: "icon-click", onClick: this.handleFields })))),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(core_1.Grid, { style: { paddingLeft: '10px' }, container: true, spacing: 2 }, (acumulatedFields.length > 0) ? (acumulatedFields.map((arrayFields, index) => (React.createElement(core_1.Grid, { item: true, xs: 4, key: `fields-group-${index}` },
                    React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${index}00ms` } },
                        React.createElement(core_1.FormControl, { fullWidth: true, variant: "outlined" },
                            React.createElement(core_1.InputLabel, { htmlFor: `select-${index}` }, `Grupo - ${index + 1}`),
                            React.createElement(core_1.Select, { id: `select-${index}`, name: `mustBeDifferent`, multiple: true, fullWidth: true, placeholder: "Seleccione campos", value: arrayFields, input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: `mustBeDifferent`, id: `mustBeDifferent-${index}-id` }), onChange: (e) => this.handleAddAcumulatedFields(e, index), MenuProps: MenuProps, renderValue: (selected) => (React.createElement("div", { className: "chips" }, selected.map(value => (React.createElement(core_1.Chip, { key: value, label: value, className: "chip" }))))) },
                                React.createElement(core_1.MenuItem, { disabled: true, value: "" }, "Seleccione el tipo..."),
                                fields.map((field, index) => ((field.type !== HEADER && field.type !== GRID && field.label && field.label !== '') && (React.createElement(core_1.MenuItem, { key: `options-${index}`, value: field.name }, field.label)))))))))))
                    :
                        (React.createElement(core_1.Grid, { item: true, xs: 4 },
                            React.createElement(core_1.Typography, { variant: "caption", component: "span" }, "Vacio")))))));
    }
}
exports.default = FieldSelectorAcumulation;
//# sourceMappingURL=FieldSelectorAcumulation.js.map