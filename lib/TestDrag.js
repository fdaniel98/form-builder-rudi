"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const testFields = [
    { "type": "header", "subtype": "h1", "label": "Datos de la Solicitud", "hidden": false, "orden": "100461100020" },
    { "type": "text", "label": "Numero de Cuotas", "Mask": null, "group": "grp01", "orden": "100493100433", "hidden": false, "required": false, "enabled": false, "name": "numero01", "subtype": "text" },
    { "type": "text", "label": "Monto Solicitado ", "Mask": "16", "group": "grp01", "orden": "100494100032", "hidden": false, "required": true, "enabled": true, "name": "monto01", "subtype": "text" },
    { "type": "text", "label": "Monto Aprobado", "Mask": null, "group": "grp01", "orden": "100494100240", "hidden": false, "required": false, "enabled": false, "name": "monto02", "subtype": "text" },
    { "type": "text", "label": "Valor de la cuota", "Mask": null, "group": "grp01", "orden": "100494100535", "hidden": false, "required": false, "enabled": false, "name": "monto03", "subtype": "text" },
    { "type": "text", "label": "Si tiene otros ingresos especifique:", "Mask": null, "group": "grp01", "orden": "100530100032", "hidden": false, "required": false, "enabled": true, "name": "texto25509", "subtype": "text" },
    { "type": "header", "subtype": "h2", "name": "fsreferencias", "label": "Referencias Personales", "group": "grp01", "hidden": false, "orden": "100576100030" },
    { "type": "text", "label": "Nombres y Apellidos", "Mask": null, "group": "grp01", "orden": "100588100038", "hidden": false, "required": false, "enabled": true, "name": "texto25502", "subtype": "text" },
    { "type": "text", "label": "Telefono", "Mask": "2", "group": "grp01", "orden": "100588100389", "hidden": false, "required": false, "enabled": true, "name": "texto5010", "subtype": "text" },
    { "type": "text", "label": "Nombres y Apellidos", "Mask": null, "group": "grp01", "orden": "100625100038", "hidden": false, "required": false, "enabled": true, "name": "texto25503", "subtype": "text" },
    { "type": "text", "label": "Telefono", "Mask": "2", "group": "grp01", "orden": "100625100389", "hidden": false, "required": false, "enabled": true, "name": "texto5011", "subtype": "text" },
    { "type": "text", "label": "Nombres y Apellidos", "Mask": null, "group": "grp01", "orden": "100670100038", "hidden": false, "required": false, "enabled": true, "name": "texto25504", "subtype": "text" },
    { "type": "text", "label": "Telefono", "Mask": "2", "group": "grp01", "orden": "100670100388", "hidden": false, "required": false, "enabled": true, "name": "texto5012", "subtype": "text" },
    { "type": "subtitle", "subtype": "h3", "name": null, "label": "Declaramos que las informaciones contenidas en esta solicitud son correctas y autorizamos al INABIMA a hacer todo lo necesario para su comprobaci\u00f3n incluso el acceso a centros de informaci\u00f3n crediticia.", "group": "grp01", "hidden": false, "orden": "100737100027" },
    { "type": "text", "label": "Firma", "Mask": null, "group": "grp01", "orden": "100781100040", "hidden": false, "required": false, "enabled": true, "name": "firmasoli", "subtype": "text" },
    { "type": "header", "subtype": "h1", "label": "Documentos Obligatorios", "group": "grp01", "hidden": true, "orden": "101945100015" },
    { "type": "file", "label": "Copia de Cedula", "group": "grp01", "orden": "101960100031", "hidden": false, "required": true, "enabled": true, "name": "anexo1" },
    { "type": "file", "label": "Certificacion(es) de Deuda de acredor(es)", "group": "grp01", "orden": "102002100033", "hidden": false, "required": true, "enabled": true, "name": "anexo2" },
    { "type": "file", "label": "Estado de Cuenta del Pensionado o Jubilado", "group": "grp01", "orden": "102047100033", "hidden": false, "required": true, "enabled": true, "name": "anexo3" },
    {
        "type": "grid", "label": "ACOMPAÑANTES Y/O PERSONAS ADICIONALES", "group": "grp01", "orden": "100842100042", "name": "DAfmDetAcomp00relsolacompsal", "relationship": "relsolacompsal", "fields": [{
                "type": "header",
                "subtype": "h1",
                "name": "grp01acomp",
                "label": "Datos del Acompañante",
                "hidden": false,
                "orden": "100214100157"
            },
            {
                "type": "text",
                "label": "Nombre",
                "Mask": null,
                "group": "grp01",
                "orden": "100266100184",
                "hidden": false,
                "required": false,
                "enabled": true,
                "name": "nombres",
                "subtype": "text"
            },
            {
                "type": "text",
                "label": "Apellidos",
                "Mask": null,
                "group": "grp01",
                "orden": "100266100399",
                "hidden": false,
                "required": false,
                "enabled": true,
                "name": "apellidos",
                "subtype": "text"
            }
        ]
    },
];
class TestDrag extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fields: [1, 2, 3, 4, 5]
        };
        this.onDragEnd = () => {
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: this.onDragEnd },
                React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: "droppable-1" }, (provided, snapshot) => (React.createElement("div", Object.assign({ ref: provided.innerRef }, provided.droppableProps), this.state.fields.map((value, index) => (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: `draggable-${index}`, index: index }, (providedTwo, snapshot) => (React.createElement("div", Object.assign({ ref: providedTwo.innerRef }, providedTwo.draggableProps, providedTwo.dragHandleProps),
                    "Contenido - ",
                    index)))))))))));
    }
}
exports.default = TestDrag;
//# sourceMappingURL=TestDrag.js.map