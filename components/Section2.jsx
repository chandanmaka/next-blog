import Link from "next/link"
import Image from "next/image"
import Author from "./_child/Author"

function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-3xl text-center py-12">
            Latest Posts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {post()}
            {post()}
            {post()}
            {post()}

        </div>

    </section>
  )
}

function post(){
    return(
        <div className="item">
            <div className="image">
            <Link href={"/"}>
                        <a><Image src={"/images/img1.jpg"} width={500} height={350} className="rounded" /></a>
            </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                    <div className="cat">
                        <Link href={"/"}><a className="text-orange-500 hover:text-orange-600" >Business,travel</a></Link>
                        <Link href={"/"}><a className="text-gray-500 hover:text-gray-600" > - July 22,2022</a></Link>
                    </div>
                    <div className="title">
                           <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Title</a></Link>
                    </div>
                    <p className="text-gray-500 py-3">This is paragraph
                        Students & Writers mostly look for some questions when 
                        coming to paragraph writing about any topic or thing or person. The questions
                         raised by most of the students while thinking about writing a paragraph are 
                         Paragraph Writing Examples, What is the perfect paragraph format? How many steps
                          involved to write a paragraph? How to write a good paragraph? How many sentences
                           are included in a para? and many more like these.</p>
                    <Author></Author>

            </div>
        </div>
    )
}

export default Section2