import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Jumbotron, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
// import { renderToString } from 'react-dom/server'

const blogPost = [
  {
    id: 1,
    title: 'NEW WEBSITE LAUNCH',
    month: 'AUGUST',
    day: 30,
    year: 2020,
    body:
      "Its been a long time coming, but we've finally upgraded our website to 2020 standards. We've have teamed up with Br8ed Design , here in Tallahassee, to give our customers a new mobile and desktop experience. Please feel free to reach out and connect with us via email, phone, or our social media platforms. We can't wait to hear from you!",
    img: '#',
  },
];

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Bill's Signs - Blog </title>
        <link rel='canonical' href='https://billssigns.com/blog' />
        <meta
          name='Bills Signs'
          content='Reach out and Blog us today about building your next sign for your business'
        ></meta>
      </Helmet>
      <Nav className="navGap" fill variant='pills' defaultActiveKey='/blog'>
        <Nav.Item>
          <Nav.Link href='/' eventKey='link-2'>
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/services' eventKey='link-1'>
            SERVICES
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact' eventKey='link-3'>
            CONTACT
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/blog' className='activeTab'>
            BLOG
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Jumbotron>
        <div className='contentDiv'>
          <img
            className='logoImg'
            src={require('./img/billsLogo.png')}
            alt='logo'
          />
          <div className='contentDiv2'>
            <h1>BILL'S BLOG</h1>
            <span className='redText'>NEWS FROM THE WORLD OF SIGNS</span>
          </div>
          <Card className='blurbCard'>
            {blogPost.reverse().map((mappedBlogPosts) => (
              <div className='blog'>
                <div className='blogTitle' key={mappedBlogPosts.id}>
                  {mappedBlogPosts.title}
                </div>
                <div className='blogDate'>
                  {mappedBlogPosts.month} {mappedBlogPosts.day},{' '}
                  {mappedBlogPosts.year}
                </div>
                <div className='blogImage'>
                  <img
                    src={require('./img/300Blog.jpg')}
                    alt="Bill's Signs Blog Post"
                  />
                </div>
                <div className='blogBody'>{mappedBlogPosts.body}</div>
              </div>
            ))}
          </Card>
        </div>
        <div className='contentDiv'>
          <a href='tel:850-576-6847'>
            <Button variant='danger'>Call Us Today</Button>
          </a>
        </div>
      </Jumbotron>
    </div>
  );
};
export default Blog;
