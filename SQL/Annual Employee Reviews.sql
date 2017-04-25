SELECT Orders.OrderID
FROM Orders
INNER JOINS Employees
ON Orders.EmployeeID =
Employee.EmployeeID
WHERE FirstName = "Adam"
AND LastName = "West";