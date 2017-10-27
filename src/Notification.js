import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import classnames from 'classnames';
import Notice from './Notice';
import elementType from 'tinper-bee-core/lib/elementType';

let seed = 0;
const now = Date.now();

function getUuid() {
    return `uNotification_${now}_${seed++}`;
}

var propTypes = {
    show: PropTypes.bool,
    clsPrefix: PropTypes.string,
    style: PropTypes.object,
    position: PropTypes.oneOf(['topRight', 'bottomRight', '']),
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

var defaultProps = {
    clsPrefix: 'u-notification',
    animation: 'fade',
    position: 'topRight'
}

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notices: []
        };
        this.add = this.add.bind(this);
    }



    add(notice) {
        const key = notice.key = notice.key || getUuid();
        this.setState(previousState => {
            const notices = previousState.notices;
            if (!notices.filter(v => v.key === key).length) {
                return {
                    notices: notices.concat(notice),
                };
            }
        });

    }

    render() {
        const {
        clsPrefix,
            className,
            position,
            style
    } = this.props;
        const noticeNodes = this.state.notices.map((notice) => {
            return (
                <Notice
                    clsPrefix={clsPrefix}
                    {...notice}
                >
                    {notice.content}
                </Notice>);
        });

        return (
            <div>
                {noticeNodes}
            </div>
        );
    }
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

Notification.newInstance = function newNotificationInstance(properties) {
    const props = properties || {};
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Notification {...props} />, div);
    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },
        component: notification,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};



export default Notification;
