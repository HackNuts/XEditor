$(function () {
    var editor = new Simditor({
        textarea: $('#editor'),
        toolbar: ['bold', 'italic', 'underline', 'ol', 'ul', 'blockquote', 'code', 'link', 'image', 'markdown']
    });

    $('.toolbar-item-markdown').parent().css('float', 'right');
});
