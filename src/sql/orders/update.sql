UPDATE orders 
SET 
    payment_status = ${data.payment_status}
WHERE id = ${id}