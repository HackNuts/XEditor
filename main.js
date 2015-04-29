$(function () {
    window.richEditor = new Simditor({
        textarea: $('#rich-editor'),
        toolbar: ['bold', 'italic', 'underline', 'ul', 'ol', 'blockquote', 'code', 'link', 'image', 'markdown'],
        defaultImage: 'default.png',
        upload: {
            url: '/XEditor/upload.json',
            params: null,
            fileKey: 'file',
            connectionCount: 1,
            leaveConfirm: '正在上传文件，如果离开上传会自动取消'
        }
    });

    window.markdownEditor = new Editor({
        element: document.getElementById('markdown-editor'),
        status: false
    });

    $('.toolbar-item-markdown').parent().css('float', 'right');
});
