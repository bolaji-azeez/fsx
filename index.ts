 import * as fs from "fs"
 import * as path from "path"
 

 if(fs.existsSync("uploads")){
console.log("folder exsit")
 }else{
    fs.mkdir("uploads", (err:Error) => {
        if (err)
        {
            throw err
        }
        console.log("Folder Created sucessful")
    })
 }



// if (fs.existsSync("uploads")) {
//     fs.rmdir("uploads",(err:Error) =>{
//         if (err) {
//             throw err
//         }
//         console.log("folder removed sucessfully")
//     })
    
// } else
// {
   
//     console.log("folder has already been removed")
// }


// let filePath: string = "."

// let readFile: any = fs.createReadStream(filePath, {encodeURI: true})
// {
//     console.log("--chunk---")
//     console.log(chunk.toString())
// })

if(fs.existsSync("./uploads/images"))
{
    console.log("file already exists")
}else
{
    fs.mkdir("./uploads/images", (err:Error) => {
        if (err)
        {
            throw err
        }
        console.log("folder Created Already")
    })

   
}


fs.stat("./uploads/images", (err: Error, amara: any) => {
    if (err)
   {
    throw err
   }
   console.log(amara.size);
   console.log(amara.isFile());
   console.log(amara.isDirectory());
})






let deleteFile = "grape.png";
fs.readdir("./uploads/images", (error: Error, file: any )=>{
  if (error)
  {
    throw Error
  }
  console.log(deleteFile)

  file.forEach((eachFiles: any) => {
    let filePath = path.join("./uploads/images", eachFiles)
    console.log("ugyf", filePath)

    if(eachFiles === deleteFile)
    {
        fs.unlink(filePath, (error: any) => {
          if (error)
          {
            throw error
          }
          console.log("deleted sucessfully")
        })
    }
  })

})




