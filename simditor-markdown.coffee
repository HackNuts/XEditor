class MarkdownButton extends Simditor.Button
  _init: ->
    @title = '切换到 Markdown 模式'
    super

  name: 'markdown'
  needFocus: false
  icon: 'maxcdn'
  command: ->
    @el.parents('.xeditor').addClass('markdown');
    @editor.parent.markdownEditor.codemirror.setValue(toMarkdown(@editor.getValue(), {gfm: true}));
    @editor.parent.markdownEditor.render();

Simditor.Toolbar.addButton MarkdownButton
