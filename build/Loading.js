'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeNotification = require('bee-notification');

var _beeNotification2 = _interopRequireDefault(_beeNotification);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var messageInstance = void 0;
var loadingType = 'rotate';
var clsPrefix = 'u-loading';
var clsLoadBack = 'u-loading-back';

var noop = function noop() {};

var loadingTypeMap = {
  rotate: 'rotate',
  line: 'line'
};

function getMessageInstance() {
  messageInstance = messageInstance || _beeNotification2["default"].newInstance({
    clsPrefix: clsPrefix,
    position: ''
  });
  return messageInstance;
}

function notice(content, duration, backColor, loadingType) {

  var instance = getMessageInstance();

  var clsObj = {
    "u-load-img": true
  };

  if (loadingTypeMap[loadingType]) {
    clsObj[clsPrefix + '-' + loadingTypeMap[loadingType]] = true;
  }

  var classes = (0, _classnames2["default"])(clsObj);
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
      content && _react2["default"].createElement(
        'div',
        { className: clsPrefix + '-desc' },
        content
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
      content && _react2["default"].createElement(
        'div',
        { className: clsPrefix + '-desc' },
        content
      )
    );
  }

  instance.notice({
    duration: duration,
    backColor: backColor,
    loadingType: loadingType,
    content: dom

  });
  return function () {

    return function () {
      instance.removeNotice();
    };
  }();
}

exports["default"] = {
  create: function create(obj) {
    if (!obj) obj = {};
    var content = obj.content || '';
    var duration = _typeof(obj.duration) == undefined ? defaultDuration : obj.duration;
    var backColor = obj.backColor || "light";
    var loadingType = obj.loadingType || "rotate";
    return notice(content, duration, backColor, loadingType);
  },
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.clsPrefix !== undefined) {
      clsPrefix = options.clsPrefix;
    }
    if (options.defaultBottom !== undefined) {
      defaultBottom = options.defaultBottom;
    }
    if (options.bottom !== undefined) {
      bottom = options.bottom;
    }
    if (options.width !== undefined) {
      bottom = options.width;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
module.exports = exports['default'];