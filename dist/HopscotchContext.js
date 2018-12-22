

Object.defineProperty(exports, '__esModule', {
    value: true
});

let _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

let _react = require('react');

let _propTypes = require('prop-types');

let _propTypes2 = _interopRequireDefault(_propTypes);

let _hopscotch = require('hopscotch');

let _hopscotch2 = _interopRequireDefault(_hopscotch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
 value: subClass, enumerable: false, writable: true, configurable: true 
} }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

let HopscotchContext = (function (_PureComponent) {
    _inherits(HopscotchContext, _PureComponent);

    function HopscotchContext(props, context) {
        _classCallCheck(this, HopscotchContext);

        var _this = _possibleConstructorReturn(this, (HopscotchContext.__proto__ || Object.getPrototypeOf(HopscotchContext)).call(this, props, context));

        _this.state = {
            tour: {
                id: _this.props.id,
                steps: []
            }
        };
        return _this;
    }

    _createClass(HopscotchContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                tour: this.state.tour,
                hopscotch: _hopscotch2.default
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.startTour();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.startTour();
        }
    }, {
        key: 'startTour',
        value: function startTour() {
            var state = _hopscotch2.default.getState();
            if (this.props.active && (!state || state.indexOf(this.props.id + ':') === 0)) {
                _hopscotch2.default.startTour(this.state.tour);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children;
        }
    }]);

    return HopscotchContext;
}(_react.PureComponent));

HopscotchContext.propTypes = {
    children: _propTypes2.default.element.isRequired,
    id: _propTypes2.default.string.isRequired,
    active: _propTypes2.default.bool,
    /* eslint-disable react/no-unused-prop-types, react/require-default-props */
    bubbleWidth: _propTypes2.default.number,
    bubblePadding: _propTypes2.default.number,
    smoothScroll: _propTypes2.default.bool,
    scrollDuration: _propTypes2.default.number,
    scrollTopMargin: _propTypes2.default.number,
    showCloseButton: _propTypes2.default.bool,
    showPrevButton: _propTypes2.default.bool,
    showNextButton: _propTypes2.default.bool,
    arrowWidth: _propTypes2.default.number,
    skipIfNoElement: _propTypes2.default.bool,
    nextOnTargetClick: _propTypes2.default.bool,
    onNext: _propTypes2.default.func,
    onPrev: _propTypes2.default.func,
    onStart: _propTypes2.default.func,
    onEnd: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    i18n: _propTypes2.default.shape({
        nextBtn: _propTypes2.default.string,
        prevBtn: _propTypes2.default.string,
        doneBtn: _propTypes2.default.string,
        skipBtn: _propTypes2.default.string,
        closeTooltip: _propTypes2.default.string,
        stepNums: _propTypes2.default.arrayOf(_propTypes2.default.string)
    })
    /* eslint-enable */
};
HopscotchContext.defaultProps = {
    active: false
};
HopscotchContext.childContextTypes = {
    tour: _propTypes2.default.object,
    hopscotch: _propTypes2.default.object
};
exports.default = HopscotchContext;
