const express = require('express');
const router = express.Router();

//get image by imageid
router.get('/:imageid',(req, res, next) => {
    const id = req.params.imageid;
    res.status(200).json({
        message: 'Handling GET requests to get image /imageview/{imageid}',
        imageid: id,
        imageName:'some image',
        imageUrl:'/someImageUrlOnlyForAuthorizedUsers.jpg'
        
    });
});

//get all images
router.get('/find/:imagename',(req, res, next) => {
    const imagename = req.params.imagename;
    const filepath = '/Users/bharatramesh/WebProjects/imageviewerservice/images/'+imagename;
    res.status(200).sendFile(filepath);
});

module.exports = router;