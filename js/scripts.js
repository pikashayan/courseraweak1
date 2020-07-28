            //Changing Carousel Interval 
            $(document).ready(function(){
                $('#mycarousel').carousel({
                    interval: 500
                })
                //Adding Pause Button Properties
                $("#carouselButton").click(function(){
                    if($('#carouselButton').children('span').hasClass('fa-pause'))
                    {
                        $("#mycarousel").carousel('pause');
                        $('#carouselButton').children('span').removeClass('fa-pause');
                        $('#carouselButton').children('span').addClass('fa-play');
                    }
                    else
                    {
                        $("#mycarousel").carousel('cycle');
                        $('#carouselButton').children('span').removeClass('fa-play');
                        $('#carouselButton').children('span').addClass('fa-pause');
                    }
                    
                });
                $('#reserveTable').click(function(){
                    $('#reservemodal').modal('toggle');
                });
                $('#LogIn').click(function(){
                    $('#loginModal').modal('toggle');
                });
            });