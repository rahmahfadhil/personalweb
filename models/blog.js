import {model,Schema,models} from"mongoose"
const BlogShema=new Schema ({
    
    
    title:String,
    content:String,
    imagePath:String,
    imageType:String,
    imageSize:Number


})
const Blog=models.Blog || model("Blog",BlogShema)
export default Blog;