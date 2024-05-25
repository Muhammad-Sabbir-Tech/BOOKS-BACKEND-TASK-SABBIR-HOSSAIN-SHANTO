The Books Backend API is a assessment project developed for RoseTech Solution Ltd to manage authors and books. It provides endpoints for user registration, authentication, author management, and book management. The API is designed to be secure, scalable, and efficient, utilizing JWT for authentication and role-based access control.

### Key Features:

+ **User Management:** User Registration: Users can register by providing necessary details such as full name, contact no, user name, password and role password.

+ **User Login:** Registered users can log in to access protected endpoints.
+ **Authentication:** JWT tokens are issued upon successful login and used to authenticate subsequent requests.

+ **Role-Based Access Control:**
        Two Roles: Admin and User.
        Admin Role: Admins have full access to all functionalities.
        User Role: Users have limited access and cannot create authors or books.

+ **Author Management:**
    + **Add Author:** Admins can add new authors providing details like name, and birthday

    + **Get All Authors:** Retrieve a list of all authors along with their associated books.

    + **Get Single Author:** Retrieve details of a single author along with their associated books.

+ **Book Management:**
        + **Add Book:** Admins can add new books with details such as title, author, renres and publication date.
        + **Get All Books:** Retrieve a list of all books along with their respective authors.
        + **Get Single Book:** Retrieve details of a single book along with its author.

+ **Security Measures:**
    + **JWT Authentication:** Authentication is handled using JWT tokens issued upon successful login.
    + **Cookie-Based Authentication:** Secure HTTP cookies are utilized for storing JWT tokens.
    + **Authorization Middleware:** Role-based access control is enforced using middleware to restrict access to certain endpoints based on user roles.

### Technologies Used:
+ **Programming Language:**  Node.js
+ **Framework:** Express.js
+ **Database:** MongoDB
+ **Authentication**: JWT
    
### API documention
I've already provided the **Postman collection** as documention to the **./credentials** directory.