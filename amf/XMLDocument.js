function XMLDocument(source)
{
    this._xml = (source!=undefined?source:"")+"";
    if(this._xml.length == 0)
    {
        this._xml = "<root />";
    }
}
var p = XMLDocument.prototype;
p.toString = function()
{
    return this._xml;
}
module.exports = XMLDocument;