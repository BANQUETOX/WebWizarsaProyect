const mongoose = require("mongoose");
const DB_URL = "mongodb://0.0.0.0:27017/";

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
  image: String,
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
  userImage: String,
  userRole: String,
  education: [Object],
  workExperience: [Object],
  lifeSheet: String,
  crimeSheet: String,
});
const pageAdminSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const locationSchema = new mongoose.Schema({
  province: Object,
});

const Admin = mongoose.model("pageAdmin", pageAdminSchema);
const User = mongoose.model("users", userSchema);
const Company = mongoose.model("companies", companySchema);
const Location = mongoose.model("locations", locationSchema);

async function createPageAdmin() {
  return new Promise((resolve) => {
    admin = new Admin({
      userEmail: "admin@admin.com",
      userPassword: "admin",
    });
    admin.save();
    resolve("User created");
  });
}

async function createUser(newUser) {
  return new Promise((resolve) => {
    user = new User(newUser);
    user.save();
    resolve("User created");
  });
}

async function createCompany(newCompany) {
  return new Promise((resolve) => {
    company = new Company(newCompany);
    company.save();
    resolve("Company created");
  });
}

async function createLocation(newLocation) {
  return new Promise((resolve) => {
    location = new Location(newLocation);
    location.save();
    resolve("Location created");
  });
}

async function addCantones(provinceId, provinceName, locationId, cantonList) {
  await Location.findByIdAndUpdate(locationId, {
    province: {
      id: provinceId,
      name: provinceName,
      cantones: cantonList,
    },
  });
}

async function login(email, password) {
  const admins = await Admin.find();
  const users = await User.find();
  const companies = await Company.find();
  let userFound;
  if (
    admins.find((admin) => {
      return admin.userEmail == email;
    }) != undefined
  ) {
    userFound = admins.find((admin) => {
      return admin.userEmail == email;
    });
    if (userFound.userPassword == password) {
      console.log(userFound);
      console.log(userFound.id);
      return [userFound.id, "admin"];
    } else {
      return false;
    }
  } else if (
    users.find((user) => {
      return user.userEmail == email;
    }) != undefined
  ) {
    userFound = users.find((user) => {
      return user.userEmail == email;
    });
    if (userFound.userPassword == password) {
      return [userFound.id, "user"];
    } else {
      return false;
    }
  } else if (
    companies.find((company) => {
      return company.admin.userEmail == email;
    }) != undefined
  ) {
    userFound = companies.find((company) => {
      return company.admin.userEmail == email;
    });
    if (userFound.admin.userPassword == password) {
      return [userFound.id, "company"];
    } else {
      return false;
    }
  }
}

module.exports.login = login;
module.exports.addCantones = addCantones;
module.exports.Location = Location;
module.exports.createUser = createUser;
module.exports.createCompany = createCompany;
module.exports.createLocation = createLocation;
