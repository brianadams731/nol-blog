const previewAdapter = (rawQueryResponse) =>{
    return rawQueryResponse.allPost.map(item =>{
        return ({
            title:item.title,
            description: item.description,
            subject: item.subject,
            preview: item?.preview?.asset?.url,
            path: item.blogPostSlug?.current,
        })
    })
}

const blogPostAdapter = (rawQueryResponse) =>{
    const item = rawQueryResponse?.allPost[0];
    return({
        title:item.title,
        path: item.blogPostSlug?.current,
        description: item.description,
        subject: item.subject,
        preview: item?.preview?.asset?.url,
        content: item?.bodyRaw
    })
}

const deURLBlogSubject = (subject) =>{
    let mappedUrl;
    switch(subject){
        case "mindset":
            mappedUrl = "Mindset";
            break;
        case "personal-growth":
            mappedUrl = "Personal Growth";
            break;
        case "self-love":
            mappedUrl = "Self Love";
            break;
    }
    return mappedUrl
}

export {
    previewAdapter,
    blogPostAdapter,
    deURLBlogSubject,
}