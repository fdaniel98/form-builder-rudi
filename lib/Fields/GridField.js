"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const icons_1 = require("@material-ui/icons");
const FIelds_1 = require("./FIelds");
const FieldModal_1 = require("../FieldModal/FieldModal");
const FieldEditForm_1 = require("../FieldModal/FieldEditForm");
class GridField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: this.props.field,
            isModalOpen: false,
            positionOnEdit: 0
        };
        this.onDragEnd = () => {
        };
        this.handleDelete = (_e, position) => {
            const { positionGrid } = this.props;
            this.props.handleDelete(positionGrid, true, position);
        };
        this.handleOpenModal = (_e, positionSelected) => {
            this.setState(Object.assign(Object.assign({}, this.state), { positionOnEdit: positionSelected, isModalOpen: true }));
        };
        this.handleSaveField = (newField, positionField) => {
            const { positionGrid } = this.props;
            this.setState(Object.assign(Object.assign({}, this.state), { isModalOpen: false }));
            this.props.handleSaveField(newField, positionGrid, true, positionField);
        };
        this.handleCloseModal = () => {
            this.setState(Object.assign(Object.assign({}, this.state), { isModalOpen: false }));
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }
    render() {
        const { field, isModalOpen, positionOnEdit } = this.state;
        return (React.createElement(core_1.Grid, { item: true, xs: 12 },
            React.createElement(core_1.ExpansionPanel, null,
                React.createElement(core_1.ExpansionPanelSummary, { expandIcon: React.createElement(icons_1.ExpandMore, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                    React.createElement(core_1.Typography, { variant: "overline", component: "span" }, "Grid")),
                React.createElement(core_1.ExpansionPanelDetails, null,
                    React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
                        React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-2" }, (provided) => (React.createElement(core_1.Grid, Object.assign({ innerRef: provided.innerRef }, provided.droppableProps, { container: true, justify: "flex-start", alignContent: "center", alignItems: "center" }), field.fields.map((value, index) => (React.createElement(FIelds_1.default, { field: value, positionField: index, handleDelete: this.handleDelete, openEditModal: this.handleOpenModal, handleSaveField: this.handleSaveField, addFieldGrid: undefined }))))))))),
            React.createElement(core_1.Grid, { item: true, xs: 12 },
                React.createElement(FieldModal_1.default, { content: React.createElement(FieldEditForm_1.default, { field: field.fields[positionOnEdit], fieldsAddedToGrid: field.fields, inSlide: isModalOpen, position: positionOnEdit, saveField: this.handleSaveField }), closeModal: this.handleCloseModal, isModalOpen: isModalOpen }))));
    }
}
exports.default = GridField;
//# sourceMappingURL=GridField.js.map