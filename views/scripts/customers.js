function deleteCustomer(id) {
	$.ajax({
		type: "DELETE",
		url: "/customers/" + id,
		success: function () {
			location.reload()
		}
	});
}
