$(document).ready(function(){
    $('#allBlogButton').click(function(e){

        $(".wrapperblog").show();
        $('.Wrapperblog').append("");
        $.ajax({
            type:"GET",
            dataType:"json",
            url:"http://localhost:3000/blogs",
        
            success:(data)=>{
                console.log(data);
                for(i=0;i<data.length;i++)
                {
                    
                    $('.wrapperblog').append('<div class="col-sm-9"><h4><small>RECENT POSTS</small></h4><br><small style="color:red">Date: '+data[i].date+'&nbsp;&nbsp;&nbsp;Category: '+data[i].category+'</small><br><br><hr><h3>'+data[i].title+'</h3><br><p>'+data[i].body+'</p><hr></div><br><br>');
                    
        
                }
            },
            error:(e)=>{
                alert("error");
            }
        })
    })


    //techcatbuttonclick

    $('#techCatButton').click(function(e){
        $(".wrapperblog").hide();
        $(".lifstyleWrapperBlog").hide();
        $(".ITWrapperBlog").hide();
        $(".techWrapperBlog").show();
        $('.techWrapperBlog').append("");
        $.ajax({

            type:"GET",
            dataType:"json",
            url:"http://localhost:3000/blogs",
        
            success:(data)=>{
                console.log(data);
                for(i=0;i<data.length;i++)
                {
                    if(data[i].category=="Technology")
                    {  
                    $('.techWrapperBlog').append('<div class="col-sm-9"><h4><small>RECENT POSTS</small></h4><br><small style="color:red">Date: '+data[i].date+'&nbsp;&nbsp;&nbsp;Category: '+data[i].category+'</small><br><br><hr><h3>'+data[i].title+'</h3><br><p>'+data[i].body+'</p><hr></div><br><br>');
                    }
                }
            },
            error:(e)=>{
                alert("error");
            }
        })
    

})

//lifestylecatButton onclick
$('#lifestyleCatButton').click(function(e){
    $(".wrapperblog").hide();
    $(".techWrapperBlog").hide();
    $(".ITWrapperBlog").hide();
    $(".lifestyleWrapperBlog").show();
    $('.lifestyleWrapperBlog').append("");
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3000/blogs",
    
        success:(data)=>{
            console.log(data);
            for(i=0;i<data.length;i++)
            {
                if(data[i].category=="Lifestyle")
                {
                $('.lifestyleWrapperBlog').append('<div class="col-sm-9"><h4><small>RECENT POSTS</small></h4><br><small style="color:red">Date: '+data[i].date+'&nbsp;&nbsp;&nbsp;Category: '+data[i].category+'</small><br><br><hr><h3>'+data[i].title+'</h3><br><p>'+data[i].body+'</p><hr></div><br><br>');
                }
            }
        },
        error:(e)=>{
            alert("error");
        }
    })


})



//ITcatButton onclick

$('#ITCatButton').click(function(e){
    $(".wrapperblog").hide();
    $(".techWrapperBlog").hide();
    $(".lifestyleWrapperBlog").hide();
    $(".ITWrapperBlog").show();
    $('.ITWrapperBlog').append("");
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"http://localhost:3000/blogs",
    
        success:(data)=>{
            console.log(data);
            for(i=0;i<data.length;i++)
            {
                if(data[i].category=="IT")
                {
                $('.ITWrapperBlog').append('<div class="col-sm-9"><h4><small>RECENT POSTS</small></h4><hr><h3>'+data[i].title+'</h3><br><small style="color:red">Date: '+data[i].date+'&nbsp;&nbsp;&nbsp;Category: '+data[i].category+'</small><br><br><p>'+data[i].body+'</p><hr></div><br><br>');
                }
    
            }
        },
        error:(e)=>{
            alert("error");
        }
    })
})
})


