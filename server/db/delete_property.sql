DELETE FROM property
WHERE property_id = $1;
SELECT * FROM property WHERE user_id = $2;