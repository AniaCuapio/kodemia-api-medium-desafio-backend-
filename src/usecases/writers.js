const Writers = require("../models/writers");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Writers.find();
}
function getById(writerId) {
  return Writers.findById(writerId);
}

function create(writerData) {
  return Writers.create(writerData);
}

function remove(writerId) {
  return Writers.findByIdAndDelete(writerId);
}

function update(writerId, newWriterData) {
  return Writers.findByIdAndUpdate(writerId, newWriterData);
}

async function signUp(writerData) {
  const { password } = writerData;
  const encriptedPassword = await bcrypt.hash(password);
  return Writers.create({
    ...writerData,
    password: encriptedPassword,
  });
}

async function login(mail, password) {
  const writerByEmail = await Writers.findOne({ mail });
  if (!writerByEmail) {
    throw new Error ('Email no encontrado')
  } 
  const isValid =  await bcrypt.compare (password, writerByEmail.password)
  console.log(isValid, mail, password, writerByEmail)
  if (!isValid) {
    throw new Error ('Error de contraseña')
  }
  return jwt.sign ({id: writerByEmail._id})
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  signUp,
  login

};
