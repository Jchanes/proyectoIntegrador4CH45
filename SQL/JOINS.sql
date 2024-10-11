-- BD MySQL - 04 - JOINS 

-- -----------------------------
-- FUNCIONES
-- -----------------------------
-- Dentro de SQL podemos utilizar funciones de tipo string, numérico, fecha, etc. Para realizar ciertos procesos sobre la info almacenada 
-- en una tabla
-- SELECT FUNCION (columna) FROM tabla;
SELECT * FROM employee;
-- -----------------------------
-- MIN() - Me devuelve el valor minimo dado un set de valores en una columna
-- -----------------------------

SELECT min(salary) FROM employee;

-- -----------------------------
-- MAX() - Me devuelve el valor maximo dado un set de valores en una columna
-- -----------------------------
SELECT max(salary) FROM employee;


-- -----------------------------
-- COUNT()- Devolver el número total de registros dentro de una columna 
-- -----------------------------
SELECT count(salary) FROM employee;


-- -----------------------------
-- AVG()- Devuelve el valor promedio calculado del conjunto de valores que se encuentran en una columna
-- -----------------------------
SELECT avg(salary) FROM employee;


-- -----------------------------
-- SUM()- Devuelve la suma de los valores que se encuentran dentro de una columna
-- -----------------------------
SELECT sum(salary) FROM employee;

-- ------------------------------------------------------------------------------------
-- JOINS - Tipo de consulta SQL que me permite unir dos o más tablas a partir de una columna en común 
-- ------------------------------------------------------------------------------------

SELECT * FROM employee;
SELECT * FROM title;
SELECT * FROM bonus;

/*
JOIN ENTRE 2 TABLAS
SELECT tabla1.columna(s),tabla2.columna(s) 
FROM tabla1 
INNER JOIN tabla2 
ON tabla1.columna = tabla2.columna;

SELECT tabla1.*,tabla2.* 
FROM tabla1 
INNER JOIN tabla2 
ON tabla1.columna = tabla2.columna;

*/
-- -----------------------------
-- INNER JOIN / JOIN 
-- -----------------------------
-- Tabla 1: employee, Tabla 2: bonus 
SELECT employee.employee_id,bonus.employee_id_fk,employee.last_name
FROM employee
INNER JOIN bonus
ON employee.employee_id = bonus.employee_id_fk;

-- -----------------------------
-- LEFT JOIN
-- -----------------------------
-- Tabla 1: employee, Tabla 2: bonus 

SELECT employee.employee_id,bonus.employee_id_fk,employee.last_name
FROM employee
LEFT JOIN bonus
ON employee.employee_id = bonus.employee_id_fk;

SELECT employee.*,bonus.*
FROM employee
LEFT JOIN bonus
ON employee.employee_id = bonus.employee_id_fk;

-- -----------------------------
-- RIGHT JOIN
-- -----------------------------
SELECT employee.*,bonus.*
FROM employee
RIGHT JOIN bonus
ON employee.employee_id = bonus.employee_id_fk;

-- -----------------------------
-- JOIN MULTIPLE
-- -----------------------------
-- Tabla 1: Employee, Tabla 2: Bonus, Tabla 3: Title
SELECT employee.employee_id,bonus.employee_id_fk,employee.last_name,title.employee_id_fk,title.effective_since
FROM employee
JOIN bonus 
ON employee.employee_id = bonus.employee_id_fk
JOIN title
ON bonus.employee_id_fk = title.employee_id_fk


