$('document').ready(function() {
    $('#btn').click(function() {
        $.ajax({
            url: 'http://localhost:3000/api',
            type: 'GET',
            success: function(data) {
                console.log(data);
            }
        });
    });
}