/**
 * Classe Mootools pour effet Mooopacite
 * @copyright	Copyright (C) 2010 Cédric KEIFLIN alias ced1870
 * http://www.ck-web-creation-alsace.com
 * http://www.joomlack.fr.nf
 * @license		GNU/GPL
 * */
var mooOpacite_ck=new Class({Implements:Options,options:{mooDuree1:500,mooDuree2:500,opacite:.5},initialize:function(o,t){this.setOptions(t);var e=this.options.mooDuree1,i=this.options.mooDuree2,n=this.options.opacite;o.each((function(o){var t=new Fx.Morph(o,{duration:e,wait:!1}),a=new Fx.Morph(o,{duration:i,wait:!1});o.addEvent("mouseenter",(function(){t.start({opacity:n}),a.stop()})),o.addEvent("mouseleave",(function(){a.start({opacity:1}),t.stop()}))}))}});mooOpacite_ck.implement(new Options);