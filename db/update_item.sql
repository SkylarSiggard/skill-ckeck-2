UPDATE inventory
SET item_name = $1
WHERE item_id = $2;

SELECT * FROM inventory
ORDER BY item_id;