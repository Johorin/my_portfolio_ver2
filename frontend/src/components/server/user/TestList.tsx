import { URL_DATA } from "@/consts/urldata";

interface TestData {
    name: string;
}

export const TestList = async () => {
    const resJson = await fetch(URL_DATA.BACK_END_URL + '/test');
    const res = await resJson.json();

    return (
        <>
            {res.map((data: TestData, key: string) => (
                <div key={key}>ユーザー名：{data.name}</div>
            ))}
        </>
    );
};
