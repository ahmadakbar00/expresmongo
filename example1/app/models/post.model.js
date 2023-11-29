module.exports = (mongoose =>{
    const schema = mongoose.Schema(
        {
            title:String,
            body:String,
            published:Boolean
        },
        {
            timestamp:true
        },
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject() // merubah struktur ke object
        object.id = _id
        return object // nantinya tidak perlu mengggunakanunderscroe untuk id
    })

    const Post = mongoose.module("posts",schema)
    return Post

})