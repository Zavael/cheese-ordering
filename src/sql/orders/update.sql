UPDATE orders 
SET 
    $2:raw
WHERE id = $1
RETURNING *;