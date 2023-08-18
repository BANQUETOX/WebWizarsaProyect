const mongoose = require("mongoose");
const DB_URL = "mongodb://0.0.0.0:27017/";
const adminPages = require("./src/js/routes/adminPages");
const userPages = require("./src/js/routes/userPages");

async function connectDb() {
  return new Promise((resolve) => {
    resolve(
      mongoose
        .connect(DB_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })

        .then((db) => console.log("DB connected"))
        .catch((err) => console.log(err))
    );
  });
}
connectDb();

const companySchema = new mongoose.Schema({
  image: Image,
  id: Number,
  name: String,
  phone: Number,
  facebook: String,
  instagram: String,
  twitter: String,
  province: String,
  canton: String,
  district: String,
  address: String,
  admin: Object,
  members: [Object],
  jobPositions: [Object],
});

const userSchema = new mongoose.Schema({
  username: String,
  userLastName: String,
  userEmail: String,
  userPassword: String,
  userConfirmPassword: String,
  userGenre: String,
  userIdType: String,
  userId: Number,
  userBirthDay: Date,
  userImage: Image,
  userRole: String,
  education: [Object],
  workExperience: [Object],
  lifeSheet: File,
  crimeSheet: File,
});
const pageAdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});
