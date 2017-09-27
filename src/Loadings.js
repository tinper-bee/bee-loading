import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react';
import classnames from 'classnames';
import Modal from 'bee-modal';
import {componentOrElement} from 'tinper-bee-core';

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
    colors: PropTypes.oneOf(['primary', 'success', 'warning', ""]),
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
    colors: '',
    backColor: 'light',
    describe:false
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
            colors,
            backColor,
            describe,
            children,
            ...others
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
        let classBack = classnames(clsLoadBack, backColor)

        let dom = "";
        if (loadingType == "rotate") {
            dom = (
                <div className={ classBack }>
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

        } else if (loadingType == "line") {
                dom = (
                    <div className={ classBack  }>
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
        return (
            <div>
                
                <Modal backdrop="static"  show={ this.state.showModal }  onHide={ this.close }
                         contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>
                    <Modal.Header closeButton >
                    </Modal.Header >
                    <Modal.Body >
                        { dom }
                    </Modal.Body >
                </Modal>

            </div>
        );
    }
}
;
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
