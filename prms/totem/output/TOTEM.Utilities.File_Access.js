Ext.data.JsonP.TOTEM_Utilities_File_Access({"tagname":"class","name":"TOTEM.Utilities.File_Access","autodetected":{},"files":[{"filename":"totem.js","href":"totem.html#TOTEM-Utilities-File_Access"}],"members":[{"name":"findFile","tagname":"method","owner":"TOTEM.Utilities.File_Access","id":"method-findFile","meta":{"private":true}},{"name":"getFile","tagname":"method","owner":"TOTEM.Utilities.File_Access","id":"method-getFile","meta":{"private":true}},{"name":"indexFile","tagname":"method","owner":"TOTEM.Utilities.File_Access","id":"method-indexFile","meta":{"private":true}},{"name":"uploadFile","tagname":"method","owner":"TOTEM.Utilities.File_Access","id":"method-uploadFile","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-TOTEM.Utilities.File_Access","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/totem.html#TOTEM-Utilities-File_Access' target='_blank'>totem.js</a></div></pre><div class='doc-contents'><p>File cacheing, indexing and uploading</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-findFile' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.File_Access'>TOTEM.Utilities.File_Access</span><br/><a href='source/totem.html#TOTEM-Utilities-File_Access-method-findFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.File_Access-method-findFile' class='name expandable'>findFile</a>( <span class='pre'>path, cb</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>file path</p>\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>totem response</p>\n</div></li></ul></div></div></div><div id='method-getFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.File_Access'>TOTEM.Utilities.File_Access</span><br/><a href='source/totem.html#TOTEM-Utilities-File_Access-method-getFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.File_Access-method-getFile' class='name expandable'>getFile</a>( <span class='pre'>client, name, cb</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Get (or create if needed) a file with callback cb(fileID, sql) if no errors ...</div><div class='long'><p>Get (or create if needed) a file with callback cb(fileID, sql) if no errors</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>owner of file</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>of file to get/make</p>\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>callback(area, fileID, sql) if no errors</p>\n</div></li></ul></div></div></div><div id='method-indexFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.File_Access'>TOTEM.Utilities.File_Access</span><br/><a href='source/totem.html#TOTEM-Utilities-File_Access-method-indexFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.File_Access-method-indexFile' class='name expandable'>indexFile</a>( <span class='pre'>path, cb</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>file path</p>\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>totem response</p>\n</div></li></ul></div></div></div><div id='method-uploadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TOTEM.Utilities.File_Access'>TOTEM.Utilities.File_Access</span><br/><a href='source/totem.html#TOTEM-Utilities-File_Access-method-uploadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TOTEM.Utilities.File_Access-method-uploadFile' class='name expandable'>uploadFile</a>( <span class='pre'>client, source, sinkPath, tags, cb</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Uploads a source stream srcStream to a target file sinkPath owned by a\nspecified client. ...</div><div class='long'><p>Uploads a source stream srcStream to a target file sinkPath owned by a\nspecified client.  Optional tags are logged with the upload.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>client</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>file owner</p>\n</div></li><li><span class='pre'>source</span> : Stream<div class='sub-desc'><p>stream</p>\n</div></li><li><span class='pre'>sinkPath</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>path to target file</p>\n</div></li><li><span class='pre'>tags</span> : Object<div class='sub-desc'><p>hach of tags to add to file</p>\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>callback(fileID) if no errors encountered</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});