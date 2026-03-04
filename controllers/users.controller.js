const { userModel, bookModel } = require("../model/export");

/*
Route: /users
Method: GET
Description: Get all the list of the users in the system
Access: Public
Parameter: None
*/

exports.getAllUsers = async (req, res) => {
  const allUsers = await userModel.find();

  if (allUsers.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Users in the system",
    });
  }

  res.status(200).json({
    success: true,
    data: allUsers,
  });
};

/*
Route: /users/{id}
Method: GET
Description: Get a user in the system
Access: Public
Parameter: id
*/

exports.getUsersByID = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "No user found with this id",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

/*
Route: /users
Method: POST
Description: Create/ Register a new user
Access: Public
Parameter: None
*/

exports.createUser = async (req, res) => {
  const { data } = req.body;

  const user = await userModel.find();

  if (!data || Object.keys(data).length === 0) {
    res.status(400).json({
      success: false,
      message: "Please provide all the fields",
    });
  }

  await userModel.create(data);
  const allUsers = await userModel.find();

  res.status(201).json({
    success: true,
    message: "User is created successfully",
    data: allUsers,
  });
};

/*
Route: /users/{id}
Method: PUT
Description: Updating a user by their id
Access: Public
Parameter: id
*/

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data || Object.keys(data).length === 0) {
    res.status(400).json({
      success: false,
      message: "Please provide some data",
    });
  }

  const user = userModel.findById(id);

  if (!user) {
    res.status(409).json({
      success: false,
      message: `User does not exists with id: ${id}`,
    });
  }

  const userUpdate = await userModel.findOneAndReplace({ _id: id }, data, {
    new: true,
  });

  if (!userUpdate) {
    res.status(409).json({
      success: false,
      message: `User does not exists with id: ${id}`,
    });
  }

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: userUpdate,
  });
};

/*
Route: /users/{id}
Method: DELETE
Description: Delete a user by their id (check if the user is in the system)
Access: Public
Parameter: id
*/

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = userModel.findById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User doesn't exists with id: ${id}`,
    });
  }

  await userModel.findOneAndDelete(id);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};

/*
Route: /users/subscription-details/{id}
Method: GET
Description: Get a user subscription detail by their id
Access: Public
Parameter: id
*/

exports.getSubscriptionDetailsByID = async (req, res) => {
  const { id } = req.params;
  // Find the user by ID
  const user = await userModel.findById(id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }
  //Extract the subscription details
  const getDateInDays = (data = "") => {
  const date = data ? new Date(data) : new Date();
  return Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
};
  const SubscriptionType = (date) => {
    if (user.subscriptionType === "Basic") {
      date = date + 90;
    } else if (user.subscriptionType === "Standard") {
      date = date + 180;
    } else if (user.subscriptionType === "Premium") {
      date = date + 365;
    }
    return date;
  };
  // Subscription Expiration Calculation
  // January 1, 1970 UTC // milliseconds
  let returnDate = getDateInDays(user.returnDate);
  let currentDate = getDateInDays();
  let subscriptionDate = getDateInDays(user.subscriptionDate);
  let subcriptionExpiration = SubscriptionType(subscriptionDate);
  const data = {
  ...user.toObject(),
  subcriptionExpired: subcriptionExpiration < currentDate,
  subscriptionDaysLeft: subcriptionExpiration - currentDate,
  returnDate: returnDate < currentDate ? "User is overdue" : user.returnDate,
  fine:
    returnDate < currentDate
      ? subcriptionExpiration <= currentDate
        ? 200
        : 100
      : 0,
};
  res.status(200).json({
    success: true,
    data: data,
  });
};
