import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react';
import classnames from 'classnames';

const propTypes = {
    /**
     * @title 默认的公共类׺
     */
    clsPrefix: PropTypes.string,
    /**
     * @title 不同loading样式
     */
    loadingType: PropTypes.oneOf(['rotate', 'line']),

    /**
     * @title 不同尺寸
     */
    size: PropTypes.oneOf(['sm', 'lg']),
    /**
     * @title 不同颜色
     */
    colors: PropTypes.oneOf(['primary', 'success', 'warning'])
};
const defaultProps = {
    clsPrefix: 'u-loader',
    loadingType: 'rotate',
    size: '',
    color: ''

};


const sizeMap = {
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

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            clsPrefix,
            loadingType,
            size,
            colors
            } = this.props;

        let clsObj = {};

        if (loadingTypeMap[loadingType]) {
            clsObj[`${clsPrefix}-${loadingTypeMap[loadingType]}`] = true;
        }

        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${loadingTypeMap[loadingType]}-${sizeMap[size]}`] = true;
        }

        if (colorsMap[colors]) {
            clsObj[`${clsPrefix}-${loadingTypeMap[loadingType]}-${colorsMap[colors]}`] = true;
        }
        let classes = classnames(clsPrefix, clsObj);

        let dom = "";

        if (loadingType == "rotate") {
            dom = (
                <div className={ classes }>
                    <div></div>
                </div>
            );
        } else if (loadingType == "line") {
            dom = (
                <div className={ classes }>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            );
        }
        return (
            <div>
                { dom }
            </div>
        );
    }
}
;
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
export default Loading;