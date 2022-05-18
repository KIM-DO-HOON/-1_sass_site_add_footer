'use strict'
$(function(){
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));
  /*
  #lnb의 메뉴와 같은 서브페이지의 주소값을
  매칭하여 해당 메뉴에 on class 추가
  */
  let currentHref = $(location).attr("href").split("/");
  currentHref = currentHref[currentHref.length-1];
  currentHref = currentHref.split(".")[0];
  // console.log(currentHref);

  $("#lnb a").each(function(){
    let matchHref = $(this).attr("href").split("/");
    matchHref = matchHref[matchHref.length-1].split(".");
    matchHref = matchHref[0];
    // console.log(matchHref[0]);
    // console.log(matchHref[0] == currentHref);
    // console.log($(this).text() == currentHref);
    if (matchHref == currentHref) {
      $(this).addClass("on")
    }
  });

  /*
  location href split 코드 함수화
  */
  // function splitlocation(el) {
  //   let href = el.attr("href").split("/");
  //   href = href[href.length-1].split(".");
  //   href = href[0];
  //   return href;
  // }
  //
  // let currentHref = splitlocation($(location))
  // $("#lnb a").each(function(){
  //   if (splitlocation($(this)) == currentHref) {
  //     $(this).addClass("on")
  //   }
  // })
})
