!function(){for(var e=document.querySelectorAll(".monitors.has-children > .monitors-header"),t=0;t<e.length;++t)e[t].addEventListener("click",function(e){var t=this.parentNode,n=t.classList,o=t.querySelector(".monitors-content-wrap");n.contains("open")?(n.remove("open"),o.style.maxHeight=0):(n.add("open"),o.style.maxHeight=t.querySelector(".monitors-content").clientHeight+"px")})}();