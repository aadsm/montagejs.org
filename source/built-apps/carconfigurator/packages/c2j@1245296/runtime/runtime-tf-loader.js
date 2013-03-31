require("runtime/dependencies/gl-matrix");var WebGLTFLoader=require("webgl-tf-loader").WebGLTFLoader,ResourceDescription=require("runtime/resource-description").ResourceDescription,Technique=require("runtime/technique").Technique,Pass=require("runtime/pass").Pass,GLSLProgram=require("runtime/glsl-program").GLSLProgram,Material=require("runtime/material").Material,Mesh=require("runtime/mesh").Mesh,Node=require("runtime/node").Node,Primitive=require("runtime/primitive").Primitive,Projection=require("runtime/projection").Projection,Camera=require("runtime/camera").Camera,Scene=require("runtime/scene").Scene;exports.RuntimeTFLoader=Object.create(WebGLTFLoader,{_scenes:{writable:!0,value:null},handleBuffer:{value:function(e,t,n){var r=Object.create(ResourceDescription).init(e,t);return r.id=e,this.storeEntry(e,r,t),!0}},handleShader:{value:function(e,t,n){var r=Object.create(ResourceDescription).init(e,t);return r.id=e,r.type="shader",this.storeEntry(e,r,t),!0}},handleTechnique:{value:function(e,t,n){var r=Object.create(Technique);r.id=e,this.storeEntry(e,r,t),r.rootPass=Object.create(Pass).init(),r.rootPass.id=e+"_"+i;var i=t.pass,s=t[i],o=this.getEntry(s[GLSLProgram.VERTEX_SHADER]),u=this.getEntry(s[GLSLProgram.FRAGMENT_SHADER]),a={};return a[GLSLProgram.VERTEX_SHADER]=o.entry,a[GLSLProgram.FRAGMENT_SHADER]=u.entry,r.rootPass.program=Object.create(ResourceDescription).init(e+"_"+i+"_program",a),r.rootPass.program.type="program",r.rootPass.states=s.states,!0}},handleMaterial:{value:function(e,t,n){Material.loader=this;var r=Object.create(Material).init(e);this.storeEntry(e,r,t),t.inputs.diffuseTexture&&(t.inputs.diffuseTexture=this.resolvePathIfNeeded(t.inputs.diffuseTexture)),r.inputs=t.inputs,r.name=t.name;var i=this.getEntry(t.technique);return i?(r.technique=i.entry,!0):(console.log("ERROR: invalid file, cannot find referenced technique:"+t.technique),!1)}},handleLight:{value:function(e,t,n){return!0}},handleMesh:{value:function(e,t,n){var r=Object.create(Mesh).init();r.id=e,r.name=t.name,this.storeEntry(e,r,t);var i=t[Mesh.PRIMITIVES];if(!i)return console.log("MISSING_PRIMITIVES for mesh:"+e),!1;for(var s=0;s<i.length;s++){var o=i[s];if(o.primitive==="TRIANGLES"){var u=Object.create(Primitive).init(),a=this.getEntry(o.material);u.material=a.entry,u.mesh=r,r.primitives.push(u);var f=o.vertexAttributes;f.forEach(function(e){var n=e.accessor,r=this.getEntry(n);if(!r){var i=t[n];i.id=n,this.storeEntry(n,i,i);var s=this.getEntry(i.buffer);i.buffer=s.entry,r=this.getEntry(n)}var o=e.set?e.set:"0";u.addVertexAttribute({semantic:e.semantic,set:o,accessor:r.entry})},this);var l=e+"_indices"+"_"+s,c=this.getEntry(l);if(!c){indices=o.indices,indices.id=l;var h=this.getEntry(indices.buffer);indices.buffer=h.entry,this.storeEntry(l,indices,indices),c=this.getEntry(l)}u.indices=c.entry}}return!0}},handleCamera:{value:function(e,t,n){var r=Object.create(Camera).init();r.id=e,this.storeEntry(e,r,t);var i=Object.create(Projection);return i.initWithDescription(t),r.projection=i,!0}},handleLight:{value:function(e,t,n){return!0}},buildNodeHirerachy:{value:function(e){var t=e.entry,n=e.description.children;n&&n.forEach(function(e){var n=this.getEntry(e);t.children.push(n.entry),this.buildNodeHirerachy(n)},this)}},handleScene:{value:function(e,t,n){this._scenes||(this._scenes=[]);if(!t.node)return console.log("ERROR: invalid file required node property is missing from scene"),!1;var r=Object.create(Scene).init();r.id=e,r.name=t.name,this.storeEntry(e,r,t);var i=this.getEntry(t.node);return r.rootNode=i.entry,this._scenes.push(r),this.buildNodeHirerachy(i),!0}},handleNode:{value:function(e,t,n){var r=0,i=this,s=Object.create(Node).init();s.id=e,s.name=t.name,this.storeEntry(e,s,t),s.transform=t.matrix?mat4.create(t.matrix):mat4.identity();var o;t.mesh&&(o=this.getEntry(t.mesh),s.meshes.push(o.entry)),t.meshes&&t.meshes.forEach(function(e){o=this.getEntry(e),s.meshes.push(o.entry)},this);if(t.camera){var u=this.getEntry(t.camera);s.cameras.push(u.entry)}return!0}},handleLoadCompleted:{value:function(e){this._scenes&&this.delegate&&this._scenes.length>0&&this.delegate.loadCompleted(this._scenes[0])}},handleError:{value:function(e){}},_delegate:{value:null,writable:!0},delegate:{enumerable:!0,get:function(){return this._delegate},set:function(e){this._delegate=e}},_entries:{enumerable:!1,value:null,writable:!0},removeAllEntries:{value:function(){this._entries={}}},containsEntry:{enumerable:!1,value:function(e){return this._entries?this._entries[e]?!0:!1:!1}},storeEntry:{enumerable:!1,value:function(e,t,n){this._entries||(this._entries={});if(!e){console.log("ERROR: not id provided, cannot store");return}this.containsEntry[e]&&console.log("WARNING: entry:"+e+" is already stored, overriding"),this._entries[e]={id:e,entry:t,description:n}}},getEntry:{enumerable:!1,value:function(e){return this._entries?this._entries[e]:null}}})