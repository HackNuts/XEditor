class MarkdownButton extends Simditor.Button
  _init: ->
    @title = '切换到 Markdown 模式'
    super
    @setIcon("maxcdn")

  name: 'markdown'
  command: ->
    $('.editors').addClass('markdown');
    markdownEditor = new Editor({
      element: document.getElementById('markdown-editor')
      status: false
    });
    markdownEditor.codemirror.setValue(toMarkdown(@editor.getValue()));
    markdownEditor.render();
    window.markdownEditor = markdownEditor;

  setIcon: (icon)->
    @el.find("span").removeClass().addClass("fa fa-#{icon}")

Simditor.Toolbar.addButton MarkdownButton
