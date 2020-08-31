import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Jumbotron,Button,Card} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'

const blogPost = [
    {
        id:1,
        title: "NEW WEBSITE LAUNCH",
        month: "AUGUST",
        day: 30,
        year: 2020,
        body: "Its been a long time coming, but we've finalyy upgraded our website to 2020 standards. We've have teamed up with Br8ed Design , here in Tallahassee, to give our customers a new mobile and desktop experience. Please feel free to reach out and connect with us via email, phone, or our social media platforms. We can't wait to hear from you!",
        img: "https://billssigns.com/static/media/img2.f3f36bce.jpg"
    }
    ,
    // {
    //     id:2,
    //     title: "This is our Second Blog Post",
    //     month: "October",
    //     day: 7,
    //     year: 1822,
    //     body: "Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.",
    //     img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/300px-Icecat1-300x300.svg.png"
    // }
]

const Blog = () => {
    
    return (
        <div>
            <Helmet>
                  <title>Bill's Signs - Blog </title>
                  <link rel="canonical" href="https://billssigns.com/blog" />
                  <meta name="Bills Signs" content="Reach out and Blog us today about building your next sign for your business"></meta>
            </Helmet>
            <Nav fill variant="pills" defaultActiveKey="/blog">
                <Nav.Item>
                  <Nav.Link href="/" eventKey="link-2">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/services" eventKey="link-1">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/contact' eventKey="link-3">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/blog' className="activeTab">Blog</Nav.Link>
                </Nav.Item>
            </Nav>

            <Jumbotron>
            <div className="contentDiv">
            <img className="logoImg" src={require('./img/billsLogo.png')} alt='logo' />
              <div className="contentDiv2"><h1>Bill's Signs Blog</h1>
                <span className="redText">World of Signs Happenings</span>
              </div>
                <Card className="blurbCard">
                  {blogPost.reverse().map(mappedBlogPosts => (<div className="blog">
                  <div className="blogTitle" key={mappedBlogPosts.id}>{mappedBlogPosts.title}</div>
                  <div className="blogDate">{mappedBlogPosts.month} {mappedBlogPosts.day}, {mappedBlogPosts.year}</div>
                  <div className="blogImage"><img src={renderToString(mappedBlogPosts.img)} alt="Bill's Signs Blog Post" /></div>
                  <div className="blogBody">{mappedBlogPosts.body}</div>
                  </div>
                  ))}

                </Card>
            </div>
            <div className="contentDiv">
                          <a href="tel:850-576-6847"><Button variant="danger">Call Us Today</Button></a>
            </div>
            </Jumbotron>
        </div>
    )
} 
export default Blog