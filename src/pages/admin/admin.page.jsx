// components
import Admin from "./admin.component";
// redux
import { setPortfolioData } from "../../redux/portfolio/portfolio.actions";
import { connect } from "react-redux";
// firebase
import { db } from "../../firebase/firebase.config";
import { getDoc, collection, doc, getDocs } from "firebase/firestore";
// react hooks
import { useEffect } from "react";

const AdminPage = ({setPortfolioData}) => {
    // this portfolio doc reference (put doc ID in another file as a variable that won't be pushed to github)
    const portfolioDocRef = doc(db, "portfolio/EF7N2hUcJlGEGspRiXIN")
    // this portfolio projects and skills collection ref
    const portfolioProjectsCollectionRef = collection(db, 'portfolio/EF7N2hUcJlGEGspRiXIN/projects');
    const portfolioSkillsCollectionRef = collection(db, 'portfolio/EF7N2hUcJlGEGspRiXIN/skills');
    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                // get portfolio
                const portfolioSnap = await getDoc(portfolioDocRef);
                if(portfolioSnap.exists()) {
                    console.log("data:", portfolioSnap.data())
                } else {
                    console.log("No such doc")
                }
            } catch(err) {
                console.error(err);
            }
        }

        fetchPortfolio()
    }, [])
    return(
        <div>
            <Admin />
        </div>
    )
}

// add redux setPortfolioData action to the component props
const mapDispatchToProps = (dispatch) => {
    return({
        setPortfolioData: (portfolioData) => {
            dispatch(setPortfolioData(portfolioData))
        }
    })
}

export default connect(null, mapDispatchToProps)(AdminPage);