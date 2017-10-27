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

Loading.create({loadingType:"line",content: 'loading'});

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

#### loading创建与销毁:
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| Loading.create(obj)| 在请求数据之前调用这个方法,参数obj是个对象（后面解释),用来显示loading|function|
| Loading.destroy();| 后端返回数据之后调用这个方法,用来销毁loading|function|
#### loading的obj参数: 
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|loadingType|loading的类型,有rotate和line俩种|string|-|
|backColor|loading的背景色，不是遮罩层的颜色|string|[]|
|content|loading中需要提示的文字|string|-|
|loading_show| 全局loading和多个局部loading需要同时显示的时候,需要添加，其他情况不需要添加这个属性|boolean||
#### 局部刷新loading注意事项：
**创建局部loading:**
- 给需要局部刷新的区域添加样式:
```
    className="addLoading loading_flag1"
```


- 比如：
```
    <div className="addLoading loading_flag1">
                <Table
                  columns={columns}
                  data={data}
                />
    </div>
```
---
**销毁局部loading:**
- 需要传入销毁的loading_flag1，这个loading_flag1可以自己更改，切记创建和销毁保持一致就好
- 比如:
```
     Loading.destroy(loading_flag);
```


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-loading
$ cd bee-loading
$ npm install
$ npm run dev
```
