import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';

let messageInstance;
let loadingType = 'rotate';
let clsPrefix = 'u-loading';
let clsLoadBack = 'u-loading-back';

const noop = () => {};

const loadingTypeMap = {
        rotate: 'rotate',
        line: 'line'
    };




function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
    clsPrefix,
    position: '',
  });
  return messageInstance;
}



function notice(content, duration, backColor,loadingType ) {


  let instance = getMessageInstance();

  let clsObj = {
    "u-load-img":true
  };

  if (loadingTypeMap[loadingType]) {
      clsObj[`${clsPrefix}-${loadingTypeMap[loadingType]}`] = true;
  }


  let classes = classnames(clsObj);
  let classBack = classnames(clsLoadBack, backColor)

  let dom = "";
  if (loadingType == "rotate") {
      dom = (
          <div className={ classBack }>
              <div className={ classes }>
                  <div></div>
              </div>
              { content &&
                 <div className={ `${clsPrefix}-desc` }>
                     { content }
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
                    { content &&
                        <div className={ `${clsPrefix}-desc` }>
                            { content }
                        </div>
                    }
                </div>

          );
  }

  instance.notice({
    duration,
    backColor,
    loadingType,
    content: dom,

  });
  return (function () {

    return function () {
      instance.removeNotice();
    };
  }());
}

export default {
  create(obj) {
      if (!obj) obj = {};
      let content = obj.content || '';
      let duration = typeof obj.duration == undefined ? defaultDuration : obj.duration;
      let backColor = obj.backColor || "light";
      let loadingType = obj.loadingType || "rotate";
    return notice(content, duration, backColor,loadingType);
  },
  config(options) {
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
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
