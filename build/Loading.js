'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tinperBeeCore = require('tinper-bee-core');

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
    clsLoadBack: _react.PropTypes.string,
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
    colors: _react.PropTypes.oneOf(['primary', 'success', 'warning', ""]),
    /**
     * @title 不同背景色
     */
    backColor: _react.PropTypes.oneOf(['light', 'dark']),
    /**
     * @title 是否带有文字内容
     */
    describe: _react.PropTypes.bool
};
var defaultProps = {
    clsPrefix: 'u-loading',
    clsLoadBack: 'u-loading-back',
    loadingType: 'rotate',
    colors: '',
    backColor: 'light',
    describe: false
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
            clsLoadBack = _props.clsLoadBack,
            loadingType = _props.loadingType,
            size = _props.size,
            colors = _props.colors,
            backColor = _props.backColor,
            describe = _props.describe,
            children = _props.children,
            others = _objectWithoutProperties(_props, ['clsPrefix', 'clsLoadBack', 'loadingType', 'size', 'colors', 'backColor', 'describe', 'children']);

        var clsObj = {};

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
        var classBack = (0, _classnames2["default"])(clsLoadBack, backColor);

        var dom = "";
        if (loadingType == "rotate") {
            dom = _react2["default"].createElement(
                'div',
                { className: classBack },
                _react2["default"].createElement(
                    'div',
                    { className: classes },
                    _react2["default"].createElement('div', null)
                ),
                describe && _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-desc' },
                    children
                )
            );
        } else if (loadingType == "line") {
            dom = _react2["default"].createElement(
                'div',
                { className: classBack },
                _react2["default"].createElement(
                    'div',
                    { className: classes },
                    _react2["default"].createElement('div', null),
                    _react2["default"].createElement('div', null),
                    _react2["default"].createElement('div', null),
                    _react2["default"].createElement('div', null),
                    _react2["default"].createElement('div', null)
                ),
                describe && _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-desc' },
                    children
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