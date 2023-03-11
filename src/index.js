var path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

// Thư viện PUT, PATCH
const methodOverride = require('method-override')
const port = 3001

var cookieParser = require('cookie-parser')
app.use(cookieParser())

// Body parse
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// JWT
var jwt = require('jsonwebtoken')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

// dùng khi muốn sử dụng method="PUT" cho việc edit sản phẩm
app.use(methodOverride('_method'))

// Static file
// app.use(express.static(path.join(__dirname, 'admin/public')))
app.use(express.static(path.join(__dirname, 'user/public')))

// Models
const AccountModel = require('./admin/app/models/account')

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
)

// app.set('views', path.join(__dirname, 'admin', 'resources', 'views'))
app.set('views', path.join(__dirname, 'user', 'resources', 'views'))
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/home`)
})

// POST register
app.post('/user/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
    })
        .then((data) => {
            if (data) {
                res.json('User này đã tồn tại!')
            } else {
                AccountModel.create({
                    username: username,
                    password: password,
                }).then((data) => {
                    res.json('Tạo tài khoản thành công!')
                })
            }
        })
        .catch((err) => {
            res.status(500).json('Tạo tài khoản thất bại!')
        })
})

// POST login
app.post('/user/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password,
    })
        .then((data) => {
            if (data) {
                var token = jwt.sign(
                    {
                        _id: data._id,
                        admin: true,
                    },
                    'mk',
                )
                res.json({
                    message: 'Thành công',
                    token: token,
                })
            } else {
                res.json('Tài khoản hoặc mật khẩu chưa chính xác!')
            }
        })
        .catch((err) => {
            res.json('Đã xảy ra lỗi!')
        })
})

// Get home
app.get(
    '/',
    (req, res, next) => {
        try {
            var token = req.cookies.token
            var ketqua = jwt.verify(token, 'mk')
            if (ketqua) {
                next()
            }
        } catch (error) {
            res.render('login')
        }
    },
    (req, res, next) => {
        res.render('home', { index: 0 })
    },
)

// Log out
app.get('/deleteCookie', function (req, res, next) {
    let cookie = req.cookies
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue
        }
        res.cookie(prop, '', { expires: new Date(0) })
    }
    res.redirect('/user/login')
})

// Nhận các route sau đó sử dụng (luôn để dưới cùng)
const route = require('./routes')
route(app)
