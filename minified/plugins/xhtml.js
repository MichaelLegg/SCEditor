/* SCEditor v1.4.5 | (C) 2011-2013, Sam Clarke | sceditor.com/license */
!function(a){"use strict";a.sceditor.XHTMLSerializer=function(){var b,c,d,e,f,g,h,i,j,k,l=this,m={indentStr:"	"},n=[],o=0;b=function(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return a?a.replace(/[&<>"]/g,function(a){return b[a]||a}):""},c=function(a){return a.replace(/[\r\n]/,"").replace(/[^\S|\u00A0]+/g," ")},l.serialize=function(a,b){if(n=[],b)for(a=a.firstChild;a;)d(a),a=a.nextSibling;else d(a);return n.join("")},d=function(a,b){switch(a.nodeType){case 1:var c=a.nodeName.toLowerCase();"!"===c?h(a):f(a,b);break;case 3:i(a,b);break;case 4:g(a);break;case 8:h(a);break;case 9:case 11:e(a);break;case 2:case 5:case 6:case 7:case 10:case 12:}},e=function(a){var b;for(b=a.firstChild;b;)d(b),b=b.nextSibling},f=function(c,e){var f,g,h,i=c.nodeName.toLowerCase(),l=c.attributes.length,m=e||/pre(?:\-wrap)?$/i.test(a(c).css("whiteSpace")),n=!c.firstChild&&a.sceditor.XHTMLSerializer.emptyTags.indexOf("|"+i+"|")>-1;if(!a(c).hasClass("sceditor-ignore")){for(j("<"+i,!e&&k(c));l--;)g=c.attributes[l],(!a.sceditor.ie||g.specified)&&(h=a.sceditor.ie<8&&/style/i.test(g.name)?c.style.cssText:g.value,j(" "+g.name.toLowerCase()+'="'+b(h)+'"',!1));for(j(n?" />":">",!1),f=c.firstChild;f;)o++,d(f,m),f=f.nextSibling,o--;n||j("</"+i+">",!m&&k(c)&&c.firstChild&&k(c.firstChild))}},g=function(a){j("<![CDATA["+b(a.nodeValue)+"]]>")},h=function(a){j("<!-- "+b(a.nodeValue)+" -->")},i=function(a,d){var e=a.nodeValue;d||(e=c(e)),e&&j(b(e),!d&&k(a))},j=function(a,b){var c=o;if(b!==!1)for(n.length&&n.push("\n");c--;)n.push(m.indentStr);n.push(a)},k=function(b){var c=b.previousSibling;return 1!==b.nodeType&&c?!a.sceditor.dom.isInline(c):c||a.sceditor.dom.isInline(b.parentNode)?!a.sceditor.dom.isInline(b):!0}},a.sceditor.XHTMLSerializer.emptyTags="|area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param|command|embed|keygen|source|track|wbr|",a.sceditor.plugins.xhtml=function(){var b,c,d,e,f,g,h,i=this,j={},k={};i.init=function(){a.isEmptyObject(a.sceditor.plugins.xhtml.converters||{})||a.each(a.sceditor.plugins.xhtml.converters,function(b,c){a.each(c.tags,function(a){j[a]||(j[a]=[]),j[a].push(c)})}),b(this)},b=function(b){var c={bold:{txtExec:["<strong>","</strong>"]},italic:{txtExec:["<em>","</em>"]},underline:{txtExec:['<span style="text-decoration: underline;">',"<span>"]},strike:{txtExec:['<span style="text-decoration: line-through;">',"<span>"]},subscript:{txtExec:["<sub>","</sub>"]},superscript:{txtExec:["<sup>","</sup>"]},left:{txtExec:['<div style="text-align: left;">',"<div>"]},center:{txtExec:['<div style="text-align: center;">',"<div>"]},right:{txtExec:['<div style="text-align: right;">',"<div>"]},justify:{txtExec:['<div style="text-align: justify;">',"<div>"]},font:{txtExec:function(b){var c=this;a.sceditor.command.get("font")._dropDown(c,b,function(a){c.insertText('<span style="font-family: '+a+';">',"</span>")})}},size:{txtExec:function(b){var c=this;a.sceditor.command.get("size")._dropDown(c,b,function(a){c.insertText('<span style="font-size: '+a+';">',"</span>")})}},color:{txtExec:function(b){var c=this;a.sceditor.command.get("color")._dropDown(c,b,function(a){c.insertText('<span style="color: '+a+';">',"</span>")})}},bulletlist:{txtExec:["<ul><li>","</li></ul>"]},orderedlist:{txtExec:["<ol><li>","</li></ol>"]},table:{txtExec:["<table><tr><td>","</td></tr></table>"]},horizontalrule:{txtExec:["<hr />"]},code:{txtExec:["<code>","</code>"]},image:{txtExec:function(a,b){var c=prompt(this._("Enter the image URL:"),b);c&&this.insertText('<img src="'+c+'" />')}},email:{txtExec:function(a,b){var c=b&&b.indexOf("@")>-1?null:b,d=prompt(this._("Enter the e-mail address:"),c?"":b),e=prompt(this._("Enter the displayed text:"),c||d)||d;d&&this.insertText('<a href="mailto:'+d+'">'+e+"</a>")}},link:{txtExec:function(a,b){var c=b&&b.indexOf("http://")>-1?null:b,d=prompt(this._("Enter URL:"),c?"http://":b),e=prompt(this._("Enter the displayed text:"),c||d)||d;d&&this.insertText('<a href="'+d+'">'+e+"</a>")}},quote:{txtExec:["<blockquote>","</blockquote>"]},youtube:{txtExec:function(b){var c=this;a.sceditor.command.get("youtube")._dropDown(c,b,function(a){c.insertText('<iframe width="560" height="315" src="http://www.youtube.com/embed/{id}?wmode=opaque" data-youtube-id="'+a+'" frameborder="0" allowfullscreen></iframe>')})}},rtl:{txtExec:['<div stlye="direction: rtl;">',"</div>"]},ltr:{txtExec:['<div stlye="direction: ltr;">',"</div>"]}};b.commands=a.extend(!0,{},c,b.commands)},i.signalToSource=function(b,d){return d=d.jquery?d[0]:d,c(d),f(d),h(d),(new a.sceditor.XHTMLSerializer).serialize(d,!0)},i.signalToWysiwyg=function(a){return a},i.convertTagTo=a.sceditor.dom.convertElement,d=function(b,c,d){j[b]&&a.each(j[b],function(e,f){f.tags[b]?a.each(f.tags[b],function(b,e){d.getAttributeNode&&(b=d.getAttributeNode(b),!b||a.sceditor.ie<8&&!b.specified||e&&a.inArray(b.value,e)<0||f.conv.call(i,d,c))}):f.conv&&f.conv.call(i,d,c)})},c=function(b){j&&a.sceditor.dom.traverse(b,function(b){var c=a(b),e=b.nodeName.toLowerCase();j&&(d("*",c,b),d(e,c,b))},!0)},e=function(b,c){var d=b.childNodes,f=b.nodeName.toLowerCase(),g=b.nodeValue,h=d.length;if(c&&"br"===f)return!0;if(a.sceditor.XHTMLSerializer.emptyTags.indexOf("|"+f+"|")>-1)return!1;if(g&&/\S|\u00A0/.test(g))return!1;for(;h--;)if(!e(d[h],!b.previousSibling&&!b.nextSibling))return!1;return!0},f=function(b){a.sceditor.dom.traverse(b,function(b){var c,d=e(b),f=b.nodeName.toLowerCase(),g=b.parentNode,h=b.nodeType,i=a.sceditor.plugins.xhtml.allowedTags,j=a.sceditor.plugins.xhtml.disallowedTags;if(3!==h&&(4===h?f="!cdata":("!"===f||8===h)&&(f="!comment"),d?c=!0:i&&i.length?c=a.inArray(f,i)<0:j&&j.length&&(c=a.inArray(f,j)>-1),c)){for(;!d&&b.lastChild;)g.insertBefore(b.lastChild,b.nextSibling);g.removeChild(b)}},!0)},g=function(b,c){var d={};return b&&a.extend(d,b),c?(a.each(c,function(b,c){a.isArray(c)?d[b]=a.merge(d[b]||[],c):d[b]||(d[b]=null)}),d):d},h=function(b){var c,d,e,f,h,i,j=a.sceditor.plugins.xhtml.allowedAttribs,l=j&&!a.isEmptyObject(j),m=a.sceditor.plugins.xhtml.disallowedAttribs,n=m&&!a.isEmptyObject(m);k={},a.sceditor.dom.traverse(b,function(b){if(b.attributes&&(c=b.nodeName.toLowerCase(),f=b.attributes.length))for(k[c]||(k[c]=l?g(j["*"],j[c]):g(m["*"],m[c]));f--;)d=b.attributes[f],e=d.name,h=k[c][e],i=!1,l?i=null!==h&&(!a.isArray(h)||a.inArray(d.value,h)<0):n&&(i=null===h||a.isArray(h)&&a.inArray(d.value,h)>-1),i&&b.removeAttribute(e)})}},a.sceditor.plugins.xhtml.converters=[{tags:{"*":{width:null}},conv:function(a,b){b.css("width",b.attr("width")).removeAttr("width")}},{tags:{"*":{height:null}},conv:function(a,b){b.css("height",b.attr("height")).removeAttr("height")}},{tags:{li:{value:null}},conv:function(a,b){b.removeAttr("value")}},{tags:{"*":{text:null}},conv:function(a,b){b.css("color",b.attr("text")).removeAttr("text")}},{tags:{"*":{color:null}},conv:function(a,b){b.css("color",b.attr("color")).removeAttr("color")}},{tags:{"*":{face:null}},conv:function(a,b){b.css("fontFamily",b.attr("face")).removeAttr("face")}},{tags:{"*":{align:null}},conv:function(a,b){b.css("textAlign",b.attr("align")).removeAttr("align")}},{tags:{"*":{border:null}},conv:function(a,b){b.css("borderWidth",b.attr("border")).removeAttr("border")}},{tags:{applet:{name:null},img:{name:null},layer:{name:null},map:{name:null},object:{name:null},param:{name:null}},conv:function(a,b){b.attr("id")||b.attr("id",b.attr("name")),b.removeAttr("name")}},{tags:{"*":{vspace:null}},conv:function(a,b){b.css("marginTop",b.attr("vspace")-0).css("marginBottom",b.attr("vspace")-0).removeAttr("vspace")}},{tags:{"*":{hspace:null}},conv:function(a,b){b.css("marginLeft",b.attr("hspace")-0).css("marginRight",b.attr("hspace")-0).removeAttr("hspace")}},{tags:{hr:{noshade:null}},conv:function(a,b){b.css("borderStyle","solid").removeAttr("noshade")}},{tags:{"*":{nowrap:null}},conv:function(a,b){b.css("white-space","nowrap").removeAttr("nowrap")}},{tags:{big:null},conv:function(b){a(this.convertTagTo(b,"span")).css("fontSize","larger")}},{tags:{small:null},conv:function(b){a(this.convertTagTo(b,"span")).css("fontSize","smaller")}},{tags:{b:null},conv:function(b){a(this.convertTagTo(b,"strong"))}},{tags:{u:null},conv:function(b){a(this.convertTagTo(b,"span")).css("textDecoration","underline")}},{tags:{i:null},conv:function(b){a(this.convertTagTo(b,"em"))}},{tags:{s:null,strike:null},conv:function(b){a(this.convertTagTo(b,"span")).css("textDecoration","line-through")}},{tags:{dir:null},conv:function(a){this.convertTagTo(a,"ul")}},{tags:{center:null},conv:function(b){a(this.convertTagTo(b,"div")).css("textAlign","center")}},{tags:{font:{size:null}},conv:function(a,b){b.css("fontSize",b.css("fontSize")).removeAttr("size")}},{tags:{font:null},conv:function(a){this.convertTagTo(a,"span")}},{tags:{"*":{type:["_moz"]}},conv:function(a,b){b.removeAttr("type")}},{tags:{"*":{_moz_dirty:null}},conv:function(a,b){b.removeAttr("_moz_dirty")}},{tags:{"*":{_moz_editor_bogus_node:null}},conv:function(a,b){b.remove()}}],a.sceditor.plugins.xhtml.allowedAttribs={},a.sceditor.plugins.xhtml.disallowedAttribs={},a.sceditor.plugins.xhtml.allowedTags=[],a.sceditor.plugins.xhtml.disallowedTags=[]}(jQuery);