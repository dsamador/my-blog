import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import  BlogList  from "components/blog/BlogList";
import  BlogCategories  from "components/blog/BlogCategories";
import { useEffect } from "react";
import Header from "components/blog/Header";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";

function Blog({
    get_blog_list,
    get_blog_list_page,
    blog_list
}){

    useEffect(()=>{
        get_blog_list()
    },[])

    return(
        <FullWidthLayout>
            <Header />
            <BlogCategories />
            <BlogList get_blog_list_page={get_blog_list_page} blog_list={blog_list}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list,
})

export default connect(mapStateToProps,{
    get_blog_list,
    get_blog_list_page
})(Blog)