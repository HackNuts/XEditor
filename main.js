$(function () {
    window.richEditor = new Simditor({
        textarea: $('#rich-editor'),
        toolbar: ['bold', 'italic', 'underline', 'ul', 'ol', 'blockquote', 'code', 'link', 'image', 'markdown']
    });

    window.markdownEditor = new Editor({
        element: document.getElementById('markdown-editor'),
        status: false
    });

    $('.toolbar-item-markdown').parent().css('float', 'right');
});
