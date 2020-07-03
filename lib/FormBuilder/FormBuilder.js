"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FieldSelector_1 = require("../FieldSelector/FieldSelector");
const FieldConstructor_1 = require("../FieldConstructor/FieldConstructor");
const styles_1 = require("@material-ui/styles");
const axios_1 = require("axios");
const Generator_1 = require("../Helper/Generator");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
class FormBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: this.props.fields,
            oldFields: [],
            positionOnEdit: 0,
            isSoftExpertForm: this.props.isSoftExpertForm,
            institutions: [],
            services: [],
            serviceSelected: "",
            institutionSelected: "",
            name: "",
            differentsFields: [],
            version: 1,
            description: "",
            onPage: 0,
            isLoadingFields: true
        };
        this.handleSaveSuccess = () => {
            this.setState(Object.assign(Object.assign({}, this.state), { fields: [[]], oldFields: [], positionOnEdit: 0, serviceSelected: "", institutionSelected: "", name: "", description: "", onPage: 0, isLoadingFields: true }));
        };
        this.handleSaveField = (newField, positionField, isGrid = false, positionOnGrid = 0) => {
            let { fields, onPage } = this.state;
            if (!isGrid) {
                const newFields = Array.from(fields);
                newFields[onPage].splice(positionField, 1);
                newFields[onPage].splice(positionField, 0, newField);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: newFields, oldFields: fields }));
            }
            else {
                const newFields = Array.from(fields);
                newFields[onPage][positionField].fields.splice(positionOnGrid, 1);
                newFields[onPage][positionField].fields.splice(positionOnGrid, 0, newField);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: newFields, oldFields: fields }));
            }
        };
        this.handleDeleteField = (positionField, isGrid = false, fieldPositionOnGrid) => {
            const { fields, onPage } = this.state;
            if (!isGrid) {
                const newFields = Array.from(fields);
                newFields[onPage].splice(positionField, 1);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: newFields }));
            }
            else {
                const newFields = Array.from(fields);
                newFields[onPage][positionField].fields.splice(fieldPositionOnGrid, 1);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: newFields }));
            }
        };
        this.onDragEnd = (result, _provided) => {
            const { source, destination } = result;
            const { fields, onPage } = this.state;
            if (!destination) {
                return;
            }
            if ((destination.draggableId === source.draggableId) && (destination.index === source.index)) {
                return;
            }
            const originPos = source.index;
            const fieldSelected = fields[onPage][originPos];
            const destinationPos = destination.index;
            const newOrderFields = Array.from(fields);
            if (destination.droppableId !== 'droppable-2' && (destination.droppableId === source.droppableId)) {
                newOrderFields[onPage].splice(originPos, 1);
                newOrderFields[onPage].splice(destinationPos, 0, fieldSelected);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: newOrderFields }));
            }
            if (destination.droppableId !== 'droppable-2' && destination.droppableId !== source.droppableId) {
                const type = result.draggableId;
                const field = this.handleDragFieldType(type);
                this.handleAddField(field, destinationPos);
            }
        };
        this.handleDragFieldType = (type) => {
            let structure = {};
            switch (type) {
                case 'select':
                    structure = {
                        id: Generator_1.genNameField('select') + '-id',
                        type: 'select',
                        father_id: null,
                        entity: '',
                        group: "grp01",
                        label_persist: '',
                        hidden: false,
                        required: true,
                        enabled: true,
                        label: 'Select',
                        orden: '01',
                        name: Generator_1.genNameField('select'),
                        values: []
                    };
                    break;
                case 'checkbox-group':
                    structure = {
                        id: Generator_1.genNameField('checkbox') + '-id',
                        type: "checkbox-group",
                        group: "grp01",
                        label: 'Checkbox',
                        name: Generator_1.genNameField('checkbox'),
                        hidden: false,
                        enabled: true,
                        required: true,
                        orden: "100303100029",
                        values: []
                    };
                    break;
                case 'text':
                    structure = {
                        id: Generator_1.genNameField('texto') + '-id',
                        type: "text",
                        label: 'Text',
                        Mask: '',
                        MaskParam: false,
                        group: "grp01",
                        orden: "100303100192",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: Generator_1.genNameField('texto'),
                        subtype: "text"
                    };
                    break;
                case 'radio-group':
                    structure = {
                        id: Generator_1.genNameField('radio') + '-id',
                        type: "radio-group",
                        group: "grp01",
                        label: 'Radio',
                        name: Generator_1.genNameField('radio'),
                        hidden: false,
                        enabled: true,
                        required: true,
                        orden: "100303100029",
                        values: []
                    };
                    break;
                case 'header':
                    structure = {
                        id: Generator_1.genNameField('header') + '-id',
                        type: "header",
                        subtype: "h1",
                        name: Generator_1.genNameField('header'),
                        label: 'Header',
                        enabled: true,
                        hidden: false,
                        orden: "100134100022"
                    };
                    break;
                case 'time':
                    structure = {
                        id: Generator_1.genNameField('time') + '-id',
                        type: "time",
                        label: 'Time',
                        Mask: "30",
                        MaskParam: '',
                        group: "grp01",
                        orden: "100750100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: Generator_1.genNameField('time'),
                        subtype: "text"
                    };
                    break;
                case 'grid':
                    structure = {
                        type: "grid",
                        enabled: true,
                        label: 'Grid',
                        group: "grp01",
                        orden: "100842100042",
                        name: Generator_1.genNameField('grid'),
                        relationship: '',
                        acumulatedFields: [],
                        fields: []
                    };
                    break;
                case 'date':
                    structure = {
                        id: Generator_1.genNameField('date') + '-id',
                        type: "date",
                        label: "Fecha ",
                        Mask: '',
                        MaskParam: '',
                        group: "grp01",
                        orden: "100713100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                        name: Generator_1.genNameField('date'),
                        subtype: "text"
                    };
                    break;
                case 'textarea':
                    structure = {
                        id: Generator_1.genNameField('textarea') + '-id',
                        type: "textarea",
                        name: Generator_1.genNameField('textarea'),
                        label: 'Textarea',
                        rows: 10,
                        cols: 50,
                        Mask: '',
                        MaskParam: '',
                        group: 'grp01',
                        orden: "100750100048",
                        hidden: false,
                        required: false,
                        enabled: true,
                    };
                    break;
                default:
                    structure = {};
                    break;
            }
            return structure;
        };
        this.handleAddPageField = () => {
            const { fields } = this.state;
            const newPageField = [];
            fields.push(newPageField);
            this.setState(Object.assign(Object.assign({}, this.state), { fields: fields }));
        };
        this.handleMusBeDifferent = (fieldsGroups) => {
            this.setState(Object.assign(Object.assign({}, this.state), { differentsFields: [
                    ...fieldsGroups
                ] }));
        };
        this.handleDeletePageField = (e, index) => {
            const { fields } = this.state;
            fields.splice(index, 1);
            this.setState(Object.assign(Object.assign({}, this.state), { fields: fields }));
        };
        this.handleAddField = (field, pos = 0) => {
            const { fields, onPage } = this.state;
            fields[onPage].splice(pos, 0, field);
            this.setState(Object.assign(Object.assign({}, this.state), { fields: fields }));
        };
        this.addFieldGrid = (_e, positionField) => {
            const { fields, onPage } = this.state;
            const nameGen = Generator_1.genNameField('grid-field');
            fields[onPage][positionField].fields.push({
                "type": "text",
                "label": nameGen,
                "Mask": null,
                "group": "grp01",
                "orden": "100266100184",
                "hidden": false,
                "required": false,
                "enabled": true,
                "name": nameGen,
                "subtype": "text"
            });
            this.setState(Object.assign(Object.assign({}, this.state), { fields: [
                    ...fields
                ] }));
        };
        this.handleInstitutionSelect = (e) => {
            const target = e.target;
            const value = target.value;
            this.setState(Object.assign(Object.assign({}, this.state), { institutionSelected: value }));
            this.handleInstitutionChange(value);
        };
        this.handleServiceSelect = (e) => {
            const target = e.target;
            const value = target.value;
            this.setState(Object.assign(Object.assign({}, this.state), { serviceSelected: value }));
        };
        this.handleInstitutionChange = async (value) => {
            const serviceResponse = await this.axiosInstance.get(`allservices/institution/${value}`);
            this.setState(Object.assign(Object.assign({}, this.state), { services: serviceResponse.data }));
        };
        this.handleInput = (e) => {
            const target = e.target;
            const name = target.name;
            const value = target.value;
            this.setState(Object.assign(Object.assign({}, this.state), { [name]: value }));
        };
        this.handlePageSelected = (_e, index) => {
            this.setState(Object.assign(Object.assign({}, this.state), { onPage: index }));
        };
        this.componentDidMount = async () => {
            const { institutionApi, serviceApi, formUrl } = this.props;
            const institutionsResponse = await this.axiosInstance.get(institutionApi);
            this.setState(Object.assign(Object.assign({}, this.state), { institutions: institutionsResponse.data }));
            if (formUrl) {
                const fomularyResponse = await this.axiosInstance.get(formUrl);
                const fields = fomularyResponse.data.fields.map((jsonString) => JSON.parse(jsonString));
                const extra = JSON.parse(fomularyResponse.data.extra);
                const differents = extra ? extra.differents : new Array();
                const institution_id = fomularyResponse.data.institution_id;
                const service_id = fomularyResponse.data.service_id;
                const version = parseInt(fomularyResponse.data.version) + 1;
                this.handleInstitutionChange(institution_id);
                this.setState(Object.assign(Object.assign({}, this.state), { fields: fields, institutionSelected: institution_id, serviceSelected: service_id, isLoadingFields: false, differentsFields: differents, version: version, name: fomularyResponse.data.name, description: fomularyResponse.data.description }));
            }
            else {
                const defaultFields = [
                    []
                ];
                this.setState(Object.assign(Object.assign({}, this.state), { fields: defaultFields, isLoadingFields: false }));
            }
        };
        this.handleAddField = this.handleAddField.bind(this);
        this.handleDeleteField = this.handleDeleteField.bind(this);
        this.handleSaveField = this.handleSaveField.bind(this);
        this.addFieldGrid = this.addFieldGrid.bind(this);
        this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddPageField = this.handleAddPageField.bind(this);
        this.handleDeletePageField = this.handleDeletePageField.bind(this);
        this.handleMusBeDifferent = this.handleMusBeDifferent.bind(this);
        this.axiosInstance = axios_1.default.create({
            baseURL: this.props.apiURL,
            headers: this.props.headers
        });
    }
    render() {
        const { fields, isSoftExpertForm, services, institutions, serviceSelected, institutionSelected, onPage, name, description, isLoadingFields, version, differentsFields } = this.state;
        const { sendForm } = this.props;
        return (React.createElement(styles_1.StylesProvider, { injectFirst: true },
            React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'flex-start', width: '100%', height: '100%' } },
                    React.createElement(FieldConstructor_1.default, { pagesFields: fields, fields: fields[onPage] ? fields[onPage] : [], onDragEnd: this.onDragEnd, handleDeleteField: this.handleDeleteField, handleSaveField: this.handleSaveField, addFieldGrid: this.addFieldGrid, isSoftExpertForm: isSoftExpertForm, services: services, institutions: institutions, handleInstitution: this.handleInstitutionSelect, handleService: this.handleServiceSelect, serviceSelected: serviceSelected, institutionSelected: institutionSelected, handleInput: this.handleInput, differentsFields: differentsFields, name: name, description: description, isLoadingFields: isLoadingFields, handleAddPageField: this.handleAddPageField, handleDeletePageField: this.handleDeletePageField, handlePageSelected: this.handlePageSelected, onPage: onPage, version: version, handleMusBeDifferent: this.handleMusBeDifferent }),
                    React.createElement(FieldSelector_1.default, { handleAddField: this.handleAddField, sendForm: sendForm, fields: fields, institution: institutionSelected, service: serviceSelected, name: name, version: version, description: description, handleSaveSuccess: this.handleSaveSuccess, differentsFields: differentsFields })))));
    }
}
exports.default = FormBuilder;
FormBuilder.defaultProps = {
    fields: [],
    isSoftExpertForm: false,
    sendForm: Function
};
//# sourceMappingURL=FormBuilder.js.map