import React, { Component } from "react";
import Livre from '../components/livre';
import '../App.css';
import FormLivre from "../containers/formulaireLivre";
import { connect } from 'react-redux';

class Livres extends Component {
    state = {
        ajoutLivre: false,
    }

    componentDidMount = () => {
        this.props.dispatch({ type: "GET_CONF"});
    }

render() {
    return (
        <>
        {console.log(this.props.books)}
            <div className="grille">
                {this.props.books.map((book, index) => {
                    return (
                        <Livre
                            key={book.id}
                            {...book}
                        />
                    )
                })}
            </div>
            <FormLivre changeFormState={() => this.setState(oldState => { return { ajoutLivre: !oldState.ajoutLivre } })} formstate={this.state.ajoutLivre} />
        </>
    )
}
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

export default connect(mapStateToProps)(Livres);