const { userModel, bookModel } = require("../model");

/*
Route: /users
Method: GET
Description: Get all the list of the users in the system
Access: Public
Parameter: None
*/

// route.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });

exports.getAllUsers = async (req, res) => {
  
};

/*
Route: /users/{id}
Method: GET
Description: Get a user in the system
Access: Public
Parameter: id
*/

// route.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "No user found with this id",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// });

exports.getUsersByID = async (req, res) => {
  
};

/*
Route: /users
Method: POST
Description: Create/ Register a new user
Access: Public
Parameter: None
*/

// route.post("/", (req, res) => {
//   const {
//     id,
//     fullname,
//     email,
//     password,
//     issuedBook,
//     issuedDate,
//     returnDate,
//     role,
//     active,
//     subscriptiontype,
//     subscriptiondate,
//   } = req.body;

//   if (
//     !id ||
//     !fullname ||
//     !email ||
//     !password ||
//     !issuedBook ||
//     !issuedDate ||
//     !returnDate ||
//     !role ||
//     !active ||
//     !subscriptiontype ||
//     !subscriptiondate
//   ) {
//     res.status(400).json({
//       success: false,
//       message: "Please provide all the fields",
//     });
//   }

//   const user = users.find((each) => each.id === id);

//   if (user) {
//     res.status(409).json({
//       success: false,
//       message: `User is already exists with id: ${id}`,
//     });
//   }

//   users.push({
//     id,
//     fullname,
//     email,
//     password,
//     role,
//     issuedBook,
//     issuedDate,
//     returnDate,
//     active,
//     subscriptiontype,
//     subscriptiondate,
//   });

//   res.status(201).json({
//     success: true,
//     message: "User is created successfully",
//   });
// });

exports.createUser = async (req, res) => {
  
};

/*
Route: /users/{id}
Method: PUT
Description: Updating a user by their id
Access: Public
Parameter: id
*/

// route.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   if (!data) {
//     res.status(400).json({
//       success: false,
//       message: "Please provide some data",
//     });
//   }

//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     res.status(409).json({
//       success: false,
//       message: `User does not exists with id: ${id}`,
//     });
//   }

//   //Method-1
//   // Object.assign(user, data)

//   // OR

//   //Method-2
//   const userUpdate = users.map((each) => {
//     if (each.id === id) {
//       return {
//         ...each,
//         ...data,
//       };
//     }
//     return each;
//   });

//   res.status(200).json({
//     success: true,
//     message: "User updated successfully",
//     data: userUpdate,
//   });
// });

exports.updateUser = async (req, res) => {
  
};

/*
Route: /users/{id}
Method: DELETE
Description: Delete a user by their id (check if the user is in the system)
Access: Public
Parameter: id
*/

// route.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: `User doesn't exists with id: ${id}`,
//     });
//   }

//   //if user is exist, then filter it out from the array
//   const updateUser = users.filter((each) => each.id !== id);

//   res.status(200).json({
//     success: true,
//     message: "User deleted successfully",
//     data: updateUser,
//   });
// });

exports.deleteUser = async (req, res) => {
  
};

/*
Route: /users/subscription-details/{id}
Method: GET
Description: Get a user subscription detail by their id
Access: Public
Parameter: id
*/

// route.get("/subscription-details/:id", (req, res) => {
//   const { id } = req.params;

//   // Find the user by ID
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   //Extract the subscription details
//   const getDateInDays = (data = "") => {
//     let date;
//     if (data) {
//       date = new Date(data);
//     } else {
//       date = new Date();
//     }
//     let days = Math.floor((date / 1000) * 60 * 60 * 24);
//     return days;
//   };

//   const SubscriptionType = (date) => {
//     if (user.SubscriptionType === "Basic") {
//       date = date + 90;
//     } else if (user.SubscriptionType === "Standard") {
//       date = date + 180;
//     } else if (user.SubscriptionType === "Premium") {
//       date = date + 365;
//     }
//     return date;
//   };

//   // Subscription Expiration Calculation
//   // January 1, 1970 UTC // milliseconds

//   let returnDate = getDateInDays(user.returnDate);
//   let currentDate = getDateInDays();
//   let subscriptionDate = getDateInDays(user.subscriptionDate);
//   let subcriptionExpiration = SubscriptionType(subscriptionDate);

//   const data = {
//     ...user,
//     subcriptionExpired: subcriptionExpiration < currentDate,
//     subscriptionDaysLeft: subcriptionExpiration - currentDate,
//     returnDate: returnDate < currentDate ? "Book is overdue" : returnDate,
//     fine:
//       returnDate < currentDate
//         ? subcriptionExpiration <= currentDate
//           ? 200
//           : 100
//         : 0,
//   };

//   res.status(200).json({
//     success: true,
//     message: `Subscription Details of the user with id: ${id}`,
//     data: data,
//   });
// });

exports.getSubscriptionDetailsByID = async (req, res) => {
  
};
