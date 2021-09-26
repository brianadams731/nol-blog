export const categoryURLParser = (subject) =>{
    return subject.replace(/\s/g,"-").toLowerCase()
}