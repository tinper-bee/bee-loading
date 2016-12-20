'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tinperBeeCore = require('tinper-bee-core');

var _beeModal = require('bee-modal');

var _beeModal2 = _interopRequireDefault(_beeModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @title 默认的公共类׺
     */
    clsPrefix: _react.PropTypes.string,
    /**
     * @title 不同loading样式
     */
    loadingType: _react.PropTypes.oneOf(['rotate', 'line']),

    /**
     * @title 不同尺寸
     */
    size: _react.PropTypes.oneOf(['sm', 'lg']),
    /**
     * @title 不同颜色
     */
    colors: _react.PropTypes.oneOf(['primary', 'success', 'warning']),
    /**
     * @title 模态加载
     */
    useModal: _react.PropTypes.bool

};
var defaultProps = {
    clsPrefix: 'u-loading',
    loadingType: 'rotate',
    color: '',
    useModal: false

};

var sizeMap = {
    sm: 'sm',
    lg: 'lg'
},
    colorsMap = {
    primary: 'primary',
    success: 'success',
    warning: 'warning'
},
    loadingTypeMap = {
    rotate: 'rotate',
    line: 'line'
};

var Loading = function (_Component) {
    _inherits(Loading, _Component);

    function Loading(props) {
        _classCallCheck(this, Loading);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    Loading.prototype.render = function render() {
        var _props = this.props,
            clsPrefix = _props.clsPrefix,
            loadingType = _props.loadingType,
            size = _props.size,
            colors = _props.colors,
            children = _props.children,
            useModal = _props.useModal,
            others = _objectWithoutProperties(_props, ['clsPrefix', 'loadingType', 'size', 'colors', 'children', 'useModal']);

        var clsObj = {};

        var modalContentStyle = {
            border: "none",
            boxShadow: "none",
            background: "transparent",
            textAlign: "center"
        };

        var modalDialogStyle = ' u-modal-diaload ';

        if (loadingTypeMap[loadingType]) {
            clsObj[clsPrefix + '-' + loadingTypeMap[loadingType]] = true;
        }

        if (sizeMap[size]) {
            clsObj[clsPrefix + '-' + loadingTypeMap[loadingType] + '-' + sizeMap[size]] = true;
        }

        if (colorsMap[colors]) {
            clsObj[clsPrefix + '-' + loadingTypeMap[loadingType] + '-' + colorsMap[colors]] = true;
        }
        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);

        var dom = "";

        if (loadingType == "rotate") {
            dom = _react2["default"].createElement(
                'div',
                { className: classes },
                _react2["default"].createElement('div', null)
            );
        } else if (loadingType == "line") {
            dom = _react2["default"].createElement(
                'div',
                { className: classes },
                _react2["default"].createElement('div', null),
                _react2["default"].createElement('div', null),
                _react2["default"].createElement('div', null),
                _react2["default"].createElement('div', null)
            );
        }
        if (useModal) {
            return _react2["default"].createElement(
                _beeModal2["default"],
                _extends({}, others, { contentStyle: modalContentStyle, dialogClassName: modalDialogStyle }),
                dom,
                _react2["default"].createElement(
                    'div',
                    { className: 'u-loading-desc' },
                    _react2["default"].createElement(
                        'span',
                        null,
                        ' ',
                        children,
                        ' '
                    )
                )
            );
        }
        return _react2["default"].createElement(
            'div',
            null,
            dom
        );
    };

    return Loading;
}(_react.Component);

;
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
exports["default"] = Loading;
module.exports = exports['default'];