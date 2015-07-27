    $(document).ready(function() {
        $('.bxslider').bxSlider({
            nextSelector: '#next-btn',
            prevSelector: '#prev-btn',
            nextText: ' <div class="next arrow"></div>',
            prevText: '<div class="prev arrow" ></div>'
        });
        $('#myName').fitText(0.5, { minFontSize: '20px', maxFontSize: '100px'});
        $("#myDesc").fitText(1, { minFontSize: '20px', maxFontSize: '50px'});
    });
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-55834517-1', 'auto');
    ga('send', 'pageview');

