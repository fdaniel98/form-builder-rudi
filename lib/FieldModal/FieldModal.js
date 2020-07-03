"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Modal_1 = require("@material-ui/core/Modal");
const Backdrop_1 = require("@material-ui/core/Backdrop");
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
class FieldModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { isModalOpen, content, closeModal } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Modal_1.default, { "aria-labelledby": "modal-edit-field", "aria-describedby": "modal-edit-field", open: isModalOpen, closeAfterTransition: true, onClose: closeModal, BackdropComponent: Backdrop_1.default, style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '10%',
                    left: '5%',
                    height: '70%',
                    width: '90%'
                }, BackdropProps: {
                    timeout: 500,
                } },
                React.createElement(core_1.Slide, { direction: "up", in: isModalOpen },
                    React.createElement(core_1.Card, { style: { overflow: 'scroll', height: '100%' } },
                        React.createElement(core_1.CardContent, null,
                            React.createElement(core_1.Grid, { container: true, justify: "center", alignContent: "center", alignItems: "center" },
                                React.createElement(core_1.Grid, { item: true, xs: 12, style: { display: 'flex', justifyContent: 'flex-start' } },
                                    React.createElement("div", null,
                                        React.createElement(icons_1.Close, { style: { cursor: 'pointer' }, onClick: closeModal }))),
                                React.createElement(core_1.Grid, { item: true, xs: 12, style: { paddingBottom: '20px', paddingTop: '20px' } },
                                    React.createElement(core_1.Divider, null)),
                                React.createElement(core_1.Grid, { item: true, xs: 12, style: { overflowY: 'hidden', height: '100%' } }, content))))))));
    }
}
exports.default = FieldModal;
//# sourceMappingURL=FieldModal.js.map