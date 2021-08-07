$(document).ready(function () {
    $('div.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });    

    function pagination() {
        var total = parseInt($('#total_pages').val());
        var current = parseInt($('#current_pages').val());
        var previous_page = parseInt($('#previous_page').val());
        var next_page = parseInt($('#next_page').val());
        var baseUrl = $('#base_url').val();
        var limit = 3;

        var link_html = '<ul class="pagination">';

        if (previous_page) {
            if (previous_page == 1) {
                link_html += ' <li><a href="' + baseUrl + '" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
            } else {
                link_html += ' <li><a href="' + baseUrl + 'page' + previous_page + '/" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
            }
        }
        for (var i = current - limit; i < current; i++) {
            if (i > 0 && i !== 1) {
                link_html += '<li><a href="' + baseUrl + 'page' + (i) + '/">' + i + '</a></li>';
            } else if (i === 1) {
                link_html += '<li><a href="' + baseUrl + '">' + (i) + '</a></li>';
            }
        }

        link_html += '<li class="active"><a href="#">' + current + '</a></li>';

        for (var j = current + 1; j <= current + limit; j++) {
            if (j <= total) {
                link_html += '<li><a href="' + baseUrl + 'page' + (j) + '/">' + j + '</a></li>';
            }
        }
        if (next_page) {
            link_html += ' <li><a href="' + baseUrl + 'page' + next_page + '/" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
        }
        link_html += '</ul>';
        $('#page-link-container').html(link_html);
    }
    pagination();
});
