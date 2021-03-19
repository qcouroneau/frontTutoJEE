import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import servlet from '../../images/servlet.png'

function Cours1() {
    return (
        <div>
            <h5 class="card-title">Les bases</h5>
            <p class="card-text">Une servlet est un composant qui étend les fonctionnalités d'un serveur web de
            manière portable et efficace.
            Un serveur web héberge des classes Java servlets qui sont exécutées à
            l'intérieur du container web. Le serveur web associe une ou plusieurs URLs à
            chaque servlet.
            La servlet est invoquée lorsque des requêtes HTTP utilisateur sont soumises au
            serveur.
            Quand la servlet reçoit une requête du client, elle génère une réponse,
            éventuellement en utilisant la logique métier contenue dans des EJBs ou en
            interrogeant directement une base de données. Elle retourne alors une réponse
                        HTML ou XML au demandeur.</p> <br />
            <p>Un développeur de servlet utilise l'API servlet pour :</p>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>Initialiser et finaliser la servlet</li>
                            <li>Accéder à l'environnement de la servlet</li>
                            <li>Recevoir ou rediriger les requêtes et envoyer les réponses</li>
                            <li>Interagir avec d'autres servlets ou composants</li>
                            <li>Maintenir les informations de sessions du client</li>
                            <li>Filtrer avant ou après traitement les requêtes et les réponses</li>
                            <li>Implémenter la sécurité sur le tiers web</li>
                        </ul>
                    </Col>
                    <Col>
                        <img style={{ width: '100%' }} alt="servlet" src={servlet} />
                    </Col>
                </Row>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisi quis urna suscipit fringilla. Sed vitae velit non nibh imperdiet efficitur in et turpis. Donec tempus a arcu at sagittis. Nunc at dignissim leo, at tincidunt felis. Aenean lobortis dui vitae lorem euismod aliquet. Pellentesque ultrices ullamcorper risus, nec aliquam quam pulvinar a. Nulla malesuada bibendum est nec egestas. Ut aliquam accumsan volutpat. Vestibulum vitae consequat elit, et sollicitudin neque. Nunc metus libero, porttitor luctus sapien eu, posuere cursus quam. Pellentesque auctor neque at odio suscipit, ac tempus mauris varius. Suspendisse hendrerit nunc massa, nec bibendum libero fringilla et. Mauris eleifend ante et mi cursus, sed scelerisque dui condimentum. Integer ac ex non libero placerat dignissim. Donec non venenatis quam. Aenean vitae leo nibh.  Phasellus tristique, nisl et mollis congue, sem nulla ullamcorper nibh, cursus condimentum odio tellus a nisl. Nam eros dolor, sodales ultrices pulvinar vitae, blandit sit amet tellus. Suspendisse pulvinar nulla justo, non placerat odio bibendum eu. Praesent orci felis, pretium ac urna quis, venenatis malesuada ante. Donec non libero ultrices, lacinia quam ac, feugiat tortor. Pellentesque mollis vel ligula sodales vulputate. Aenean arcu ipsum, iaculis ut egestas sit amet, imperdiet at tellus. Aliquam erat volutpat. Nunc ac odio auctor, tincidunt est at, bibendum nisi. Integer sit amet molestie leo. Nam dignissim felis non enim varius dictum. Nulla nec libero in augue hendrerit posuere ac et sapien. Morbi dapibus tempus mi, sit amet venenatis dui luctus at. </p>
            </Container>
        </div>
    )
}

