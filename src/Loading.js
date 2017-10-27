import React from 'react';
import Notification from './Notification';
import classnames from 'classnames';

let messageInstance;
let loadingType = 'line';
let clsPrefix = 'u-loading';
let clsLoadBack = 'u-loading-back';


const loadingTypeMap = {
    rotate: 'rotate',
    line: 'line'
};

/**
 * 初始化实例
 */
function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance({
        clsPrefix,
        position: ''
    });
    return messageInstance;
}

/**
 * 提供默认的rotate和line的俩种显示
 * @param {*} content 
 * @param {*} duration 
 * @param {*} backColor 
 * @param {*} loadingType 
 * @param {*} loading_show 
 */
function notice(content, duration, backColor, loadingType, loading_show) {
    let instance = getMessageInstance();

    let clsObj = {
        "u-load-img": true
    };

    if (loadingTypeMap[loadingType]) {
        clsObj[`${clsPrefix}-${loadingTypeMap[loadingType]}`] = true;
    }


    let classes = classnames(clsObj);
    let classBack = classnames(clsLoadBack, backColor)

    let dom = "";
    if (loadingType == "rotate") {
        dom = (
            <div className={classBack}>
                <div className={classes}>
                    <div></div>
                </div>
                {content &&
                    <div className={`${clsPrefix}-desc`}>
                        {content}
                    </div>
                }

            </div>

        );

    } else if (loadingType == "line") {
        dom = (

            <div className={classBack}>
                <div className={classes}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {content &&
                    <div className={`${clsPrefix}-desc`}>
                        {content}
                    </div>
                }
            </div>

        );
    }
    /**
     * 调用实例里的notice方法
     */
    instance.notice({
        duration,
        backColor,
        loadingType,
        content: dom,
        loading_show

    });
    return (function () {
        return function () {
            instance.removeNotice();
        };
    }());
}

export default {
    /**
     * 创建loading对象，传入对象
     * @param {*} obj 
     */
    create(obj) {
        if (!obj) obj = {
            loadingType: "line"
        };
        let content = obj.content || '';
        let duration = obj.duration || 10;
        let backColor = obj.backColor || "";
        let loadingType = obj.loadingType || "";
        let loading_show = obj.loading_show || "";
        return notice(content, duration, backColor, loadingType, loading_show);
    },
    /**
     * 销毁loading对象
     * @param {*} loading_flag 
     */
    destroy(loading_flag) {

        const addloading = document.getElementsByClassName("addLoading");
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
            if (addloading.length > 0) {
                for (var i = 0; i < addloading.length; i++) {
                    if (addloading[i] && addloading[i].hasChildNodes("loading_show")) {
                        let loading_show = document.getElementsByClassName("loading_show");
                        if (addloading[i].getAttribute("class").indexOf(loading_flag) != -1) {
                            addloading[i].removeChild(loading_show[i])
                            //移除掉loading_flag的loading包含addLoading，class类
                            //var reg = new RegExp('(\\s|^)' + "addLoading" + '(\\s|$)');
                            //addloading[i].className = addloading[i].className.replace(reg, ' ');

                        }


                    }
                }
            }


        } else if (addloading.length > 0) {
            for (var i = 0; i < addloading.length; i++) {
                if (addloading[i] && addloading[i].hasChildNodes("loading_show")) {
                    let loading_show = document.getElementsByClassName("loading_show");
                    if (addloading[i].getAttribute("class").indexOf(loading_flag) != -1) {
                        addloading[i].removeChild(loading_show[0])
                        //移除掉loading_flag的loading包含addLoading，class类
                        //var reg = new RegExp('(\\s|^)' + "addLoading" + '(\\s|$)');
                        //addloading[i].className = addloading[i].className.replace(reg, ' ');
                    }
                }
            }
        }
    }
};