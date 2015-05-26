
app.post('/api/upImage/', function(request,response){
    var imagepath = request.param("imagepath");
    console.log(imagepath);
    var fpath = imagepath; //"http://res.cloudinary.com/dchakwrrt/image/upload/v1430335708/esxpdwltt8xx1rq569hv.jpg";
    var parsedUrl = require('url').parse(fpath)
    var params = {     
      hostname: parsedUrl.hostname,
      path: parsedUrl.path,                                                                                                                                                                                        
    }

    if (!(request.is('multipart/form-data'))) {
            response.status(415).send('Unsupported media type');
            return;
        }

    var extension = path.extname(imagepath);
        
        // Get the base file name
        var baseFilename = path.basename(imagepath, extension);
        console.log(baseFilename)
        // Create the temporary file name for the chunk
        var tempfilename = baseFilename + extension;
        console.log(tempfilename)
        // Create the temporary directory to store the file chunk
        // The temporary directory will be based on the file name
        var tempdir = "c:/temp/";
        console.log(tempdir)

            var form = new formidable.IncomingForm();
            form.keepExtensions = true;
            form.uploadDir = tempdir;

            // Parse the form and save the file chunks to the
            // default location
            form.parse(request, function(err, fields, files) {
               
                //console.log(request)

                if (err) {
                     console.log("*****33caaaaaaaaaaaaaaaad Fuck")
                    response.status(500).send(err);
                    return;
                }

            });


            form.on('error', function(err) {
                if (err) {
                    response.status(500).send(err);
                    return;
                }
            });


            form.on('end', function(fields, files) {
                 response.end("success  " + localfilepath);
            });
        

})

//for getting image below 

app.get('/api/getimage/', function(req,resp){
    var imagepath = req.param("imagepath");
    console.log(imagepath);
    var fpath = imagepath; //"http://res.cloudinary.com/dchakwrrt/image/upload/v1430335708/esxpdwltt8xx1rq569hv.jpg";
    var parsedUrl = require('url').parse(fpath)
    var params = {     
      hostname: parsedUrl.hostname,
      path: parsedUrl.path,                                                                                                                                                                                        
    }
    http.get(params, function(res) {
        var type = res.headers["content-type"],
            prefix = "data:" + type + ";base64,",
            body = "";
            res.setEncoding('binary');

        res.on('data', function(data) {
                 if (res.statusCode == 200) { 
                    body += data;}
        }).on('end', function() {
            var base64 = new Buffer(body, 'binary').toString('base64'),
            data = prefix + base64;
            resp.end(data);
        });
    });
})
