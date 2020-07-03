"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const FIelds_1 = require("../Fields/FIelds");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const FieldEditForm_1 = require("../FieldModal/FieldEditForm");
const FieldModal_1 = require("../FieldModal/FieldModal");
const icons_1 = require("@material-ui/icons");
const FieldSelectorAcumulation_1 = require("../FieldsSelectorAcumulation/FieldSelectorAcumulation");
class FieldConstructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldFields: [],
            isModalOpen: false,
            positionOnEdit: 0,
        };
        this.handleCloseModal = () => {
            this.setState(Object.assign(Object.assign({}, this.state), { isModalOpen: false }));
        };
        this.handleOpenModal = (_e, positionSelected) => {
            this.setState(Object.assign(Object.assign({}, this.state), { positionOnEdit: positionSelected, isModalOpen: true }));
        };
        this.handleSaveField = (newField, positionField) => {
            this.setState({
                isModalOpen: false,
            });
            this.props.handleSaveField(newField, positionField);
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }
    render() {
        const { isModalOpen, positionOnEdit } = this.state;
        const { fields, pagesFields, handleDeleteField, handleSaveField, addFieldGrid, isSoftExpertForm, institutions, services, handleService, handleInstitution, serviceSelected, institutionSelected, handleInput, name, description, isLoadingFields, handleAddPageField, handleDeletePageField, handlePageSelected, onPage, version, handleMusBeDifferent, differentsFields, } = this.props;
        return (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
                alignItems: "center",
                height: "100%",
                width: "85%",
                border: "solid 1px rbga(255,255,255, .6)",
                borderRadius: "10px",
            } },
            React.createElement(core_1.Grid, { container: true, style: { width: "100%", height: "100%" } },
                React.createElement(core_1.Paper, { style: { width: "100%", height: "100%" }, elevation: 1 },
                    React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                        React.createElement(core_1.Grid, { item: true, xs: 12, style: { padding: "20px" } },
                            React.createElement(core_1.Grid, { container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(core_1.Typography, { variant: "h5", component: "h5", style: { display: "flex", justifyContent: "center" } }, "Campos del formulario")),
                                React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(core_1.Typography, { variant: "overline", component: "span" }, `Version : ${version}`)),
                                isSoftExpertForm && (React.createElement(core_1.Grid, { item: true, xs: 12 },
                                    React.createElement(core_1.Typography, { variant: "h5", component: "h5", style: {
                                            color: "#0d38b1",
                                            display: "flex",
                                            justifyContent: "center",
                                        } }, "Constructor De Formularios"))))),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(core_1.Divider, null)),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(core_1.Grid, { style: { paddingTop: "15px" }, container: true },
                                React.createElement(core_1.Grid, { item: true, xs: 6, style: { paddingLeft: "5px" } },
                                    React.createElement("div", { style: { width: "90%" } },
                                        React.createElement(core_1.FormControl, { variant: "outlined", fullWidth: true },
                                            React.createElement(core_1.InputLabel, { htmlFor: "institutionSelect" }, "Institucion"),
                                            React.createElement(core_1.Select, { fullWidth: true, value: institutionSelected, onChange: handleInstitution, input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: "institution", id: "institutionSelect" }) },
                                                React.createElement(core_1.MenuItem, { key: "disabled-institution-item", value: "", disabled: true }, "Seleccione una institucion"),
                                                institutions.map((value, index) => (React.createElement(core_1.MenuItem, { key: `options-${index}`, value: value.id }, value.name))))))),
                                React.createElement(core_1.Grid, { item: true, xs: 6 },
                                    React.createElement("div", { style: { width: "90%" } },
                                        React.createElement(core_1.FormControl, { variant: "outlined", fullWidth: true },
                                            React.createElement(core_1.InputLabel, { htmlFor: "serviceSelect" }, "Servicios"),
                                            React.createElement(core_1.Select, { fullWidth: true, value: serviceSelected, onChange: handleService, disabled: services.length === 0, input: React.createElement(core_1.OutlinedInput, { fullWidth: true, labelWidth: 12, name: "service", id: "serviceSelect" }) },
                                                React.createElement(core_1.MenuItem, { key: "disabled-service-item", value: "", disabled: true }, "Seleccione un servicio"),
                                                services.map((value, index) => (React.createElement(core_1.MenuItem, { key: `options-${index}`, value: value.id }, value.name))))))),
                                React.createElement(core_1.Grid, { style: { paddingLeft: "5px" }, item: true, xs: 6 },
                                    React.createElement("div", { style: { width: "90%" } },
                                        React.createElement(core_1.TextField, { id: "name-field", name: "name", variant: "outlined", margin: "normal", placeholder: "Nombre...", helperText: "Nombre del formulario", value: name, autoComplete: "off", autoCapitalize: "on", onChange: handleInput, fullWidth: true }))),
                                React.createElement(core_1.Grid, { item: true, xs: 6 },
                                    React.createElement("div", { style: { width: "90%" } },
                                        React.createElement(core_1.TextField, { id: "description-field", name: "description", variant: "outlined", margin: "normal", placeholder: "Descripcion...", helperText: "Descripcion del formulario", autoComplete: "off", autoCapitalize: "on", onChange: handleInput, value: description, fullWidth: true }))))),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(core_1.Divider, null)),
                        React.createElement(core_1.Grid, { item: true, xs: 12, style: { paddingTop: "10px", paddingLeft: "5px" } },
                            React.createElement(core_1.Grid, { container: true },
                                pagesFields.map((_value, index) => (React.createElement(core_1.Zoom, { in: true },
                                    React.createElement(core_1.Grid, { className: "btn", item: true, xs: 3, style: {
                                            display: "flex",
                                            alignContent: "center",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        } },
                                        React.createElement(core_1.Card, { elevation: 0, style: { borderRadius: "5px", width: "40%" }, onClick: (e) => handlePageSelected(e, index) },
                                            React.createElement(core_1.Typography, { variant: "caption", component: "span", style: {
                                                    display: "flex",
                                                    alignContent: "center",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#0d38b1",
                                                } }, onPage === index ? (React.createElement("strong", null, `Pagina - ${index + 1}`)) : (React.createElement("p", null, `Pagina - ${index + 1}`)))),
                                        index !== 0 && (React.createElement("span", { className: "btn" },
                                            React.createElement(icons_1.Delete, { style: { color: "#ea1212", width: 15 }, onClick: (e) => handleDeletePageField(e, index) }))))))),
                                React.createElement(core_1.Grid, { className: "btn", item: true, xs: 3 },
                                    React.createElement(core_1.Card, { elevation: 0, onClick: handleAddPageField, style: { borderRadius: "5px", width: "40%" } },
                                        React.createElement(icons_1.Add, { style: { color: "#0d38b1" } }))))),
                        React.createElement(core_1.Grid, { item: true, xs: 12, style: { paddingTop: "5px" } },
                            React.createElement(core_1.Divider, null)),
                        React.createElement(core_1.Grid, { item: true, xs: 12, style: {
                                padding: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                            } }, isLoadingFields ? (React.createElement("div", { style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                            } },
                            React.createElement(core_1.CircularProgress, { color: "primary" }))) : fields.length > 0 ? (React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-1" }, (provided) => (React.createElement(core_1.Grid, Object.assign({ innerRef: provided.innerRef }, provided.droppableProps, { container: true, justify: "flex-start", alignContent: "center", alignItems: "center" }),
                            fields.map((value, index) => (React.createElement(FIelds_1.default, { field: value, positionField: index, openEditModal: this.handleOpenModal, handleDelete: handleDeleteField, handleSaveField: handleSaveField, addFieldGrid: addFieldGrid }))),
                            provided.placeholder)))) : (React.createElement("div", { style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                            } },
                            React.createElement(core_1.Typography, { variant: "caption", component: "span" }, "Favor agregar campo a esta pagina...")))),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(FieldSelectorAcumulation_1.default, { fields: fields, handleMusBeDifferent: handleMusBeDifferent, differentsFields: differentsFields })),
                        React.createElement(core_1.Grid, { item: true, xs: 12 },
                            React.createElement(FieldModal_1.default, { content: React.createElement(FieldEditForm_1.default, { field: fields[positionOnEdit], fieldsAddedToGrid: fields[positionOnEdit], inSlide: isModalOpen, position: positionOnEdit, saveField: this.handleSaveField, fathersFields: fields }), closeModal: this.handleCloseModal, isModalOpen: isModalOpen })))))));
    }
}
exports.default = FieldConstructor;
//# sourceMappingURL=FieldConstructor.js.map