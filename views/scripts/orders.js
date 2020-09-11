function deleteOrder(id) {
    $.ajax({
        type: "DELETE",
        url: "/orders/" + id,
        success: function () {
            location.reload()
        }
    });
}