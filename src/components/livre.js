import React, { Component } from "react";
import Button from "../components/button";
import FormUpdateLivre from "../containers/formsupdatebook";
import { connect } from 'react-redux';


class Livre extends Component {

    state = {
        isupdateformshow: false
    }

    updateAction = () => {
        this.setState(oldState => {
            return { isupdateformshow: !oldState.isupdateformshow }
        })
    }

    render() {
        return (
            <div className="grille-item">
                <div> titre : {this.props.titre} </div>
                <div> nombre de page : {this.props.nbpage} </div>
                <Button
                    clic={this.updateAction}
                    btnType="modify">
                    Modify book
                </Button>
                {this.state.isupdateformshow && <FormUpdateLivre bookid={this.props.id} titre={this.props.titre} nbpage={this.props.nbpage} changestate={this.updateAction} />}
                <Button
                    clic={() => {this.props.dispatch({ type: "REMOVE_BOOK", id: this.props.id })}}
                    btnType="failed">
                    Remove book
                </Button>
            </div>);
    }

}

export default connect()(Livre);