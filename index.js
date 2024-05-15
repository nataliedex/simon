$(".header").click(function(event){
    $(this).addClass("selected");

    for(var i=1; i< 8; i++){
        if($(this).hasClass(("col"+[i]))){

            for(var j = 1; j < 7; j++){
                if($((".space.row"+[j]+".col"+[i])).hasClass("computerPiece")===false &&
                $((".space.row"+[j]+".col"+[i])).hasClass("new")===false)  {
                    $((".space.row"+[j]+".col"+[i])).addClass("new");
                    j=7;
                    $(this).removeClass("selected");  
                    endGame();
                }
            }   
        }
    }

    setTimeout(computerTurn, 500);
});   


function computerTurn(){

    var open = true;
    while(open === true){

        var computerColumn = Math.floor(Math.random()*7)+1;
        console.log(computerColumn);
        for(var j = 1; j < 7; j++){
            console.log(j);
            if($((".space.row"+[j]+".col"+[computerColumn])).hasClass("computerPiece")===false &&
            $((".space.row"+[j]+".col"+[computerColumn])).hasClass("new")===false) {
                $((".space.row"+[j]+".col"+[computerColumn])).addClass("computerPiece");
                open = false;
                j = 7;
                endGame();
                
            }  
        }
    }
}

function endGame(){
    //horizontal win

    //you win
    for(var i = 1; i < 7; i++){
        for(var j = 1; j < 5; j++){
            if($((".space.row"+i+".col"+j)).hasClass("new") &&
            $((".space.row"+i+".col"+(j+1))).hasClass("new") &&
            $((".space.row"+i+".col"+(j+2))).hasClass("new") &&
            $((".space.row"+i+".col"+(j+3))).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                console.log("horizontal win") ;
                reloadWindow(); 
            }

        }
    }
    //computer wins
    for(var i = 1; i < 7; i++){
        for(var j = 1; j < 5; j++){
            if($((".space.row"+i+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+i+".col"+(j+1))).hasClass("computerPiece") &&
            $((".space.row"+i+".col"+(j+2))).hasClass("computerPiece") &&
            $((".space.row"+i+".col"+(j+3))).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("Computer Wins!");
                console.log("horizontal win");
                reloadWindow();   
            }

        }
    }
    //vertical win
    //you win
    for(var i = 1; i < 4; i++){
        for(var j = 1; j < 8; j++){
            if($((".space.row"+i+".col"+j)).hasClass("new") &&
            $((".space.row"+(i+1)+".col"+j)).hasClass("new") &&
            $((".space.row"+(i+2)+".col"+j)).hasClass("new") &&
            $((".space.row"+(i+3)+".col"+j)).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                console.log("vertical win");
                reloadWindow();   
            }

        }
    }
    //computer wins
    for(var i = 1; i < 4; i++){
        for(var j = 1; j < 8; j++){
            if($((".space.row"+i+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+(i+1)+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+(i+2)+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+(i+3)+".col"+j)).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("Computer Wins!");
                console.log("vertical win");
                reloadWindow();   
            }

        }
    }


    //forward slash win
    //you win
    for(var i = 1; i < 8; i++){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+i+".col"+j)).hasClass("new") &&
            $((".space.row"+(i+1)+".col"+(j+1))).hasClass("new") &&
            $((".space.row"+(i+2)+".col"+(j+2))).hasClass("new") &&
            $((".space.row"+(i+3)+".col"+(j+3))).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                console.log("forward slash win") ;
                reloadWindow(); 
            }

        }
    }
    //computer wins
    for(var i = 1; i < 8; i++){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+i+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+(i+1)+".col"+(j+1))).hasClass("computerPiece") &&
            $((".space.row"+(i+2)+".col"+(j+2))).hasClass("computerPiece") &&
            $((".space.row"+(i+3)+".col"+(j+3))).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("Computer Wins!");
                console.log("forward slash win");
                reloadWindow();   
            }

        }
    }

    //backward slash win
    //you win
    for(var i = 8; i > 0; i--){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+i+".col"+j)).hasClass("new") &&
            $((".space.row"+(i-1)+".col"+(j+1))).hasClass("new") &&
            $((".space.row"+(i-2)+".col"+(j+2))).hasClass("new") &&
            $((".space.row"+(i-3)+".col"+(j+3))).hasClass("new")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                console.log("backward slash win") ;
                reloadWindow(); 
            }

        }
    }
    //computer wins
    for(var i = 8; i > 0; i--){
        for(var j = 1; j < 7; j++){
            if($((".space.row"+i+".col"+j)).hasClass("computerPiece") &&
            $((".space.row"+(i-1)+".col"+(j+1))).hasClass("computerPiece") &&
            $((".space.row"+(i-2)+".col"+(j+2))).hasClass("computerPiece") &&
            $((".space.row"+(i-3)+".col"+(j+3))).hasClass("computerPiece")){
                $("h1").addClass("end");
                $("h1").text("You Win!"); 
                console.log("backward slash win") ;
                reloadWindow(); 
            }

        }
    }

}

function reloadWindow(){
    setTimeout(function() {
        window.location.reload();
     }, 5000);
}


    




    
    
  
        
    







