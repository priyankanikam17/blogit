$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3000/blogs",
    
        success:(data)=>{
            console.log(data);
            for(i=0;i<data.length;i++)
            {
                $('.wrapperblog').append('<div class="col-sm-9"><h4><small>RECENT POSTS</small></h4><hr><h3>'+data[i].title+'</h3><br><p>'+data[i].body+'</p><hr></div><br><br>');
               // $('.wrapperblog').append('<p>'+data[i].content+'</p>');
    
            }
        },
        error:(e)=>{
            alert("error");
        }
    })

})