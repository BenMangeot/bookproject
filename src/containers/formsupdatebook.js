import React, { Component } from "react";
import '../App.css';
import Button from "../components/button";
import { connect } from 'react-redux';

class FormUpdateLivre extends Component {
    state = {
        titre: "",
        nbpage: ""
    }

    componentDidMount = () => {
        this.setState({
            titre: this.props.titre,
            nbpage: this.props.nbpage
        })
    }

    validationForm = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: "UPDATE_BOOK", id: this.props.bookid, titre: this.state.titre, nbpage: this.state.nbpage });
        this.setState({ titre: "", nbpage: "" });
        this.props.changestate();
    }

    render() {
        return (
            <form>
                <div >
                    <label htmlFor="titre">Titre du livre : </label>
                    <input
                        type="text"
                        id="titre"
                        value={this.state.titre}
                        onChange={(event) => this.setState({ titre: event.target.value })}
                    />
                </div>
                <div >
                    <label htmlFor="nbpage">nombre de page : </label>
                    <input
                        type="number"
                        id="nbpage"
                        value={this.state.nbpage}
                        onChange={(event) => this.setState({ nbpage: event.target.value })}
                    />
                </div>
                <Button clic={this.validationForm} btnType="success"> Update Book </Button>
            </form>
        )
    }
}
export default connect()(FormUpdateLivre);