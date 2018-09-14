//插入填空题
$.FroalaEditor.DefineIcon('input', {NAME: 'sort-numeric-asc'});
// $.FroalaEditor.DefineIcon('input', {NAME: 'rectangle-wide'});
$.FroalaEditor.RegisterCommand('input', {
    title: '插入填空题',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
        var order = $('.order_number').length + 1;
        var html = '<input class="gh_input order_number" order-type="3" data-order="' + order + '" readonly value="' + order + '">';
        this.html.insert(html);
    }
});

//插入配对项
$.FroalaEditor.DefineIcon('insertdrag', {NAME: 'arrows'});
$.FroalaEditor.RegisterCommand('insertdrag', {
    title: '插入配对项',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
        var order = $('.order_number').length + 1;
        this.html.insert('<input class="gh_drag order_number" order-type="2" data-order="' + order + '" readonly value="' + order + '">');
    }
});
//插入计算器
$.FroalaEditor.DefineIcon('inserCal', {NAME: 'calculator'});
$.FroalaEditor.RegisterCommand('inserCal', {
    title: '插入计算器',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
        var html = '<button contenteditable="false"  id="gh_calculator"><img src="../../img/questions/s_cal.png" alt=""></button>';
        this.html.insert(html);
    }
});

var custom = 1; //1:锚点
var thatHtml;
//自定义弹框
// Define popup template.
$.extend($.FroalaEditor.POPUP_TEMPLATES, {
    'customPlugin.popup': '[_BUTTONS_][_CUSTOM_LAYER_]'
});

// Define popup buttons.
$.extend($.FroalaEditor.DEFAULTS, {
    popupButtons: ['popupClose', '|', 'popupButton1'],
});

// The custom popup is defined inside a plugin (new or existing).
$.FroalaEditor.PLUGINS.customPlugin = function (editor) {
    // Create custom popup.
    function initPopup () {
        // Load popup template.
        var template = $.FroalaEditor.POPUP_TEMPLATES.customPopup;
        if (typeof template == 'function') template = template.apply(editor);

        // Popup buttons.
        var popup_buttons = '';

        // Create the list of buttons.
        if (editor.opts.popupButtons.length > 1) {
            popup_buttons += '<div class="fr-buttons">';
            popup_buttons += editor.button.buildList(editor.opts.popupButtons);
            popup_buttons += '</div>';
        }

        // Load popup template.
        var template = {
            buttons: popup_buttons,
         // custom_layer: '<div class="custom-layer" contenteditable="true">Hello World!</div>'
            custom_layer: '<input type="text" id="input_ee">'
        };

        // Create popup.
        var $popup = editor.popups.create('customPlugin.popup', template);

        return $popup;
    }

    // Show the popup
    function showPopup (ele) {
        // Get the popup object defined above.
        var $popup = editor.popups.get('customPlugin.popup');

        // If popup doesn't exist then create it.
        // To improve performance it is best to create the popup when it is first needed
        // and not when the editor is initialized.
        if (!$popup) $popup = initPopup();

        // Set the editor toolbar as the popup's container.
        editor.popups.setContainer('customPlugin.popup', editor.$tb);

        // If the editor is not displayed when a toolbar button is pressed, then set BODY as the popup's container.
        // editor.popups.setContainer('customPlugin.popup', $('body'));

        // Trigger refresh for the popup.
        // editor.popups.refresh('customPlugin.popup');

        // This custom popup is opened by pressing a button from the editor's toolbar.
        // Get the button's object in order to place the popup relative to it.
        var $btn = editor.$tb.find('.fr-command[data-cmd="'+ele+'"]');

        // Compute the popup's position.
        var left = $btn.offset().left + $btn.outerWidth() / 2;
        var top = $btn.offset().top + (editor.opts.toolbarBottom ? 10 : $btn.outerHeight() - 10);

        // Show the custom popup.
        // The button's outerHeight is required in case the popup needs to be displayed above it.
        editor.popups.show('customPlugin.popup', left, top, $btn.outerHeight());
    }

    // Hide the custom popup.
    function hidePopup () {
        editor.popups.hide('customPlugin.popup');
    }

    // Methods visible outside the plugin.
    return {
        showPopup: showPopup,
        hidePopup: hidePopup
    }
}

/*// Define an icon and command for the button that opens the custom popup.
$.FroalaEditor.DefineIcon('buttonIcon', { NAME: 'star'})
$.FroalaEditor.RegisterCommand('myButton', {
    title: '锚点',
    icon: 'buttonIcon',
    undo: false,
    focus: false,
    popup: true,
    // Buttons which are included in the editor toolbar should have the plugin property set.
    plugin: 'customPlugin',
    callback: function () {
        if (!this.popups.isVisible('customPlugin.popup')) {

            this.customPlugin.showPopup('myButton');
            $('#input_ee').focus()
        }
        else {
            if (this.$el.find('.fr-marker')) {
                this.events.disableBlur();
                this.selection.restore();
            }
            this.popups.hide('customPlugin.popup');
        }
    }
});*/

