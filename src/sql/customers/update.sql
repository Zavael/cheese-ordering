UPDATE customers 
SET 
    first_name = ${data.first_name},
    last_name = ${data.last_name}
WHERE id = ${id}