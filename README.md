# XEditor

[DEMO](http://lab.hustlzp.com/XEditor/)

Mix of WYSIWYG editor and markdown editor.

Thanks to Tower's [Simditor](https://github.com/mycolorway/simditor) and lepture's [Editor](https://github.com/lepture/editor).

##使用

在页面中引入如下文件：

```html
<link rel="stylesheet" href="font-awesome.min.css">
<link rel="stylesheet" href="dist/xeditor.min.css">
<script src="jquery.min.js"></script>
<script src="dist/xeditor.min.js"></script>
```

其中，XEditor 依赖于 jQuery 和 Font-Awesome，因此需要引入相关文件。

在使用 XEditor 的 HTML 页面里应该有一个对应的 textarea 文本框，例如：

```html
<textarea id="editor" placeholder="这里输入内容" autofocus></textarea>
```

我们需要在这个页面的脚本里初始化 XEditor：


```js
var editor = new XEditor({
  textarea: $('#editor')
});
```

textarea 是初始化 XEditor 的必需选项，可以接受 jQuery Object、HTML Element 或者 Selector String。另外，XEditor 还支持这些可选 option：

* `rich`（默认值：true）编辑器初始化模式设置，`true` 为富文本编辑模式，`false` 为 markdown 编辑模式
* `toolbar`（默认值：['bold', 'italic', 'underline', 'ul', 'ol', 'quote', 'code', 'link', 'image', 'markdown']）编辑器工具栏按钮，支持以下按钮：
  * 'bold'：加粗
  * 'italic'：斜体
  * 'underline'：下划线
  * 'ul'：有序列表
  * 'ol'：无序列表
  * 'quote'：引用
  * 'code'：代码
  * 'link'：插入链接
  * 'image'：插入图片
  * 'markdown'：切换编辑器模式
  * '|'：分隔符
* `defaultImage`（默认值：'default.png'）编辑器插入混排图片时使用的默认图片
* `upload 键值对`，编辑器上传本地图片的配置：
  * `url` 文件上传的接口地址
  * `params` 键值对，指定文件上传接口的额外参数，上传的时候随文件一起提交
  * `fileKey`（默认值：'file'）服务器端获取文件内容的参数名
  * `connectionCount`（默认值：1）同时上传文件的最大数量
  * `leaveConfirm`（默认值：'正在上传文件，如果离开上传会自动取消'）在文件上传过程中离开页面时提醒的文字

注：图片上传成功后，服务端需要返回 json 格式的图片地址：
  
```
{
  "success": true/false,
  "msg": "上传失败信息", // 可选
  "file_path": "[real file path]"
}
```

##API

XEditor 初始化之后，编辑器实例会暴露一些公共方法供调用：

###setValue(value)

设置编辑器的正文内容。

###getValue()

用于获取编辑器的正文内容，返回值为编辑器的 HTML 格式内容或 Markdown 格式内容。

###sync()

将编辑器的正文内容同步到 textarea 元素中。

###switchToMarkdown()

切换到 Markdown 编辑模式。

###switchToRich()

切换到富文本编辑模式。

##样式自定义

修改 `src/editor.less` 内容，生成 CSS 代码引入即可，`src/editor.less` 的结构如下所示：

* `.xeditor` 编辑器容器样式
* `.xeditor-toolbar` 编辑器工具栏样式
* `.xeditor-body` 编辑器正文容器样式
* `.xeditor-body.simditor-body` 富文本编辑器正文样式
* `.xeditor-body.meditor-body` Markdown 编辑器正文样式

##搭建开发环境

将仓库 clone 到本地：

```bash
$ git clone https://github.com/hustlzp/XEditor.git
```

XEditor 使用 Grunt 来实现本地的自动化任务。首先通过 npm 安装 Grunt 的命令行工具，然后安装 package.json 里配置的 Grunt 插件：：

```bash
$ sudo npm install -g grunt-cli
$ npm install
```

XEditor 使用 Bower 来管理依赖的第三方库：

```bash
$ npm install -g bower
$ bower install
```

最后，运行如下命令即可进入开发模式：

```bash
$ grunt
```
