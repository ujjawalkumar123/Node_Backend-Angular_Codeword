var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster001-orp8m.mongodb.net/codeword?retryWrites=true', {useNewUrlParser: true})
.then(() => {
console.log("DB connected")
}, err => {
console.log("DB error")
}
);