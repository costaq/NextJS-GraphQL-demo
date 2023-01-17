import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Meta from "../../components/meta";
import { News } from "../../types";
import { useNewsQuery } from "../../generated/types";
import { useRouter } from "next/router";

// type PageProps = {
//     news: News;
// }

function NewsDetail() {
    const router = useRouter();
    const { data } = useNewsQuery({
        variables: {
            id: `${router.query.id}`
        }
    });

    return (
        <>
            {
                data ? <>
                    <Meta title={data.news.title} />
                    <div>{data.news.title}</div>
                </> : null
            }
        </>
    )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//     // params 包含此 `id` 信息。
//     // 如果路由是 /posts/1，那么 params.id 就是 1
//     const res = await fetch(`http://localhost:3000/api/news/${context.params?.id}`)
//     const news = await res.json()

//     // 通过 props 参数向页面传递数据
//     return { props: { news } }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//     // 调用外部 API 获取列表
//     const res = await fetch('http://localhost:3000/api/news');
//     const news = await res.json();

//     // 据列表生成所有需要预渲染的路径
//     const paths = news.map((record: News) => ({
//         params: { id: `${record.id}` },
//     }));

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false };
// }

export default NewsDetail;