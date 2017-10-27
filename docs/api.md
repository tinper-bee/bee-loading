# TreeTable
## 代码演示
## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|



# bee-loading
loading加载进度条,支持全屏loading和局部loading的展示，默认提供了圆形和条形loading展示
## 代码演示
## API
### bee-loading


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




