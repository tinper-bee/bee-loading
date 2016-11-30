import Loading from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
    render() {
        return (
            <div>
                <div className="dispalyDiv">
                    <Loading />
                </div>
                <div className="dispalyDiv">
                    <Loading size="lg"/>
                </div>
                <div className="dispalyDiv">
                    <Loading size="sm"/>
                </div>
                <div className="dispalyDiv">
                    <Loading size="sm" colors="primary"/>
                </div>
                <div className="dispalyDiv">
                    <Loading size="lg" colors="warning"/>
                </div>

                <div className="dispalyDiv">
                    <Loading loadingType="line"/>
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" size="sm"/>
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" size="lg"/>
                </div>
                <div className="dispalyDiv">
                    <Loading loadingType="line" size="lg" colors="primary"/>
                </div>

            </div>
        )
    }
}
export default Demo;