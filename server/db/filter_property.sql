SELECT * FROM property 
WHERE user_id = $1 AND monthly_mortgage > $2;