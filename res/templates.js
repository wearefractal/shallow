var templates = {};
templates.document = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b(_.t(_.f("html",c,p,0)));_.b("\n" + i);_.b("<div id=\"footer\">");_.b("\n" + i);_.b(" Powered by <a href=\"http://substance.io\">Substance</a>.");_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.documents = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("posts",c,p,1),c,p,0,10,312,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <a class=\"load-document\" href=\"#");_.b(_.v(_.f("name",c,p,0)));_.b("\">");_.b("\n" + i);_.b("   <div id=\"");_.b(_.v(_.f("name",c,p,0)));_.b("\" class=\"document\">");_.b("\n" + i);_.b("     <!-- <img class=\"preview\" height=\"60\" src=\"");_.b(_.v(_.f("cover",c,p,0)));_.b("\" /> -->");_.b("\n" + i);_.b("     <div class=\"title\">");_.b(_.v(_.f("title",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("     <div class=\"published\">");_.b(_.v(_.f("timeago",c,p,0)));_.b("</div>");_.b("\n" + i);_.b("     <div class=\"teaser\">");_.b(_.v(_.f("views",c,p,0)));_.b(" views</div>");_.b("\n" + i);_.b("   </div>");_.b("\n" + i);_.b("  </a>");_.b("\n");});c.pop();}if(!_.s(_.f("posts",c,p,1),c,p,1,0,0,"")){_.b("No posts");};return _.fl();;});
templates.header = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"title\">");_.b(_.v(_.f("name",c,p,0)));_.b("</div>");_.b("\n" + i);_.b(" <div class=\"subtitle\">");_.b(_.v(_.f("subtitle",c,p,0)));_.b("</div>");_.b("\n" + i);_.b(" <div id=\"avatar\">");_.b("\n" + i);_.b("   <img height=\"125\" src=\"http://substance.io/avatar/");_.b(_.v(_.f("substance",c,p,0)));_.b("/125\" />");_.b("\n" + i);_.b(" </div>");_.b("\n" + i);_.b(" <div class=\"channel\"></div>");_.b("\n" + i);_.b(" <div id=\"navigation\">");_.b("\n" + i);_.b("   <div class=\"toggle home\">");_.b("\n" + i);_.b("     <div class=\"navitem\">");_.b("\n" + i);_.b("       <a href=\"http://github.com/");_.b(_.v(_.f("github",c,p,0)));_.b("\">Projects</a>");_.b("\n" + i);_.b("     </div>");_.b("\n" + i);_.b("   </div>");_.b("\n" + i);_.b("   <div class=\"toggle home\">");_.b("\n" + i);_.b("     <div class=\"navitem\">");_.b("\n" + i);_.b("       <a href=\"http://twitter.com/");_.b(_.v(_.f("twitter",c,p,0)));_.b("\">Twitter</a>");_.b("\n" + i);_.b("     </div>");_.b("\n" + i);_.b("   </div>");_.b("\n" + i);_.b(" </div>");_.b("\n" + i);_.b("</div>");return _.fl();;});
var blog_templates = templates;
