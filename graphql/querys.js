//Graphql Playground https://qgu1tf9c.api.sanity.io/v1/graphql/production/default

const endpoint = `https://qgu1tf9c.apicdn.sanity.io/v1/graphql/production/default`

const getAllPostsWithDetails = () =>{
    return (`
        {
            allPost(sort: [{ _createdAt: ASC }]) {
                title
                blogPostSlug {
                    current
                }
                description
                subject
                preview {
                    asset {
                        url
                    }
                }
                bodyRaw
            }
        }
      `)
}

const getPostWithDetailFromSlug = (slug) =>{
    return (`
        {
            allPost(where: {blogPostSlug: {current:{eq:"${slug}"}}}) {
                title
                blogPostSlug {
                    current
                }
                description
                subject
                preview {
                    asset {
                        url
                    }
                }
                bodyRaw
            }
        }
    `)
}

const getAllBlogPreviews = () =>{
    return(`
    {
        allPost(sort: [{ _createdAt: ASC }]) {
            title
            description
            preview {
                asset {
                    url
                }
            }
            blogPostSlug {
                current
            }
            subject
        }
    }
    `)
}

const getBlogPreviewBySubject = (subject) =>{
    return (`
        {
            allPost(sort: [{ _createdAt: ASC }], where: {subject:{eq:"${subject}"}}) {
                title
                description
                preview {
                    asset {
                        url
                    }
                }
                blogPostSlug {
                    current
                }
                subject
            }
        }
    `)
}

const getAllBlogSubjects = () =>{
    return(`
        {
            allPost{
                subject
            }
        }
    `)
}

export {
    endpoint, 
    getAllPostsWithDetails, 
    getPostWithDetailFromSlug,
    getAllBlogPreviews,
    getBlogPreviewBySubject,
    getAllBlogSubjects
};