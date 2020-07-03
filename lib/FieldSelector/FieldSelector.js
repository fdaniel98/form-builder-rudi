"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FieldGenerator_1 = require("./FieldGenerator");
const core_1 = require("@material-ui/core");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
class FieldSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.handleSave = async () => {
            const { fields, service, institution, name, description, version, differentsFields } = this.props;
            this.setState(Object.assign(Object.assign({}, this.state), { isLoading: true }));
            await this.props.sendForm(fields, service, institution, name, description, version, differentsFields);
            this.props.handleSaveSuccess();
            this.setState(Object.assign(Object.assign({}, this.state), { isLoading: false }));
            alert('Formulario guardado exitosamente !!!');
        };
        this.isDisabled = () => {
            const { fields } = this.props;
            let disabled = true;
            fields.map((arrayFields, index) => {
                if (arrayFields.length > 0) {
                    disabled = false;
                }
            });
            return disabled;
        };
    }
    render() {
        const { handleAddField } = this.props;
        const { isLoading } = this.state;
        return (React.createElement("div", { style: { justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start', width: '20%' } },
            React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-2" }, (provided) => (React.createElement(core_1.Grid, Object.assign({ container: true, innerRef: provided.innerRef }, provided.droppableProps, { spacing: 2 }),
                React.createElement(FieldGenerator_1.default, { handleAddField: handleAddField })))),
            React.createElement(core_1.Divider, null),
            React.createElement("div", { style: { paddingLeft: '10px', width: '90%' } }, isLoading ? (React.createElement(core_1.CircularProgress, { color: "primary" }))
                :
                    (React.createElement(core_1.Button, { className: "btn", variant: "contained", style: { backgroundColor: '#0d38b1', color: 'white' }, fullWidth: true, disabled: this.isDisabled() }, "Guardar formulario")))));
    }
}
exports.default = FieldSelector;
//# sourceMappingURL=FieldSelector.js.map