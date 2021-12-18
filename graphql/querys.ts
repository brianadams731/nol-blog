//Graphql Playground https://qgu1tf9c.api.sanity.io/v1/graphql/production/default
// IF THE GRAPHQL CLIENT CHANGES REMOVE gql BEFORE QUERY!
import {gql} from "graphql-request";

const sanityProjectID = `qgu1tf9c`;
const sanityDataset = `production`;
const sanityTag = `default`

const endpoint = `https://${sanityProjectID}.apicdn.sanity.io/v1/graphql/${sanityDataset}/${sanityTag}`

const getAllPostsWithDetails = ():string =>{
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

const getAllSlugs = ():string =>{
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

const getPostWithDetailFromSlug = (slug:string):string =>{
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

const getAllBlogPreviews = ():string =>{
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

const getBlogPreviewBySubject = (subject:string):string =>{
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

const getAllBlogSubjects = ():string =>{
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
    sanityDataset,
    sanityProjectID,
    sanityTag, 
    getAllPostsWithDetails,
    getAllSlugs, 
    getPostWithDetailFromSlug,
    getAllBlogPreviews,
    getBlogPreviewBySubject,
    getAllBlogSubjects,
};