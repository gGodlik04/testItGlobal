SET STATISTICS TIME ON
USE testdb

SELECT 
	collaborators.id,
	collaborators.name,
	subdivisions.name AS sub_name,
	subdivisions.id AS sub_id,
	subdivision_id,
	CASE 
		WHEN LEN(subdivisions.name) = 15
			THEN '1-ый уровень вложенности'
		WHEN LEN(subdivisions.name) = 17
			THEN '2-ый уровень вложенности'
		WHEN LEN(subdivisions.name) = 19
			THEN '3-ый уровень вложенности'
		WHEN LEN(subdivisions.name) = 21
			THEN '4-ый уровень вложенности'
	END AS sub_level,
	COUNT(subdivision_id) OVER (PARTITION BY subdivision_id) AS colls_count
FROM collaborators 
jOIN subdivisions ON collaborators.subdivision_id = subdivisions.id
WHERE  subdivisions.name LIKE '%1.%' and LEN(collaborators.name) > 11 and collaborators.age < 40 and subdivisions.id NOT IN (100055, 100059)
ORDER BY LEN(subdivisions.name)  
 