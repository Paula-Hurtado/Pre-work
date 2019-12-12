let toogle = true

$('#sidebar').toggleClass('active');
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

function helloMessage(){
    if(toogle){
        $('#helloMessage').fadeIn() 
        
    } else{
        $('#helloMessage').fadeOut()
    }
    toogle = !toogle
}