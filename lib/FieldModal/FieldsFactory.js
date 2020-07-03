"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const core_1 = require("@material-ui/core");
class FieldsFactory extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { field } = this.props;
        const key = Object.keys(this.props.field)[0];
        const value = field[key];
        return (React.createElement(core_1.Grid, { item: true, xs: 6 },
            React.createElement(core_1.Grid, { container: true },
                React.createElement(core_1.Grid, { item: true, xs: 6 },
                    React.createElement(core_1.TextField, { name: key, margin: "normal", value: value, fullWidth: true })))));
    }
}
exports.default = FieldsFactory;
//# sourceMappingURL=FieldsFactory.js.map