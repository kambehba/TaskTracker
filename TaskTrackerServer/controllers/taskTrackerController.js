
var Tasks = require('../models/taskModel');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    //http GET
    app.get('/api/tasks',function(req,res)
    {
        Tasks.find({},function(err,tasks)
                        {
                            if(!err)
                            {res.send(tasks);
                            }
                        });          
    });


    //http POST & UPDATE
    app.post('/api/tasks',function(req,res)
    {
        //UPDATE
        if(req.body.id)
        {
            Tasks.findByIdAndUpdate(req.body.id,
            {
                description:req.body.description,
                status:req.body.status
            },function(err,task){if(err)throw err; res.send('update success');});
        }

        //CREATE
        else
        {
            var newTask = Tasks({description:req.body.description,status:req.body.status});
            //newTask.save(function(err){if(err)throw err; res.send('success');});

            newTask.save(function(err,result){
                if(err){
                    return res.status(500).json({
                        title:'An Error occured',
                        error:err
                    });
                }
                res.status(201).json({
                    message:'saved task',
                    obj:result
                });
            });
        }
        
    });
   

     //http DELETE
    // app.delete('/api/tasks',function(req,res)
    // {
    //     //DELETE
    //     if(req.body.id)
    //     {
    //         //ObjectId("586e3dd52888f41f304c0893")
            
    //        //Tasks.findByIdAndRemove(req.body.id,function(err){if(err)throw err; res.send('delete success');});
    //        console.log("*************************fffffffffffffffffff"+req.body.id);
    //        Tasks.findByIdAndRemove({_id:new mongoose.mongo.ObjectID(req.body.id)},function(err){if(err)throw err; res.send('delete success');});

    //          console.log("****************wwwwwwwwwwwwwwwwwwwwwwwwww");
    //     }
    // });


      


    app.delete('/api/tasks',function(req,res)
    {
        
      Tasks.findById({_id:new mongoose.mongo.ObjectID(req.body.id)}, function (err, task) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!task) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        task.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });

    });//End if Delete


}// End of the Controller