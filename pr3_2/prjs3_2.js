// JavaScript source code
var myheading = "<h1>This is my WebPage</h1>",
    linktag = "<a href=\"http://www.webxpertz.net\">Web Site Link!</a>",
    sometext = "This text can be affected by other",
    begineffect = "<em>",
    endeffect = "</em>",
    beginpara = "<p>",
    endpara = "</p>";

document.writeln(myheading);
document.writeln(begineffect + sometext + endeffect);
document.writeln(beginpara + linktag + endpara);

