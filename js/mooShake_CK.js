/**
 * Classe Mootools pour effet MooShake
 * @copyright	Copyright (C) 2010 Cédric KEIFLIN alias ced1870
 * http://www.ck-web-creation-alsace.com
 * http://www.joomlack.fr.nf
 * @license		GNU/GPL
 * */
var MooShake_ck=new Class({Implements:Options,options:{mooDuree:100,decalage:10},initialize:function(t,e){this.setOptions(e);var o=this.options.mooDuree,n=this.options.decalage;t.each((function(t){t.addEvent("mouseover",(function(t){var e=this.getCoordinates(),i=(e.top,e.left-n),a=this.clone().setStyles(e).setStyles({position:"absolute"}).inject(document.body);this.setStyle("opacity",0);var s=new Fx.Morph(a,{duration:o,wait:!1});s.start({left:i});var p=new Fx.Morph(a,{duration:o,wait:!1}),m=new Fx.Morph(a,{duration:o,wait:!1});animComp=function(){p.start({left:e.left+10})},s.addEvent("onComplete",animComp.bind(this)),animComp2=function(){m.start({left:e.left})},p.addEvent("onComplete",animComp2.bind(this)),animComp3=function(){a.destroy(),this.setStyle("opacity",1)},m.addEvent("onComplete",animComp3.bind(this))}))}))}});MooShake_ck.implement(new Options);