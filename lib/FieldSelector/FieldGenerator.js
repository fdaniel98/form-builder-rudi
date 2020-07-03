"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
const Generator_1 = require("../Helper/Generator");
const icons_1 = require("@material-ui/icons");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
class FieldGenerator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                select: {
                    name: 'select',
                    structure: {
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
                    }
                },
                checkboxGroup: {
                    name: 'checkbox-group',
                    structure: {
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
                    }
                },
                radioGroup: {
                    name: 'radio-group',
                    structure: {
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
                    }
                },
                text: {
                    name: 'text',
                    structure: {
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
                    }
                },
                date: {
                    name: 'date',
                    structure: {
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
                    }
                },
                header: {
                    name: 'header',
                    structure: {
                        id: Generator_1.genNameField('header') + '-id',
                        type: "header",
                        subtype: "h1",
                        name: Generator_1.genNameField('header'),
                        label: 'Header',
                        enabled: true,
                        hidden: false,
                        orden: "100134100022"
                    }
                },
                grid: {
                    name: 'grid',
                    structure: {
                        type: "grid",
                        enabled: true,
                        label: 'Grid',
                        group: "grp01",
                        orden: "100842100042",
                        name: Generator_1.genNameField('grid'),
                        relationship: '',
                        acumulatedFields: [],
                        fields: []
                    }
                },
                time: {
                    name: 'time',
                    structure: {
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
                    }
                },
                textarea: {
                    name: 'textarea',
                    structure: {
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
                    }
                }
            }
        };
        this.handleAddField = (_e, fieldComposition) => {
            this.setState(Object.assign(Object.assign({}, this.state), { fields: {
                    select: {
                        name: 'select',
                        structure: {
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
                        }
                    },
                    checkboxGroup: {
                        name: 'checkbox-group',
                        structure: {
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
                        }
                    },
                    radioGroup: {
                        name: 'radio-group',
                        structure: {
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
                        }
                    },
                    text: {
                        name: 'text',
                        structure: {
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
                        }
                    },
                    date: {
                        name: 'date',
                        structure: {
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
                        }
                    },
                    header: {
                        name: 'header',
                        structure: {
                            id: Generator_1.genNameField('header') + '-id',
                            type: "header",
                            subtype: "h1",
                            name: Generator_1.genNameField('header'),
                            label: 'Header',
                            enabled: true,
                            hidden: false,
                            orden: "100134100022"
                        }
                    },
                    grid: {
                        name: 'grid',
                        structure: {
                            type: "grid",
                            enabled: true,
                            label: 'Grid',
                            group: "grp01",
                            orden: "100842100042",
                            name: Generator_1.genNameField('grid'),
                            relationship: '',
                            acumulatedFields: [],
                            fields: []
                        }
                    },
                    time: {
                        name: 'time',
                        structure: {
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
                        }
                    },
                    textarea: {
                        name: 'textarea',
                        structure: {
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
                        }
                    }
                } }));
            this.props.handleAddField(fieldComposition);
        };
        this.getInputRepresentation = (fieldName, fieldComposition, index) => {
            let name;
            switch (fieldName) {
                case 'select':
                    name = 'Select';
                    break;
                case 'checkbox-group':
                    name = 'CheckBox';
                    break;
                case 'text':
                    name = 'TextField';
                    break;
                case 'radio-group':
                    name = 'Radio Button';
                    break;
                case 'header':
                    name = 'Header';
                    break;
                case 'time':
                    name = 'Time';
                    break;
                case 'grid':
                    name = 'Grid';
                    break;
                case 'date':
                    name = 'Date';
                    break;
                case 'textarea':
                    name = 'Textarea';
                    break;
                default:
                    name = 'Campo';
                    break;
            }
            return (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: `${fieldName}`, index: index }, (provided) => (React.createElement(core_1.Grid, Object.assign({ item: true, xs: 12, style: { paddingBottom: '10px', paddingTop: '10px' }, ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                React.createElement(core_1.Grid, { container: true },
                    React.createElement(core_1.Grid, { item: true, xs: 10 },
                        React.createElement(core_1.Paper, { elevation: 1 },
                            React.createElement(core_1.Typography, { variant: "overline", component: "span" }, name))),
                    React.createElement(core_1.Grid, { item: true, xs: 2 },
                        React.createElement(icons_1.Add, { className: "icon-click", onClick: (e) => this.handleAddField(e, fieldComposition) })))))));
        };
    }
    render() {
        const { fields } = this.state;
        return (React.createElement(core_1.Grid, { style: { paddingLeft: '10px', paddingBottom: '10px', paddingTop: '10px' }, container: true }, Object.keys(fields).map((value, index) => {
            const fieldName = fields[value].name;
            const structure = fields[value].structure;
            return this.getInputRepresentation(fieldName, structure, index);
        })));
    }
}
exports.default = FieldGenerator;
//# sourceMappingURL=FieldGenerator.js.map