$j = jQuery.noConflict();
jsToolBar.prototype.elements.page2images = {
    type: 'button',
    title: 'Website page to image',
    fn: {
        wiki: function() {
            precodeTextField = this;

            var p2i_sizes = {100: "Thumbnail 100x100", 200: "Small 200x200", 400: "Middle 400x400", 800: "Large 800x800"};

            var sizeOptions = [];
			var i = 0;
            for (var size in p2i_sizes) {
                sizeOptions[i++] = "<option value='"+size+"'>" + p2i_sizes[size] + "</option>";
            }
            var sizeSelect = "<select id='p2i_size' style='width:355px;'>" + sizeOptions.join("") + "</select>";

            var hideJs = "hideModal(this);$j('#toolbar-p2i-options').remove();return false;";

            var questionBox = '<div id="toolbar-p2i-options" style="display: none">'+
				'<form action="#">'+
					'<h3 class="title">Page2Images -- Website Screenshot</h3>'+
					'<p><label>Url: <input type="text" id="p2i_url" style="width:350px;"/></label></p>'+
					'<p><label>Size: ' + sizeSelect + '</label></p>'+
					'<p>To get the API key for your redmine, please go to <a href="http://www.page2images.com" target="_blank">here<a/>. </p>'+
					'<p class="buttons">'+
						'<input onclick="precodeTextField.encloseLineSelection(\'!http://api.page2images.com/directlink?p2i_wait_to_finish=1&p2i_url=\'+$j(this).closest(\'div\').find(\'#p2i_url\').val()+\'&p2i_key='+p2i_key+'&p2i_size=\'+$j(this).closest(\'div\').find(\'#p2i_size\').val()+\'x0!\');'+hideJs+'" type="submit" value="Insert">'+
						'<input onclick="'+hideJs+'" type="button" value="Cancel">'+
					'</p>'+
				'</form></div>';

            $j('#main').append(questionBox);
            showModal('toolbar-p2i-options', '400px');
            $j('#toolbar-p2i-options select').focus();
        }
    }
}
