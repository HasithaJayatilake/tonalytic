export interface BlogPostSummary {
    title: string;
    blurb: string;
    thumbnailSrc: string;
}

export function getLatestBlogPosts(): BlogPostSummary[] {
    const mockData: BlogPostSummary[] = [
        {
            title: "How Sri lanka's Economy went from Bad to Worse",
            blurb: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero
    eos et accusam et justo duo dolores et ea rebum.`,
            thumbnailSrc:
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            title: "Sri Lanka's Trade Analysis",
            blurb: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero
    eos et accusam et justo duo dolores et ea rebum.`,
            thumbnailSrc:
                "https://source.unsplash.com/4aOhA4ptIY4?fit=crop&w=1350&q=80",
        },
        {
            title: "This One's Philosophical",
            blurb: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero
    eos et accusam et justo duo dolores et ea rebum.`,
            thumbnailSrc:
                "https://source.unsplash.com/qg6MDcCWBfM?fit=crop&w=1350&q=80",
        },
    ];
    return mockData;
}
