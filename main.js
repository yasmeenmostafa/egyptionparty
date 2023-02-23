$(".name").click(function () {
    $(this).next().slideToggle(500)
})
let aboutoffset = $(".sidebtn").offset().top;
$(window).scroll(function () {
    let windowscroll = $(window).scrollTop();
    if (windowscroll > aboutoffset - 70) {
        $(".sidebtn").css("color", "transparent")
    }
    else {
        $(".sidebtn").css("color", "white")
    }
})
$(".sidebtn").click(function () {
    console.log("fffffff")
    let width = $(".sidelist").outerWidth(true)
    if ($(".sidebar").css("left") === "0px")
        $(".sidebar").animate({ left: -width }, 500)
    else
        $(".sidebar").animate({ left: "0px" }, 500)
})
let max = 100;
$("#textarea").keydown(function () {
    console.log("jjjjjjjjjjj")
    let lenght = $(this).val().length
    console.log(lenght)
    if(max == 0){
    $(".lenght").html("your available character finished")
            }
    else if (max <= 100) {
        max = max - 1;
        console.log(max)

        $(".lenght").html(max)
    }  
    else {
        $(".lenght").html("your available character finished")
    }
})
function count (){
    let time= new Date();
    let eventtime= new Date(2022,12,28);
    let date= time.getTime();
    let eventdate= eventtime.getTime();
    let countdate=eventdate-date;
    let s= (Math.floor(countdate/1000));
    let m= (Math.floor(s/60));
    let h= (Math.floor(m/60));
    let d= Math.floor(h/24)-30;
   h=h%24;
   m=m%60;
   s=s%60
    $(".second h3").html(s+" "+"s")
    $(".minute h3").html(m+" "+"m")
    $(".hours h3").html(h+" "+"h")
    $(".days h3").html(d+" "+"D")
    setTimeout(count,1000);
    
}
count()
