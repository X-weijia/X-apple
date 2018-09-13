$(function() {
    $(".icon-yunsuan-dengyu").click(function() {
        $(".min_box").slideDown();
        $(".icon-yunsuan-dengyu").css("display","none");
    })
    $(".icon-cuohao").click(function() {
        $(".min_box").slideUp();
        $(".icon-yunsuan-dengyu").css("display","block");
    })
    //搜索框获取焦点时下拉框
    $(".search input").focus(function() {
        $(".min_box .sea").slideDown();
        $(".min_box .s_down").css("display","none");
    })
    $(".search input").blur(function() {
        $(".min_box .sea").css("display","none");
        $(".min_box .s_down").css("display","block");
    })
    //底部点击下拉框
    $(".min_nav .navlist").each(function(index,d){
        $(".min_nav .navlist").eq(index).click(function(event) {
            $(".f_n_list").eq(index).toggle("slow");
        });
    })
})