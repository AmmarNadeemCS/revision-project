const blog=({ params }:{params:{id:string}})=>{
    return<div>My post:{params.id} </div>
}
export default blog