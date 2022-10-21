import Link from "next/link";
import { ImFacebook,ImTwitter,ImInstagram } from "react-icons/im";
import Newsletter from "./_child/Newsletter";

function Footer() {
  const bg = {
    backgroundImage:"url('/images/footer.png')",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"bottom left",
  }
  return (
    
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link  href={"/facebook"}><a><ImFacebook color="#888888"/></a></Link>
            <Link  href={"/twitter"}><a><ImTwitter color="#888888"/></a></Link>
            <Link  href={"/insta"}><a><ImInstagram color="#888888"/></a></Link>
          </div>
          <p className="py-5 text-gray-400">Copyright &copy; 2022 All rights reserved | This is made by Chandan maka</p>
          <p className="text-gray-400 text-center">Terms & Coditions.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer