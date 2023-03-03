import { connect } from "react-redux";
import Navbar from "components/navigation/Navbar";


const FullWidthLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

})(FullWidthLayout);