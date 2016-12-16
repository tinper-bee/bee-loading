import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react';
import classnames from 'classnames';
import {componentOrElement} from 'tinper-bee-core';
import Modal from 'bee-modal';

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
    colors: PropTypes.oneOf(['primary', 'success', 'warning']),
    /**
     * @title 模态加载
     */
    useModal: PropTypes.bool


};
const defaultProps = {
    clsPrefix: 'u-loading',
    loadingType: 'rotate',
    color: '',
    useModal: false

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
            colors,
            children,
            useModal,
            ...others
            } = this.props;

        let clsObj = {};

        let modalContentStyle = {
            border: "none",
            boxShadow: "none",
            background: "transparent",
            textAlign: "center"
        };

        let modalDialogStyle = ' u-modal-diaload ';


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
        if (useModal) {
            return (
                <Modal {...others} contentStyle={ modalContentStyle } dialogClassName={modalDialogStyle}>
                    { dom }
                    <div className="u-loading-desc">
                        <span> {children} </span>
                    </div>
                </Modal>
            )
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