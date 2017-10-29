import React, { Component } from 'react';
import { findDOMNode } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Portal from 'bee-overlay/build/Portal';

const propTypes = {
    /**
     * @title 默认的公共类׺
     */
    clsPrefix: PropTypes.string,
    clsLoadBack: PropTypes.string,
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
    color: PropTypes.oneOf(['primary', 'success', 'warning', ""]),
    /**
     * @title 不同背景色
     */
    backColor: PropTypes.oneOf(['light', 'dark']),
    /**
     * @title 是否带有文字内容
     */
    describe:PropTypes.bool
};
const defaultProps = {
    clsPrefix: 'u-loading',
    clsLoadBack: 'u-loading-back',
    loadingType: 'rotate',
    color: '',
    backColor: 'light',
    describe:false,
    showBackDrop: true
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
            clsLoadBack,
            loadingType,
            size,
            color,
            backColor,
            describe,
            show,
            showBackDrop,
            container,
            children,
            ...others
        } = this.props;

        let clsObj = {};

        if(!show) return null;





            clsObj[`${clsPrefix}-${loadingType}`] = true;


        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${loadingType}-${sizeMap[size]}`] = true;
        }

        if (colorsMap[color]) {
            clsObj[`${clsPrefix}-${loadingType}-${colorsMap[color]}`] = true;
        }

        let classes = classnames(clsPrefix, clsObj);

        let dom = "";
        if (loadingType === "rotate") {
            dom = (
                <div>
                    <div className={ classes }>
                        <div></div>
                    </div>
                    { describe &&
                    <div className={ `${clsPrefix}-desc` }>
                        { children }
                    </div>
                    }

                </div>

            );

        } else if (loadingType === "line") {
            dom = (
                <div>
                    <div className={ classes }>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    { describe &&
                    <div className={ `${clsPrefix}-desc` }>
                        { children }
                    </div>
                    }
                </div>
            );
        }

        if(showBackDrop){
            dom = (
                <div className={`${clsPrefix}-backdrop`}>
                    { dom }
                </div>
            )
        }
        //console.log(container);

        return (
            <Portal
                container={container}
            >
                { dom }

            </Portal>
        );
    }
}
;
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
