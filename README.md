# bee-loading

[![npm version](https://img.shields.io/npm/v/bee-loading.svg)](https://www.npmjs.com/package/bee-loading)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-loading/master.svg)](https://travis-ci.org/tinper-bee/bee-loading)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-loading/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-loading?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 11+ ✔ | Chrome 31.0+ ✔ |


react bee-loading component for tinper-bee

some description...

## 使用方法

### 使用单独的loading包
#### 组件引入
先进行下载bee-loading包

```
npm install --save bee-loading
```
组件调用

```js
import Loading from 'bee-loading';

Loading.create({loadingType:"line",content: 'loading',duration: 100});

```

#### 样式引入
- 可以使用link引入build目录下button.css
```
<link rel="stylesheet" href="./node_modules/bee-loading/build/Loading.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-loading/src/Loading.scss"
//或是
import "./node_modules/bee-loading/build/Loding.css"
```

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|loadingType|类型(`rotate` `line`)|string|''|
|content|显示文字内容|obj|''|
|duration|延长时间|number|4s|
|create()|创建loading方法|func|-|
|destroy()|销毁loading方法|func|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-loading
$ cd bee-loading
$ npm install
$ npm run dev
```
