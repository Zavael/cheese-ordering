INSERT INTO orders(${this:payment_status}, ${this:date}, ${this:customer_id}) VALUES (${this:list}) RETURNING *;
