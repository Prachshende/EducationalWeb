function saveIt(e){var t=document.id(e).style.display;if(t)if(Browser.Features.localstorage)try{localStorage[e]=t}catch(e){}else Cookie.write(e,t,{duration:7});else alert("No cookie available")}function readIt(e){return Browser.Features.localstorage?localStorage[e]:Cookie.read(e)}function wrapperwidth(e){document.id("wrapper").setStyle("width",e)}function auf(e){var t=document.id(e);"none"==t.style.display?(t.setStyle("display","block"),t.setProperty("aria-expanded","true"),"right"!=e&&(t.slide("hide").slide("in"),t.getParent().setProperty("class","slide"),eltern=t.getParent().getParent(),elternh=eltern.getElement("h3"),elternh.addClass("high"),elternbild=eltern.getElement("img"),t.focus(),elternbild.setProperties({alt:altopen,src:bildzu})),"right"==e&&(document.id("right").setStyle("display","block"),wrapperwidth(small),document.id("nav").removeClass("leftbigger"),grafik=document.id("bild"),document.id("bild").innerHTML=rightclose,grafik.focus())):(t.setStyle("display","none"),t.setProperty("aria-expanded","false"),t.removeClass("open"),"right"!=e&&(eltern=t.getParent().getParent(),elternh=eltern.getElement("h3"),elternh.removeClass("high"),elternbild=eltern.getElement("img"),elternbild.setProperties({alt:altclose,src:bildauf}),elternbild.focus()),"right"==e&&(document.id("right").setStyle("display","none"),wrapperwidth(big),document.id("nav").addClass("leftbigger"),grafik=document.id("bild"),grafik.innerHTML=rightopen,grafik.focus())),saveIt(e)}function tabshow(e){var t=document.id(e),r=t.getParent();r=r.getProperty("id");var d=document.id(r).getElements("div.tabcontent"),a=document.id(r).getElement("ul.tabs");a.getElements("a").setProperty("aria-selected","false"),d.each((function(e){e.addClass("tabclosed").removeClass("tabopen"),e.setProperty("aria-hidden","true"),e.setProperty("aria-expanded","false")})),t.addClass("tabopen").removeClass("tabclosed"),t.setProperty("aria-hidden","false"),t.setProperty("aria-expanded","true"),t.focus();var n="link_"+e.split("_")[1];document.id(n).setProperty("aria-selected","true"),a.getElements("a").addClass("linkclosed").removeClass("linkopen"),document.id(n).addClass("linkopen").removeClass("linkclosed")}function nexttab(e){for(var t=document.id(e).getParent().getElement("ul.tabs"),r="link_"+e.split("_")[1],d=(document.id(r).getProperty("aria-selected"),t.getElements("a").getProperty("id")),a=0;a<d.length;a++)if(d[a]==r&&null!=document.id(d[a+1])){document.id(d[a+1]).onclick();break}}Object.append(Browser.Features,{localstorage:"localStorage"in window&&null!==window.localStorage}),window.addEvent("domready",(function(){document.id("nav")&&document.id("nav").setProperties({role:"navigation"}),document.id("mod-search-searchword")&&document.id(document.id("mod-search-searchword").form).set({role:"search"}),document.id("main")&&document.id("main").setProperties({role:"main"}),document.id("right")&&document.id("right").setProperties({role:"contentinfo"})})),window.addEvent("domready",(function(){document.id(document.body).getElements("a.opencloselink").each((function(e){e.setProperty("role","tab");var t=e.getProperty("id");t="module_"+(t=t.split("_"))[1],document.id(e).setProperty("aria-controls",t)})),document.id(document.body).getElements("div.moduletable_js").each((function(e){if(e.getElement("div.module_content")){var t=e.getElement("div.module_content");t.setProperty("role","tabpanel");var r=t.getProperty("id");r="link_"+(r=r.split("_"))[1],t.setProperty("aria-labelledby",r);var d=t.get("class").split(" "),a=t.getElement("a.active"),n=t.id,o=readIt(n);if(a||"open"==d[1]&&null==o){t.setStyle("display","block");(l=t.getParent()).getElement("h3");(i=l.getElement("img")).setProperties({alt:altopen,src:bildzu}),i.focus()}else t.setStyle("display","none"),t.setProperty("aria-expanded","false");if("block"==readIt(n=t.id)){t.setStyle("display","block"),t.setProperty("aria-expanded","true"),t.slide("show"),t.getParent().setProperty("class","slide");var l,i;(l=t.getParent().getParent()).getElement("h3");(i=l.getElement("img")).setProperties({alt:altopen,src:bildzu})}}}))})),window.addEvent("domready",(function(){var e=document.id("right");if(null!=e&&"none"==readIt(e.id)){e.setStyle("display","none"),document.id("nav").addClass("leftbigger"),wrapperwidth(big);var t=document.id("bild");t.innerHTML=rightopen,t.focus()}})),window.addEvent("domready",(function(){var e=document.id(document.body).getElements("div.tabcontent"),t=document.id(document.body).getElements("div.tabouter");t=t.getProperty("id");for(var r=0;r<t.length;r++)e=document.id(t[r]).getElements("div.tabcontent"),count=0,e.each((function(e){count++;var t=document.id(e);t.setProperty("role","tabpanel"),t.setProperty("aria-hidden","false"),t.setProperty("aria-expanded","true"),elid=t.getProperty("id"),elid=elid.split("_"),elid="link_"+elid[1],t.setProperty("aria-labelledby",elid),1!=count&&(t.addClass("tabclosed").removeClass("tabopen"),t.setProperty("aria-hidden","true"),t.setProperty("aria-expanded","false"))})),countankers=0,allankers=document.id(t[r]).getElement("ul.tabs").getElements("a"),allankers.each((function(e){countankers++;var t=document.id(e);t.setProperty("aria-selected","true"),t.setProperty("role","tab"),linkid=t.getProperty("id"),moduleid=linkid.split("_"),moduleid="module_"+moduleid[1],t.setProperty("aria-controls",moduleid),1!=countankers&&(t.addClass("linkclosed").removeClass("linkopen"),t.setProperty("aria-selected","false"))}))}));