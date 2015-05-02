class MarkdownButton extends Simditor.Button
  _init: ->
    @title = '切换到 Markdown 模式'
    super

  name: 'markdown'
  needFocus: false
  icon: 'maxcdn'
  command: ->
    @editor.parent.switchToMarkdown()

Simditor.Toolbar.addButton MarkdownButton
