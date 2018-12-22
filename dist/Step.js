

Object.defineProperty(exports, '__esModule', {
    value: true
});

let _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

let _react = require('react');

let _propTypes = require('prop-types');

let _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
 value: subClass, enumerable: false, writable: true, configurable: true 
} }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

let Step = (function (_PureComponent) {
    _inherits(Step, _PureComponent);

    function Step() {
        _classCallCheck(this, Step);

        return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
    }

    _createClass(Step, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var step = Object.assign({}, this.props, { target: this.node });
            delete step.children;
            this.context.tour.steps.push(step);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            var step = Object.assign({}, this.props, { target: this.node });
            delete step.children;
            this.context.tour.steps.map(function (s) {
                if (s.target === _this2.node) {
                    return step;
                }
                return s;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react.Children.map(this.props.children, function (child) {
                return (0, _react.cloneElement)(child, {
                    ref: function ref(node) {
                        _this3.node = node;
                    }
                });
            });
        }
    }]);

    return Step;
}(_react.PureComponent));

Step.contextTypes = {
    tour: _propTypes2.default.object.isRequired
};
Step.propTypes = {
    children: _propTypes2.default.element.isRequired,
    /* eslint-disable react/no-unused-prop-types, react/require-default-props */
    placement: _propTypes2.default.oneOf(['top', 'bottom', 'right', 'left']).isRequired,
    title: _propTypes2.default.string,
    content: _propTypes2.default.string,
    width: _propTypes2.default.number,
    padding: _propTypes2.default.number,
    xOffset: _propTypes2.default.number,
    yOffset: _propTypes2.default.number,
    arrowOffset: _propTypes2.default.number,
    delay: _propTypes2.default.number,
    zindex: _propTypes2.default.number,
    showNextButton: _propTypes2.default.bool,
    showPrevButton: _propTypes2.default.bool,
    showCTAButton: _propTypes2.default.bool,
    ctaLabel: _propTypes2.default.string,
    multipage: _propTypes2.default.bool,
    showSkip: _propTypes2.default.bool,
    fixedElement: _propTypes2.default.bool,
    nextOnTargetClick: _propTypes2.default.bool,
    onPrev: _propTypes2.default.func,
    onNext: _propTypes2.default.func,
    onShow: _propTypes2.default.func,
    onCTA: _propTypes2.default.func
    /* eslint-enable */
};
exports.default = Step;
