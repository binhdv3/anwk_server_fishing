const productRouter = require('./product')
const customerRouter = require('./customer')
const accountRouter = require('./account')

function router(app){

    app.use('/product' ,productRouter)
    app.use('/customer' ,customerRouter)
    app.use('/account' ,accountRouter)
    app.use('/', productRouter)
}

module.exports = router;