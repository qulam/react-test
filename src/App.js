import React, {Component} from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import ArticleComponent from "./components/article";
import {connect} from 'react-redux';
import {fetchPosts} from "./actions";
import './app.scss';

const tempArr = [{
    fName: "Joe",
    lName: "Bloggs",
    email: "example@example.com",
    age: 25,
    onlineStatus: true
}];

const initialState = {
    hideBtn: false,

};

class App extends Component {

    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
        this.state = {
            ...initialState,
        }
    }

    fetch() {
        this.props.fetchPosts();
        this.exampleMethod_updateState();
    }

    exampleMethod_updateState() {
        const {hideBtn} = this.state;
        this.setState({
            hideBtn: !hideBtn
        });
    }

    exampleMethod_returnAValue(number){
        return number + 2;
    }

    render() {
        const {posts} = this.props;
        const configButton = {
            buttonText: 'Get posts',
            emitEvent: this.fetch
        };

        const configArticleComponent = {
            title: 'Unit && Integration Test',
            desc: 'Write Unit && Integration Tests In React'
        };

        const {hideBtn} = this.state;

        return (
            <div className="App" data-test="appComponent">
                <Header/>
                <section className="main">
                    <Headline
                        header="Posts"
                        desc="Javascript is awesome"
                        tempArr={tempArr}
                    />
                    {
                        !hideBtn && <SharedButton {...configButton} />
                    }
                    <ArticleComponent {...configArticleComponent}  />
                    {
                        posts.length > 0 &&
                        <div>
                            {
                                posts.map((post, index) => {
                                    const {title, body} = post;
                                    const configListItem = {
                                        title,
                                        desc: body,
                                    };
                                    return (
                                        <ListItem key={index} {...configListItem}/>
                                    )
                                })
                            }
                        </div>
                    }
                </section>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps, {fetchPosts})(App);
