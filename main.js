$(function () {
  var xeditor = new XEditor({
    textarea: $('#editor'),
    upload: {
      url: '/XEditor/upload.json'
    }
  });
});
