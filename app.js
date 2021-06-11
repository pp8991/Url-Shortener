const express = require('express');
const app = express();
const path = require('path');

const connection = require('./config/db.config');
connection.once('Open', () => console.log('DB Connected'));
connection.on('error', () =>{console.log('Error')});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json({
    extended: false
}))

app.use('/', require('./routes/redirect'));
app.use('/api/url', require('./routes/url'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));