# Data Types and File System | Extensions

Data types are classifications that specify what kind of data a variable can hold, helping computers interpret and manipulate the data correctly. They are fundamental to programming, data analysis, and database management, as they determine how data is stored, accessed, and processed. Here’s a breakdown of common data types and their characteristics:

## 1. Primitive Data Types

- Integer (int): Represents whole numbers without decimal points (e.g., 3, -12, 0). Used for counting, indexing, etc.
- Float (Floating Point): Represents real numbers with decimal points (e.g., 3.14, -0.99). Used for precise calculations like scientific and financial data.
- String (str): Represents sequences of characters, like text or sentences (e.g., "Hello, World!"). Useful for handling names, messages, passwords, etc.
- Boolean (bool): Represents two values, True or False. Often used for logical operations and conditional statements.

## 2. Composite (or Collection) Data Types

- Array: A collection of elements, typically of the same data type, stored in a specific order. Used in languages like JavaScript, Java, and C. e.g `numbers = [1, 2, 3, 4, 5];`
- List: A sequence of elements that can be of different types, used in languages like Python. Lists are mutable, meaning they can be modified e.g `my_list = [42, "hello", 3.14, True]`
- Tuple: Similar to lists but immutable (cannot be modified after creation). Useful for storing related data that should remain constant e.g `person_info = ("Alice", 30, "Engineer")`
- Dictionary (or HashMap): A collection of key-value pairs, where each key is unique. Efficient for data lookups based on keys e.g in Python

```
student_info = {
  "name": "Alice",
  "age": 24,
  "major": "Computer Science",
  "GPA": 3.9
  }
```

## 3. Advanced Data Types

- Object: A complex data type that can store multiple properties and methods.
  Common in Object-Oriented Programming (OOP), where each object is an instance of a class with attributes and behaviors.

#### JavaScript

```
// Defining a simple object with properties and methods
let car = {
make: "Toyota",
model: "Camry",
year: 2020,
start() {
  console.log("The car has started.");
},
getCarInfo() {
  return `${this.make} ${this.model} (${this.year})`;
    }
};
```

// Accessing properties and calling methods
console.log(car.make); // Output: Toyota
console.log(car.getCarInfo()); // Output: Toyota Camry (2020)
car.start(); // Output: The car has started

// Creating an object from a class
class Car {
constructor(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}

start() {
console.log("The car has started.");
}

getCarInfo() {
return `${this.make} ${this.model} (${this.year})`;
}
}

const myCar = new Car("Honda", "Civic", 2021);
console.log(myCar.getCarInfo()); // Output: Honda Civic (2021)
myCar.start(); // Output: The car has started

```

```

#### Python Objects

# Defining a class with attributes and methods

class Car:
def **init**(self, make, model, year):
self.make = make
self.model = model
self.year = year

    def start(self):
        print("The car has started.")

    def get_car_info(self):
        return f"{self.make} {self.model} ({self.year})"

# Creating an object (instance) of the Car class

my_car = Car("Ford", "Mustang", 2022)

# Accessing properties and calling methods

print(my_car.make) # Output: Ford
print(my_car.get_car_info()) # Output: Ford Mustang (2022)
my_car.start() # Output: The car has started

```

- Set: An unordered collection of unique elements. Great for removing duplicates and performing set operations like union, intersection, and difference.

```

# Creating a set with duplicate elements

numbers = {1, 2, 3, 4, 4, 5}
print(numbers) # Output: {1, 2, 3, 4, 5} (duplicates are removed)

```

- DataFrame: A tabular data structure found in data analysis libraries like pandas (Python), ideal for managing data tables where each column can have a different data type.

```

import pandas as pd

# Creating a DataFrame

data = {
'Name': ['Alice', 'Bob', 'Charlie'],
'Age': [25, 30, 35],
'Salary': [70000.00, 80000.00, 120000.00],
'Department': ['HR', 'IT', 'Finance']
}

df = pd.DataFrame(data)

# Displaying the DataFrame

print("DataFrame:")
print(df)

# Accessing a specific column

print("\nColumn 'Name':")
print(df['Name'])

# Accessing multiple columns

print("\nColumns 'Name' and 'Salary':")
print(df[['Name', 'Salary']])

# Filtering rows based on a condition

print("\nEmployees with Salary > 75000:")
print(df[df['Salary'] > 75000])

# Adding a new column

df['Years of Experience'] = [2, 5, 10]
print("\nDataFrame with new column:")
print(df)

# Updating a specific value

df.at[0, 'Salary'] = 75000.00 # Updating Alice's salary
print("\nDataFrame after updating Alice's Salary:")
print(df)

# Deleting a column

df.drop('Department', axis=1, inplace=True)
print("\nDataFrame after dropping 'Department' column:")
print(df)

```

```

## 4. Null/None Type

- Null (or None in Python): Represents the absence of a value. It’s useful for initializing variables before assigning them a meaningful value, or to signify that a value is missing.In JavaScript, we have both null and undefined. null is an intentional absence of any object value while undefined indicates that a variable has been declared but has not yet been assigned a value.

```
//JavaScript
// Using null
let user = null; // user is explicitly set to null
console.log(user); // Output: null

// Using undefined
let age; // age is declared but not initialized
console.log(age); // Output: undefined

// Function that returns null to indicate no result
function findUser(username) {
    const users = ['Alice', 'Bob', 'Charlie'];
    return users.includes(username) ? username : null; // returns null if not found
}

console.log(findUser('David')); // Output: null

// Checking for null and undefined
if (user === null) {
    console.log("User is not defined."); // Output: User is not defined.
}

if (age === undefined) {
    console.log("Age is not set."); // Output: Age is not set.
}
```

