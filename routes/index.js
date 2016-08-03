var router = express.Router();
var app = require('../app');

router.get('/', function(req, res){
	res.render('index');
});
