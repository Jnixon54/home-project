INSERT INTO property (property_name, property_description, address, city, state, zipcode, image_url, loan_amount, monthly_mortgage, user_id,desired_rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
SELECT * FROM property WHERE user_id = $10;