function Cours2() {
    return (
        <div>
            <h5 class="card-title">Les bases (Suite)</h5>
            <p class="card-text"> Donec molestie risus sem, ut pulvinar lectus varius vitae. Cras efficitur cursus dui, a mollis nunc euismod eget. Proin mattis quam purus, sit amet fringilla velit consequat vitae. Quisque non tellus vel justo elementum fringilla. Ut et tempor lacus. Donec lacinia ligula at diam rutrum tristique. Phasellus id vulputate leo. Nam ac lacus posuere nunc blandit viverra. Donec mi risus, lobortis sed metus ac, euismod gravida arcu. Proin condimentum justo ligula. Vestibulum posuere dictum tortor, id congue erat gravida id. Nullam quis vulputate erat. Nullam porta euismod mollis. Maecenas porta est ac velit iaculis, nec tempor ligula porta. Praesent sit amet efficitur quam. </p> <br />
            <p>Un développeur de servlet utilise l'API servlet pour :</p>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>diet leo a, venenatis tortor. Pellentesque habitant morbi tristique </li>
                            <li>s vehicula est dictum molestie sed non lectus. Proin convallis ex ex, ut rutrum tortor dapibus </li>
                            <li>, quis finibus lorem vestibulum id. Donec ullamcorper felis lacus, id tempor sapien bibendum no</li>
                            <li>idunt pulvinar quam, non sodales</li>
                            <li>uere cubilia curae; Pellentesque viverra justo ac</li>
                            <li>ibus ut. Donec eget nulla ante. Ut condimentum porta commodo. Suspendis</li>
                            <li>auris sed enim id erat viverra iaculis. Ut a elit vel </li>
                        </ul>
                    </Col>
                    <Col>
                        <img style={{ width: '100%' }} alt="servlet" src={servlet} />
                    </Col>
                </Row>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisi quis urna suscipit fringilla. Sed vitae velit non nibh imperdiet efficitur in et turpis. Donec tempus a arcu at sagittis. Nunc at dignissim leo, at tincidunt felis. Aenean lobortis dui vitae lorem euismod aliquet. Pellentesque ultrices ullamcorper risus, nec aliquam quam pulvinar a. Nulla malesuada bibendum est nec egestas. Ut aliquam accumsan volutpat. Vestibulum vitae consequat elit, et sollicitudin neque. Nunc metus libero, porttitor luctus sapien eu, posuere cursus quam. Pellentesque auctor neque at odio suscipit, ac tempus mauris varius. Suspendisse hendrerit nunc massa, nec bibendum libero fringilla et. Mauris eleifend ante et mi cursus, sed scelerisque dui condimentum. Integer ac ex non libero placerat dignissim. Donec non venenatis quam. Aenean vitae leo nibh.  Phasellus tristique, nisl et mollis congue, sem nulla ullamcorper nibh, cursus condimentum odio tellus a nisl. Nam eros dolor, sodales ultrices pulvinar vitae, blandit sit amet tellus. Suspendisse pulvinar nulla justo, non placerat odio bibendum eu. Praesent orci felis, pretium ac urna quis, venenatis malesuada ante. Donec non libero ultrices, lacinia quam ac, feugiat tortor. Pellentesque mollis vel ligula sodales vulputate. Aenean arcu ipsum, iaculis ut egestas sit amet, imperdiet at tellus. Aliquam erat volutpat. Nunc ac odio auctor, tincidunt est at, bibendum nisi. Integer sit amet molestie leo. Nam dignissim felis non enim varius dictum. Nulla nec libero in augue hendrerit posuere ac et sapien. Morbi dapibus tempus mi, sit amet venenatis dui luctus at. </p>
            </Container>
        </div>
    )
}

class Cours extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    state = {
        cours: Cours1(),
        numCours: 1
    };

    onCoursSuivant = () => {
        this.setState({ cours: Cours2() });
        this.myRef.current.scrollTo(0, 0);
    }

    onCoursPrecedent = () => {
        this.setState({ cours: Cours1() });
        this.myRef.current.scrollTo(0, 0);
    }

    render() {
        return (
            <div ref={this.myRef} id="RowEditor" class="card mb-4 mb-lg-0 border-secondary shadow">
                <div class="card-body">
                    {this.state.cours}
                    <Container className='mb-3' style={{ textAlign: 'center' }}>
                        <Row>
                            <Col>
                                <Button onClick={this.onCoursPrecedent} color="secondary" size="lg">Cours Précédent</Button>
                            </Col>
                            <Col>
                                <Button onClick={this.onCoursSuivant} color="primary" size="lg">Cours Suivant</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

export default Cours;