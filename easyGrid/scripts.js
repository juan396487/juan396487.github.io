
    $('input[name=api]').keydown(function(e) {
        if(e.which == 13) {
            let url = $('input[name=api]').val();
            generateGrid(url);
        }
     });

     $('#generate').mousedown(function() {
            let url = $('input[name=api]').val();
            generateGrid(url);
     });

    generateGrid($('input[name=api]').val());