import Link from "next/link"
import Image from "next/image"
import Author from "../../components/_child/Author"
import Format from "../../layout/Format"


function Page() {
  return (
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author></Author>
            </div>
            <div className="post py-10">
                <h1 className="font-bold text-4xl pb-5 text-center">Title</h1>
                <p className="text-gray-500 text-xl text-center">Write better, faster, and clearer with the best artificial intelligence
                 paraphrasing tool. Free paraphrasing tool: rewrite any article or content.
                 Try 7 different rewriting modes. Summary Maker. Reword Machine. Essay Writing Online. Reword Sentences. Bibliography Maker MLA.
                </p>
                <div className="py-10 flex justify-center">
                    <Link href={"#"}>
                        <Image src={"/images/img1.jpg"} width="900" height={"900"} />
                    </Link>
                </div>
                <div className="content flex flex-col text-gray-500 text-lg gap-4">
                    <p>"Hello" is a song recorded by English singer-songwriter Adele,
                         released on 23 October 2015 by XL Recordings as the lead single from her third studio album, ...
                    </p>
                    <p>"Hello" is a song recorded by English singer-songwriter Adele,
                         released on 23 October 2015 by XL Recordings as the lead single from her third studio album, ...
                    </p>
                    <p>"Hello" is a song recorded by English singer-songwriter Adele,
                         released on 23 October 2015 by XL Recordings as the lead single from her third studio album, ...
                    </p>
                </div>
            </div>
        </section>
        
    </Format>
  )
}

export default Page