////// added this rough code for doing PATCH when object is marked as completed
		
if (completeMode) {
    updateTask({
        // id: task.id,
        
        taskComletion: true,

    }).then(() => props.history.push('/tasks'));


////// added this rough code for doing PATCH when object is marked as completed