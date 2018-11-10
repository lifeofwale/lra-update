
$(document).ready(function(){
        $("#show_hide_password a").on('click', function(event) {
                event.preventDefault();
                if($('#show_hide_password input').attr("type") == "text"){
                    $('#show_hide_password input').attr('type', 'password');
                    $('#show_hide_password i').addClass( "fa-eye-slash" );
                    $('#show_hide_password i').removeClass( "fa-eye" );
                }else if($('#show_hide_password input').attr("type") == "password"){
                    $('#show_hide_password input').attr('type', 'text');
                    $('#show_hide_password i').removeClass( "fa-eye-slash" );
                    $('#show_hide_password i').addClass( "fa-eye" );
                }
            });
        
            $('.toggle-sidebar').click(function (e) {
                $('.main-sidebar').toggleClass('open');
              });
              
	$('#spin').click(function(){
        $('span.bar1,span.bar2,span.bar3').toggleClass('change');
        $('aside.menu-sidebar').toggleClass('toggleinout');
        $('main').toggleClass('col-lg-10 offset-lg-2 col-md-9 offset-md-3 col-sm-9 offset-sm-3 ').toggleClass('col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0');
	});
});
