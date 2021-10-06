//Graphql Playground https://qgu1tf9c.api.sanity.io/v1/graphql/production/default
// IF THE GRAPHQL CLIENT CHANGES REMOVE gql BEFORE QUERY!
import {gql} from "graphql-request";

const endpoint = `https://qgu1tf9c.apicdn.sanity.io/v1/graphql/production/default`

const getAllPostsWithDetails = () =>{
    return (gql`
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

const getAllSlugs = () =>{
    return (gql`
        {
            allPost{
                blogPostSlug{
                    current
                }
            }
        }
    `)
}

const getPostWithDetailFromSlug = (slug) =>{
    return (gql`
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
    return(gql`
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
    return (gql`
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
    return(gql`
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
    getAllSlugs, 
    getPostWithDetailFromSlug,
    getAllBlogPreviews,
    getBlogPreviewBySubject,
    getAllBlogSubjects
};