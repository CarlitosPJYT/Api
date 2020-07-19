const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/paginate-application')
     .then(db => console.log(db.connection.host), {
          useNewUrlParser : true,
          useUnifiedTopology : true
     })
     .catch(err => console.error(err))