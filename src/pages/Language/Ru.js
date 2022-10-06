import {useEffect} from 'react';
import {connect} from "react-redux";
import {getNewsRu} from "../../redux/actions/newsAction";
import Header from "../../components/Header/Header";

const Ru = (props) => {

    useEffect(() => {
        props.getNewsRu();
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    {props.newsRu.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src={item.image_url} alt={item.title}/>
                                    <div className="card-body">
                                        <h4>{item.title}</h4>
                                        <p>{item.text.slice(0, 60)}...</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

const mapStataToProps = (state) => {
    return {
        newsRu: state.news.newsRu,
    }
}

export default connect(mapStataToProps, {getNewsRu})(Ru);