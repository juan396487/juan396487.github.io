
$(document).on('mousedown', '.table .row', function() {
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
});

function makeRow(rowData) {
    let rowHTML = '';
    rowHTML += "<div class='row'>";
    $.each(rowData, function(key,value) {
        if(typeof value !== 'object') {
            rowHTML += "<div class='cell'>";
            rowHTML += "<div class='cellData'>";
            rowHTML += value;
            rowHTML += "</div>";
            rowHTML += "</div>";
        }
    });
    rowHTML += "</div>";
    return rowHTML;
}



function makeHeaderRow(rowData) {
    let rowHTML = '';
    $.each(rowData, function(key,value) {
        if(typeof value !== 'object') {
        rowHTML += "<div class='cell'>";
        rowHTML += "<div class='cellData'>";
        rowHTML += key;
        rowHTML += "</div>";
        rowHTML += "</div>";
        }
    });
    return rowHTML;
}



function generateGrid(url) {
    $.get(url).done(function(data) { 
        if(typeof data !== 'object') { alert('Invalid JSON Data'); return; }
        let rows = '';
        $('.headerRow').html( makeHeaderRow(data[0]) );
            $.each(data, function(key,value) { 
                rows += makeRow(value);
            } );
        $('.table').html(rows);
    }).fail(function() {
        alert('There was an error with the API end point. Please check the URL.');
    });
}
