document.addEventListener('DOMContentLoaded', function(){

//---------ADD A TASK

    const tasksToAdd = [];
    const taskInProgress=[];
    const taskDone=[];

    const addForm=document.forms['add-task'];

    addForm.addEventListener('submit', function(e){
        e.preventDefault();

        const value=addForm.querySelector('input[type="text"]').value;

        const list=document.querySelector('#to-do-list ul')

        const li=document.createElement('li');

        const deleteButton=document.createElement('button');
        deleteButton.classList.add('delete-button');

        const moveButton=document.createElement('button');
        moveButton.classList.add('move-button');

        li.textContent=value;
        li.appendChild(moveButton);
        li.appendChild(deleteButton);
        
        tasksToAdd.push(li);

        addForm.querySelector('input[type="text"]').value="";
    })

    addForm.addEventListener('click', function(e){
        if(e.target.className=='submit-button'){
            const addBall = document.querySelector('.add-ball'); 
            addBall.classList.add('add-ball-active');
        }
    })



//DELETE A TASK
    const list=document.querySelector('#to-do-list ul');
    const listInProgress=document.querySelector('#in-progress-list ul');
    const listDone=document.querySelector('#done-list ul')

    list.addEventListener('click', function(e){
        if(e.target.className=='delete-button'){
            const li=e.target.parentElement;
            list.removeChild(li);
        }

        
        if(e.target.className=='move-button'){
            const li=e.target.parentElement;
            
            //listInProgress.appendChild(li);
            taskInProgress.push(li);

            const ball = document.querySelector('.move-ball');
            ball.classList.add('move-ball-active');

            list.removeChild(li);
        }
    })


    listInProgress.addEventListener('click', function(e){
        if(e.target.className=='delete-button'){
            const li=e.target.parentElement;
            listInProgress.removeChild(li);
        }

        if(e.target.className=='move-button'){
            const li=e.target.parentElement;
            
            taskDone.push(li);
            //listDone.appendChild(li);
            const ball = document.querySelector('.move-ball2');
            ball.classList.add('move-ball-active');
            listInProgress.removeChild(li);
        }
        
    })

    listDone.addEventListener('click', function(e){
        if(e.target.className=='delete-button'){
            const li=e.target.parentElement;
            listDone.removeChild(li);
        }

        
    })

    const ball = document.querySelector('.move-ball');
    ball.addEventListener('animationend', (e)=>{
        e.target.classList.remove('move-ball-active');
        const list=document.querySelector('#in-progress-list ul')
        for(task of taskInProgress){
            list.appendChild(task);
        }
    })

    const ball2 = document.querySelector('.move-ball2');
    ball2.addEventListener('animationend', (e)=>{
        e.target.classList.remove('move-ball-active');
        const list=document.querySelector('#done-list ul');
        for(task of taskDone){
            list.appendChild(task);
        }
    })
    
    const addBall=document.querySelector('.add-ball');

    addBall.addEventListener('animationend', (e)=>{
        e.target.classList.remove('add-ball-active');
        const list=document.querySelector('#to-do-list ul')
        for(task of tasksToAdd){
            list.appendChild(task);
        }
    })

    

})