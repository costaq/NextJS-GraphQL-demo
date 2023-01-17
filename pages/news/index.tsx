import { GetServerSideProps } from "next";
import Link from "next/link";
import Meta from "../../components/meta";
import { useNewsListQuery } from "../../generated/types";

// type PageProps = {
//     newsList: News[];
// }

function NewsList() {
    const { data } = useNewsListQuery();
    return (
        <>
            <Meta title="新闻列表" />
            {
                data?.newsList.map(news =>
                    <div key={news.id}>
                        <Link href={`/news/${news.id}`}>
                            {news.title}
                        </Link>
                    </div>
                )
            }
        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     // 调用外部 API 获取列表
//     const res = await fetch('http://localhost:3000/api/news');
//     const news = await res.json();
//     return { props: { newsList: news } };
// };

export default NewsList;