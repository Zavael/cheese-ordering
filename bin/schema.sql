/*
Created: 13. 7. 2020
Modified: 13. 7. 2020
Model: PostgreSQL 10
Database: PostgreSQL 10
*/


-- Drop relationships section -------------------------------------------------

-- ALTER TABLE "Order_item" DROP CONSTRAINT "Relationship8"
-- ;
-- ALTER TABLE "Order" DROP CONSTRAINT "Relationship7"
-- ;
-- ALTER TABLE "Order_item" DROP CONSTRAINT "Relationship6"
-- ;
-- ALTER TABLE "Order_item" DROP CONSTRAINT "Relationship4"
-- ;
-- ALTER TABLE "item_price" DROP CONSTRAINT "Relationship2"
-- ;


-- Drop keys section -------------------------------------------------

-- ALTER TABLE "Order_item" DROP CONSTRAINT "PK_Order_item"
-- ;

-- ALTER TABLE "Order" DROP CONSTRAINT "PK_Order"
-- ;

-- ALTER TABLE "item_price" DROP CONSTRAINT "PK_item_price"
-- ;

-- ALTER TABLE "Item" DROP CONSTRAINT "PK_Item"
-- ;

-- ALTER TABLE "Customer" DROP CONSTRAINT "PK_Customer"
-- ;

-- Drop indexes section -------------------------------------------------

DROP INDEX IF EXISTS "IX_Relationship2"
;

DROP INDEX IF EXISTS "IX_Relationship7"
;

DROP INDEX IF EXISTS "IX_Relationship4"
;

DROP INDEX IF EXISTS "IX_Relationship6"
;

DROP INDEX IF EXISTS "IX_Relationship8"
;

-- Drop tables section ---------------------------------------------------

DROP TABLE IF EXISTS "Order_item"
;
DROP TABLE IF EXISTS "Order"
;
DROP TABLE IF EXISTS "item_price"
;
DROP TABLE IF EXISTS "Item"
;
DROP TABLE IF EXISTS "Customer"
;
-- Create tables section -------------------------------------------------

-- Table Customer

CREATE TABLE "Customer"
(
  "customer_id" Bigint NOT NULL,
  "firstName" Text,
  "lastName" Text
)
WITH (
  autovacuum_enabled=true)
;

ALTER TABLE "Customer" ADD CONSTRAINT "PK_Customer" PRIMARY KEY ("customer_id")
;
-- Table Item

CREATE TABLE "Item"
(
  "item_id" Bigint NOT NULL,
  "item_name" Text
)
WITH (
  autovacuum_enabled=true)
;

ALTER TABLE "Item" ADD CONSTRAINT "PK_Item" PRIMARY KEY ("item_id")
;
-- Table item_price

CREATE TABLE "item_price"
(
  "item_price_id" Bigint NOT NULL,
  "validFrom" Date,
  "validTo" Date,
  "value" Double precision,
  "item_id" Bigint
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship2" ON "item_price" ("item_id")
;
ALTER TABLE "item_price" ADD CONSTRAINT "PK_item_price" PRIMARY KEY ("item_price_id")
;
-- Table Order

CREATE TABLE "Order"
(
  "order_id" Bigint NOT NULL,
  "order_payment_status" Boolean,
  "order_date" Date,
  "customer_id" Bigint
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship7" ON "Order" ("customer_id")
;
ALTER TABLE "Order" ADD CONSTRAINT "PK_Order" PRIMARY KEY ("order_id")
;
-- Table Order_item

CREATE TABLE "Order_item"
(
  "order_item_id" Bigint NOT NULL,
  "amount" Bigint,
  "item_id" Bigint,
  "order_id" Bigint,
  "customer_id" Bigint
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship4" ON "Order_item" ("item_id")
;
CREATE INDEX "IX_Relationship6" ON "Order_item" ("order_id")
;
CREATE INDEX "IX_Relationship8" ON "Order_item" ("customer_id")
;
ALTER TABLE "Order_item" ADD CONSTRAINT "PK_Order_item" PRIMARY KEY ("order_item_id")
;
-- Create foreign keys (relationships) section ------------------------------------------------- 

ALTER TABLE "item_price" ADD CONSTRAINT "Relationship2" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "Order_item" ADD CONSTRAINT "Relationship4" FOREIGN KEY ("item_id") REFERENCES "Item" ("item_id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "Order_item" ADD CONSTRAINT "Relationship6" FOREIGN KEY ("order_id") REFERENCES "Order" ("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "Order" ADD CONSTRAINT "Relationship7" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "Order_item" ADD CONSTRAINT "Relationship8" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION
;




