// import userModel from "../models/userModel";

// // Admin Access
// export const isAdmin = (req, res, next) => {
//   try {
//     const user = userModel.findById(req.user.id);
//     if (!user.role == 1) {
//       return res.status(401).send({
//         success: false,
//         message: "unauthorized access",
//       });
//     }
//   } catch (error) {
//     console.log("error is ", error);
//   }
// };
