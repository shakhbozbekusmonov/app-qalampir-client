import {useEffect} from 'react';
import {connect} from "react-redux";
import {getNewsUz} from "../../redux/actions/newsAction";
import Header from "../../components/Header/Header";
import {getLanguage} from "../../locales";

const Uz = (props) => {

    useEffect(() => {
        props.getNewsUz();
    }, []);

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    {props.newsUz.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src={item.image_url} alt={item.title}/>
                                    <div className="card-body">
                                        <h4>{getLanguage() === "uz" ? item.titleUz : getLanguage() === "ru" ? item.titleRu : item.titleEn}</h4>
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
        newsUz: state.news.newsUz,
    }
}

export default connect(mapStataToProps, {getNewsUz})(Uz);