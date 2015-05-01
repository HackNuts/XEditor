class MarkdownButton extends Simditor.Button
  _init: ->
    @title = '切换到 Markdown 模式'
    super
    @setIcon("maxcdn")

  name: 'markdown'
  needFocus: false
  command: ->
    @el.parents('.xeditor').addClass('markdown');
    @editor.parent.markdownEditor.codemirror.setValue(toMarkdown(@editor.getValue(), {gfm: true}));
    @editor.parent.markdownEditor.render();

  setIcon: (icon)->
    @el.find("span").removeClass().addClass("fa fa-#{icon}")

Simditor.Toolbar.addButton MarkdownButton
