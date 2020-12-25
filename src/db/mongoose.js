const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
//MONGODB_URL="mongodb+srv://taskapp:004439Mete?26@cluster0.vc8wf.mongodb.net/task-manager-api?retryWrites=true"