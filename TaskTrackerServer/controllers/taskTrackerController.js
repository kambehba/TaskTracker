
var Tasks = require('../models/taskModel');
var bodyParser = require('body-parser');
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
    app.delete('/api/tasks',function(req,res)
    {
        //DELETE
        if(req.body.id)
        {
            Tasks.findByIdAndRemove(req.body.id,function(err){if(err)throw err; res.send('delete success');});
        }
        
    });


}