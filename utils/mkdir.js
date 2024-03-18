const fs = require('fs')
const path = require('path')
// data 是新文件的内容，字符串 
//user 为用户名
//fileName是新文件的名字，字符串
function writeAFile (data,user,fileName) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path.resolve(__dirname,`../public/${user}`), {recursive: true}, async (err) => {
            console.log('目录创建成功')
            if (err) {
                //
                console.log(err)
                resolve(err)
            } else {
                fs.writeFile(path.resolve(__dirname,`../public/${user}/${fileName}.md`), data, function(err) {
                    if (err) {
                        
                        console.log('写入文件失败:', err)
                    } else {
                        
                        console.log('写入文件成功')
                        err = {
                            code: '000000'
                        }
                    }
                    resolve(err)
                })
            }
        })
    })
}
module.exports = writeAFile