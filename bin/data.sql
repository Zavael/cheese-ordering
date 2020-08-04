
INSERT INTO public.items(item_id, item_name)
	VALUES
        (0, 'mlieko'),
        (1, 'jogurt'),
        (2, 'syr'),
        (3, 'bryndza');

INSERT INTO public.customers(customer_id, first_name, last_name)
	VALUES (0, 'Olivia', 'Cockburn'), (1, 'Ján', 'Wild');

INSERT INTO public.priced_items(valid_from, valid_to, value, item_id)
	VALUES 
        ('2020-01-01', '2020-05-01', 10, 0),
        ('2020-05-01', '2020-12-01', 15, 0),
        ('2020-01-01', '2020-12-01', 20, 1),
        ('2020-01-01', '2020-12-01', 30, 2),
        ('2020-01-01', '2020-12-01', 40, 3);

INSERT INTO public.orders(order_id, order_payment_status, order_date, customer_id)
	VALUES
        (0, 't', '2020-04-15', 0),
        (1, 'f', '2020-06-15', 0),
        (2, 't', '2020-04-25', 1),
        (3, 'f', '2020-05-25', 1),
        (4, 'f', '2020-06-25', 1);

INSERT INTO public.ordered_items(amount, item_id, order_id)
	VALUES
        (3, 2, 0),
        (2, 3, 0),
        (3, 2, 1),
        (2, 3, 2),
        (1, 0, 2),
        (5, 1, 2),
        (1, 2, 3),
        (2, 1, 3),
        (3, 0, 4);