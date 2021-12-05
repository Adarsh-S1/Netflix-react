const db = require("../config/connection");
const collection = require("../config/collections");
const bcrypt = require("bcryptjs");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const objectId = require("mongodb").ObjectID;
var instance = new Razorpay({
  key_id: "rzp_test_sj4BzMwDvhM1ik",
  key_secret: "CxpGkGfZxKykQt7FfiBKBfkh",
});

module.exports = {
  userLogin: (userdata) => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.USER_COLLECTION)
        .findOne({ Email: userdata.Email })
        .then((response) => {
          if (response) {
            bcrypt
              .compare(userdata.Password, response.Password)
              .then((status) => {
                if (status) resolve(response);
              });
          } else {
            userdata.paymentId = new objectId();
            userdata.payment = "No";
            userdata.Password = bcrypt.hashSync(userdata.Password, 10);
            db.get()
              .collection(collection.USER_COLLECTION)
              .insertOne(userdata)
              .then(() => {
                resolve(userdata);
              });
          }
        });
    });
  },
  generateOrder: (userdata) => {
    return new Promise(async (resolve, reject) => {
      var options = {
        amount: 49900,
        currency: "INR",
        receipt: userdata.paymentId + "",
      };
      instance.orders.create(options, function (err, order) {
        if (err) {
          console.log(err);
        } else {
          resolve(order);
        }
      });
    });
  },
  verifyPayment: (verifyDetails) => {
    return new Promise(async (resolve, reject) => {
      let hmac = crypto.createHmac("sha256", "CxpGkGfZxKykQt7FfiBKBfkh");
      hmac.update(
        verifyDetails.razorpay_order_id +
          "|" +
          verifyDetails.razorpay_payment_id
      );
      hmac = hmac.digest("hex");
      if (hmac == verifyDetails.razorpay_signature) {
        resolve();
      } else {
        reject();
      }
    });
  },
  paymentSucccess: (paymentid) => {
    return new Promise(async (resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .updateOne(
          {
            paymentId: objectId(paymentid),
          },
          {
            $set: {
              payment: "Yes",
            },
          }
        )
        .then(() => {
          let updatedUser = db
            .get()
            .collection(collection.USER_COLLECTION)
            .findOne({ paymentId: paymentid });
          console.log(updatedUser);
          resolve(updatedUser);
        });
    });
  },
};
