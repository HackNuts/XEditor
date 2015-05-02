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

  this.markdownEditor.parent = this;
  this.richEditor.el.parent().append(this.markdownEditor.el);

  this.textarea = $textarea;
  this.element = this.richEditor.el.parent();
}
