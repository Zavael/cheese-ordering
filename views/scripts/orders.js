function deleteOrder(id) {
    $.ajax({
        type: "DELETE",
        url: "/orders/" + id,
        success: function () {
            location.reload()
        }
    });
}

function archiveOrder(id) {    
    $.ajax({
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        url: "/orders/" + id,
        data: JSON.stringify({archived: "true"}),
        success: function () {
            location.reload()
        }
    });
}