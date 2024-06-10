const app = require('./server');
const connectDB = require('./database/connect');
connectDB();

const userRoutes = require('./modules/user/route')
const role = require('./modules/role/route')
const {authenticate} = require('./utiles/auth')

// app.use('/api',(req,res,next)=>{
//     console.log(req)
//     next()
// })

app.use('/auth',authenticate)
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/role',role);
// app.use('/api/v1/role',);

