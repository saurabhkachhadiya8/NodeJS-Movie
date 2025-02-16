const express = require('express');
const routes = express.Router();
const { index, addPage, addTicket, viewPage, deleteTicket, editTicket, updateTicket, getinfo, bookFromGetinfo } = require('../controllers/MovieController');

const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        return cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        return cb(null, `${file.fieldname}-${uniq}`)
    }
});
const fileUpload = multer({ storage: st }).single("image");

routes.get('/',index);
routes.get('/add',addPage);
routes.post('/addticket',fileUpload,addTicket);
routes.get('/view',viewPage);
routes.get('/deleteticket',deleteTicket);
routes.get('/editticket',editTicket);
routes.post('/updateticket',fileUpload,updateTicket);

routes.get('/getinfo',getinfo);
routes.post('/bookfromgetinfo',fileUpload,bookFromGetinfo);

module.exports = routes;