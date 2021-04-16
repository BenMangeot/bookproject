import React, { Component } from "react";
import '../App.css';
import Button from "../components/button";
import { connect } from 'react-redux';

class FormLivre extends Component {
    state = {
        titre: "",
        nbpage: ""
    }

    validationForm = (event) => {
        event.preventDefault();
        if (this.props.formstate === true) {
            this.props.dispatch({ type: "ADD_BOOK", id: this.props.idFilm, titre: this.state.titre, nbpage: this.state.nbpage });
            this.setState({ titre: "", nbpage: "" });
        }
        this.props.changeFormState();
    }

    render() {
        return (
            <form>
                {this.props.formstate &&
                    <><div >
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
                        </div></>
                }
                <Button clic={this.validationForm} btnType="success"> {!this.props.formstate ? "Add book" : "Save Book"}</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        idFilm: state.id
    }
};

export default connect(mapStateToProps)(FormLivre);