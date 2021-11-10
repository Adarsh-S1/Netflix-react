const db = require("../config/connection");
const collection = require("../config/collections");
const bcrypt = require("bcryptjs");
const Razorpay = require("razorpay");
const objectId = require("mongodb").ObjectID;

module.exports = {
  // getAllStudents: () => {
  //   return new Promise(async (resolve, reject) => {
  //     let students = await db
  //       .get()
  //       .collection(collection.TEST_COLLECTION)
  //       .find()
  //       .toArray();
  //     resolve(students);
  //   });
  // },
  userLogin: (userdata) => {
    return new Promise(async (resolve, reject) => {
      userdata.paymentId = new objectId();
      userdata.payment="No"
      await db
        .get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userdata)
        .then(() => {
          resolve(userdata);
        });
    });
  },
};
