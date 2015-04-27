class MarkdownButton extends Simditor.Button
  _init: ->
    @title = '切换到 Markdown 模式'
    super
    @setIcon("maxcdn")

  name: 'markdown'
  command: ->
    console.log('markdown')

  setIcon: (icon)->
    @el.find("span").removeClass().addClass("fa fa-#{icon}")

Simditor.Toolbar.addButton MarkdownButton