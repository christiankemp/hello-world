SELECT Orders.OrderID
Products.ProductName
Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOINS Customers
ON Orders.CustomerID=Customers.CustomerID
INNER JOIN OrderDetails
ON Orders.OrderID = OrderDetails.OrderID
INNER JOIN Products
ON OrderDetails.ProductID = 
Products.Product
WHERE CustomerName = "Wilman Kala"