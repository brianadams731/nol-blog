export const categoryURLParser = (subject:string):string =>{
    return subject.replace(/\s/g,"-").toLowerCase()
}