//插入锚点
$.FroalaEditor.DefineIcon('insertAnchors', { NAME: 'anchor'})
$.FroalaEditor.RegisterCommand('insertAnchors', {
    title: '插入锚点',
    icon: 'insertAnchors',
    undo: false,
    focus: false,
    popup: true,
    // Buttons which are included in the editor toolbar should have the plugin property set.
    plugin: 'customPlugin',
    callback: function () {
        editRange = window.getSelection();
        if(editRange.type != 'None'){
            lastEditRange = editRange.getRangeAt(0);
        }else{
            alert("请选择要插入的位置")
        }
        if (!this.popups.isVisible('customPlugin.popup')) {
            custom = 1;
            $('#input_ee').focus()
            this.customPlugin.showPopup('insertAnchors');
        }
        else {
            if (this.$el.find('.fr-marker')) {
                this.events.disableBlur();
                this.selection.restore();
            }
            this.popups.hide('customPlugin.popup');
        }
    }
});
//插入序号
$.FroalaEditor.DefineIcon('inserLine', { NAME: 'adn'})
$.FroalaEditor.RegisterCommand('inserLine', {
    title: '插入序号',
    icon: 'inserLine',
    undo: false,
    focus: false,
    popup: true,
    // Buttons which are included in the editor toolbar should have the plugin property set.
    plugin: 'customPlugin',
    callback: function () {
        editRange = window.getSelection();
        if(editRange.type != 'None'){
            lastEditRange = editRange.getRangeAt(0);
        }else{
            alert("请选择要插入的位置")
        }
        if (!this.popups.isVisible('customPlugin.popup')) {
            custom = 2;
            $('#input_ee').focus()
            this.customPlugin.showPopup('inserCal');
        }
        else {
            if (this.$el.find('.fr-marker')) {
                this.events.disableBlur();
                this.selection.restore();
            }
            this.popups.hide('customPlugin.popup');
        }
    }
});

//插入填空选择
$.FroalaEditor.DefineIcon('inserSelect', { NAME: 'plus-square'})
$.FroalaEditor.RegisterCommand('inserSelect', {
    title: '插入填空选择',
    icon: 'inserSelect',
    undo: false,
    focus: false,
    popup: true,
    // Buttons which are included in the editor toolbar should have the plugin property set.
    plugin: 'customPlugin',
    callback: function () {
        editRange = window.getSelection();
        if(editRange.type != 'None'){
            lastEditRange = editRange.getRangeAt(0);
        }else{
            alert("请选择要插入的位置")
        }
        if (!this.popups.isVisible('customPlugin.popup')) {
            custom = 3;
            $('#input_ee').focus()
            this.customPlugin.showPopup('inserCal');
        }
        else {
            if (this.$el.find('.fr-marker')) {
                this.events.disableBlur();
                this.selection.restore();
            }
            this.popups.hide('customPlugin.popup');
        }
    }
});

// Define custom popup close button icon and command.
$.FroalaEditor.DefineIcon('popupClose', { NAME: 'times' });
$.FroalaEditor.RegisterCommand('popupClose', {
    title: 'Close',
    undo: false,
    focus: false,
    callback: function () {
        this.customPlugin.hidePopup();
    }
});

// Define custom popup 1.
$.FroalaEditor.DefineIcon('popupButton1', { NAME: 'hand-rock-o' });
$.FroalaEditor.RegisterCommand('popupButton1', {
    title: 'sure',
    undo: false,
    focus: false,
    callback: function () {
        console.log(this.html);
        var value = this.$box.find('#input_ee').val();
        var html = '';
        var selection = getSelection();
        if(lastEditRange){
            selection.removeAllRanges()
            selection.addRange(lastEditRange)
        }
        if(custom == 1){ //锚点
            html = '<button contenteditable="false" id="question_'+value+'" anchors="'+value+'" class="button_anchors">&lt;/'+value+'/&gt;</button>';
        }else if(custom == 2){
            html = '<button contenteditable="false" style="display: inline-block;width:30px;height: 30px; border-radius: 50%;background-color: #8EC87C;color: #fff;" class="gh_line" id="gh_line_'+value+'" data-order="'+value+'">' + value + '</button>';
        }else if(custom == 3){
            html = '<input class="gh_select" readonly style="font-size: 14px;min-width: 80px;padding: 0px 10px;" value="' + value + '">';
        }

        this.html.insert(html);
        this.customPlugin.hidePopup();
    }
});



$('#sureBtn').on('click',function () {
    if(custom == 1){
        console.log(thatHtml);
        var value = $('#sureInput').val();
        var html = '<button contenteditable="false" id="question_'+value+'" anchors="'+value+'" class="button_anchors">&lt;/'+value+'/&gt;</button>';
        thatHtml.insert(html);
    }
})

var editRange; //光标
var lastEditRange; //弹框时光标位置
