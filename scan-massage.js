//(function () {
//  var script = document.createElement("script");
//  script.type = "text/javascript";
//  script.src  = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
//
//  var config = 'MathJax.Hub.Config({' +
//                 'extensions: ["tex2jax.js"],' +
//                 'jax: ["input/TeX","output/HTML-CSS"]' +
//               '});' +
//               'MathJax.Hub.Startup.onload();entry();';
//
//  if (window.opera) {script.innerHTML = config}
//               else {script.text = config}
//
//  document.getElementsByTagName("head")[0].appendChild(script);
//})();


function entry(){
  MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]} });
  findList();
}

function findList(){
  console.log("in findList");
  var list = document.getElementById("webMessengerRecentMessages")
    if(list){
      var childNodes = list.getElementsByTagName('p');
      if(childNodes){
        for(i=0 ; i<childNodes.length ; i++){
          var elm = childNodes[i]
            if (elm && !elm.doneTag){
              elm.doneTag = 'done';
              MathJax.Hub.Typeset(elm);
              console.log(elm);
            }else{
            }
        }
        console.log("in findNewMsg2");
        setTimeout(findList, 1000);
        return;
      }else{
        console.log("in findNewMsg3");
        setTimeout(findList, 1000);
        return;
      }
    }else{
      setTimeout(findList, 1000);
      return;
    }
}
