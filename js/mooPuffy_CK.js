/**
 * Classe Mootools pour effet Moopuffy
 * @copyright	Copyright (C) 2010 Cédric KEIFLIN alias ced1870
 * http://www.ck-web-creation-alsace.com
 * http://www.joomlack.fr.nf
 * @license		GNU/GPL
 * */
var Moopuffy_ck=new Class({Implements:Options,options:{mooDuree:500,ratio:1.3},initialize:function(t,o){this.setOptions(o);var i=this.options.mooDuree,e=this.options.ratio;t.each((function(t){t.addEvent("mouseover",(function(t){var o=this.getCoordinates(),s=this.offsetWidth*e,n=this.offsetHeight*e,f=o.top-(n-this.offsetHeight)/2,p=o.left-(s-this.offsetWidth)/2,a=this.clone().setStyles(o).setStyles({opacity:.7,position:"absolute"}).addEvent("emptydrop",(function(){this.destroy()})).inject(document.body),h=new Fx.Morph(a,{duration:i,wait:!1});h.start({width:s,height:n,top:f,left:p,opacity:0}),animCompPuffy=function(){a.destroy()},h.addEvent("onComplete",animCompPuffy.bind(this))}))}))}});Moopuffy_ck.implement(new Options);