```
//Python
# Using None
user = None  # user is explicitly set to None
print(user)  # Output: None

# A variable that is declared but not initialized
age = None  # Initializing with None
print(age)  # Output: None

# Function that returns None to indicate no result
def find_user(username):
    users = ['Alice', 'Bob', 'Charlie']
    return username if username in users else None  # returns None if not found

print(find_user('David'))  # Output: None

# Checking for None
if user is None:
    print("User is not defined.")  # Output: User is not defined.
```

## 5. Date and Time Types

- Date: Represents a specific date (year, month, day).
- Time: Represents a specific time (hours, minutes, seconds).
- DateTime: Combines both date and time, used in databases and applications where precise tracking of events is essential.

```
//JavaScript
// Creating a Date object
const date = new Date('2024-11-02'); // YYYY-MM-DD format
console.log("Date:", date); // Output: Date: Sat Nov 02 2024 ...

// Getting specific date components
console.log("Year:", date.getFullYear()); // Output: Year: 2024
console.log("Month:", date.getMonth() + 1); // Output: Month: 11 (months are 0-indexed)
console.log("Day:", date.getDate()); // Output: Day: 2
```

```
//Python
from datetime import datetime, date, time

# Creating a Date object
my_date = date(2024, 11, 2)  # YYYY, MM, DD format
print("Date:", my_date)  # Output: Date: 2024-11-02

# Getting specific date components
print("Year:", my_date.year)  # Output: Year: 2024
print("Month:", my_date.month)  # Output: Month: 11
print("Day:", my_date.day)  # Output: Day: 2

# Creating a Time object
my_time = time(15, 30, 0)  # HH, MM, SS format
print("Time:", my_time)  # Output: Time: 15:30:00

# Getting specific time components
print("Hours:", my_time.hour)  # Output: Hours: 15
print("Minutes:", my_time.minute)  # Output: Minutes: 30
print("Seconds:", my_time.second)  # Output: Seconds: 0

# Creating a DateTime object
my_datetime = datetime.now()  # Current date and time
print("Current DateTime:", my_datetime)  # Output: Current DateTime: 2024-11-02 15:30:00.123456
```

```
//MYSQL - Creating a Table with Date and Time Types
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,        -- Stores date only
    event_time TIME NOT NULL,        -- Stores time only
    event_datetime DATETIME NOT NULL -- Stores both date and time
);
```

- Inserting Data into the Table

```
INSERT INTO events (event_name, event_date, event_time, event_datetime)
VALUES
    ('Birthday Party', '2024-11-15', '18:30:00', '2024-11-15 18:30:00'),
    ('Meeting', '2024-11-16', '09:00:00', '2024-11-16 09:00:00'),
    ('Concert', '2024-11-17', '20:00:00', '2024-11-17 20:00:00');
```

- Querying Data from the Table

```
SELECT * FROM events;
```

## 6. Custom Data Types

- Enumerated Types (Enums): Allow a variable to be set to one of a predefined set of constant values. Often used for things like setting states (e.g., "ON", "OFF").

- In JavaScript, while there isn't a built-in enum type, you can simulate it using an object or a constant.

```
const TrafficLight = {
  RED: "RED",
  YELLOW: "YELLOW",
  GREEN: "GREEN"
};

// Usage
let currentLight = TrafficLight.RED;

console.log("Current light is:", currentLight); // Output: Current light is: RED
```

- Python provides a built-in Enum class in the enum module:

```
from enum import Enum

class TrafficLight(Enum):
    RED = "RED"
    YELLOW = "YELLOW"
    GREEN = "GREEN"

# Usage
current_light = TrafficLight.RED

print("Current light is:", current_light.value)  # Output: Current light is: RED
```

- MYSQL

```
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_status ENUM('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED') NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

- User-Defined Types: Created using classes in languages that support Object-Oriented Programming, allowing developers to define custom structures and behaviors. This is done mostly with classes in JavaScript, C#, Python and Java.

# Files Extensions

- CSV (.csv)

Definition: Comma-Separated Values file, used for storing tabular data in plain text.
Use Case: Commonly used for data import/export between applications (e.g., spreadsheets, databases) and for data analysis.

A sample file [Employees Data ](./employees.csv)

- JSON (.json)

Definition: JavaScript Object Notation file, a lightweight format for data interchange.
Use Case: Widely used for APIs and configuration files, enabling easy data exchange between web applications and servers.

A sample file [Employees Data](./employees.json)

- XLSX (.xlsx)

Definition: Microsoft Excel Open XML Spreadsheet file, used for storing spreadsheet data.
Use Case: Ideal for complex data analysis, calculations, and visualizations in Excel.

- PNG (.png)

Definition: Portable Network Graphics file, a raster image format that supports lossless compression.
Use Case: Used for web graphics and images requiring transparency, such as logos and icons.

- JPG/JPEG (.jpg, .jpeg)

Definition: Joint Photographic Experts Group file, a common format for compressed images.
Use Case: Popular for photographs and images on the web due to its balance of quality and file size.

- MP4 (.mp4)

Definition: MPEG-4 Video file, a multimedia format for storing video and audio.
Use Case: Widely used for streaming videos on the internet, compatible with most devices and platforms.

- MP3 (.mp3)

Definition: MPEG Audio Layer III file, a digital audio format for compressing sound.
Use Case: Commonly used for music files, podcasts, and audiobooks due to its small file size and reasonable quality.
