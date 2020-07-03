"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const GridField_1 = require("./GridField");
const icons_1 = require("@material-ui/icons");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
class Fields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.handleDelete = (_e, positionField) => {
            this.props.handleDelete(positionField);
        };
        this.getTextInput = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.TextField, { id: id, label: field.label, margin: "normal", helperText: field.helperText, placeholder: field.placeHolder, variant: "outlined", fullWidth: true })))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getHeader = (field, provided, isDragging) => {
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', paddingBottom: '10px', paddingTop: '10px', backgroundColor: isDragging ? '#f2f6ff' : '' }, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { item: true, xs: 12 }),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true },
                        React.createElement(core_1.Grid, { item: true, style: { display: 'flex', alignContent: 'center', alignItems: 'center', backgroundColor: '#f2f6ff' }, xs: 10 },
                            React.createElement(core_1.Typography, { align: "left", variant: "h5", component: "h5", style: { color: '#0d38b1', paddingLeft: '10px' } }, field.label)),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getSelect = (field, provided, isDragging) => {
            const { openEditModal, positionField } = this.props;
            const id = field.name + '-id';
            const key = field.name + '-key';
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.FormControl, { variant: "outlined", fullWidth: true },
                                                React.createElement(core_1.InputLabel, { htmlFor: `${field.name}-id` }, field.label),
                                                React.createElement(core_1.Select, { fullWidth: true, value: "", input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: field.name, id: `${field.name}-id` }) }, field.values && field.values.map((value, index) => (React.createElement(core_1.MenuItem, { key: `options-${index}`, value: value.value }, value.label)))))))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getFileField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "flex-start", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.Typography, { variant: "overline", component: "span" }, field.label)),
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.Button, { variant: "outlined", fullWidth: true, style: { padding: '10px' } },
                                                React.createElement(core_1.Typography, { variant: "caption", component: "span", style: { display: 'flex', alignItems: 'center', alignContent: 'center' } },
                                                    React.createElement(icons_1.Search, null),
                                                    " Seleccionar de mis documentos"))))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getDateField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.TextField, { id: id, margin: "normal", helperText: field.helperText, variant: "outlined", type: "date", fullWidth: true })))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getTimeField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.TextField, { id: id, label: field.label, margin: "normal", helperText: field.helperText, variant: "outlined", type: "time", fullWidth: true })))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getCheckboxField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.Grid, { container: true },
                                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                                    React.createElement(core_1.Typography, { variant: "subtitle2", component: "span" }, field.label)),
                                                (field.values && field.values.length > 0) ? field.values.map((value, index) => (React.createElement(core_1.Grid, { item: true, xs: "auto" },
                                                    React.createElement(core_1.FormControlLabel, { key: `form-control-checkbox-${index}`, control: React.createElement(core_1.Checkbox, { id: id, checked: true, value: value.value, color: "primary" }), label: value.label }))))
                                                    :
                                                        (React.createElement(core_1.Grid, { item: true, xs: 12 },
                                                            React.createElement(core_1.Typography, { variant: "caption", component: "span" }, "*Vacio*"))))))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getRadioField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.Grid, { container: true },
                                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                                    React.createElement(core_1.Typography, { variant: "subtitle2", component: "span" }, field.label)),
                                                (field.values && field.values.length > 0) ? field.values.map((value, index) => (React.createElement(core_1.Grid, { item: true, xs: "auto" },
                                                    React.createElement(core_1.FormControlLabel, { key: `form-control-checkbox-${index}`, control: React.createElement(core_1.Radio, { id: id, checked: true, value: value.value, color: "primary" }), label: value.label }))))
                                                    :
                                                        (React.createElement(core_1.Grid, { item: true, xs: 12 },
                                                            React.createElement(core_1.Typography, { variant: "caption", component: "span" }, "*Vacio*"))))))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getGridField = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField, handleSaveField, addFieldGrid, handleDelete } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 12, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                                            React.createElement(core_1.Grid, { container: true },
                                                React.createElement(GridField_1.default, { positionGrid: positionField, field: field, handleSaveField: handleSaveField, handleDelete: handleDelete }))))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Add, { className: "icon-click", onClick: (e) => addFieldGrid(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getTextArea = (field, provided, isDragging) => {
            const id = field.name + '-id';
            const key = field.name + '-key';
            const { openEditModal, positionField } = this.props;
            return (React.createElement(core_1.Grid, Object.assign({ className: "field", style: { display: 'flex', backgroundColor: isDragging ? '#f2f6ff' : '' }, item: true, xs: 6, key: key, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Zoom, { in: true, style: { transitionDelay: `${positionField}00ms` } },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 10 },
                            React.createElement(core_1.Card, { elevation: 0 },
                                React.createElement(core_1.CardContent, null,
                                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                        React.createElement(core_1.Grid, { item: true, xs: 12, style: { display: 'flex' } },
                                            React.createElement(core_1.TextareaAutosize, { cols: field.cols ? field.cols : 50, id: id, "aria-label": "Text Area", rows: field.rows ? field.rows : 10, placeholder: field.label })))))),
                        React.createElement(core_1.Grid, { className: "options-field", item: true, xs: 2 },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Edit, { className: "icon-click", onClick: (e) => openEditModal(e, positionField) })),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(icons_1.Delete, { className: "icon-click", style: { paddingBottom: '5px' }, onClick: (e) => this.handleDelete(e, positionField) }))))))));
        };
        this.getField = (field, provided, isDragging) => {
            const text = 'text';
            const header = 'header';
            const select = 'select';
            const radio = 'radio-group';
            const checkbox = 'checkbox-group';
            const date = 'date';
            const grid = 'grid';
            const time = 'time';
            const file = 'file';
            const textArea = 'textarea';
            if (field.type == text) {
                return this.getTextInput(field, provided, isDragging);
            }
            else if (field.type == header) {
                return this.getHeader(field, provided, isDragging);
            }
            else if (field.type == select) {
                return this.getSelect(field, provided, isDragging);
            }
            else if (field.type == file) {
                return this.getFileField(field, provided, isDragging);
            }
            else if (field.type == date) {
                return this.getDateField(field, provided, isDragging);
            }
            else if (field.type == time) {
                return this.getTimeField(field, provided, isDragging);
            }
            else if (field.type == checkbox) {
                return this.getCheckboxField(field, provided, isDragging);
            }
            else if (field.type == radio) {
                return this.getRadioField(field, provided, isDragging);
            }
            else if (field.type == grid) {
                return this.getGridField(field, provided, isDragging);
            }
            else if (field.type == textArea) {
                return this.getTextArea(field, provided, isDragging);
            }
            return (React.createElement("div", Object.assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps)));
        };
        this.handleCloseModal = (value) => {
            this.setState(Object.assign(Object.assign({}, this.state), { isModalOpen: value }));
        };
    }
    render() {
        const { field, positionField } = this.props;
        return (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: `${positionField}`, index: positionField }, (provided, snapshot) => (this.getField(field, provided, snapshot.isDragging))));
    }
}
exports.default = Fields;
//# sourceMappingURL=FIelds.js.map