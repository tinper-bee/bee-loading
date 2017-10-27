import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  duration: PropTypes.number,
  children: PropTypes.any,
  color: PropTypes.string,
  title: PropTypes.any
};

const defaultProps = {
  duration: 4.5
}
/**
 * 渲染loading
 *
 */
class Notice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clsPrefix, className, style, children, color, title, content, loadingType, loading_show } = this.props;
    const componentClass = `${clsPrefix}-notice`;
    const classes = {
      [`${componentClass}`]: 1,
      [className]: !!className,
    };
    if (color) {
      classes[`${componentClass}-${color}`] = true;
    }
    let partFlag = false;
    if (loading_show) {
      const loadingWrap = document.getElementsByClassName("addLoading");
      if (loadingWrap.length > 0) {
        partFlag = true;
        for (var i = 0; i < loadingWrap.length; i++) {
          const div_wrap = document.createElement('div');
          const div_load = document.createElement('div');
          if (loadingType == "line") {

            for (var j = 0; j < 5; j++) {
              div_load.appendChild(document.createElement('div'));
            }

            div_wrap.setAttribute("class", "u-load-img loading_show");
            div_wrap.style.width = loadingWrap[i].offsetWidth + "px";
            div_wrap.style.height = loadingWrap[i].offsetHeight + "px";
            div_load.setAttribute("class", "u-loading-line");
            div_wrap.appendChild(div_load);
            loadingWrap[i].appendChild(div_wrap);
          } else if (loadingType == "rotate") {
            div_wrap.setAttribute("class", "u-load-img loading_show");
            div_wrap.style.width = loadingWrap[i].offsetWidth + "px";
            div_wrap.style.height = loadingWrap[i].offsetHeight + "px";
            div_load.setAttribute("class", "u-loading-rotate");
            div_wrap.appendChild(div_load);
            loadingWrap[i].appendChild(div_wrap);
          }
        }

      }
    }
    return (
      <div>{
        !partFlag ?
          <div className={classNames(classes)} style={style} >
            {children}
          </div >
          :
          ""
      }
      </div>
    );
  }
};

Notice.PropTypes = PropTypes;
Notice.defaultProps = defaultProps;

export default Notice;
