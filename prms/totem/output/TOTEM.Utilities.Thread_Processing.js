Ext.data.JsonP.TOTEM_Utilities_Thread_Processing({"tagname":"class","name":"TOTEM.Utilities.Thread_Processing","autodetected":{},"files":[{"filename":"totem.js","href":"totem.html#TOTEM-Utilities-Thread_Processing"}],"members":[{"name":"conThread","tagname":"method","owner":"TOTEM.Utilities.Thread_Processing","id":"method-conThread","meta":{"private":true}},{"name":"sesThread","tagname":"method","owner":"TOTEM.Utilities.Thread_Processing","id":"method-sesThread","meta":{}},{"name":"startSession","tagname":"method","owner":"TOTEM.Utilities.Thread_Processing","id":"method-startSession","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-TOTEM.Utilities.Thread_Processing","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/totem.html#TOTEM-Utilities-Thread_Processing' target='_blank'>totem.js</a></div></pre><div class='doc-contents'><p>sql and session thread processing</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-conThread' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.Thread_Processing'>TOTEM.Utilities.Thread_Processing</span><br/><a href='source/totem.html#TOTEM-Utilities-Thread_Processing-method-conThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.Thread_Processing-method-conThread' class='name expandable'>conThread</a>( <span class='pre'>req, res</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Start a session by attaching sql, cert, client, profile and session info to this request req with callback res(error). ...</div><div class='long'><p>Start a session by attaching sql, cert, client, profile and session info to this request req with callback res(error).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>req</span> : Object<div class='sub-desc'><p>request</p>\n</div></li><li><span class='pre'>res</span> : Function<div class='sub-desc'><p>response</p>\n</div></li></ul></div></div></div><div id='method-sesThread' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.Thread_Processing'>TOTEM.Utilities.Thread_Processing</span><br/><a href='source/totem.html#TOTEM-Utilities-Thread_Processing-method-sesThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.Thread_Processing-method-sesThread' class='name expandable'>sesThread</a>( <span class='pre'>Req, Res</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a HTTP/HTTPS request-repsonse session thread, then uses the byTable, byArea,\nbyType, byActionTable config to ...</div><div class='long'><p>Creates a HTTP/HTTPS request-repsonse session thread, then uses the byTable, byArea,\nbyType, byActionTable config to route this thread to the appropriate (req,res)-endpoint.\nThe newly formed request req contains:</p>\n\n<pre><code>    method: \"GET, ... \"         // http method and its ...\n    action: \"select, ...\",      // corresponding crude name\n    socketio: \"path\"  // filepath to client's socketio.js\n    where: {...},       // sql-ized query keys from url\n    body: {...},        // body keys from request \n    flags: {...},       // flag keys from url\n    index: {...}        // sql-ized index keys from url\n    query: {...},       // raw keys from url\n    files: [...]        // files uploaded\n    site: {...}         // skinning context keys\n    sql: connector      // sql database connector (dummy if no mysql config)\n    url : \"url\"             // complete \"/area/.../name.type?query\" url\n    search: \"query\"     // query part\n    path: \"/...\"            // path part \n    filearea: \"area\"        // area part\n    filename: \"name\"    // name part\n    type: \"type\"            // type part \n    connection: socket      // http/https socket to retrieve client cert \n</code></pre>\n\n<p>The newly formed response res method accepts a string, an objects, an array, an error, or\na file-cache function to appropriately respond and close this thread and its sql connection.<br/>\nThe session is validated and logged, and the client is challenged as necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Req</span> : Object<div class='sub-desc'><p>http/https request</p>\n</div></li><li><span class='pre'>Res</span> : Object<div class='sub-desc'><p>http/https response</p>\n</div></li></ul></div></div></div><div id='method-startSession' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.Thread_Processing'>TOTEM.Utilities.Thread_Processing</span><br/><a href='source/totem.html#TOTEM-Utilities-Thread_Processing-method-startSession' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.Thread_Processing-method-startSession' class='name expandable'>startSession</a>( <span class='pre'>callback</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Start session and protect from denial of service attacks. ...</div><div class='long'><p>Start session and protect from denial of service attacks.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>() when completed</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});