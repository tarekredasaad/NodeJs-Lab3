var http = require('http');
var fs = require('fs');
// var email = document.getElementById('email_login') | null;
// var pass = document.getElementById('pass_login');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
//   res.end('Hello ITI \n Iam Tariq');

// createServer(function(req, res){
    // // // // // // // 	//MIME Type
    	// res.writeHead(200, {'content-type': "text/html"})
    	// var html = fs.readFileSync('signup.html')
    	// res.end(html)
    	// res.writeHead(200, {'content-type': "text/html"})
    	// var html = fs.readFileSync('login.html')
    	// res.end(html)
    	// res.writeHead(200, {'content-type': "text/html"})
    	// var html = fs.readFileSync('home.html')
    	// res.end(html)
        if(req.url==='/')
	{
		res.writeHead(200, {'content-type': "text/html"})
		var html = fs.readFileSync('signup.html')
		console.log(req.url)
	console.log(req.method)
	console.log(email);
// // //   // recomended
		// fs.writeFileSync()
			res.end(html)
  		// res.write(html)
// // // 		fs.createReadStream(__dirname+ '/index0.html', 'utf8').pipe(res);
	}else if(req.url==='/home?email/:email&password/:pass' && req.method==='GET'){
		res.writeHead(200, {'content-type':  "text/html"})
		var html = fs.readFileSync('home.html')
		res.end(html)
	}
	else if(req.url==='/api' && req.method==='GET'){
		res.writeHead(200, {'content-type': "application/json"})
		obj = {
			firstName: "ahmed",
			lastName: "elmahdy"
		}
		var data = fs.readFileSync('info.json')
		// res.write(JSON.stringify(obj));
		 res.write(data);
        res.end();
    }else if(req.url==='/api' && req.method==='POST' ){
		res.writeHead(201, {'content-type': "application/json"})
		obj = {
			firstName: "ITI",
			lastName: "PWD"
		}
		res.write(JSON.stringify(obj));
        res.end();
	}
// if(req.url==='/api/signup' && req.method==='POST' ){
//     		res.writeHead(201, {'content-type': "application/json"})
//     		obj = {
//                 email:"tariq@gamil.com",
//     			username: "tariq",
//     			password: "PWD"
//     		}
//             fs.writeFile("info.json", JSON.stringify(obj), function(err) {
//                 if(err) {
//                 return console.log(err);
//                 }  
//                });
//     		res.write(JSON.stringify(obj));
//             res.end();
//     	}
// if(req.url==='/api/login' && req.method==='post' ){
//     		res.writeHead(201, {'content-type': "application/json"})
//     		// obj = {
//             //     email:"tariq@gamil.com",
//     		// 	username: "tariq",
//     		// 	password: "PWD"
//     		// }
//             fs.readFile('.info.json', 'utf8', function(err, data){
//                 if(err) throw err;
//                 console.log(data)
//                 // if(data.includes())
//             })
//             res.write(JSON.stringify(data));
//             res.end();
//     	}

    res.end();
    // }).listen(3000)
}).listen(8000,()=> console.log('http://localhost:8000'));