function XEditor(options) {
  var $textarea = $(options.textarea);

  if ($textarea.length === 0) {
    throw new Error('textarea is required.');
  } else if ($textarea.length > 1) {
    throw new Error('should be only one textarea.');
  }

  this.options = $.extend({
    rich: true,
    toolbar: ['bold', 'italic', 'underline', 'ul', 'ol', 'quote', 'code', 'link', 'image', 'markdown'],
    defaultImage: 'default.png'
  }, options);

  this.options.upload = $.extend({
    url: '',
    fileKey: 'file',
    params: {},
    connectionCount: 1,
    leaveConfirm: '正在上传文件，如果离开上传会自动取消'
  }, this.options.upload);

  $textarea.hide();

  // Rich editor
  this.richEditor = new Simditor({
    textarea: $textarea,
    toolbar: this.options.toolbar,
    defaultImage: this.options.defaultImage,
    toolbarFloat: false,
    upload: this.options.upload
  });

  $(this.richEditor.el).find('.toolbar-item-fullscreen').parent().css('float', 'right');

  this.richEditor.parent = this;
  this.richEditor.el.wrap("<div class='xeditor'></div>");

  // Markdown editor
  this.markdownEditor = new Editor({
    element: $textarea[0],
    status: false,
    toolbar: this.options.toolbar,
    upload: this.options.upload
  });
  this.markdownEditor.render();

  this.markdownEditor.parent = this;
  this.richEditor.el.parent().append(this.markdownEditor.el);

  // Attach some attr
  this.textarea = $textarea;
  this.element = this.richEditor.el.parent();

  this.rich = this.options.rich;
  if (!this.rich) {
    this.element.addClass('markdown');
  }
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

  renderer.code = function (code, language) {
    if (typeof language !== undefined && language !== "") {
      return "<pre><code class='lang-" + language + "'>" + code + "</code></pre>";
    } else {
      return "<pre><code>" + code + "</code></pre>";
    }
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
