DELETE FROM inventory
WHERE item_id = $1;

SELECT * FROM inventory;
