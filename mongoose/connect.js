var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://salmandabbakuti:9F5mTuykkDzKUF4S@dev-f0v8q.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true },);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
//db.close()