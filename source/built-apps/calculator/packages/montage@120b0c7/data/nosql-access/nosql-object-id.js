var Montage=require("montage").Montage,ObjectId=require("data/object-id").ObjectId,logger=require("core/logger").logger("nosql-object-id"),NoSqlObjectId=exports.NoSqlObjectId=Montage.create(ObjectId,{})