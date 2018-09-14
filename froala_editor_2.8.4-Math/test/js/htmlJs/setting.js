document.write("<script type='text/javascript' src='../../froalaEditor/js/codemirror.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/xml.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/froala_editor.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/align.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/code_beautifier.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/code_view.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/colors.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/draggable.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/emoticons.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/font_size.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/font_family.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/image.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/image_manager.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/line_breaker.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/link.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/lists.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/paragraph_format.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/paragraph_style.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/table.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/video.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/url.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/entities.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/char_counter.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/inline_style.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/plugins/save.min.js'><\/script>");
document.write("<script type='text/javascript' src='../../froalaEditor/js/custom.js'><\/script>");

$(function () {
    editor();
    $('button').on('click',function () {
        console.log($('.editor-list1').froalaEditor('html.get'));;
    })
})

function editor() {
    editor1();
    editor2();
    editor3();
    editor4();
    editor5();
    editor6();
    editor7();
}
//都有
function editor1() {
    $('.editor-list1').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertImage', 'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'input', 'insertdrag','inserSelect', 'insertAnchors','|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}
//有图片
function editor2() {
    $('.editor-list2').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertImage', 'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}

//都没有-无图片
function editor3() {
    $('.editor-list3').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}
function editor4() {
    $('.editor-list4').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}
function editor5() {
    $('.editor-list5').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}
function editor6() {
    $('.editor-list6').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}
function editor7() {
    $('.editor-list7').froalaEditor({
        fontFamily: {
            'Microsoft Yahei': '微软雅黑',
            'SimSun': '宋体',
            'SimHei': '黑体',
            'Microsoft YaHei': '微软雅黑',
            'Microsoft JhengHei': '微软正黑',
            'NSimSun': '新宋体',
            'PMingLiU': '新细明体',
            'MingLiU': '细明体',
            'DFKai-SB': '标楷体',
            'FangSong': '仿宋',
            'KaiTi': '楷体',
            'FangSong_GB2312': '仿宋_GB2312',
            'KaiTi_GB2312': '楷体_GB2312',
            'AdobeHeitiStd-Regular': 'AdobeHeitiStd-Regular',
            'DINCond-Bold': 'DINCond-Bold',
            'FZShangKJW': 'FZShangKJW',
            'PingFangSC-Regular': 'PingFangSC-Regular',
            'PingFang-Medium': 'PingFang-Medium',
            'Arial,Helvetica': 'Arial, Helvetica',
            'Verdana,Geneva': 'Verdana',
            'Georgia': 'Georgia',
            'Courier New,Courier': 'Courier New',
            'Times New Roman,Times': 'Times New Roman',
        },
        fontFamilySelection: true,
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|','fontFamily', 'fontSize', 'color', 'inlineStyle', '|',
            'paragraphStyle', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '|',
            'insertTable', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|','inserCal','inserLine','|', 'undo', 'redo'],
    }).on('froalaEditor.image.beforeUpload', function (e, editor, files) {
        if (files.length) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var result = e.target.result;
                editor.image.insert(result, null, null, editor.image.get());
            };
            reader.readAsDataURL(files[0]);
        }
        return false;
    })
}