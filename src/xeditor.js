function XEditor(id) {
  var $textarea = $('#' + id);

  $textarea.hide();

  // Rich editor
  this.richEditor = new Simditor({
    textarea: $textarea,
    toolbar: ['bold', 'italic', 'underline', 'ul', 'ol', 'blockquote', 'code', 'link', 'image', 'markdown'],
    defaultImage: 'default.png',
    toolbarFloat: false,
    upload: {
      url: '/XEditor/upload.json',
      params: null,
      fileKey: 'file',
      connectionCount: 1,
      leaveConfirm: '正在上传文件，如果离开上传会自动取消'
    }
  });

  this.richEditor.parent = this;
  this.richEditor.el.wrap("<div class='xeditor'></div>");

  // Markdown editor
  this.markdownEditor = new Editor({
    element: document.getElementById(id),
    status: false
  });
  this.markdownEditor.render();

  this.markdownEditor.parent = this;
  this.richEditor.el.parent().append(this.markdownEditor.el);

  // Attach some attr
  this.textarea = $textarea;
  this.element = this.richEditor.el.parent();
  this.rich = true;
}

XEditor.prototype.switchToMarkdown = function () {
  var html = this.richEditor.getValue();
  var markdown = toMarkdown(html, {gfm: true});

  this.element.addClass('markdown');
  this.markdownEditor.codemirror.setValue(markdown);
  this.rich = false;
};

XEditor.prototype.switchToRich = function () {
  var markdown = this.markdownEditor.codemirror.getValue();
  var renderer = new marked.Renderer();
  var html;

  renderer.em = function (text) {
    return "<i>" + text + "</i>";
  };

  html = marked(markdown, {renderer: renderer});

  this.richEditor.setValue(html);
  this.element.removeClass('markdown');
  this.rich = true;
};

XEditor.prototype.getValue = function () {
  if (this.rich) {
    return this.richEditor.getValue();
  } else {
    return this.markdownEditor.codemirror.getValue();
  }
};

XEditor.prototype.setValue = function (content) {
  if (this.rich) {
    this.richEditor.setValue(content);
  } else {
    this.markdownEditor.codemirror.setValue(content);
  }
};

XEditor.prototype.sync = function () {
  this.textarea.text(this.getValue());
};
