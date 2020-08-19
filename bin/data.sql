
INSERT INTO public.items(id, name)
	VALUES
        (1, 'jogurt'),
        (2, 'syr'),
        (3, 'mlieko'),
        (4, 'bryndza');

INSERT INTO public.customers(id, first_name, last_name)
	VALUES (1, 'Olivia', 'Cockburn'), (2, 'Ján', 'Wild');

INSERT INTO public.priced_items(valid_from, valid_to, value, item_id)
	VALUES 
        ('2020-01-01', '2020-05-01', 10, 1),
        ('2020-05-01', '2020-12-01', 15, 1),
        ('2020-01-01', '2020-12-01', 20, 2),
        ('2020-01-01', '2020-12-01', 30, 3),
        ('2020-01-01', '2020-12-01', 40, 4);

INSERT INTO public.orders(id, payment_status, date, total_price, customer_id)
	VALUES
        (1, 'f', '2020-06-15', 8, 1),
        (2, 't', '2020-04-25', 21, 2),
        (3, 'f', '2020-05-25', 38, 2),
        (4, 'f', '2020-06-25', 5, 2),
        (5, 't', '2020-04-15', 12, 1);

INSERT INTO public.ordered_items(amount, item_id, order_id)
	VALUES
        (3, 2, 1),
        (2, 3, 2),
        (1, 4, 2),
        (5, 1, 2),
        (1, 2, 3),
        (2, 1, 3),
        (3, 4, 4),
        (3, 2, 5),
        (2, 3, 5);