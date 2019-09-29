UPDATE inventory
SET img_url = $1,
name_item = $2,
price_item = $3
WHERE item_id = $4;

-- SELECT * FROM inventory
-- ORDER BY item_id;
